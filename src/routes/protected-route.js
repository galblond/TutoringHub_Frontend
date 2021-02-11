import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import GeneralContext from "../contexts/GeneralContext";

const ProtectedRoute = ({ component, isForSignedUsers, ...rest }) => {
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
