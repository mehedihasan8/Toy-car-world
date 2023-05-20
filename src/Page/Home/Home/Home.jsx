import Category from "../Category/Category";
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
    </div>
  );
};

export default Home;
