import Card from "@/core/Card/Card";
import { Button, Slider } from "@mui/material";
import { useEffect, useState } from "react";

type LightControlProps = {
  isLightOn: boolean;
  currentDimmingLevel: number;
  setLightOn: (value: boolean) => void;
  setLightDimmingLevel: (value: number) => void;
};

const LightControl: React.FC<LightControlProps> = ({
  isLightOn,
  currentDimmingLevel,
  setLightOn,
  setLightDimmingLevel,
}) => {
  const [isDeviceOn, setIsDeviceOn] = useState(isLightOn);
  useEffect(() => {
    setIsDeviceOn(isLightOn);
  }, [isLightOn]);

  const [currentLightDimmingLevel, setCurrentLightDimmingLevel] =
    useState(currentDimmingLevel);
  useEffect(() => {
    setCurrentLightDimmingLevel(currentDimmingLevel);
  }, [currentDimmingLevel]);

  const handleBtnClickOnOrOffLight = () => {
    setLightOn(!isDeviceOn);
    console.log(`Đèn vừa ${!isDeviceOn}`);
  };

  const [newLightDimmingLevel, setNewLightDimmingLevel] = useState(0);
  const handleBtnClickDimmingLight = () => {
    setLightDimmingLevel(newLightDimmingLevel);
    console.log("Đã chỉnh lại độ sáng đèn mức: ", newLightDimmingLevel);
  };

  return (
    <Card
      withAnimation="grow"
      animationTime={1000}
      style={{
        boxShadow: "none",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "20px",
          borderRadius: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f4f8fc",
        }}
      >
        <div style={{ width: "70%" }}>
          <p
            style={{
              color: isDeviceOn ? "#00BD12" : "red",
              fontWeight: "bold",
            }}
          >
            {isDeviceOn ? "Đèn đang bật" : "Đèn đang tắt"}
          </p>
        </div>
        <Button
          size="small"
          variant="contained"
          color={isDeviceOn ? "error" : "success"}
          sx={{
            fontWeight: "bold",
          }}
          onClick={() => handleBtnClickOnOrOffLight()}
        >
          {isDeviceOn ? "Tắt" : "Bật"}
        </Button>
      </div>

      <div
        style={{
          padding: "20px",
          borderRadius: "20px",
          marginTop: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f4f8fc",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "60%" }}>
          <p style={{ color: "rgb(100,100,100)" }}>Độ sáng đèn</p>
          <Slider
            aria-label="Light Dimming Level"
            defaultValue={1}
            step={1}
            marks
            min={1}
            max={4}
            sx={{ width: "100%" }}
            onChange={(event: Event, newValue: number | number[]) =>
              setNewLightDimmingLevel(
                typeof newValue == "number" ? newValue : 0
              )
            }
          />
        </div>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "bold",
          }}
          onClick={() => handleBtnClickDimmingLight()}
        >
          OK
        </Button>
      </div>
    </Card>
  );
};

export default LightControl;
