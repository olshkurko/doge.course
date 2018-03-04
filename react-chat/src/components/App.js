import React from 'react';
import {Provider} from 'react-redux';
import { withStyles } from 'material-ui';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import ChatPage from '../conteiners/ChatPage';
import WelcomePage from '../conteiners/WelcomePage';
import Switch from 'react-router-dom/Switch';
import configureStore from '../store';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

const store = configureStore ();

const App = ({classes}) => (
  <Provider store = {store}>
    <Router>
    <div className ={classes.root}>
    <Switch>
    <Route path = "/chat" component = {ChatPage} />
    <Route exact path = "/(welcome)?" component = {WelcomePage} />  
    <Redirect to = "/" />
    </Switch>
    </div>
  </Router>
  </Provider>
  
);


export default withStyles(styles)(App);
