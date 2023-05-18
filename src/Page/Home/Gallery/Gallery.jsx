import React from "react";

import img1 from "../../../assets/images/img1.jpeg";
import img2 from "../../../assets/images/img2.jpeg";
import img3 from "../../../assets/images/img3.jpeg";
import img4 from "../../../assets/images/img4.jpeg";
import img5 from "../../../assets/images/img5.jpeg";
import img6 from "../../../assets/images/img6.jpeg";
import img7 from "../../../assets/images/img7.jpeg";
import img8 from "../../../assets/images/img8.jpeg";
import img9 from "../../../assets/images/img10.jpeg";

const Gallery = () => {
  return (
    <>
      {/* <div className="my-cunstom-container h-[800px] grid grid-cols-1 lg:grid-cols-3 text-center ">
        <img className=" p-10  w-[450px]" src={img1} alt="" />
        <img className=" p-10  w-[450px]" src={img2} alt="" />
        <img className=" p-10  w-[450px]" src={img3} alt="" />
        <img className=" p-10  w-[450px]" src={img4} alt="" />
        <img className=" p-10  w-[450px]" src={img5} alt="" />
        <img className=" p-10  w-[450px]" src={img6} alt="" />
        <img className=" p-10  w-[450px]" src={img7} alt="" />
        <img className=" p-10  w-[450px]" src={img8} alt="" />
        <img className=" p-10  w-[450px]" src={img9} alt="" />
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
