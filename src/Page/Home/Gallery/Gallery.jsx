import React from "react";
import AOS from "aos";

import img1 from "../../../assets/images/img6.jpeg";
import img2 from "../../../assets/images/img2.jpeg";
import img3 from "../../../assets/images/img3.jpeg";
import img4 from "../../../assets/images/img4.jpeg";
import img5 from "../../../assets/images/img5.jpeg";
import img6 from "../../../assets/images/img1.jpeg";
import img7 from "../../../assets/images/img7.jpeg";
import img8 from "../../../assets/images/img8.jpeg";
import img9 from "../../../assets/images/img9.jpeg";

const Gallery = () => {
  return (
    <>
      <div>
        <div data-aos="fade-up" data-aos-anchor=".other-element">
          <h1 className="text-center font-extrabold text-6xl mb-7">
            Some New Toy's
          </h1>
        </div>
        <div
          data-aos="fade-in"
          className="my-cunstom-container   grid grid-cols-1 lg:grid-cols-3 text-center gap-4 "
        >
          <img
            className=" p-10 border-red-500 border rounded-lg w-[400px] h-[300px]"
            src={img1}
            alt=""
          />
          <img
            className=" p-10 border-red-500 border rounded-lg w-[400px] h-[300px]"
            src={img2}
            alt=""
          />
          <img
            className=" p-10 border-red-500 border rounded-lg w-[400px] h-[300px]"
            src={img3}
            alt=""
          />
          <img
            className=" p-10 border-red-500 border rounded-lg w-[400px] h-[300px]"
            src={img4}
            alt=""
          />
          <img
            className=" p-10 border-red-500 border rounded-lg w-[400px] h-[300px]"
            src={img5}
            alt=""
          />
          <img
            className=" p-10 border-red-500 border rounded-lg w-[400px] h-[300px]"
            src={img6}
            alt=""
          />
          <img
            className=" p-10 border-red-500 border rounded-lg w-[400px] h-[300px]"
            src={img7}
            alt=""
          />
          <img
            className=" p-10 border-red-500 border rounded-lg w-[400px] h-[300px]"
            src={img8}
            alt=""
          />
          <img
            className=" p-10 border-red-500 border rounded-lg w-[400px] h-[300px]"
            src={img9}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: "animated",
});
export default Gallery;
