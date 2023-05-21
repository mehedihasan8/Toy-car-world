import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../../assets/images/bg.jpg";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className=" h-[550px]  my-cunstom-container lg:flex justify-start items-center">
      <div data-aos="fade-right" class="text-center lg:text-left ">
        <h1 class="text-4xl lg:text-7xl font-extrabold space-y-32">
          Buy Toy <br />
          <span className="text-[#f65829] my-12">For You Babys </span>
        </h1>
        <p class="lg:w-3/4 my-5 font-semibold text-lg">
          There are many variations of passages of Lorem Ipsum available, but
          the majority
        </p>
        <div class="my-6">
          <button className="custom-btn-2">Read More</button>
          <button className=" lg:btn ml-2 btn btn-sm">Contact Us</button>
        </div>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="lg:w-2/4 rounded-3xl"
      >
        <img className="rounded-xl" src={img} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
