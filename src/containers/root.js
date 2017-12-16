import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../middleware/private-route';

import App from './app';
import Login from './login';
import Signup from './signup';
import Dashboard from './dashboard';


const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/daftar" component={Signup} />
      <PrivateRoute path="/dashboard" component={Dashboard} />

    </div>
  </Router>
);


export default Root;

