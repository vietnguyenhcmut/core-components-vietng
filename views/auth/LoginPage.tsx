"use client";

import {
  Authenticator,
  Flex,
  Grid,
  Image,
  ThemeProvider,
  useTheme,
  View,
} from "@aws-amplify/ui-react";

import { formFields, components } from "./formFieldsAndComponents";
import { useState, useEffect } from "react";
import "./style.css";

import { fetchMFAPreference } from "aws-amplify/auth";

export default function LoginPage({
  setUserName,
}: Readonly<{
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}>) {
  const { tokens } = useTheme();

  const theme = {
    name: "Auth For DQP Dashboard",
    tokens: {
      components: {
        authenticator: {
          router: {
            boxShadow: `-1px 1px 20px 1px ${tokens.colors.overlay["10"]}`,
            borderWidth: "0",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
          form: {
            padding: `${tokens.space.medium} ${tokens.space.xl} ${tokens.space.medium}`,
          },
        },
        button: {
          primary: {
            backgroundColor: "#524fff",
          },
          link: {
            color: "#f09a47",
          },
        },
        fieldcontrol: {
          _focus: {
            boxShadow: `0 0 0 1px #f09a47`,
          },
        },
        tabs: {
          item: {
            color: tokens.colors.neutral["80"],
            _active: {
              borderColor: tokens.colors.neutral["100"],
              color: tokens.colors.purple["100"],
            },
          },
        },
      },
    },
  };

  const [show_div_navIcon, setShow_div_navIcon] = useState(true);

  const [showDivNavIcon, setShowDivNavIcon] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Initial width

  useEffect(() => {
    const handleResize = () => {
      console.log("window.innerWidth", window.innerWidth);
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      setShowDivNavIcon(newWindowWidth > 1000);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="div1">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemeProvider theme={theme}>
          <View
          // padding="xxl"
          >
            <Authenticator
              formFields={formFields}
              components={components}
              hideSignUp
            >
              {({ signOut, user }) => {
                if (user && user.username) setUserName(user.username);
                console.log("user logged in successfully: ", user);
                return (
                  <div>
                    <button onClick={signOut}>Sign Out</button>
                  </div>
                );
              }}
            </Authenticator>
          </View>
        </ThemeProvider>
      </div>
    </div>
  );
}
