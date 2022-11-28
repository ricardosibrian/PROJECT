import * as React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNew';
import Tooltip from '@mui/material/Tooltip';
import {Link} from 'react-router-dom';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

export default function MenuList() {
  return (
    <div>
      <List> 
          <Link to="/inicio">
            <ListItem key={1} disablePadding sx={{ display: 'block' }}>
              <ListItemButton 
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon 
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                  <Tooltip title="Inicio" placement="right-end">
                  <HomeRoundedIcon />
                  </Tooltip>
                </ListItemIcon>
                <ListItemText primary={'Inicio'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/miscursos">
            <ListItem key={2} disablePadding sx={{ display: 'block' }}>
              <ListItemButton 
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon 
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                  <Tooltip title="Cursos" placement="right-end">
                    <MenuBookIcon /> 
                  </Tooltip>
                </ListItemIcon>
                <ListItemText primary={'Cursos'} sx={{ opacity: open ? 1 : 0 }} />                
              </ListItemButton>
            </ListItem>
            </Link>
     
            <Link to="/docentes">
            <ListItem key={3} disablePadding sx={{ display: 'block' }}>
              <ListItemButton 
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon 
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                  <Tooltip title="Docentes" placement="right-end">
                    <PersonIcon />
                  </Tooltip>
                </ListItemIcon>
                <ListItemText primary={'Docentes'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </Link>
            
        </List>
        <Divider />
        <List> 
          <Link to="/contacto">
            <ListItem key={4} disablePadding sx={{ display: 'block' }}>
              <ListItemButton 
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon 
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                    <Tooltip title="Contacto" placement="right-end">
                    <EmailIcon />
                    </Tooltip>
                </ListItemIcon>
                <ListItemText primary={'Contacto'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/auth/signout">
            <ListItem key={5} disablePadding sx={{ display: 'block' }}>
              <ListItemButton 
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon 
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                    <Tooltip title="Cerrar Sesion" placement="right-end">
                    <PowerSettingsNew />
                    </Tooltip>
                </ListItemIcon>
                <ListItemText primary={'Cerrar Sesion'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
    </div>
  );
}