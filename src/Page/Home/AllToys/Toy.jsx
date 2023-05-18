import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  const { picture, toyName, price, _id } = toy;
  console.log(toy);

  return (
    <div className="card  bg-base-100 border shadow-xl">
      <figure className="px-10 pt-10 h-60">
        <img src={picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p className="text-xl">Price: $ {price}</p>

        <div className="flex items-center justify-between">
          <p className="text-[#FF3811]">ratings: $ {price}</p>
          <div className="card-actions">
            <Link to={`/toydetails/${_id}`}>
              <button className=" btn btn-circle rounded-full bg-[#FF3811]">
                {" "}
                <FaArrowCircleRight className=" w-5 h-5 text-white " />{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
