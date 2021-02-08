import React, {Suspense} from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from "./route";

function App() {
  const menus = routes.map((route, index) => {
    return (route.component) ? (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={props => (
                <route.component {...props} />
            )} />
    ) : (null);
  });

  return (

    <div className="App">
      <BrowserRouter>
      <div className="container mt-2" style={{ marginTop: 40 }}>
      <Suspense fallback={<div>Loading... </div>}>
        <Switch>
          {menus}
        </Switch>
        </Suspense>
      </div>

    </BrowserRouter>
    </div>
  );
}

export default App;
