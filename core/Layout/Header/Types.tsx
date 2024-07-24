export type HeaderProps = {
  style?: {
    headerContainer?: React.CSSProperties;
    headerTitle?: React.CSSProperties;
    headerSettingIcon?: React.CSSProperties;
    headerAuthUser?: React.CSSProperties;
  };
  headerSettingIcon: React.ReactElement;
  headerAuthUser: {
    name: string;
    avatar: React.ReactElement;
  };
};
