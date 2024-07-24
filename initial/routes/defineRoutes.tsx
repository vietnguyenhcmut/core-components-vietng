import HomeIcon from "@mui/icons-material/Home";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";

export type RouteType = {
  icon: React.ReactElement;
  title: string;
  href: string;
};

export const defineRoutes: RouteType[] = [
  {
    icon: <HomeIcon sx={{ fontSize: "20px" }} />,
    title: "Home",
    href: "/",
  },
  {
    icon: <AccessAlarmsIcon sx={{ fontSize: "20px" }} />,
    title: "Hẹn giờ",
    href: "/clock",
  },
  {
    icon: <AccountCircleIcon sx={{ fontSize: "20px" }} />,
    title: "Người dùng",
    href: "/user",
  },
  {
    icon: <PhoneIcon sx={{ fontSize: "20px" }} />,
    title: "Liên hệ",
    href: "/contact",
  },
];
