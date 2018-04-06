import React from 'react';
import { withStyles } from 'material-ui/styles';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from './Avatar';

const styles = theme => ({
  activeItem: {
    backgroundColor: theme.palette.grey[200],
  },
});

const ChatListItem = ({
  classes,
  disabled,
  title,
  chatId,
  active,
  createdAt,
}) => (
  <ListItem
    button
    component={Link}
    to={`/chat/${chatId}`}
    className={active ? classes.activeItem : ''}
    disabled={disabled}
  >
    <Avatar colorFrom={chatId}>{title}</Avatar>
    <ListItemText primary={title} secondary={moment(createdAt).fromNow()} />
  </ListItem>
);

export default withStyles(styles)(ChatListItem);
