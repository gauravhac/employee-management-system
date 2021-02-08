import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import WithAuth from "../Common/Hoc/WithAuth";
import { withRouter, useParams } from "react-router-dom";

const EmployeeDetails = ({ history }) => {
  const params = useParams();
  const employeeList = useSelector((state) => state.employee.list);
  const employee = employeeList.length
    ? employeeList.find((e) => e.id == params.id)
    : undefined;
  return (
    <Fragment>
      {employee ? (
        <table className="table">
          <tbody>
            <tr>
              <th>First Name</th>
              <td>:</td>
              <td>{employee.firstName}</td>
            </tr>
            <tr>
              <th>Middle Name</th>
              <td>:</td>
              <td>{employee.middleName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>:</td>
              <td>{employee.lastName}</td>
            </tr>
            <tr>
              <th>Salary</th>
              <td>:</td>
              <td>{employee.salary}</td>
            </tr>
            <tr>
              <th>Employment Type</th>
              <td>:</td>
              <td>{employee.employmentType}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="alert alert-danger" role="alert">
          No Data Found
        </div>
      )}
      <button onClick={() => history.goBack()}>Go Back</button>
    </Fragment>
  );
};

export default WithAuth(withRouter(EmployeeDetails));
