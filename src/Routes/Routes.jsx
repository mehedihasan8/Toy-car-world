import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Home/Login/Login";
import SignUp from "../Page/Home/SignUp/SignUp";
import AddToy from "../Page/Home/AddToy/AddToy";
import AllToys from "../Page/Home/AllToys/AllToys";
import MyToys from "../Page/Home/MyToys/MyToys";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/addtoy",
        element: <AddToy />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "/mytoys",
        element: <MyToys />,
      },
    ],
  },
]);
export default router;
