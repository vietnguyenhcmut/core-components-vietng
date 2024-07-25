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

import { DataStoreContext } from "@/initial/data-store-provider/DataStoreProvider";
import { useContext } from "react";

type RowProps = {
  id: number;
  name: string;
  place: string;
  timeLived: string;
  lastCheck: string;
  status: boolean;
  editable: boolean;
};

const TableAllDevices = () => {
  const { dataStore } = useContext(DataStoreContext);

  const columns: GridColDef[] = [
    { field: "id", headerName: "STT", width: 100 },
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

  const rows: RowProps[] = dataStore.dataOfDevices.map(
    (dataOfDevice, index) => {
      return {
        id: index + 1,
        name: dataOfDevice.nameOfDevice.S,
        place: dataOfDevice.placeOfDevice.S,
        timeLived: dataOfDevice.timeLived.S,
        lastCheck: dataOfDevice.lastCheck.S,
        status: dataOfDevice.status.BOOL,
        editable: false,
      };
    }
  );

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
      ></DataGrid>
    </Card>
  );
};

export default TableAllDevices;
