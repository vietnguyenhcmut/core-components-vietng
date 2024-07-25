export type MenuNavProps = {
  icon: React.ReactElement;
  title: string;
  href: string;
};

export type SidebarProps = {
  style?: {
    sidebarContainer?: React.CSSProperties;
    sidebarLogoBranch?: React.CSSProperties;
    sidebarMenu?: {
      activeItem: React.CSSProperties;
      unactiveItem: React.CSSProperties;
    };
    sidebarSwitchCollapse?: React.CSSProperties;
  };
  logo: React.ReactElement;
  branch: string;
  menuNav: MenuNavProps[];
};
