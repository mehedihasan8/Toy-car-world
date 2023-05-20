import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/images/about-img.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="my-cunstom-container">
      <div className="md:flex items-center md:py-16 md:px-16 md:gap-8">
        <img
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="md:w-2/4 "
          src={img1}
          alt=""
        />
        <div className="md:w-2/4">
          <h1
            data-aos="fade-up"
            className="text-5xl font-bold mt-10 text-center md:text-left"
          >
            ABOUT <span className="text-[#f65829]">US</span>
          </h1>
          <p className="md:my-8 my-4 leading-7">
            going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined
            going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined
          </p>
          <button
            data-aos="fade-up"
            className="btn w-full md:w-[180px] mt-4 px-12 bg-[#f65829] mb-16 mx-auto"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
