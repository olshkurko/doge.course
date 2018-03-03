import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import ChatPage from './ChatPage';
import WelcomePage from './WelcomePage';
import Switch from 'react-router-dom/Switch';


const App = () => (
  <Router>
    <Switch>
    <Route path = "/chat" component = {ChatPage} />
    <Route exact path = "/" component = {WelcomePage} /> 
    <Route exact path = "/welcome" component = {WelcomePage} /> 
    <Redirect to = "/" />
    </Switch>
  </Router>
);


export default App;
