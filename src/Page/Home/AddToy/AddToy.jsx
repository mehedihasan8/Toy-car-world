import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const options = [
  { value: "Sports-car", label: "Sports-car" },
  { value: "Truck", label: "Truck" },
  { value: "Regular-car", label: "Regular-car" },
];

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  console.log(selectedOption);

  const handelAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const toyName = form.toyName.value;
    const picture = form.picture.value;
    const email = form.email.value;
    const category = selectedOption;
    const price = form.price.value;
    const message = form.message.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const addNewToy = {
      category,
      name,
      toyName,
      picture,
      email,
      price,
      message,
      rating,
      quantity,
    };
    console.log(addNewToy);

    fetch("http://localhost:5000/addtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNewToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Add  Successfull !",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  return (
    <div className=" pt-1">
      <h1 className="text-center font-extrabold text-4xl my-7">Add New Toy</h1>
      <form onSubmit={handelAddCoffee}>
        <div className=" w-3/4 bg-[#f65829] rounded-xl p-3 my-10 mx-auto text-white">
          <div className="flex mx-auto gap-x-5  p-5 ">
            <div className="form-control w-2/4 mx-auto">
              <label className="label">
                <span className="">Your Toy Name</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="toyName"
                  placeholder="Enter Your Toy Name"
                  className="input text-black input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-2/4 mx-auto">
              <label className="label">
                <span className="">You Toy Picture URL</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="picture"
                  placeholder="Enter You Toy Picture URL"
                  className="input text-black input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex mx-auto gap-x-5 p-5 ">
            <div className="form-control w-2/4 mx-auto">
              <label className="label">
                <span className="">Your Name</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  placeholder="Enter Your Name"
                  className="input text-black input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-2/4 mx-auto">
              <label className="label">
                <span className="">Enter Your Email</span>
              </label>
              <label className="">
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  placeholder="Enter email"
                  className="input text-black input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex mx-auto items-center gap-x-5 p-5 ">
            <div className="form-control w-2/4 mx-auto">
              <label className="label">
                <span className="">Your Toy Price</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="price"
                  placeholder="Enter Your Toy Price"
                  className="input text-black input-bordered w-full"
                />
              </label>
            </div>
            {/* <div className="form-control w-2/4 mx-auto">
              <label className="label">
                <span className="">Your Toy Category</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="category"
                  placeholder="Enter Your Toy Category"
                  className="input text-black input-bordered w-full "
                />
              </label>
            </div> */}

            <select
              value={selectedOption}
              className="form-control w-2/4 mx-auto mt-10 py-3 px-2 rounded-md text-black"
              onChange={handleOptionChange}
            >
              <option value="">Select Your Toy Cetegor</option>
              <option value="Sports-car">Sports-car</option>
              <option value="Truck">Truck</option>
              <option value="Regular-car">Regular-car</option>
            </select>
          </div>
          <div className="flex mx-auto gap-x-5 p-5 ">
            <div className="form-control w-2/4 mx-auto">
              <label className="label">
                <span className="">Toy Rating</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="rating"
                  placeholder="Enter Your Toy Rating"
                  className="input text-black input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-2/4 mx-auto">
              <label className="label">
                <span className="">Available Quantity</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Enter Your Toy Quantity"
                  className="input text-black input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className=" pb-8">
            <div className="form-control w-full px-4 border-none my-4  mx-auto">
              <textarea
                name="message"
                id=""
                rows=""
                placeholder="Toy Description"
                className="text-black text-center py-10 rounded-xl"
              ></textarea>
            </div>
          </div>
          <div className=" my-3 text-center">
            <input type="submit" value="Add New Toy" className="custom-btn" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
