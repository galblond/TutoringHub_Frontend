import React, { useEffect, useState } from "react";
import ScrollToTop from "../components/shared/scroll-to-top";
import { HashRouter, Switch } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import routes from "./routes";

const Routes = () => {
  return (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          {routes.map((route, index) => (
            <ProtectedRoute
              key={index}
              exact
              path={route.exactPath}
              component={route.component}
              isForSignedUsers={route.isForSignedUsers}
            />
          ))}
        </Switch>
      </ScrollToTop>
    </HashRouter>
  );
};

export default Routes;
