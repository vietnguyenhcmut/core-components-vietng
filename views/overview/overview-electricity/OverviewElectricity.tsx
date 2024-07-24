import Card from "@/core/Card/Card";
import Image from "next/image";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const OverviewElectricity = () => {
  return (
    <Card
      withAnimation="grow"
      animationDelay={200}
      animationTime={1000}
      style={{
        height: "100%",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <Image
        alt="Image from Freepik.com"
        src="/assets/overview/overview-electricity.png"
        width={100}
        height={100}
      />
      <Card
        withAnimation="grow"
        animationDelay={200}
        animationTime={1500}
        style={{
          boxShadow: "none",
          textAlign: "left",
          padding: "10px",
          margin: "10px",
          background:
            "linear-gradient(135deg, rgba(252,230,185,1) 0%, rgba(249,243,217,1) 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <h4
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#524fff",
            }}
          >
            Lượng điện tiêu thụ
          </h4>
          <h5
            style={{
              fontSize: "13px",
              color: "rgb(100,100,100)",
            }}
          >
            Của thiết bị tất cả các phòng
          </h5>
          <h4
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              color: "#524fff",
            }}
          >
            140.01 kWh
          </h4>
        </div>

        <Card
          withAnimation="grow"
          animationDelay={500}
          animationTime={2000}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "#FDB1A3",
            borderRadius: "20px",
            width: "100%",
            padding: "5px",
            alignItems: "center",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TrendingUpIcon
              sx={{
                color: "#FA3914",
                fontSize: "20px",
                marginRight: "10px",
              }}
            />
            <h5
              style={{
                fontSize: "16px",
                color: "#FA3914",
                fontWeight: "bold",
              }}
            >
              14%
            </h5>
          </div>
          <h5
            style={{
              color: "#FA3914",
              marginLeft: "20px",
              fontSize: "16px",
            }}
          >
            so với tháng trước
          </h5>
        </Card>
      </Card>
    </Card>
  );
};

export default OverviewElectricity;
