import React from 'react';
import PropTypes, { func } from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { PrivateRoute, IsLoggedRoute } from '../middleware/middleware-route';

import App from './app';
import Signup from './signup';
import Login from '../containers/login';
import Dashboard from './dashboard';


const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <IsLoggedRoute path="/login" component={Login} />
      <IsLoggedRoute path="/daftar" component={Signup} />
      <PrivateRoute path="/dashboard" component={Dashboard} />

    </div>
  </Router>
);


export default Root;

