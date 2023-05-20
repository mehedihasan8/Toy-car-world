import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import log1 from "../../../assets/images/icon-1.png";
import log2 from "../../../assets/images/icon-2.png";
import log3 from "../../../assets/images/icon-3.png";

const WhyChose = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#363636] text-white ">
      <h1
        data-aos="fade-down"
        className="text-center text-4xl lg:text-6xl font-extrabold pt-16 pb-10 "
      >
        WHY CHOOSE US
      </h1>
      <div className="my-cunstom-container grid grid-cols-1 md:grid-cols-3 pb-24 ">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-center lg:text-left my-10 lg:my-4 lg:pb-24"
        >
          <img className="h-14 w-12 mx-auto lg:mx-0 mb-3" src={log1} alt="" />
          <h1 className="text-1xl lg:text-3xl font-bold py-4">
            SAFETY & SECURITY
          </h1>
          <p className="lg:w-4/5 ">
            variations of passages of Lorem Ipsum available, but the majority
            have
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-center lg:text-left my-10 lg:my-4"
        >
          <img className="h-14 w-12 mx-auto lg:mx-0 mb-3" src={log2} alt="" />

          <h1 className="text-1xl lg:text-3xl font-bold py-4">
            Online Booking
          </h1>
          <p className="lg:w-4/5 ">
            variations of passages of Lorem Ipsum available, but the majority
            have
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-center lg:text-left my-10 lg:my-4"
        >
          <img className="h-14 w-12 mx-auto lg:mx-0 mb-3" src={log3} alt="" />

          <h1 className="text-1xl lg:text-3xl font-bold py-4">Best Drivers</h1>
          <p className="lg:w-4/5 ">
            variations of passages of Lorem Ipsum available, but the majority
            have
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
