import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Tooltip,Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Leftbar from "./Leftbar";

function Topbar() {
  const [isDrawerOpen,setIsDrawerOpen ] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div style = {{display:'flex',justifyContent:'space-between'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick = {() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        </div>
      </AppBar>
    </Box>
    <Leftbar isDrawerOpen = {isDrawerOpen} setIsDrawerOpen = {setIsDrawerOpen}/>
  </>
  )
}

export default Topbar