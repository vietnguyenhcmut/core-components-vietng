import {
  useAuthenticator,
  Image,
  useTheme,
  View,
  Text,
  Heading,
  Button,
} from "@aws-amplify/ui-react";
// import { StorageImage } from "@aws-amplify/ui-react-storage";

export const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View
        textAlign="center"
        padding={tokens.space.large}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* <Image
          alt="DQP Logo"
          src="https://dqpwebappcontentsbucketa93e4-staging.s3.ap-southeast-1.amazonaws.com/public/staticContentOfPages/logoOfWeb/icon64x64.png?x-amz-content-sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT5HFO4HHXSMA3RVE%2F20240508%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240508T093455Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIhALIsl40INHBmJJ7XNmRTOpv2SMqe1W79uLf150g%2FDNFuAiBlIgsnU5waQR%2BWIyudX1Dn5aNb9hZ%2F6SQCzm9%2Bl5mG6SrrBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI2ODkxNjY3OTExOSIM7W%2B8iYcNZhZcfiPOKr8ErTqrnsi0I5yiaKetIh1SClFlnIiY%2BoITB6%2B%2Baes3WZNdU7qXdhpuN9uvti4m8YF7C7YJuhFvfGYyC5OpmlmqSwFYGVSmyu0gA95oD3hIt4AcYMadvFaeJzNp8WXSG6BofoxP11PvWpENcOGlE%2Fdx8oEtIBRXbe1YDppwchDRW3EaWc%2BYwjjYaymKFFB%2F%2FLJyqR1FpBsgH4WEjlRSvw6cLDYre6CC998ehOCGRkPcc7YBIGUOAO1%2Fu6pziBEIaXfXy1PRfa0VJqp%2FvdUAhs2UaHhaooOGcTBjLRNyuoCdlxv7fdJJ8pGbvdK5SNdgf0SvFZJ67v48N5N9PcftnpzgnAR9SQ5wWn7etRzFBoQYLE%2Ffey4QFGFbyhTMkY%2B%2Fy4injZDzmh8UJhOFMSZnDBnkXvpaY3bJDVja89B4W3N5hh%2FTjlnMeyKLK9bdTxbCsaVvxxOMvRN4MIQkNA9laniTkvBU6FsFXlHz2vI7KHpdy%2BIDD5G9rN9dEwIXzmZ%2Bsd8ceYv%2BJyCmnPIpDtHFGLbUFN0sCixDSOQugiKq94rVNIwi%2F0Qi1qnWJjXrk2saGw0ZKOmMZoTXT%2FbZ5R1yVPxeKNn2V95f5RjwOYT8fZj37zwnMLrb4Geu%2BzOOP7%2Fne2ZN9enhuDNxdmmklEtD0I8x01cq8%2ByobZUlvlFJXiSjKcj%2FFIqPSqC2886hX3DOijgTTjiGLmCb%2BcXh41CONG7ahkjFAFarlxgTAAucxmLa21dmJMwGb9Z4hiZ84eTsdN8wv47tsQY6hQLguEyHNc8KsjbXhTNNPHvrpizN434gf8ZI0Za%2FNMgi1MH1nPA%2B0GbeqAPKbxKJ9nUW2RPnAh8%2BYgmf7UNyqVa975cDE9Hd%2F%2BI3aRqtGXyIHTSeskC%2BrY%2Fk62EojY60lIuRlapSjr6qiaVKiNpVlRK20g6VGDYLoD%2Fdx8wfc3Od1arGt6%2BOJRxi1tWG%2B2L6YDGwJkICB1gwcoD1RGjXtVmfK224NODtqDWvrG%2BrMntmPm1QnXj0EtCEguPr8dW8MBt5Od8J9qMInedHCazL%2F6c1RF6flZ%2FVpTV%2Bl1eDpJeVhvZ%2BUzu%2FEGDPJVOJYvqyckt9CtPrkdMmmzOBanvYyewRQv3f4xo%3D&X-Amz-Signature=4c50140c2b274ad056ac9a8975c38274ba3d61c5d1633d05b1ca61ae9b05bffa"
        />
        <Text style={{ fontSize: "40px", marginLeft: "40px" }}>
          DQP Dashboard
        </Text> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            height: "80px",
          }}
        >
          {/* <StorageImage
            height="80px"
            width="80px"
            path="public/staticContentOfPages/logoOfWeb/DQPCloud-100x100.png"
          /> */}

          <h2
            style={{
              color: "#524fff",
              marginLeft: "5px",
              marginTop: 0,
              marginBottom: 0,
              marginRight: 0,
              fontSize: "20px",
              fontWeight: "bold",
            }}
            className="slow-text-company"
          >
            OnHand
          </h2>
        </div>
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large} marginTop="20px">
        <Text color="#000000">&copy; Copyright to VietNg</Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Vui lòng đăng nhập
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Quên mật khẩu ?
          </Button>
        </View>
      );
    },
  },

  // SignUp: {
  //   Header() {
  //     const { tokens } = useTheme();

  //     return (
  //       <Heading
  //         padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
  //         level={3}
  //       >
  //         Tạo tài khoản
  //       </Heading>
  //     );
  //   },
  //   Footer() {
  //     const { toSignIn } = useAuthenticator();

  //     return (
  //       <View textAlign="center">
  //         <Button
  //           fontWeight="normal"
  //           onClick={toSignIn}
  //           size="small"
  //           variation="link"
  //         >
  //           Quay lại đăng nhập
  //         </Button>
  //       </View>
  //     );
  //   },
  // },
  // ConfirmSignUp: {
  //   Header() {
  //     const { tokens } = useTheme();
  //     return (
  //       <Heading
  //         padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
  //         level={3}
  //       >
  //         Nhập thông tin:
  //       </Heading>
  //     );
  //   },
  //   Footer() {
  //     return <Text>Footer Information</Text>;
  //   },
  // },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    // Footer() {
    //   return <Text>Footer Information</Text>;
    // },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Nhập thông tin:
        </Heading>
      );
    },
    // Footer() {
    //   return <Text>Footer Information</Text>;
    // },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Nhập thông tin:
        </Heading>
      );
    },
    // Footer() {
    //   return <Text>Footer Information</Text>;
    // },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Đặt mật khẩu mới
        </Heading>
      );
    },
    // Footer() {
    //   return <Text>Footer Information</Text>;
    // },
  },
};

