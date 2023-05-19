import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Home/Login/Login";
import SignUp from "../Page/Home/SignUp/SignUp";
import AddToy from "../Page/Home/AddToy/AddToy";
import AllToys from "../Page/Home/AllToys/AllToys";
import MyToys from "../Page/Home/MyToys/MyToys";
import ToyDetails from "../Page/Home/ToyDetails/ToyDetails";
import PrivateRoutes from "./PrivateRoutes";
import UpDateToy from "../Page/Home/UpDateToy/UpDateToy";
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
        element: (
          <PrivateRoutes>
            {" "}
            <MyToys />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/toydetails/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails />
          </PrivateRoutes>
        ),
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/toydetails/${params.id}`),
      },
      {
        path: "/updatetoy/:id",
        element: <UpDateToy />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/mytoy/${params.id}`),
      },
    ],
  },
]);
export default router;
