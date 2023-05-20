import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const carToys = useLoaderData();
  const { name, price, picture, quantity, toyName, email, ratings, message } =
    carToys;
  console.log(carToys);
  return (
    <div className=" rounded-lg  p-8 md:flex items-center">
      <div className="md:w-1/2">
        <img src={picture} alt={toyName} className="w-full h-auto " />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-3xl text-[#f65829] font-bold mb-4">
          Toy Name : {toyName}
        </h2>
        <p className="text-lg mb-2">
          <span className="font-semibold text-xl text-[#f65829] ">
            Seller Name{" "}
          </span>{" "}
          : {name}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold text-xl text-[#f65829] ">Email</span> :{" "}
          {email}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold text-xl text-[#f65829] ">Price </span>{" "}
          : ${price}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold text-xl text-[#f65829] ">Rating</span>{" "}
          {ratings} : 5
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold text-xl text-[#f65829] ">
            Available Quantity
          </span>
          : {quantity}
        </p>
        <div className="mt-4">
          <h3 className=" mb-2">
            <span className="font-semibold text-xl text-[#f65829] ">
              {" "}
              Description{" "}
            </span>{" "}
            : {message}{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
