import React from "react";
import { FaArrowCircleRight, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CategoryCard = ({ toy }) => {
  const { picture, toyName, price, rating, _id } = toy;
  return (
    <div className="card  bg-base-100 border shadow-xl">
      <figure className="px-10 pt-10 h-60">
        <img src={picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{toyName}</h2>
        <div className="flex justify-between my-2">
          <p className="text-xl font-semibold">Price: $ {price}</p>
          <p className=" text-center flex items-center">
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
              readonly
            />
            <span className="font-semibold">Ratings : {rating}</span>
          </p>
        </div>

        <div className="flex justify-center my-4">
          <div className="card-actions">
            <Link to={`/toydetails/${_id}`} state={toyName}>
              <button className=" btn   w-full bg-[#f65829]">
                {" "}
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
