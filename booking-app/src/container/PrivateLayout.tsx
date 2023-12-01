import React from "react";
// import { Outlet } from "react-router-dom";

const PrivateLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
};

export default PrivateLayout;
