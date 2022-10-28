import React,{useEffect,useState} from 'react';
import {DataGrid } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'totalPrice',
    headerName: 'Cena zamówienia',
    width: 150,
  },
  {
    field: 'date',
    headerName: 'Data',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
  },
  {
    field: 'address',
    headerName: 'Adres',
    width: 670,
  },
  {
    field: 'houseNumber',
    headerName: 'Numer domu',
    width: 200,
  },
  {
    field: 'postalCode',
    headerName: 'Kod Pocztowy',
    width: 150,
  },
  {
      field: 'fullNamed',
      headerName: 'Akcja',
      width: 150,
      renderCell: (params) => {
            return (
              <div style = {{display:'flex', justifyContent: 'center'}}>
                <IconButton onClick={() => {
                }}>
                  <EditIcon />
                </IconButton>
                <IconButton >
                  <DeleteIcon />
                </IconButton>
                <IconButton >
                  <SearchIcon />
                </IconButton>
                </div>
            );
        }
    },
];



function Orders({orders}) {
  return (
    <div className='table__wrapper'>
    <DataGrid
        rows={orders}
        columns={columns}
        pageSize={11}
        rowsPerPageOptions={[11]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
    />
    </div>
  )
}

export default Orders