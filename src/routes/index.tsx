import React, { useEffect, useState } from "react";
import { HashRouter, Switch } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import routes from "./routes";

const Routes = () => {
  const [isReloadRequired, setIsReloadRequired] = useState<Boolean>(false);

  useEffect(() => {
    setIsReloadRequired(!isReloadRequired);
  }, [window.location]);

  return (
    <HashRouter>
      <Switch>
        {routes.map((route, index) => (
          <ProtectedRoute key={index} component={route.component} isForSignedUsers={route.isForSignedUsers} />
        ))}
      </Switch>
    </HashRouter>
  );
};

export default Routes;
