import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { arSD, DataGrid } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ProductServices from '../Services/ProductServices';

  
function Products() {

  const [products,setProducts] = useState([])
  const [category,setCategory] = useState([])


  useEffect(() => {
    axios.get('http://localhost:8080/api/products/').then((response) => {
     setProducts(response.data);
     setCategory(response.data.categoryModel);
    });
  }, []);


  const deleteProduct = (productId) =>{
    ProductServices.deleteProduct(productId);
    window.location.reload(false)
  }

/*
  const [queryOptions, setQueryOptions] = React.useState({});
  const onFilterChange = React.useCallback((filterModel) => {
    setQueryOptions(filterModel);
    
    console.log(filterModel.items[0].value)
  }, []);
*/

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Nazwa',
    width: 150,
    editable: true,
  },
  {
    field: 'slider',
    headerName: 'Slider',
    width: 150,
    editable: true,
  },
  {
    field: 'producent',
    headerName: 'Producent',
    width: 150,
    editable: true,
  },
  {
    field: 'descritpion',
    headerName: 'Opis',
    width: 150,
    editable: true,
  },
  {
    field: 'image',
    headerName: 'Zdjęcie',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Cena',
    width: 150,
    editable: true,
  },
  {
    field: 'categoryName',
    headerName: 'Kategoria',
    width: 110,
    editable: true,
    valueSetter: (params) => {
      console.log(params)
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
                <IconButton onClick={() => console.log(params.id, params.row.name)}>
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
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  )
}

export default Products