import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return <div>
            <div className="flex justify-center items-center" style={{ minHeight: '80vh' }}>
                <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-white"></div>
                </div>
            </div>
        </div>
    }

    return (
        user.email ? children : (
            <Navigate to="/login" state={{ from: location }} />
        )
    );
};

export default PrivateRoute;