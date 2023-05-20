import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpDateToy = () => {
  const singleToy = useLoaderData();
  const { price, message, quantity, _id } = singleToy;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const message = form.description.value;

    const upDateNewToy = {
      price,
      quantity,
      message,
    };

    fetch(`https://toy-car-server-rho.vercel.app/mytoy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upDateNewToy),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update You Toy !!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });

    // console.log(upDateNewToy);
  };
  return (
    <div>
      <h1 className="text-center text-[#fe5724] font-extrabold text-4xl my-9">
        UpDate Your Toy
      </h1>
      <div className=" border-2 border-[#f65829] rounded-md w-2/4 mx-auto mb-10">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto py-12">
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full border-solid border-2 border-[#fe5724] "
              defaultValue={price}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-bold mb-2"
            >
              Available Quantity
            </label>
            <input
              type="number"
              name="quantity"
              // placeholder="Available Quantity"
              className="input input-bordered w-full border-solid border-2 border-[#fe5724]"
              defaultValue={quantity}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Detail Description
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full py-12 border-solid border-2 border-[#fe5724]"
              placeholder="Description"
              defaultValue={message}
              required
            />
          </div>
          <div>
            <input
              type="submit"
              value="Update"
              className="btn bg-[#fe5724] btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpDateToy;