export const formFields = {
  signIn: {
    username: {
      placeholder: "Nhập email của bạn",
    },
    password: {
      placeholder: "Nhập mật khẩu của bạn",
    },
  },
  // signUp: {
  //   password: {
  //     label: "Password:",
  //     placeholder: "Enter your Password:",
  //     isRequired: false,
  //     order: 2,
  //   },
  //   confirm_password: {
  //     label: "Confirm Password:",
  //     order: 1,
  //   },
  // },
  forceNewPassword: {
    password: {
      placeholder: "Force new password",
    },
  },
  forgotPassword: {
    username: {
      placeholder: "Nhập email của bạn",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Nhập mã xác nhận được gửi tới email của bạn",
      label: "Mã xác nhận",
      isRequired: true,
    },
    password: {
      placeholder: "",
      label: "Mật khẩu mới",
      isRequired: true,
    },
    confirm_password: {
      placeholder: "",
      label: "Xác nhận mật khẩu mới",
      isRequired: true,
    },
  },
  setupTotp: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amplify_qr_test_user",
    },
    confirmation_code: {
      label: "Xác nhận 2 bước",
      placeholder: "Vui lòng mở ứng dụng Authenticator của bạn",
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: "Xác nhận 2 bước",
      placeholder: "Vui lòng mở ứng dụng Authenticator của bạn",
      isRequired: false,
    },
  },
};
