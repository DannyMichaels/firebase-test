import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
// this component is to handle the error (cannot get email of undefined) when logging out
// get the component and rename it to Compnent, otherwise all the rest of the properties are going to be here.
export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
