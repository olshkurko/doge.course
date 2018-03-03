import React from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  appBar: {
    position: 'fixed',
    width: 'calc(100% - 320px)',
  },

});

const Header = ({classes}) => (
<AppBar className={classNames(classes.appBar)}>
<Toolbar>
  <Typography variant="title" color="inherit" noWrap>
    React Chat
  </Typography>
</Toolbar>
</AppBar>
);

export default withStyles(styles)(Header)
