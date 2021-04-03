import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import GeneralContext from "../contexts/GeneralContext";

// const xor = (a, b) => (a && !b) || (!a && b);
/**
 * @param publicRoute Back to home if user logged in and public or no user and not public
 */

const ProtectedRoute = ({ component, path, isForSignedUsers, ...rest }) => {
  const context = useContext(GeneralContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        !context.isUserSigned && isForSignedUsers ? <Redirect to="/" /> : React.createElement(component, props)
      }
    />
  );
};

export default ProtectedRoute;