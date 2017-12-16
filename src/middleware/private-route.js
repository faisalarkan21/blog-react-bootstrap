import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

import { loginAuth } from '../reducers/base-store';

const tokenAuth = {
  isTokenAuthenticated() {
    const token = Cookies.get('token');
    if (token) {
      return true;
    }
    return false;
  },

};


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={propsRender => (
        tokenAuth.isTokenAuthenticated() ? (
          <Component {...propsRender} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {
          from: rest.path,
          errorMessage: 'Harap login dahulu.',
        },
      }}
      />
    )
  )}
  />

);


function mapStateToProps(state) {
  return { result: state.loginAuth };
}

export default connect(mapStateToProps, null, null, { pure: false })(PrivateRoute);
