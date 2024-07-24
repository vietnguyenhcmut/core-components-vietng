"use client";
import { useState, useEffect } from "react";
import Card from "@/core/Card/Card";
import {
  Card as CardMUI,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Divider,
} from "@mui/material";

const CardSpecifiedDevice = () => {
  const [connectionStatus, setConnectionStatus] = useState<boolean>(false);
  useEffect(() => {
    setConnectionStatus(true);
  }, [connectionStatus]);

  return (
    <Card
      withAnimation="grow"
      animationDelay={1500}
      animationTime={500}
      style={{
        height: "100%",
        backgroundColor: "#ffffff",
        padding: "10px",
      }}
    >
      <Card
        withAnimation="grow"
        animationDelay={2000}
        animationTime={500}
        style={{
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#524fff",
          }}
        >
          Thông tin thiết bị
        </h3>

        <CardMUI sx={{ width: "100%", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/assets/overview/light.jpg"
            sx={{ maxHeight: "200px", width: "100%", boxShadow: "none" }}
          />
          <CardContent sx={{ padding: "10px" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#524fff", width: "70%", margin: 0 }}
              >
                Bóng đèn LiPre
              </Typography>
              <Chip
                variant="filled"
                label={connectionStatus ? "Đang kết nối" : "Mất kết nối"}
                sx={{
                  backgroundColor: connectionStatus ? "#C3FFAC" : "#FDB1A3",
                  color: connectionStatus ? "#00BD12" : "#FA3914",
                }}
              />
            </div>
            <Typography variant="body2" color="text.secondary">
              Công suất chiếu sáng: 20W,
            </Typography>

            <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ width: "70%" }}>
                <Typography variant="body2" color="text.secondary">
                  Đèn đang tắt
                </Typography>
              </div>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color="success"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Bật
                </Button>
              </CardActions>
            </div>
          </CardContent>
        </CardMUI>
      </Card>
    </Card>
  );
};

export default CardSpecifiedDevice;
