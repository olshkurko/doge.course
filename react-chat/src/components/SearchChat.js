import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
//import classNames from 'classnames';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,
  },
});
const SearchChat = ({classes}) =>(
<div className={classes.root}>
    <TextField
      id="Search Chat"
      label="Search"
    // value={search}           
      >
    </TextField>
 </div>
);


export default withStyles(styles)(SearchChat);
