import React, { Fragment, useEffect, useState } from "react";
import WithAuth from "../Common/Hoc/WithAuth";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Employees = ({ history }) => {
  const employeeList = useSelector((state) => state.employee.list);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (!employeeList.length) dispatch({ type: "EMPLOYEE_LIST_REQUEST" });
  }, []);

  return (
    <Fragment>
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <span>First Name/Last Name</span>
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            id="inputSearch"
            placeholder="enter search value"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Middle Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.length &&
            employeeList
              .filter((e) => {
                if (!searchValue) return true;
                if (
                  e.firstName.toLowerCase().includes(searchValue) ||
                  e.lastName.toLowerCase().includes(searchValue)
                ) {
                  return true;
                }
              })
              .map((e) => {
                return (
                  <tr key={`rowEmployee-${e.id}`}>
                    <td>{e.firstName}</td>
                    <td>{e.middleName}</td>
                    <td>{e.lastName}</td>
                    <td>
                      <Link to={`/employee/${e.id}`}>Details</Link>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default WithAuth(Employees);
