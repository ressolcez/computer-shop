import React from 'react';
import {Drawer} from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import LogoutIcon from '@mui/icons-material/Logout';
import StyledDivider from "../SharedComponent/StyledDivider"
import StyledLink from "../SharedComponent/StyledLink";
import "./Leftbar.css";

function Leftbar({isDrawerOpen,setIsDrawerOpen}) {

  return (
    <>
        <Drawer anchor='left'
        open = {isDrawerOpen}
        onClose = {()=> setIsDrawerOpen(false)}
        >
         <div className='drawer__wrapper'>
            <div className='author__credentials'>
                <div className='author__name'>
                    <b>Konrad Chrabąszcz</b>
                </div>
                <div className='author__mail'>
                    Sellkon@gmail.com
                </div>
            </div>
            <StyledDivider />
            <div className='drawer__wrapper__menu'>
                <div className='drawer__menu__items'>
                   <div className='drawer__menu__category'>
                        <div className='drawer__category__name'>
                            Ogólne
                        </div>
                        <div className='drawer__category__item'>
                        <ListItem style = {{display: 'flex', justifyContent:'center', width: '100%'}}>
                            <ListItemButton>
                            <ListItemIcon>
                                <AnalyticsIcon/>
                            </ListItemIcon>
                            <ListItemText primary= 'Panel'/>
                            </ListItemButton>
                        </ListItem>
                        </div>
                   </div>
                   <StyledDivider />
                   <div className='drawer__menu__category'>
                        <div className='drawer__category__name'>
                            Menu
                        </div>
                        <div className='drawer__category__item'>
                        <ListItem style = {{display: 'flex', justifyContent:'center', width: '100%'}}>
                            <StyledLink to ="/Admin/Products">
                            <ListItemButton>
                            <ListItemIcon>
                                <ImportantDevicesIcon/>
                            </ListItemIcon>
                            <ListItemText primary= 'Przedmioty'/>
                            </ListItemButton>
                            </StyledLink>
                        </ListItem>
                        </div>
                        <div className='drawer__category__item'>
                        <ListItem style = {{display: 'flex', justifyContent:'center', width: '100%'}}>
                        <StyledLink to ="/Admin/Orders">
                            <ListItemButton>
                            <ListItemIcon>
                                <DescriptionIcon/>
                            </ListItemIcon>
                            <ListItemText primary= 'Zamówienia'/>
                            </ListItemButton>
                        </StyledLink>
                        </ListItem>
                        </div>
                        <div className='drawer__category__item'>
                        <ListItem style = {{display: 'flex', justifyContent:'center', width: '100%'}}>
                            <ListItemButton>
                            <ListItemIcon>
                                <PeopleIcon/>
                            </ListItemIcon>
                            <ListItemText primary= 'Użytkownicy'/>
                            </ListItemButton>
                        </ListItem>
                        </div>
                   </div>
                   <StyledDivider />
                </div>
                <div className='drawer__logout'>
                <ListItem style = {{display: 'flex', justifyContent:'center', width: '100%'}}>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItemText primary= 'Wyloguj'/>
                    </ListItemButton>
                </ListItem>
                </div>
            </div>
         </div>
        </Drawer>
        </>
  )
}

export default Leftbar