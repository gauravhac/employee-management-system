import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const isLoginUnsuccessfull = useSelector(
    (state) => state.login.isLoginUnsuccessfull
  );
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");

  return (
    <div className="page-header">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          {isLoginUnsuccessfull && (
            <div className="alert alert-danger" role="alert">
              Invalid User
            </div>
          )}
          <div className="form-group">
            <label>Username</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter UserName"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={() => dispatch({ type: "LOGIN_REQUEST", username })}
            className="btn btn-dark btn-sm btn-block"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
