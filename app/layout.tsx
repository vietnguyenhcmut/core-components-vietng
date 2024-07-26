"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/core/Layout";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import TuneIcon from "@mui/icons-material/Tune";
import InitialWebPagesConfiguration from "@/initial";
import { useAuthenticator, Authenticator } from "@aws-amplify/ui-react";
// import LoginPage from "@/views/auth/LoginPage";
// import ThemeProvider from "./themes/ThemeProvider";
import { useEffect, useState } from "react";

import { ddbClient } from "@/initial/aws-services-generation/dynamodb/DynamoDBGeneration";
import {
  GetItemCommand,
  GetItemCommandInput,
  GetItemCommandOutput,
  BatchGetItemCommand,
  BatchGetItemCommandInput,
  BatchGetItemCommandOutput,
  AttributeValue,
} from "@aws-sdk/client-dynamodb";

import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import config from "../src/amplifyconfiguration.json";
Amplify.configure(config);

import DataStoreProvider, {
  DataStoreContext,
} from "@/initial/data-store-provider/DataStoreProvider";

import { useContext } from "react";

import dynamic from "next/dynamic";
const LoginPage = dynamic(() => import("@/views/auth/LoginPage"), {
  ssr: false,
});

// import { CONSTANT_TABLE_DATA_USER } from "./constant/Constant";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "VietNg - Core Components",
//   description: "Sponsored by VietNg",
// };

type DataOfUserProps = {
  nameOfUser: {
    S: string;
  };
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuthenticator();
  const [dataOfUser, setDataOfUser] = useState<Record<string, any>>({
    nameOfUser: { S: "" },
  });
  const [dataOfDevices, setDataOfDevices] = useState<any>();

  const dataContainer = useContext(DataStoreContext);
  console.log(dataContainer.dataStore);

  useEffect(() => {
    if (user && user.userId) {
      console.log(user.userId);
      const fetchUserName = async () => {
        const params: GetItemCommandInput = {
          TableName: "OnHand-tableOfUsers",
          Key: {
            idOfUser: {
              S: user.userId,
            },
          },
          ProjectionExpression: "nameOfUser, rootIdOfDevices, numOfDevices",
        };

        try {
          const data: GetItemCommandOutput = await ddbClient.send(
            new GetItemCommand(params)
          );
          if (
            "Item" in data &&
            data.Item &&
            data.Item.nameOfUser &&
            data.Item.nameOfUser.S
          ) {
            console.log(data.Item);
            setDataOfUser(data.Item);
            dataContainer.setDataOfUser(data.Item);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchUserName();
    }
  }, [user]);

  useEffect(() => {
    if (dataOfUser && dataOfUser.nameOfUser && dataOfUser.nameOfUser.S) {
      console.log("ready for get data of devices");
      const rootIdOfDevices = dataOfUser.rootIdOfDevices.S;
      const numOfDevices = parseInt(dataOfUser.numOfDevices.N);
      var arrayOfKeyOfDevices: Record<string, AttributeValue>[] = [];
      for (let i = 1; i <= numOfDevices; i++) {
        arrayOfKeyOfDevices.push({
          idOfDevice: { S: `${rootIdOfDevices}_${i}` },
        });
      }
      const fetchDataOfDevices = async () => {
        const params: BatchGetItemCommandInput = {
          RequestItems: {
            "OnHand-tableOfDevices": {
              Keys: arrayOfKeyOfDevices,
            },
          },
        };

        try {
          const res = await ddbClient.send(new BatchGetItemCommand(params));
          if (res && res.Responses)
            setDataOfDevices(res.Responses["OnHand-tableOfDevices"]);
          if (res && res.Responses)
            dataContainer.setDataOfDevices(
              res.Responses["OnHand-tableOfDevices"]
            );
        } catch (error) {
          console.log(error);
        }
      };
      fetchDataOfDevices();
    }
  }, [dataOfUser]);

  return (
    <Layout
      sidebarProps={{
        logo: InitialWebPagesConfiguration.branch.logo,
        menuNav: InitialWebPagesConfiguration.routes,
        branch: InitialWebPagesConfiguration.branch.name,
        style: {
          sidebarContainer: {
            boxShadow: "rgb(240, 240, 240) 0px 1px 5px 0px",
            borderRight: "1px solid rgb(220,220,220)",
            background: "#ffffff",
          },
          sidebarLogoBranch: {
            color: "#524fff",
            fontWeight: "bold",
          },
          sidebarMenu: {
            activeItem: {
              color: "white",
              backgroundColor: "#524fff",
            },
            unactiveItem: {
              color: "#524fff",
              backgroundColor: "#f0f4f7",
            },
          },
          sidebarSwitchCollapse: {
            backgroundColor: "#524fff",
            color: "white",
            border: "1px solid #C3C2FF",
            height: "40px",
          },
        },
      }}
      headerProps={{
        style: {
          headerContainer: {
            zIndex: 2001,
            backgroundColor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(2px)",
            boxShadow: "rgb(230, 230, 230) 1px 0px 15px 0px",
            borderBottom: "1px solid rgb(220, 220, 220)",
            paddingLeft: "20px",
            paddingRight: "20px",
          },
          headerTitle: {
            color: "#524fff",
            fontSize: "16px",
          },
          headerSettingIcon: {
            backgroundColor: "#e4e3fa",
          },
        },
        headerSettingIcon: <TuneIcon sx={{ color: "#524fff" }} />,
        headerAuthUser: {
          name: dataOfUser?.nameOfUser?.S,
          avatar: <FilterDramaIcon sx={{ fontSize: "30px", color: "white" }} />,
        },
      }}
      mainProps={{
        style: {
          padding: "20px",
        },
        data: {
          dataOfUser: dataOfUser,
          dataOfDevices: dataOfDevices,
        },
        children: children,
      }}
      footerProps={{
        style: {
          backgroundColor: "#ffffff",
          boxShadow: "rgb(230, 230, 230) -1px 0px 15px 0px",
          borderTop: "1px solid rgb(240, 240, 240)",
        },
      }}
    />
  );
}

function CheckAuthUser({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userName, setUserName] = useState<string>("");

  if (userName) {
    return (
      <DataStoreProvider>
        <RootLayout>{children}</RootLayout>
      </DataStoreProvider>
    );
  } else {
    return <LoginPage setUserName={setUserName} />;
  }
}
export default function OnHandContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        <Authenticator.Provider>
          <CheckAuthUser>{children}</CheckAuthUser>
        </Authenticator.Provider>
      </body>
    </html>
  );
}
