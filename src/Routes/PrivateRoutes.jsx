import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import Loadinge from "../Page/Sharied/Loadinge/Loadinge";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loadinge />;
  }
  if (user?.email) {
    return children;
  } else {
    useEffect(() => {
      Swal.fire({
        title: "Warning!",
        text: "You have to log in first to view details",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }, []);
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
