import { defineRoutes } from "./routes/defineRoutes";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

const InitialWebPagesConfiguration = {
  branch: {
    name: "OnHand",
    logo: <FilterDramaIcon sx={{ fontSize: "40px", color: "#524fff" }} />,
  },
  routes: defineRoutes,
};

export default InitialWebPagesConfiguration;
