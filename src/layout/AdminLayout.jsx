import CommonNavbar from "@/pages/admin/CommonNavbar";
import SideBar from "@/pages/admin/SideBar";

import React, { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Bell, Settings } from "lucide-react";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ComingSoon from "@/pages/CommingSoon/ComingSoon";
const AdminLayout = () => {
    const axiosPublic = useAxiosPublic();
  const [Open, setOpen] = useState(false);

  const { data: holdingPage, isLoading } = useQuery({
    queryKey: ["holdingPage"],
    queryFn: () => axiosPublic.get("/holding-page/status"),
  });

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
  // ✅ Show loading while fetching
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }


  return (
    <>
      <ScrollRestoration />
      {
        holdingPage?.data.holding_page === true ? (
         <div>
          <ComingSoon />
         </div>
        )
        :
         <div className="flex  h-screen min-h-screen w-full">
        <SideBar open={Open} setOpen={setOpen} sidebar={sideBar} />
        <div className="flex-1 bg-dark text-white flex flex-col overflow-auto custom-scrollbar">
          <div className=" flex flex-col lg:px-[30px] px-2.5 sm:px-5">
            <CommonNavbar open={Open} setOpen={setOpen} />
            <Outlet />
          </div>
        </div>
      </div>
      }
    
    </>
  );
};

export default AdminLayout;
