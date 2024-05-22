// // PublicRoute.tsx
// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux/rootReducer';

// interface PublicRouteProps {
//   restricted?: boolean;
// }

// const PublicRoute: React.FC<PublicRouteProps> = ({ restricted = false }) => {
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

//   return isAuthenticated && restricted ? <Navigate to="/home" /> : <Outlet />;
// };

// export default PublicRoute;

// PublicRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer"; // Adjust the import path as necessary

interface PublicRouteProps {
  restricted?: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ restricted = false }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return isAuthenticated && restricted ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
