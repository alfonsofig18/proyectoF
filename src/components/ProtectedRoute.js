import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ canActivate, redirectPath = '/signIn', role = null }) => {
    if (!canActivate && role === null) {

        return (<Navigate to={redirectPath} />);

    } else if (canActivate && role === 1) {

        return (<Navigate to={'/homeAdm'} replace />);

    } else if (canActivate && role === 2) {

        return (<Outlet />);
        
    }
}

export const ProtectedRouteAdmin = ({ canActivate, redirectPath = '/signIn', role = null }) => {
    if (!canActivate && !role) {

        return (<Navigate to={redirectPath} />)

    } else if (canActivate && role === 1) {

        return (<Outlet />);

    }
}