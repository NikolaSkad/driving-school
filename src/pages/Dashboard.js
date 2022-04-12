import React from "react";
import PrivateRoute from "../routes/PrivateRoute";

const Dashboard = () => {
  return (
    <PrivateRoute>
      <div>Dashboard</div>
    </PrivateRoute>
  );
};

export default Dashboard;
