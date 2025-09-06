import React from "react";
import logo from "../../assets/images/logo.png";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white px-6">
      <div className="text-center max-w-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-auto drop-shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-blue-400 drop-shadow-md">
          We’re Launching Soon 🚀
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
          Our team is working hard to bring you something amazing.  
          Stay tuned for the official launch of our website, where you’ll
          discover innovative solutions, resources, and more.
        </p>

        {/* Extra Text */}
        {/* <p className="text-md md:text-lg text-gray-400 mb-10">
          In the meantime, follow us on our social channels to get the latest
          updates and sneak peeks.
        </p> */}

      </div>
    </div>
  );
};

export default ComingSoon;

