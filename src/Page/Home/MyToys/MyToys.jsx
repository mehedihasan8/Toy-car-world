import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import MYToysRow from "./MYToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortPrice, setSortPrice] = useState("ascending");
  // console.log(user?.email);
  const url = `https://toy-car-server-rho.vercel.app/mytoy?email=${user?.email}`;

  console.log(sortPrice);

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

  useEffect(() => {
    fetch(
      `https://toy-car-server-rho.vercel.app/sortByPrice/${sortPrice}?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [sortPrice]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-car-server-rho.vercel.app/mytoy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remening = myToys.filter((toy) => toy._id !== _id);
              setMyToys(remening);
            }
          });
      }
    });
  };

  // console.log(myToys);
  return (
    <div className="bg-slate-200">
      <div className=" w-full my-cunstom-container">
        <div className="flex items-center justify-around my-6">
          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn bg-[#f65829]  m-1">
              Sort by price
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => setSortPrice("ascending")}>
                <a>Lower to heigh price </a>
              </li>
              <li onClick={() => setSortPrice("dscending")}>
                <a>heigh to Lower price </a>
              </li>
            </ul>
          </div>
        </div>

        <table className=" w-full">
          <tbody>
            {myToys.map((t) => (
              <MYToysRow
                key={t._id}
                handleDelete={handleDelete}
                t={t}
              ></MYToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
