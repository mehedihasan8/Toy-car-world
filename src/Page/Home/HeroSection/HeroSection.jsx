import background from "../../../assets/images/banner-bg.png";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        width: "100%",
        float: "right",
        backgroundPosition: "top",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
      className="my-cunstom-container flex justify-start items-center"
    >
      <div class="">
        <h1 class="text-3xl lg:text-7xl font-extrabold space-y-32">
          Toy Buy <br />
          <span className="text-[#f65829] my-12">For You Babys </span>
        </h1>
        <p class="w-3/4 my-5 font-semibold text-lg">
          There are many variations of passages of Lorem Ipsum available, but
          the majority
        </p>
        <div class="my-6">
          <button className="custom-btn-2">Read More</button>
          <button className=" lg:btn ml-2 btn btn-sm">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
