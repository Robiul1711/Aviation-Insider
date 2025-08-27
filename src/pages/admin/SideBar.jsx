import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import logo from "@/assets/images/logo.png";

const SideBar = ({ sidebar, open, setOpen }) => {
  const location = useLocation();

  const isActive = (paths) => {
    if (!paths) return false;
    const pathArray = Array.isArray(paths) ? paths : [paths];
    return pathArray.includes(location.pathname);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } xl:hidden z-40`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`h-full py-6 flex flex-col justify-between ${
          open
            ? "left-0 top-0 w-[320px] z-50 shadow-lg bg-Primary overflow-y-auto"
            : "-left-full xl:w-[350px] w-[320px]"
        }
        bg-Primary backdrop-blur-md lg:px-8 px-4 shadow-md xlg:static fixed transition-all duration-300`}
      >
        <div>
          {/* Logo */}
          <Link to={"/"}>
            <div className="flex justify-center items-center mb-6">
              <img src={logo} alt="Safe" className="h-24 object-contain" />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            {sidebar?.map((item, index) => (
              <Link
                key={index}
                to={item?.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                  isActive(item?.activePaths)
                    ? "bg-Secondary-light text-white"
                    : "text-[#FFF] hover:bg-Secondary  hover:text-[#ffffff]"
                }`}
              >
                <span className="text-lg">{item?.icon}</span>
                {item?.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Logout */}

      </div>
    </>
  );
};

export default SideBar;
