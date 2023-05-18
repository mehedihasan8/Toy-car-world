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
        <img src={picture} alt={toyName} className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-2xl text-[#3DC2CA] font-bold mb-4">{toyName}</h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Seller:</span> {name}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Price:</span> $ {price}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Rating:</span> {ratings} : 5
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Available Quantity:</span> {quantity}
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">
            Description : {message}{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
