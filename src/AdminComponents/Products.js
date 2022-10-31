import React,{useEffect,useState} from 'react';
import {DataGrid } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ProductServices from '../Services/ProductServices';
import { Button } from '@mui/material';
import AddProductModal from '../SharedComponent/AddProductModal';
import EditProductModal from '../SharedComponent/EditProductModal';
import "./Products.css";

function Products({products,openModalAddProduct,setOpenModalAddProduct,openModalEditProduct,setOpenModalEditProduct,setIsDeleted,isDeleted}) {

  const [product,setProduct] = useState();

  const [successAdd, setSuccessAdd] = useState();
  const [successEdit,setSuccessEdit] = useState();

  const handleCloseModalAddProduct = () => setOpenModalAddProduct(false);
  const handleCloseModalEditProduct = () => setOpenModalEditProduct(false);


  const deleteProduct = (productId) =>{
      ProductServices.deleteProduct(productId);
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
                    setOpenModalEditProduct(true);
                    setProduct({id : params.id,name: params.row.name, description: params.row.description,slider: params.row.slider, producent: params.row.producent, image: params.row.image, price: params.row.price})                    
                    setSuccessEdit('')
                }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => {
                    console.log(isDeleted)
                    
                    if(!isDeleted){
                      setIsDeleted(true)
                    }else{
                      setIsDeleted(false)
                    } 
                    
                    deleteProduct(params.id)
                    
                    }}>
                    <DeleteIcon />
                  </IconButton>
                  </div>
              );
          }
      },
  ];

  return (
    <div className='admin__product__wrapper'>
      <AddProductModal openModal = {openModalAddProduct} handleCloseModal = {handleCloseModalAddProduct} success = {successAdd} setSuccess = {setSuccessAdd}/>
      {product && <EditProductModal openModal = {openModalEditProduct} handleCloseModal = {handleCloseModalEditProduct} product = {product} success = {successEdit} setSuccess = {setSuccessEdit}/>}
        <h1 style = {{fontFamily:'"Courier New", Courier, monospace', marginTop:'15px'}}>Produkty</h1>
        <div className='admin__add__product'>
          <Button color = "success" variant = 'contained' onClick={()=> {
            setSuccessAdd()
            setOpenModalAddProduct(true)}
            }>Dodaj produkt</Button>
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