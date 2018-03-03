import React from 'react';
import { withStyles } from 'material-ui/styles';
import MessageList from './MessageList'
import MessageInput from './MessageInput'

const styles = theme => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    overflow: 'hidden',
  },
});

const Chat = ({classes, messages}) => (
  <main className={classes.chatLayout}>
    <MessageList messages={messages} />
    <MessageInput />
 </main>
    );
  
  export default withStyles(styles)(Chat);
