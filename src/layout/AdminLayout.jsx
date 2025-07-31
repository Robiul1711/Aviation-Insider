import CommonNavbar from "@/pages/admin/CommonNavbar";
import SideBar from "@/pages/admin/SideBar";

import React, { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Bell, Settings } from "lucide-react";
const AdminLayout = () => {
  const [Open, setOpen] = useState(false);

  const sideBar = [
    {
        id: 1,
        icon: <MdDashboard />,
        text: "Dashboard",
        path: "/dashboard", // main path (optional, if you still want to keep it)
        activePaths: ["/dashboard"], // all paths that should make this item active
        sublink: false,
      },
    {
        id: 2,
        icon: <Settings />,
        text: "Settings",
        path: "/dashboard/settings", // main path (optional, if you still want to keep it)
        activePaths: ["/dashboard/settings"], // all paths that should make this item active
        sublink: false,
      },
      
    // {
    //     id: 3,
    //     icon: <Bell />,
    //     text: "Notifications",
    //     path: "/dashboard/notifications", // main path (optional, if you still want to keep it)
    //     activePaths: ["/dashboard/notifications"], // all paths that should make this item active
    //     sublink: false,
    //   },
      

  ];
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <>
      <ScrollRestoration />
      <div className="flex  h-screen min-h-screen w-full">
        <SideBar open={Open} setOpen={setOpen} sidebar={sideBar} />
        <div className="flex-1 bg-dark text-white flex flex-col overflow-auto custom-scrollbar">
          <div className=" flex flex-col lg:px-[30px] px-2.5 sm:px-5">
            <CommonNavbar open={Open} setOpen={setOpen} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
