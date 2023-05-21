import React from "react";

const Loadinge = () => {
  return (
    <div>
      <div className="flex gap-2 items-center justify-center h-screen bg-gray-100 ">
        <div className="flex items-center">
          <span className="text-4xl font-extrabold p-0 m-0 mb-5">L</span>
          <h1 className="text-3xl font-bold text-gray-700 mb-4">oading</h1>
          <div className="animate-pulse">
            <h1 className="text-2xl font-extrabold text-[#f65829]  mb-3 animate-pulse">
              ...
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loadinge;
