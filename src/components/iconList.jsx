import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function IconList() {
  return (
    <List component="nav">
      
      <ListItem button component="a" href="#">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Accueil" />     
      </ListItem>
      
      <ListItem button component="a" href="#">
        <ListItemIcon>
          <ExploreIcon />
        </ListItemIcon>
        <ListItemText primary="Explorer" />        
      </ListItem>
      
      <ListItem button component="a" href="#">
        <ListItemIcon>
          <NotificationsIcon />
        </ListItemIcon>
        <ListItemText primary="Notifications" />        
      </ListItem>
      
      <ListItem button component="a" href="#">
        <ListItemIcon>
          <MessageIcon />
        </ListItemIcon>
        <ListItemText primary="Messages" />        
      </ListItem>
      
      <ListItem button component="a" href="#">
        <ListItemIcon>
          <BookmarkIcon />
        </ListItemIcon>
        <ListItemText primary="Favoris" />
      </ListItem>
      
      <ListItem button component="a" href="#">
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Listes" />
      </ListItem>
      
      <ListItem button component="a" href="#">
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profil" />
      </ListItem>
      
      <ListItem button component="a" href="#">
        <ListItemIcon>
          <MoreHorizIcon />
        </ListItemIcon>
        <ListItemText primary="Plus" />
      </ListItem>
    </List>
  );
}

export default IconList;