import React from "react";
import { Link } from "react-router-dom";
import error from "../../../assets/images/20230521_134029.png";

const Error = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <img
          src={error}
          alt="Error"
          className="w-[30rem] h-[17rem]  animate-bounce"
        />
        <h1 className="text-7xl font-extrabold mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-8">
          Something went wrong. Please try again later.
        </p>
        <Link
          href="/"
          className="bg-[#f65829] hover:bg-[#f65829] text-white font-bold py-2 px-4 rounded"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
