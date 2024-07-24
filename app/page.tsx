import { Grid } from "@mui/material";
import Card from "@/core/Card/Card";

import OverviewDevices from "@/views/overview/overview-devices/OverviewDevices";
import OverviewElectricity from "@/views/overview/overview-electricity/OverviewElectricity";
import TableAllDevices from "@/views/table-all-devices/TableAllDevices";
import CardSpecifiedDevice from "@/views/card-specified-device/CardSpecifiedDevice";

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={8} container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <OverviewDevices />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <OverviewElectricity />
        </Grid>
        <Grid item xs={12}>
          <TableAllDevices />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <CardSpecifiedDevice />
      </Grid>
    </Grid>
  );
}
