import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = ({ path, elemetn: Element }) => {
  return <Route path={path} element={<Element />} />;
};

export default PublicRoute;
