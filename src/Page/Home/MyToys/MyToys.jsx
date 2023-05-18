import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaRegTimesCircle } from "react-icons/fa";
import MYToysRow from "./MYToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  console.log(user?.email);
  const url = `http://localhost:5000/mytoy?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);
  console.log(myToys);
  return (
    <div>
      <div className="overflow-x-auto w-full my-cunstom-container">
        <h1 className="text-center my-5 font-extrabold text-[#fe5724] text-4xl">
          Your Total Toy : {myToys.length}
        </h1>
        <table className=" w-full">
          <tbody>
            {myToys.map((t) => (
              <MYToysRow key={t._id} t={t}></MYToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
