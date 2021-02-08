import { Redirect } from "react-router-dom";
import * as jwtHelper from "../../../utils/jwtHelper";

const WithAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = jwtHelper.getUserName() !== "Test User";
    if (isAuth) {
      return <Component />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  return AuthRoute;
};

export default WithAuth;
