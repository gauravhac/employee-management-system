import React from 'react';

const EmployeeDetails = React.lazy(() => import('./components/Employees/EmployeeDetails'));
const EmployeeList = React.lazy(() => import('./components/Employees'));

const subroutes = [
    { path: '/employee/:id', exact: true, name: 'Employee Details', component: EmployeeDetails },
    { path: '/', name: 'Employee List', component: EmployeeList },
];

export default subroutes;