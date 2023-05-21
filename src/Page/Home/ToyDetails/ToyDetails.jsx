import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const carToys = useLoaderData();
  const { name, price, picture, quantity, toyName, email, rating, message } =
    carToys;
  // console.log(carToys);
  return (
    <div className=" w-[95%] md:w-[85%] mx-auto py-10 md:py-20 md:flex items-center">
      <div className="md:w-1/2">
        <div className="mx-auto mb-4 md:mb-0 md:h-[24rem] md:w-[29rem] border-2 rounded-xl border-[#f65829]">
          <img
            src={picture}
            alt={toyName}
            className="w-[95%] bg-slate-100 mx-auto max-h-[95%] mt-2"
          />
        </div>
      </div>
      <div className=" md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
          Toy Name : {toyName}
        </h2>
        <p className="text-gray-500  mb-2">
          <span className="font-semibold text-[#f65829] ">Seller Name:</span>{" "}
          {name}
        </p>
        <p className="text-gray-500  mb-2">
          <span className="font-semibold text-[#f65829] ">Seller Email:</span>{" "}
          {email}
        </p>
        <p className="text-gray-500  mb-2">
          <span className="font-semibold text-[#f65829] ">Price:</span> ${" "}
          {price}
        </p>
        <p className="text-gray-500  mb-2">
          <span className="font-semibold text-[#f65829] ">Rating:</span>{" "}
          {rating}
        </p>
        <p className="text-gray-500 mb-2">
          <span className="font-semibold text-[#f65829]  ">
            Available Quantity:
          </span>{" "}
          {quantity} pcs
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[#f65829]  mb-2">
            Description
          </h3>
          <p className="text text-gray-500">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
