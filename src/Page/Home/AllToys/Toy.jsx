import React from "react";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  const { picture, toyName, price } = toy;
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
            {/* <Link to={`/checkout/${_id}`}><button className=" btn btn-circle bg-[#FF3811]">Buy Now</button></Link> */}
            <Link>
              <button className=" btn btn-circle bg-[#FF3811]">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
