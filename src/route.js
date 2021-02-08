import React from 'react';

const LoginPage = React.lazy(() => import('./components/Login'));
const AdminLayout = React.lazy(() => import('./components/Layout/AdminLayout'));

const routes = [
    { path: '/login', exact: true, name: 'Login Page', component: LoginPage },
    { path: '/', name: 'Admin Layout', component: AdminLayout },
];

export default routes;