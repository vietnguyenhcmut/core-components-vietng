"use client";

import Card from "@/core/Card/Card";
import AddIcon from "@mui/icons-material/Add";
import { Modal, Typography, Box } from "@mui/material";
import { useState } from "react";

const CardAddNewClock = () => {
  const [statusModal, setStatusModal] = useState(false);
  const handleOpenModal = () => setStatusModal(true);
  const handleCloseModal = () => setStatusModal(false);

  return (
    <Card
      withAnimation="grow"
      animationTime={1000}
      style={{
        background: "#e2e2ff",
        border: "1px solid #ccccff",
        height: "100%",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleOpenModal}
      >
        <AddIcon sx={{ fontSize: "60px", color: "#524fff" }} />
        <h3 style={{ fontSize: "16px", color: "#524fff", fontWeight: "bold" }}>
          Thêm hẹn giờ
        </h3>
      </div>

      <Modal
        open={statusModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "600px",
            border: "1px solid rgb(220,220,220)",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            p: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "#524fff", fontWeight: "bold", width: "100%" }}
          >
            Tạo hẹn giờ mới
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, width: "100%" }}
          >
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    color: "#524fff",
                    fontWeight: "bold",
                  }}
                >
                  Chọn thiết bị
                </h3>
                abc
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    color: "#524fff",
                    fontWeight: "bold",
                  }}
                >
                  Thời điểm bật
                </h3>
                abc
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    color: "#524fff",
                    fontWeight: "bold",
                  }}
                >
                  Thời điểm tắt
                </h3>
                abc
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </Card>
  );
};

export default CardAddNewClock;
