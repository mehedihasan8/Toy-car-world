import { useEffect, useState } from "react";
import Toy from "./Toy";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("car.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  return (
    <div className="my-10">
      <h1 className=" text-6xl font-bold text-center my-10">All toys</h1>
      <div className="my-cunstom-container  grid grid-cols-1 lg:grid-cols-3 gap-5">
        {toys.map((toy) => (
          <Toy toy={toy}></Toy>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
