import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Toy = ({ toy, index }) => {
  const { category, toyName, name, price, _id, quantity } = toy;
  // console.log(toy);

  return (
    <tr className="my-6">
      <th>{index + 1}</th>
      <td>{toyName}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>$ {price}</td>
      <td>
        <span className="ml-14">{quantity} Pcs </span>
      </td>
      <td>
        <Link to={`/toydetails/${_id}`} state={toyName}>
          <div className="flex gap-x-4 text-center">
            <span className="">Viewo Details</span>{" "}
            <FaArrowCircleRight className=" w-7 h-7  text-[#f65829]" />
          </div>
        </Link>
      </td>
    </tr>
  );
};

export default Toy;
