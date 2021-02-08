import React from "react";
import * as jwtHelper from "../../../../utils/jwtHelper";

const PageHeader = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Employee Management System
        </a>
        <div className="collapse navbar-collapse" id="navbarText">
          <span className="navbar-text ml-auto">
            Welcome, {jwtHelper.getUserName()}
          </span>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default PageHeader;
