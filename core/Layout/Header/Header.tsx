"use client";

import "./style.css";
import { HeaderProps } from "./Types";
import { Avatar, Popover, Typography, Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { usePathname } from "next/navigation";
import PaletteIcon from "@mui/icons-material/Palette";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { signOut } from "aws-amplify/auth";
import { useState } from "react";

import { defineRoutes, RouteType } from "@/initial/routes/defineRoutes";

const Header: React.FC<HeaderProps> = ({
  style,
  headerSettingIcon,
  headerAuthUser,
}) => {
  const pathName = usePathname();
  const routes: RouteType[] = defineRoutes;
  const currentRoute = routes.find((route) => route.href === pathName)?.title;

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleAvatarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="header" style={style?.headerContainer}>
      <div className="header-title" style={style?.headerTitle}>
        <h4 className="header-title-text">{currentRoute}</h4>
      </div>
      <div className="header-authUser">
        <IconButton
          style={style?.headerSettingIcon}
          sx={{ marginRight: "10px" }}
        >
          {headerSettingIcon}
        </IconButton>
        <IconButton
          style={style?.headerSettingIcon}
          sx={{ marginRight: "10px" }}
        >
          <PaletteIcon sx={{ color: "#524fff" }} />
        </IconButton>
        <IconButton
          style={style?.headerSettingIcon}
          sx={{ marginRight: "10px" }}
        >
          <NotificationsIcon sx={{ color: "#524fff" }} />
        </IconButton>
        <h3 className="header-authUser-name" style={style?.headerAuthUser}>
          {headerAuthUser.name}
        </h3>
        <Avatar
          alt="..."
          sx={{ backgroundColor: "#524fff" }}
          aria-describedby={id}
          onClick={(event) => handleAvatarClick(event)}
        >
          {headerAuthUser.avatar}
        </Avatar>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="error"
              onClick={async () => {
                await signOut();
                window.location.reload();
              }}
            >
              Đăng xuất
            </Button>
          </Typography>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
