import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {DataGrid } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Button } from '@mui/material';
import AddUserModal from '../SharedComponent/AddUserModal';
import EditUserModal from '../SharedComponent/EditUserModal';
import "./Users.css"

function Users({users}) {

  const [openModalAddUser, setOpenModalAddUser] = useState(false);
  const [openModalEditUser, setOpenModalEditUser] = useState(false);
  const [id,setId] = useState(1);
  const [user,setUser] = useState();

  const handleCloseModalAddUser = () => setOpenModalAddUser(false);
  const handleCloseModalEditUser = () => setOpenModalEditUser(false);

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Nazwa',
    width: 200,
  },
  {
    field: 'login',
    headerName: 'Login',
    width: 200,
  },
  {
    field: 'password',
    headerName: 'Hasło',
    width: 200,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'address',
    headerName: 'Adres',
    width: 200,
  },
  {
    field: 'houseNumber',
    headerName: 'Numer Domu',
    width: 200,
  },
  {
    field: 'postalCode',
    headerName: 'Kod Pocztowy',
    width: 200,
  },
  {
    field: 'roleName',
    headerName: 'Rola',
    width: 150, 
    renderCell: (params) => {
      return (
        <div>
          {params.row.rolesModel.name}
        </div>
      )
    }    
  },
  {
      field: 'action',
      headerName: 'Akcja',
      width: 80,
      renderCell: (params) => {
            return (
              <div style = {{display:'flex', justifyContent: 'center'}}>
                <IconButton onClick={() => {
                    setId(params.id);
                    setOpenModalEditUser(true);
                    setUser({id: params.id, name: params.row.id, surname: params.row.surname, login: params.row.login, email: params.row.email, address: params.row.address, houseNumber: params.row.houseNumber, posalCode: params.row.postalCode})

                  }}>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                </div>
            );
        }
    },
];


return (
  <div className='admin__users__wrapper'>
    <AddUserModal openModal = {openModalAddUser} handleCloseModal = {handleCloseModalAddUser}/>
    {user && <EditUserModal openModal = {openModalEditUser} handleCloseModal = {handleCloseModalEditUser} user = {user} id = {id}/>}
    
    <h1 style = {{fontFamily:'"Courier New", Courier, monospace', marginTop:'15px'}}>Użytkownicy</h1>
    <div className='admin__add__user'>
      <Button color = "success" variant = 'contained' onClick={() => setOpenModalAddUser(true)}>Dodaj użytkownika</Button>
    </div>
    <div className='table__wrapper__user'>
      <DataGrid
        rows={users}
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

export default Users