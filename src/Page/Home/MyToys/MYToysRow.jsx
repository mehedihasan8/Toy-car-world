import React from "react";
import { FaTimes } from "react-icons/fa";

const MYToysRow = ({ t, handleDelete }) => {
  const { toyName, picture, price, quantity, rating, _id } = t;
  return (
    <tr className="">
      <th className="text-left">
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <FaTimes className="text-xl"></FaTimes>
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
            <div className="text-sm mt-5 ml-6">Price: ${price}</div>
          </div>
        </div>
      </td>
      <td className="">Ratins: {rating}</td>
      <td></td>
      <td></td>
      <td>Available Quantity: {quantity}</td>
      <th className="p-0 text-left">
        <button className="btn btn-xs">Update</button>
      </th>
    </tr>
  );
};

export default MYToysRow;
