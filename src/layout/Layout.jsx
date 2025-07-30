import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { FaCircleArrowUp } from "react-icons/fa6";
const Layout = () => {
  return (
    <>
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
    <div className=" rounded-full text-white text-2xl flex items-center justify-center">
    <FaCircleArrowUp />
    </div>
  }
/>

      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
