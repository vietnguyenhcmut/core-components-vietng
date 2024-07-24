import "./style.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";
import { SidebarProps } from "./Sidebar/Types";
import { HeaderProps } from "./Header/Types";
import { MainProps } from "./Main/Types";
import { FooterProps } from "./Footer/Types";

type LayoutProps = {
  sidebarProps: SidebarProps;
  headerProps: HeaderProps;
  mainProps: MainProps;
  footerProps?: FooterProps;
};

const Layout: React.FC<LayoutProps> = ({
  sidebarProps,
  headerProps,
  mainProps,
  footerProps,
}) => {
  return (
    <div className="div_layout-container">
      <div className="div_layout-sidebar">
        <Sidebar {...sidebarProps} />
      </div>
      <div className="div_layout-header-main-footer">
        <div className="div_layout-header">
          <Header {...headerProps} />
        </div>
        <div className="div_layout-main">
          <Main {...mainProps}></Main>
        </div>
        {/* <div className="div_layout-footer">
          <Footer {...footerProps} />
        </div> */}
      </div>
    </div>
  );
};

export default Layout;
