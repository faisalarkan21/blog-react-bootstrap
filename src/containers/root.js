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
import { NotFound } from '../components/lib';


const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <IsLoggedRoute path="/login" component={Login} />
      <IsLoggedRoute path="/daftar" component={Signup} />
      <PrivateRoute roles={['user']} exact path="/dashboard" component={Home} />
      <PrivateRoute roles={['user']} path="/dashboard/articles" component={Articles} />
      <PrivateRoute roles={['admin', 'user']} path="/dashboard/users" component={Users} />
      <PrivateRoute roles={['admin', 'user']} path="/dashboard/user/:user_id" component={DetailUser} />
      <Route path="/404" component={NotFound} />

    </div>
  </Router>
);


export default Root;

