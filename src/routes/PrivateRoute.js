import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isLoading, isLoggenIn } = useAuth();

  if (isLoading) return null;

  if (!isLoggenIn) {
    return (
      <>
        <div>Ulogujte se</div>
        <Link to="/login">Log In</Link>
      </>
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
