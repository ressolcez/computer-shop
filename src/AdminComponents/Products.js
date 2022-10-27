import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {DataGrid } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ProductServices from '../Services/ProductServices';
import "./Products.css";
import { Button } from '@mui/material';
import AddProductModal from '../SharedComponent/AddProductModal';
import EditProductModal from '../SharedComponent/EditProductModal';

  
function Products({products}) {

  const [id,setId] = useState(1);

  const [openModalAddProduct, setOpenModalAddProduct] = useState(false);
  const [openModalEditProduct, setOpenModalEditProduct] = useState(false);

  const handleCloseModalAddProduct = () => setOpenModalAddProduct(false);
  const handleCloseModalEditProduct = () => setOpenModalEditProduct(false);

  const deleteProduct = (productId) =>{
    ProductServices.deleteProduct(productId);
    window.location.reload(false)
  }


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Nazwa',
      width: 150,
    },
    {
      field: 'slider',
      headerName: 'Slider',
      width: 100,
    },
    {
      field: 'producent',
      headerName: 'Producent',
      width: 150,
    },
    {
      field: 'description',
      headerName: 'Opis',
      width: 650,
    },
    {
      field: 'image',
      headerName: 'Zdjęcie',
      width: 200,
    },
    {
      field: 'price',
      headerName: 'Cena',
      width: 150,
    },
    {
      field: 'categoryName',
      headerName: 'Kategoria',
      width: 150,
      valueSetter: (params) => {
        return {...params.row,categoryModel:{...params.row.categoryModel,categoryName:params.value}}
      },  
      renderCell: (params) => {
        return (
          <div>
            {params.row.categoryModel.categoryName}
          </div>
        )
      }    
    },
    {
        field: 'fullNamed',
        headerName: 'Akcja',
        width: 80,
        renderCell: (params) => {
              return (
                <div style = {{display:'flex', justifyContent: 'center'}}>
                  <IconButton onClick={() => {
                    setId(params.id);
                    setOpenModalEditProduct(true);
                  }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteProduct(params.id)}>
                    <DeleteIcon />
                  </IconButton>
                  </div>
              );
          }
      },
  ];

  return (
    <div className='admin__product__wrapper'>
    <AddProductModal openModal = {openModalAddProduct} handleCloseModal = {handleCloseModalAddProduct}/>
    <EditProductModal openModal = {openModalEditProduct} handleCloseModal = {handleCloseModalEditProduct} id = {id}/>

      <h1 style = {{fontFamily:'"Courier New", Courier, monospace', marginTop:'15px'}}>Produkty</h1>
      <div className='admin__add__product'>
        <Button color = "success" variant = 'contained' onClick={()=> setOpenModalAddProduct(true)}>Dodaj produkt</Button>
      </div>
      <div className='table__wrapper'>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={11}
          rowsPerPageOptions={[11]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />

        </div>
    </div>
  )
}

export default Products