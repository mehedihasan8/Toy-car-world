import Category from "../Category/Category";
import Client from "../About/About";
import Gallery from "../Gallery/Gallery";
import HeroSection from "../HeroSection/HeroSection";
import WhyChose from "../WhyChose/WhyChose";
import { useNavigation } from "react-router-dom";
import Loadinge from "../../Sharied/Loadinge/Loadinge";

const Home = () => {
  const navigaction = useNavigation();

  if (navigaction.state === "loading") {
    return <Loadinge></Loadinge>;
  }
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
