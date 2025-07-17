import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import auth from "../assets/images/auth2.png";

const AuthLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-[#F4F4F7]">
      {/* Header */}
      <div className="mt-10 section-padding-x flex items-center ">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[400px] " />
        </Link>

      </div>

      {/* Main content area (split left and right) */}
      <div className=" overflow-hidden flex gap-20">
        {/* Left Image Panel */}
        <div className="w-1/2 flex min-h-screen">
          <img
            src={auth}
            alt="Authentication Visual"
            className="max-h-full w-full object-fill "
          />
        </div>

        {/* Right Form Panel (Outlet) */}
        <div className="w-1/2  ">
        
            <Outlet />
        
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
