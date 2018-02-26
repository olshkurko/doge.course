import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Avatar from 'material-ui/Avatar';
import { chats, messages } from './mock-data';
import AddIcon from 'material-ui-icons/Add';
import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';

  const styles = theme => ({
    root: {
      width: '100%',
      height: 430,
      marginTop: theme.spacing.unit * 2,
      zIndex: 1,
      overflow: 'hidden',
    },
    appFrame: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    appBar: {
      position: 'absolute',
      width: 'calc(100% - 320px)',
    },   
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
    chatsList: {
      height: 'calc(100% - 56px)',
      overflowY: 'scroll',
      },
      newChatButton: {
      position: 'absolute',
      left: 'auto',
      right: theme.spacing.unit * 3,
      bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
      },
      chatLayout: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '64px',
      height: '100%',
      overflow: 'hidden',
      },
      messagesWrapper: {
           overflowX: 'scroll',
            height: '100%',
            width: '100%',
            paddingTop: theme.spacing.unit * 3,
            paddingBottom: '120px',
          },
          messageInputWrapper: {
            position: 'fixed',
            left: 'auto',
            right: 0,
            bottom: 0,
            width: `calc(100% - 320px)`,
            padding: theme.spacing.unit * 3,
          },
          messageInput: {
            padding: theme.spacing.unit * 2,
          },
          messageWrapper: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
          },
          messageWrappperFromMe: {
            justifyContent: 'flex-end',
          },
          message: {
            maxWidth: '70%',
            minWidth: '10%',
            padding: theme.spacing.unit,
            marginLeft: theme.spacing.unit * 2,
          },
          messageFromMe: {
            marginRight: theme.spacing.unit * 2,
            backgroundColor: '#e6dcff'
          },  
  });


class PermanentDrawer extends React.Component {
    render() {
    const { classes } = this.props;  
    return (
      <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar)}>
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                React Chat
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.root}>
              <TextField
                id="Search Chat"
                label="Search"
              // value={search}          
                margin="none"
                width = "320"
                >
              </TextField>
           </div>
           <Divider />
              <List className={classes.chatsList}>
                  {chats.map((chat, index) => (
                    <ListItem key={index} button>
                      <Avatar>{chat.title && chat.title[0]}</Avatar>
                      <ListItemText primary={chat.title}/>
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="fab"
                  color="primary"
                  className={classes.newChatButton}
                >
                 <AddIcon />
               </Button>
               <BottomNavigation showLabels>
                 <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
                 <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
               </BottomNavigation>
          </Drawer>
        
          <main className={classes.chatLayout}>
          <div className={classes.messagesWrapper}>
            {messages && messages.map((message, index) => {
              const isMessageFromMe = message.sender === 'me';

              const userAvatar = (
                <Avatar>
                  {message.sender[0]}
                </Avatar>
              );

              return (
                // <div className={classNames(classes.messageWrapper, isMessageFromMe && classes.messageWrappperFromMe)}>
                <div key={index} className={[
                  classes.messageWrapper,
                  isMessageFromMe ? classes.messageWrappperFromMe : ''
                ].join(' ')}>
                  {!isMessageFromMe && userAvatar}
                  <Paper className={[
                    classes.message,
                    isMessageFromMe ? classes.messageFromMe : ''
                  ].join(' ')}>
                    <Typography variant="caption">
                      {message.sender}
                    </Typography>
                    <Typography variant="body1">
                      {message.content}
                    </Typography>
                  </Paper>
                  {isMessageFromMe && userAvatar}
                </div>
              );
            })}
          </div>
          <div className={classes.messageInputWrapper}>
            <Paper className={classes.messageInput} elevation={6}>
              <Input fullWidth placeholder="Type your message…"/>
            </Paper>
          </div>
        </main>          
        </div>
    
    );
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);
