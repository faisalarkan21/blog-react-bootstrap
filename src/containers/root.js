import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app';
import Login from './login';
import Signup from './signup';


const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/daftar" component={Signup} />

    </div>
  </Router>
);


export default Root;

