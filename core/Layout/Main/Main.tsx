import { Grid } from "@mui/material";
import { MainProps } from "./Types";

const Main: React.FC<MainProps> = ({ style, children }) => {
  return (
    <div style={style}>{children}</div>
    // <Grid container spacing={2}>
    //   <Grid item xs={12}>
    //     Hi users of VietNg !
    //   </Grid>
    //   <Grid item xs={4}>
    //     Welcome
    //   </Grid>
    //   <Grid item xs={8}>
    //     To here !
    //   </Grid>
    // </Grid>
  );
};

export default Main;
