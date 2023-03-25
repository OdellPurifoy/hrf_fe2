import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { sideNavbarListItems } from './constants/sideNavbarListItems';
import { sideNavbarStyles } from './styles';
import { useNavigate, useParams } from "react-router-dom";


const SideNavbar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
        sx={sideNavbarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {sideNavbarListItems.map((item, index) => (
            <ListItem button key={item.id} onClick={() => navigate(item.route) }>
              <ListItemButton>
                <ListItemIcon sx={sideNavbarStyles.icons}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText sx={sideNavbarStyles.text} primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
  )
}

export default SideNavbar