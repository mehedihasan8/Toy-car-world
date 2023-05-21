import React from "react";

const Loadinge = () => {
  return (
    <div>
      <div className="flex gap-2 items-center justify-center h-screen bg-gray-100 ">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-dashed border-[#f65829] h-16 w-16 mb-4 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loadinge;
