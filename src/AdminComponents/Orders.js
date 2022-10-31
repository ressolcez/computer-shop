import React,{useEffect,useState} from 'react';
import {DataGrid,GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import OrderDetailsModal from '../SharedComponent/OrderDetailsModal';
import OrderServices from '../Services/OrderServices';
import EditOrderModal from '../SharedComponent/EditOrderModal';
import "./Orders.css";


function Orders({orders,openModalEditOrder,setOpenModalEditOrder}) {

  const handleCloseModalEditOrder = () => setOpenModalEditOrder(false);
  const handleCloseModalProductDetails = () => setOpenModalProductDetails(false);
  const [openModalProductDetails, setOpenModalProductDetails] = useState(false);
  const [success,setSuccess] = useState();  

  const [order, setOrder] = useState();
  const [editOrder, setEditOrder] = useState();
  
  const getOrderById = (orderId) => {
    OrderServices.getOrderById(orderId).then((response) => {
      setOrder(response.data);
    });
  }

  const deleteOrder = (orderId) =>{
    OrderServices.deleteOrder(orderId);
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
                  <IconButton onClick = {()=>{
                    setEditOrder({id: params.id, status: params.row.status})
                    setOpenModalEditOrder(true)
                    setSuccess( )
                  }
                  }
    
                    >
                    <EditIcon/>
                  </IconButton>
                  <IconButton onClick = {()=> deleteOrder(params.id)}>
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

  return (
    <div className='admin__product__wrapper'>
    <h1 style = {{fontFamily:'"Courier New", Courier, monospace', marginTop:'15px'}}>Zamówienia</h1>
      <div className='table__wrapper'>
      {editOrder && <EditOrderModal openModal = {openModalEditOrder} handleCloseModal = {handleCloseModalEditOrder} order = {editOrder} success = {success} setSuccess = {setSuccess}/>}
      {order && <OrderDetailsModal openModal = {openModalProductDetails} handleCloseModal = {handleCloseModalProductDetails} order = {order}/>}
      <DataGrid
          rows={orders}
          columns={columns}
          disableColumnFilter 
          sortingMode="server"
          pageSize={11}
          rowsPerPageOptions={[11]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
      />
      </div>
    </div>
  )
}

export default Orders