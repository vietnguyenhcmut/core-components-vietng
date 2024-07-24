"use client";

import { useState } from "react";
import Card from "@/core/Card/Card";
import Image from "next/image";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import dayjs from "dayjs";

import { Button, Popover, Typography } from "@mui/material";

export type CardClockProps = {
  image: {
    alt: string;
    src: string;
  };
  name: string;
  place: string;
  currentAlarm: string;
  timeDelay?: number;
};

const CardClock: React.FC<CardClockProps> = ({
  image,
  name,
  place,
  currentAlarm,
  timeDelay,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleBtnClickPopover = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Card
      withAnimation="grow"
      animationTime={timeDelay ? timeDelay : 1000}
      style={{
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
        padding: "10px",
      }}
    >
      <Image alt={image.alt} src={image.src} height={100} width={100} />

      <Card
        withAnimation="grow"
        animationTime={timeDelay ? timeDelay + 500 : 1500}
        style={{
          boxShadow: "none",
          textAlign: "left",
          padding: "10px",
          margin: "10px",
          background: "#f4f8fc",
        }}
      >
        <h3 style={{ fontWeight: "bold", color: "#524fff", fontSize: "16px" }}>
          {name}
        </h3>
        <h3 style={{ color: "rgb(100,100,100)", fontSize: "13px" }}>{place}</h3>
        <Card
          withAnimation="grow"
          animationTime={timeDelay ? timeDelay + 500 : 1500}
          animationDelay={500}
          style={{
            boxShadow: "none",
            width: "100%",
            // background: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
          }}
        >
          <Button
            variant="outlined"
            aria-describedby={id}
            onClick={handleBtnClickPopover}
          >
            {currentAlarm}
          </Button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticTimePicker
                  orientation="landscape"
                  defaultValue={dayjs(
                    `${dayjs().format("YYYY-MM-DD")} ${currentAlarm}`
                  )}
                  onChange={(value) => console.log(value)}
                />
              </LocalizationProvider>
            </Typography>
          </Popover>
        </Card>
      </Card>
    </Card>
  );
};

export default CardClock;
