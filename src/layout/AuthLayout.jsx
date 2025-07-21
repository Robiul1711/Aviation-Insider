import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import auth from "../assets/images/auth2.png";

const AuthLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-[#F4F4F7]">
      {/* Header */}
      <div className="mt-10 section-padding-x flex items-center justify-center md:justify-start ">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 " />
        </Link>

      </div>

      {/* Main content area (split left and right) */}
      <div className=" overflow-hidden flex gap-20 ">
        {/* Left Image Panel */}
        <div className="w-1/2 md:flex min-h-screen hidden ">
          <img
            src={auth}
            alt="Authentication Visual"
            className="max-h-full w-full object-fill "
          />
        </div>

        {/* Right Form Panel (Outlet) */}
        <div className="md:w-1/2 w-full flex md:block items-center justify-center mt-10 section-padding-x">
        
            <Outlet />
        
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
