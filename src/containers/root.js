import React from 'react';
import PropTypes, { func } from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { PrivateRoute, IsLoggedRoute } from '../middleware/middleware-route';

import App from './app';
import Signup from './signup';
import Login from './login';
import Dashboard from './dashboard';
import Articles from './content-list';


const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <IsLoggedRoute path="/login" component={Login} />
      <IsLoggedRoute path="/daftar" component={Signup} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/dashboard/articles" component={Articles} />

    </div>
  </Router>
);


export default Root;

