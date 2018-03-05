import React from 'react';
import {Provider} from 'react-redux';
import { withStyles } from 'material-ui';
import {Router, Route, Redirect} from 'react-router-dom';
import PrivateRoute from '../conteiners/PrivateRoute';
import ChatPage from '../conteiners/ChatPage';
import WelcomePage from '../conteiners/WelcomePage';
import Switch from 'react-router-dom/Switch';
import history from '../utils/history';
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
    <Router history={history}>
    <div className ={classes.root}>
    <Switch>
    <PrivateRoute path = "/chat" component = {ChatPage} />
    <Route exact path = "/(welcome)?" component = {WelcomePage} />  
    <Redirect to = "/" />
    </Switch>
    </div>
  </Router>
  </Provider>
  
);


export default withStyles(styles)(App);
