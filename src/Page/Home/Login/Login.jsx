import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const { loginUser, handelGoogleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handelLoginUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setSuccess("");
    setError("");

    if (!email || !password) {
      setError("Provide Email or Password ");
      Swal.fire({
        title: "Provide Email or Password ",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "ok",
      });
      return;
    }

    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          toast.success("Login Successfull !", {
            position: toast.POSITION.TOP_CENTER,
          });
          Swal.fire({
            title: "Login Successfull !",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "ok",
          });
          setSuccess("Login Successfull !");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          setError(error.message);
          Swal.fire({
            title: `${error.message}`,
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "ok",
          });
        });
    }
  };

  const loginWithGoogle = () => {
    handelGoogleLogin()
      .then((result) => {
        Swal.fire({
          title: "Login Successfull !",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "ok",
        });
        setSuccess(" Login Successfull ! ");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          title: `${error.message}`,
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };

  return (
    <div className="my-10">
      <div className="flex justify-center align-center">
        <div className=" ">
          <h1 className="text-center text-[#f65829] text-4xl font-bold mb-6">
            Login
          </h1>
          <div className=" bg-[#f65829] text-white px-11 py-12 rounded-md">
            <form onSubmit={handelLoginUser}>
              <div>
                <label className="mt-32" htmlFor="">
                  Enter You Email
                </label>
                <br />
                <input
                  className="email w-auto md:w-96 p-3 rounded-md mt-2 mb-6"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="">Enter You Password </label>
                <br />
                <input
                  className="email md:w-96 p-3 rounded-md my-2 mb-4"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <p className=" text-red-600 font-semibold"> {error}</p>
              <p className="mb-3 text-emerald-600 font-semibold">{success}</p>
              <button className="custom-btn">Login</button>
              <p className="p-4">
                <small className=" font-semibold">
                  Are you new?
                  <Link className=" mr-1  btn-link text-white" to="/signup">
                    {""} Plese Sign up
                  </Link>
                </small>
              </p>
            </form>
            <div className="">
              <button
                onClick={loginWithGoogle}
                className="btn custom-btn btn-outline w-full flex justify-center items-center"
              >
                <FaGoogle style={{ fontSize: "25px" }} className="mx-4" /> Login
                with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
