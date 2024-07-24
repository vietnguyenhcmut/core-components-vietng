"use client";

import "./style.css";
import { useState } from "react";
import { MenuNavProps, SidebarProps } from "./Types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigatorProps = {
  style?: {
    activeItem: React.CSSProperties;
    unactiveItem: React.CSSProperties;
  };
  data: MenuNavProps[];
  setHeaderTitle: (title: string) => void;
  collapse: boolean;
};

const MenuNav: React.FC<NavigatorProps> = ({
  style,
  data,
  setHeaderTitle,
  collapse,
}) => {
  const pathname = usePathname();

  const handleBtnClickChooseItem = (title: string) => {
    setHeaderTitle(title);
  };

  return (
    <div className="div_menuNav">
      {data.map((item, index) => {
        return (
          <Link key={index} href={item.href}>
            <div
              color="inherit"
              className="div_menuNav-item"
              style={{
                ...(pathname === item.href
                  ? style?.activeItem
                  : style?.unactiveItem),
                // backgroundColor: pathname === item.href ? "#524fff" : "#A6A4FD",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                borderTopRightRadius: collapse
                  ? "10px"
                  : pathname === item.href
                  ? "20px"
                  : "10px",
                borderBottomRightRadius: collapse
                  ? "10px"
                  : pathname === item.href
                  ? "20px"
                  : "10px",
              }}
              onClick={() => handleBtnClickChooseItem(item.title)}
            >
              {item.icon}
              <h4
                className={`text_menuNav-title ${collapse ? "hide" : "show"}`}
              >
                {item.title}
              </h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({
  style,
  logo,
  branch,
  menuNav,
  setHeaderTitle,
}) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div
      className={`sidebar ${collapse ? "collapse" : "expand"}`}
      style={style?.sidebarContainer}
    >
      <div className="div_logo-and-branch">
        {logo}
        <h3
          className={`text_branch ${collapse ? "hide" : "show"}`}
          style={style?.sidebarLogoBranch}
        >
          {branch}
        </h3>
      </div>

      <div className="div_menu-navigator">
        <MenuNav
          style={style?.sidebarMenu}
          data={menuNav}
          setHeaderTitle={setHeaderTitle}
          collapse={collapse}
        />
      </div>

      <div className="div_sidebarConfig">
        {/* <h4>Config</h4> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <CopyrightIcon style={{ color: "rgb(100,100,100)" }} />
          <h3
            style={{
              color: "rgb(100,100,100)",
              fontSize: "13px",
              display: collapse ? "none" : "block",
            }}
          >
            Copyright to VietNg
          </h3>
        </div>
        <button
          className="button-switch-collapse"
          style={style?.sidebarSwitchCollapse}
          onClick={() => setCollapse(!collapse)}
        >
          <KeyboardArrowRightIcon
            style={{ transform: collapse ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
