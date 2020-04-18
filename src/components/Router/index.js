import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "../../routes";

const Logo = () => {
  return (
    <Switch>
      {routes.map((route, index) => {
        const { component, ...otherAttr } = route;
        return (
          <Route {...otherAttr} key={`route-${index}`}>
            {component}
          </Route>
        );
      })}
    </Switch>
  );
};

export default Logo;
