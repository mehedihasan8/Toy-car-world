import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const SignUp = () => {
  const { registerUser, upDateUser, setReload } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handelSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.text.value;
    const email = form.email.value;
    const image = form.file.value;
    const password = form.password.value;

    setSuccess("");
    setError("");

    if (!email || !password || !name || !image) {
      setError("Must be fillup all Criteria ");
      Swal.fire({
        title: "Must be fillup all Criteria",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "ok",
      });

      return;
    }

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("At least two capital letters");
      Swal.fire({
        title: "At least two capital letters",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "ok",
      });

      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("At least two numeric digits");
      Swal.fire({
        title: "At least two numeric digits",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "ok",
      });
      return;
    } else if (password.length < 6) {
      setError("At least more then 6 numbers ");
      Swal.fire({
        title: "At least more then 6 numbers",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "ok",
      });
      return;
    }

    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          const registerUser = result.user;
          upDateUser(registerUser, name, image)
            .then((result) => {
              setReload(new Date().getTime());
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
          Swal.fire({
            title: "Account create Success full",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "ok",
          });
          setSuccess("Account create Success");

          navigate("/");
          console.log(result.user);
        })
        .catch((err) => {
          setError(err.message);
          Swal.fire({
            title: `${err.message}`,
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "ok",
          });
        });
    }
  };
  return (
    <div className="py-6">
      <div className="flex justify-center align-center">
        <div className=" ">
          <h1 className="text-center text-[#f65829] text-4xl font-bold mb-3">
            Register
          </h1>
          <div className="bg-[#f65829] text-white px-11 py-12 rounded-md">
            <form onSubmit={handelSignIn}>
              <div>
                <label className="mt-32" htmlFor="">
                  Enter You Name
                </label>
                <br />
                <input
                  className=" text-black w-auto md:w-96 p-3 rounded-md mt-2 mb-6"
                  type="text"
                  name="text"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="">Choose profile photo URL</label> <br />
                <input
                  className="text-black w-auto md:w-96 p-3 rounded-md mt-2 mb-6"
                  type="text"
                  name="file"
                  placeholder="Enter your photo URL"
                />
              </div>
              <div>
                <label className="mt-32" htmlFor="">
                  Enter You Email
                </label>
                <br />
                <input
                  className="text-black w-auto md:w-96 p-3 rounded-md mt-2 mb-6"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="font-5xl" htmlFor="">
                  Enter You Password
                </label>
                <br />
                <input
                  className="email md:w-96 p-3 text-black rounded-md my-2 mb-4"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <p className=" text-red-600 font-semibold"> {error}</p>
              <p className="mb-3 text-emerald-600 font-semibold">{success}</p>
              <button className="custom-btn">Register</button>
              <p className="p-2 mt-3 text-white font-semibold">
                You hava an account ?
                <Link className=" mr-1 text-white btn-link" to="/login">
                  {" "}
                  Plese Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
