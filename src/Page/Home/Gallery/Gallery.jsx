import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../../assets/images/img6.jpeg";
import img2 from "../../../assets/images/img2.jpeg";
import img3 from "../../../assets/images/img3.jpeg";
import img4 from "../../../assets/images/img4.jpeg";
import img5 from "../../../assets/images/img5.jpeg";
import img6 from "../../../assets/images/img1.jpeg";
import img7 from "../../../assets/images/img7.jpeg";
import img8 from "../../../assets/images/img8.jpeg";
import img9 from "../../../assets/images/img9.jpeg";

const myImages = [img1, img2, img3, img4, img5, img7, img8, img9, img6];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div>
        <div data-aos="fade-up" data-aos-anchor="other-element">
          <h1
            data-aos="fade-right"
            className="text-center font-extrabold text-6xl mb-7"
          >
            Some New Toy's
          </h1>
          <div className="my-cunstom-container   grid grid-cols-1 lg:grid-cols-3 text-center gap-4 ">
            {myImages.map((img) => (
              <img
                data-aos="zoom-in-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className=" p-10 border-red-500 border rounded-lg w-[400px] h-[300px]  "
                src={img}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
// AOS.init({
//   useClassNames: true,
//   initClassName: false,
//   animatedClassName: "animated",
// });
export default Gallery;
