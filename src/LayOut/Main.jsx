import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Page/Sharied/NavBar/NavBar";
import { useEffect } from "react";

const Main = () => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `Car World - Home`;
    } else {
      document.title = `Car World ${location.pathname.replace("/", "- ")}`;
    }

    if (location.state) {
      document.title = location.state;
    }
  }, [location.pathname]);

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Main;
