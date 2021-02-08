import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "../../../subroutes";
import Navbar from "./Navbar";


const AdminLayout = () => {
    const menus = routes.map((route, index) => {
        return route.component ? (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={(props) => <route.component {...props} />}
          />
        ) : null;
      });

    return(
    
    <div className="container-fluid">
            <Navbar />
            <Suspense fallback={<div>...Loading Details</div>}>
                        <Switch>
                          {menus}   
                        </Switch>
                      </Suspense>
    </div>
  );
};
export default AdminLayout;