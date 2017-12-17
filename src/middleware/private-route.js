import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { tokenAuth } from './auth-cookies';


const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest);
  return (
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
};

export {
  PrivateRoute,
};
