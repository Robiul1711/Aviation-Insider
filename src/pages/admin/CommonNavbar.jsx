import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const CommonNavbar = ({ open, setOpen }) => {
  const { pathname } = useLocation();
  return (
    <div className="flex items-center gap-5 justify-between w-full py-3 md:py-6 px-0  rounded-2xl">
      <div className="flex items-center gap-4">
        <span
          onClick={() => setOpen(!open)}
          className="xlg:hidden block cursor-pointer"
        >
          <GiHamburgerMenu color="black" size={26} />
        </span>
        <div className="">
          <p className=" text-black text-3xl font-bold">Welcome back, Ekramul</p>
          <p className="text-gray-500 mt-1">User since - 1 week ago</p>
        </div>
      </div>

      <div className="flex items-start md:gap-4 gap-2">
        <span>
          <IoIosNotifications color="white" className="p-2 bg-Secondary-light rounded-full cursor-pointer" size={44} />
        </span>
        <span>
          <CgProfile color="white" className="p-2 bg-Secondary-light rounded-full cursor-pointer" size={44} />
        </span>
      </div>
    </div>
  );
};

export default CommonNavbar;
