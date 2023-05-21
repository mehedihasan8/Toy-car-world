import React from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaRegStar,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const MYToysRow = ({ t, handleDelete }) => {
  const { toyName, picture, price, quantity, rating, _id } = t;
  return (
    <tr className="">
      <th className="text-left">
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <FaTimes className=""></FaTimes>
        </button>
      </th>
      <td className=" ">
        <div className="flex items-center ">
          <div className="avatar">
            <div className="rounded-md h-40 w-40">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold ml-6">{toyName}</h2>
            <div className="text-sm font-bold mt-5 ml-6">Price: ${price}</div>
          </div>
        </div>
      </td>
      <td className="font-semibold ">
        <Rating
          placeholderRating={rating}
          emptySymbol={<FaRegStar></FaRegStar>}
          placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
          fullSymbol={<FaStar></FaStar>}
          readonly
        />
        <span className="">
          {""} Ratins: {rating}
        </span>
      </td>
      <td>
        <span className="font-semibold">
          {" "}
          Available Quantity: {quantity} Pcs
        </span>
      </td>
      <th className="p-0 text-left">
        <Link to={`/updatetoy/${_id}`}>
          <button className="flex btn-link  items-center mx-2">
            {" "}
            <span className="mr-2">Update</span>{" "}
            <FaArrowAltCircleRight className="w-6 h-6 " />
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default MYToysRow;
