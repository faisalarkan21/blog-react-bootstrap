import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { tokenAuth } from './auth-cookies';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log({ ...rest });
  const { authToken, dataToken } = tokenAuth.tokenAuthenticated();
  const adminRoute = { ...rest };

  if (adminRoute.roles.length > 1) {
    return (
      <Route
        {...rest}
        render={propsRender => (
          authToken && dataToken.role_id === 1 ? (
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
  }

  return (
    <Route
      {...rest}
      render={propsRender => (
        authToken ? (
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


const IsLoggedRoute = ({ component: Component, ...rest }) =>
  // console.log(tokenAuth.tokenAuthenticated());
  (
    <Route
      {...rest}
      render={props => (
        <Component
          {...props}
          isLoginAuthenticated={tokenAuth.tokenAuthenticated().authToken}
        />
  )}
    />
  );


export {
  PrivateRoute, IsLoggedRoute,
};
