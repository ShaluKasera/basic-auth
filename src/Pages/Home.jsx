import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="rounded border w-[80%] md:w-[50%] lg:w-[25%] p-6 bg-white ">
        <div className="h-56"></div>
        <p className="text-2xl font-bold mb-2">Welcome to PopX</p>
        <p className="text-sm text-gray-600 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
          neque!
        </p>
        <Link
          to="/signup"
          className="block text-center text-white bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded mb-2 no-underline transition-all duration-500"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="block text-center text-black bg-purple-300 border-2 border-transparent hover:bg-white hover:text-purple-600 hover:border-purple-600 px-4 py-2 rounded mb-2 no-underline transition-all duration-500"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
