import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Dashboard from "../../pages/Dashboard";
import Button from "../Button/Button";

const Navbar = () => {
  const { logout, isLoggenIn } = useAuth();

  return (
    <>
      {isLoggenIn && (
        <nav>
          <Button onClick={logout}>Logout</Button>
          <Link to={"/dashboard"}>Dashboard</Link>
        </nav>
      )}
    </>
  );
};

export default Navbar;
