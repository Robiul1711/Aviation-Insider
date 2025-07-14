import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import AboutUs from "@/pages/about_us_page/AboutUs";
import Faq from "@/pages/faq_page/Faq";
import Home from "@/pages/home/Home";
import Parthner from "@/pages/parthnerPage/Parthner";
import PilotNetworkExplained from "@/pages/pilot_etwork_page/PilotNetworkExplained";


import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/pilot-network",
        element: <PilotNetworkExplained />,
      },
      {
        path: "/partner",
        element: <Parthner />,
      },

    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />, // ✅ Fixed typo
      },
    ],
  },
]);

export default router;
