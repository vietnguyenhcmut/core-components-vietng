"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/core/Layout";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import TuneIcon from "@mui/icons-material/Tune";

import { useState } from "react";

import InitialWebPagesConfiguration from "@/initial";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "VietNg - Core Components",
//   description: "Sponsored by VietNg",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerTitle, setHeaderTitle] = useState<string>("");

  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
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
            setHeaderTitle: setHeaderTitle,
          }}
          headerProps={{
            style: {
              headerContainer: {
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
                backgroundColor: "rgba(100,100,100,0.1)",
              },
            },
            headerSettingIcon: <TuneIcon />,
            headerAuthUser: {
              name: "VietNg",
              avatar: (
                <FilterDramaIcon sx={{ fontSize: "30px", color: "white" }} />
              ),
            },
          }}
          mainProps={{
            style: {
              padding: "20px",
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
      </body>
    </html>
  );
}
