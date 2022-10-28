import React,{useEffect,useState} from 'react';
import {DataGrid,GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import OrderDetailsModal from '../SharedComponent/OrderDetailsModal';
import OrderServices from '../Services/OrderServices';
import Form from 'react-bootstrap/Form';
import "./Orders.css";
import { isEmptyArray, isEmptyChildren } from 'formik';




function Orders({orders}) {
  
  const [openModalProductDetails, setOpenModalProductDetails] = useState(false);
  const handleCloseModalProductDetails = () => setOpenModalProductDetails(false);
  const [order, setOrder] = useState();
  const [queryOptions, setQueryOptions] = React.useState({});

    
useEffect(() => {  
  if (Object.keys(queryOptions).length === 0) {
    console.log('Object is empty');
  }else{
    console.log('query!!!')
  }
}, [queryOptions]);


  const getOrderById = (orderId) => {
    OrderServices.getOrderById(orderId).then((response) => {
      setOrder(response.data);
    });
  }

  const changeOrderStatus = (status) =>{

    console.log(status)
  }

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
      editable: true,
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
                  changeOrderStatus(params.row.status);
                 }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => {
                    setOpenModalProductDetails(true)
                    getOrderById(params.row.id)
              
                }}>
                    <SearchIcon />
                  </IconButton>
                  </div>
              );
          }
      },
  ];

  const handleSortModelChange = React.useCallback((sortModel) => {
    setQueryOptions({ sortModel: [...sortModel] });
  }, []);

  return (
    <div className='admin__product__wrapper'>
    <h1 style = {{fontFamily:'"Courier New", Courier, monospace', marginTop:'15px'}}>Zamówienia</h1>
      <div className='table__wrapper'>
      {order && <OrderDetailsModal openModal = {openModalProductDetails} handleCloseModal = {handleCloseModalProductDetails} order = {order}/>}
      <DataGrid
          rows={orders}
          columns={columns}
          disableColumnFilter 
          sortingMode="server"
          onSortModelChange={handleSortModelChange}
          pageSize={11}
          rowsPerPageOptions={[11]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
      />
      </div>
    </div>
  )
}

export default Orders