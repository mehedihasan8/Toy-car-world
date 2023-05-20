import Category from "../Category/Category";
import Client from "../About/About";
import Gallery from "../Gallery/Gallery";
import HeroSection from "../HeroSection/HeroSection";
import WhyChose from "../WhyChose/WhyChose";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <Gallery />
      <Category />
      <WhyChose />
      <Client />
    </div>
  );
};

export default Home;
