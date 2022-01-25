import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return <h4>Loading ...</h4>
    }

    return (
        user.email ? children : (
            <Navigate to="/login" state={{ from: location }} />
        )
    );
};

export default PrivateRoute;