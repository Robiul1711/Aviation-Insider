import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { FaCircleArrowUp } from "react-icons/fa6";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ComingSoon from "@/pages/CommingSoon/ComingSoon";

const Layout = () => {
  const axiosPublic = useAxiosPublic();

  const { data: holdingPage, isLoading } = useQuery({
    queryKey: ["holdingPage"],
    queryFn: () => axiosPublic.get("/holding-page/status"),
  });

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
      {holdingPage?.data.holding_page === true ? (
        <ComingSoon />
      ) : (
        <div>
          <ScrollRestoration />
          <ScrollToTop
            style={{
              backgroundColor: "#1E40AF",
              opacity: "0.8",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
            }}
            smooth
            top={150}
            component={
              <div className="rounded-full text-white text-2xl flex items-center justify-center">
                <FaCircleArrowUp />
              </div>
            }
          />
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;

