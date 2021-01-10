import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../features/auth/authSlice';

const PrivateRoute = ({ children, ...rest }) => {
    const isAuthenticated = useSelector(selectAuth.isAuthenticated);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}

export default PrivateRoute;