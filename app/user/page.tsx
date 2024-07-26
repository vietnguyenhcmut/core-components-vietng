import Card from "@/core/Card/Card";

const User = () => {
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
      <h3 style={{ fontWeight: "bold" }}>Thông tin người dùng</h3>
      <h3>...</h3>
    </Card>
  );
};

export default User;
