import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaRegTimesCircle } from "react-icons/fa";
import MYToysRow from "./MYToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortPrice, setSortPrice] = useState("ascending");
  // console.log(user?.email);
  const url = `http://localhost:5000/mytoy?email=${user?.email}`;

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
    fetch(`http://localhost:5000/sortByPrice/${sortPrice}`)
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
        fetch(`http://localhost:5000/mytoy/${_id}`, {
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
    <div>
      <div className="overflow-x-auto w-full my-cunstom-container">
        <h1 className="text-center my-5 font-extrabold text-[#fe5724] text-4xl">
          Your Total Toy : {myToys.length}
        </h1>
        <div>
          <div className="dropdown dropdown-right">
            <label tabIndex={0} className="btn m-1">
              Click
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => setSortPrice("ascending")}>
                <a>ascending</a>
              </li>
              <li onClick={() => setSortPrice("dscending")}>
                <a>dscending</a>
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
