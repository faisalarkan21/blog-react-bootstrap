import React from 'react';
import PropTypes, { func } from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { PrivateRoute, IsLoggedRoute } from '../middleware/middleware-route';

import App from './app';
import Signup from './signup';
import Login from './login';
import Home from './dashboard/home';
import Articles from './dashboard/articles';
import Users from './dashboard/users';
import DetailUser from './dashboard/detail-user';


const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <IsLoggedRoute path="/login" component={Login} />
      <IsLoggedRoute path="/daftar" component={Signup} />
      <PrivateRoute exact path="/dashboard" component={Home} />
      <PrivateRoute path="/dashboard/articles" component={Articles} />
      <PrivateRoute path="/dashboard/users" component={Users} />
      <PrivateRoute path="/dashboard/user/:user_id" component={DetailUser} />

    </div>
  </Router>
);


export default Root;

