"use client";

import Card from "@/core/Card/Card";
import { Button, Divider } from "@mui/material";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Chip } from "@mui/material";

const TableAllDevices = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Tên thiết bị", width: 200 },
    { field: "place", headerName: "Vị trí", width: 150 },
    { field: "timeLived", headerName: "Thời gian hoạt động", width: 150 },
    { field: "lastCheck", headerName: "Cập nhật lần cuối", width: 150 },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 150,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Chip
            variant="filled"
            label={params.value ? "Đang kết nối" : "Mất kết nối"}
            sx={{
              backgroundColor: params.value ? "#C3FFAC" : "#FDB1A3",
              color: params.value ? "#00BD12" : "#FA3914",
            }}
          />
        );
      },
    },
  ];

  const rows: GridRowsProp = [
    {
      id: 1,
      name: "Bóng đèn LiPre 1",
      place: "Phòng khách",
      timeLived: "4 ngày 11 tiếng",
      lastCheck: "Vừa xong",
      status: true,
      editable: false,
    },
    {
      id: 2,
      name: "Bóng đèn LiPre 2",
      place: "Phòng khách",
      timeLived: "11 ngày 2 tiếng",
      lastCheck: "Vừa xong",
      status: true,
      editable: false,
    },
    {
      id: 3,
      name: "Quạt trần FanPro",
      place: "Phòng khách",
      timeLived: "6 tiếng 15 phút",
      lastCheck: "Vừa xong",
      status: true,
      editable: false,
    },
    {
      id: 4,
      name: "Quạt trần FanPro 2",
      place: "Phòng khách",
      timeLived: "6 tiếng 15 phút",
      lastCheck: "Vừa xong",
      status: true,
      editable: false,
    },
    {
      id: 5,
      name: "Quạt trần FanPro 3",
      place: "Phòng khách",
      timeLived: "6 tiếng 15 phút",
      lastCheck: "Vừa xong",
      status: true,
      editable: false,
    },
    {
      id: 6,
      name: "Nồi cơm FreeCook",
      place: "Bếp",
      timeLived: "3 ngày 10 tiếng",
      lastCheck: "2 ngày trước",
      status: false,
      editable: false,
    },
    {
      id: 7,
      name: "Cửa gara",
      place: "Gara",
      timeLived: "11 ngày 2 tiếng",
      lastCheck: "Vừa xong",
      status: true,
      editable: false,
    },
  ];

  return (
    <Card
      withAnimation="grow"
      animationDelay={500}
      animationTime={2000}
      style={{
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div style={{ width: "100%" }}>
          <h4
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#524fff",
            }}
          >
            Danh sách các thiết bị
          </h4>
          <h4
            style={{
              color: "rgb(100,100,100)",
              fontSize: "13px",
            }}
          >
            Trông tin các thiết bị mà bạn đang sở hữu
          </h4>
        </div>

        <Card
          withAnimation="grow"
          animationDelay={1000}
          animationTime={500}
          style={{
            boxShadow: "none",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <TextField
            placeholder="Tìm thiết bị ..."
            InputProps={{
              sx: {
                borderRadius: "20px",
                backgroundColor: "#f4f8fc",
                maxWidth: "300px",
                height: "40px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            sx={{
              height: "40px",
              borderRadius: "20px",
              marginLeft: "10px",
              backgroundColor: "#524fff",
              boxShadow: "none",
              ":hover": {
                backgroundColor: "#7e7cf9",
              },
            }}
          >
            {" "}
            <AddIcon /> Thiết bị
          </Button>
        </Card>
      </div>

      <Divider />

      <DataGrid
        rows={rows}
        columns={columns}
        sx={{ border: "none" }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20, 30, 40, 50]}
        //onRowClick={(event) => handleRowOfTableClick(event.id)}
        // hideFooterPagination
        // checkboxSelection
        // disableRowSelectionOnClick
        //sx={sxStyled}
        //localeText={viVN}
      ></DataGrid>
    </Card>
  );
};

export default TableAllDevices;
