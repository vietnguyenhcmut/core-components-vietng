import Card from "@/core/Card/Card";

const Contact = () => {
  return (
    <Card
      withAnimation="grow"
      animationTime={1000}
      style={{
        backgroundColor: "#ffffff",
        padding: "10px",
        textAlign: "center",
        height: "200px",
      }}
    >
      Thông tin liên hệ
    </Card>
  );
};

export default Contact;
