"use client";

import { useState } from "react";
import CardClock from "@/views/card-clock/CardClock";
import CardAddNewClock from "@/views/card-clock/CardAddNewClock";
import { Grid } from "@mui/material";
import { CardClockProps } from "@/views/card-clock/CardClock";

import { DataStoreContext } from "@/initial/data-store-provider/DataStoreProvider";
import { useContext } from "react";

const Clock = () => {
  const { dataStore } = useContext(DataStoreContext);
  console.log(dataStore);

  const data: CardClockProps[] = [
    {
      image: {
        alt: "Image from Freepik.com",
        src: "/assets/bulb/light-bulb_2539302.png",
      },
      name: "Bóng đèn LiPre 1",
      place: "Phòng khách",
      currentAlarm: "18:00",
    },
    {
      image: {
        alt: "Image from Freepik.com",
        src: "/assets/bulb/light-bulb_2539302.png",
      },
      name: "Bóng đèn LiPre 2",
      place: "Phòng khách",
      currentAlarm: "18:00",
    },
    {
      image: {
        alt: "Image from Freepik.com",
        src: "/assets/fan/fan_11553712.png",
      },
      name: "Quạt trần FanPro ",
      place: "Phòng khách",
      currentAlarm: "19:00",
    },
    {
      image: {
        alt: "Image from Freepik.com",
        src: "/assets/fan/fan_11553712.png",
      },
      name: "Quạt trần FanPro 2",
      place: "Phòng ngủ 1",
      currentAlarm: "22:00",
    },
    {
      image: {
        alt: "Image from Freepik.com",
        src: "/assets/fan/fan_11553712.png",
      },
      name: "Quạt trần FanPro 3",
      place: "Phòng ngủ 2",
      currentAlarm: "22:00",
    },
  ];

  const [timeDelay, setTimeDelay] = useState(1000);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={3}>
        <CardAddNewClock />
      </Grid>

      {data.map((item, index) => {
        return (
          <Grid key={index} item xs={12} sm={12} md={6} lg={3}>
            <CardClock {...item} timeDelay={timeDelay + index * 500} />
          </Grid>
        );
      })}
      <Grid item xs={12} sm={12} md={6} lg={3}></Grid>
    </Grid>
  );
};

export default Clock;
