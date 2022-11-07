import React,{useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import OrderDetailsModal from '../SharedComponent/OrderDetailsModal';
import OrderServices from '../Services/OrderServices';
import EditOrderModal from '../SharedComponent/EditOrderModal';
import "./Orders.css";


function Orders({orders,openModalEditOrder,setOpenModalEditOrder,page,setPage,rowCount,deleteOrder}) {

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

  const columns = [
    { field: 'id', 
    headerName: 'ID', 
    width: 90,
    sortable: false,  },
    {
      field: 'totalPrice',
      headerName: 'Cena zamówienia',
      width: 150,
      sortable: false,
    },
    {
      field: 'date',
      headerName: 'Data',
      width: 100,
      sortable: false,
    },
    {
      field: 'difference',
      headerName: 'Różnica',
      width: 200,
      sortable: false,
      renderCell: (params) => {
        
        return (
        <>
          {params.row.isDelayed ? (
            <p style = {{color:'red', paddingTop:'15px'}}>{params.row.difference}</p>
          ) : (
            <p style = {{color:'green', paddingTop:'15px'}}>{params.row.difference}</p>
          )
          }
        </>
        );
    }
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
      sortable: false,
    },
    {
      field: 'address',
      headerName: 'Adres',
      width: 470,
      sortable: false,
    },
    {
      field: 'houseNumber',
      headerName: 'Numer domu',
      width: 200,
      sortable: false,
    },
    {
      field: 'postalCode',
      headerName: 'Kod Pocztowy',
      width: 150,
      sortable: false,
    },
    {
        field: 'fullNamed',
        headerName: 'Akcja',
        sortable: false,
        width: 150,
        renderCell: (params) => {
              return (
                <div style = {{display:'flex', justifyContent: 'center'}}>
                  <IconButton onClick = {()=>{
                    setEditOrder({id: params.id, status: params.row.status})
                    setOpenModalEditOrder(true)
                    setSuccess()
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
          pageSize={11}
          rowsPerPageOptions={[11]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          pagination
          page={page}
          paginationMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          rowCount={rowCount}
      />
      </div>
    </div>
  )
}

export default Orders