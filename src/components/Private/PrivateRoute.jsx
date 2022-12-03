import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = ({
    children,
    redirect = "/login",
}) => {
    const token = localStorage.getItem('TOKEN');
    if(!token) {
        return <Navigate to={redirect} />
    } 
    return children ? children : <Outlet/>;
    
}
export const ProtectedRoute = ({
    children,
    redirectAdmin = "/",
}) => {
    const token = localStorage.getItem('TOKEN');
    if(token) {
        return <Navigate to={redirectAdmin} />
    }
    return children ? children : <Outlet/>;
    
}


export default PrivateRoute