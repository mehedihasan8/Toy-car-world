import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Toy = ({ toy, index }) => {
  const { category, toyName, name, price, _id, quantity } = toy;

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
      <td className="text-right">
        <Link to={`/toydetails/${_id}`} state={toyName}>
          <div className="flex gap-x-2 text-center btn-link">
            <span className="">Viewo Details</span>{" "}
            <FaArrowCircleRight className=" w-6 h-6 " />
          </div>
        </Link>
      </td>
    </tr>
  );
};

export default Toy;
