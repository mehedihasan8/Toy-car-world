import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Page/Sharied/NavBar/NavBar";
import { useEffect } from "react";
import Footer from "../Page/Sharied/Footer/Footer";

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `Car World | Home`;
    } else {
      document.title = `Car World ${location.pathname.replace("/", " | ")}`;
    }

    if (location.state) {
      document.title = location.state;
    }
  }, [location.pathname]);

  return (
    <div>
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
