import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { tokenAuth } from './auth-cookies';
import { checkAuth } from '../actions';


const PrivateRoute = ({ component: Component, ...rest }) =>
  // console.log(tokenAuth.tokenAuthenticated());
  (
    <Route
      {...rest}
      render={propsRender => (
        tokenAuth.tokenAuthenticated() ? (
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
const PublicRoute = ({ component: Component, ...rest }) =>
  // console.log(tokenAuth.tokenAuthenticated());
  (
    <Route
      {...rest}
      render={props => (
        <Component
          {...props}
          isLoginAuthenticated={tokenAuth.tokenAuthenticated()}
        />
  )}
    />
  );


export {
  PrivateRoute, PublicRoute,
};
