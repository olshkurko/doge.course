import React from 'react';
import { withStyles } from 'material-ui/styles';
import SearchChat from './SearchChat';
import ChatList from './ChatList';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import NewChatButtom from './NewChatButtom';
import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';


const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
});

const SideBar = ({classes, chats}) => (
  <Drawer
  variant="permanent"
  classes={{
    paper: classes.drawerPaper,
  }}
>
  <SearchChat/>
  <Divider />
  <ChatList chats={chats} />     
  <NewChatButtom/>
  <BottomNavigation showLabels>
    <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
    <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
  </BottomNavigation>
</Drawer>

);

export default withStyles (styles)(SideBar);
