import Image from "next/image";
import Card from "@/core/Card/Card";
import CircleIcon from "@mui/icons-material/Circle";

const OverviewDevices = () => {
  return (
    <Card
      withAnimation="grow"
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
        src="/assets/overview/overview-house-remotely.png"
        width={100}
        height={100}
      />
      <Card
        withAnimation="grow"
        animationTime={1500}
        style={{
          boxShadow: "none",
          textAlign: "left",
          padding: "10px",
          margin: "10px",
          background:
            "linear-gradient(135deg, rgba(231,229,255,1) 0%, rgba(193,233,255,1) 100%)",
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
            Tổng thiết bị
          </h4>
          <h5
            style={{
              fontSize: "13px",
              color: "rgb(100,100,100)",
            }}
          >
            Bao gồm các thiết bị tất cả các phòng
          </h5>
          <h4
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              color: "#524fff",
            }}
          >
            {" "}
            14
          </h4>
        </div>

        <Card
          withAnimation="grow"
          animationTime={2000}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "#C3FFAC",
            borderRadius: "20px",
            maxWidth: "200px",
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
            <CircleIcon
              sx={{
                color: "#07CF19",
                fontSize: "10px",
                marginRight: "10px",
              }}
            />
            <h5
              style={{
                fontSize: "16px",
                color: "#07CF19",
              }}
            >
              Đang kết nối
            </h5>
          </div>
          <h5
            style={{
              color: "#07CF19",
              marginLeft: "20px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            12
          </h5>
        </Card>
      </Card>
    </Card>
  );
};

export default OverviewDevices;
