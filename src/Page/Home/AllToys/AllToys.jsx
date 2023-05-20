import { useEffect, useState } from "react";
import Toy from "./Toy";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/totalData")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/searchByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };

  return (
    <div className="my-10">
      <h1 className=" text-6xl font-bold text-center my-10">All toys</h1>
      <div className="my-cunstom-container text-center   ">
        <input
          type="text"
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search here "
          className="input w-full max-w-2xl border-2 border-[#f65829]"
        />
        <button className="btn ml-3 mb-1 bg-[#f65829]" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="my-cunstom-container  grid grid-cols-1 lg:grid-cols-3 gap-5">
        {toys.map((toy) => (
          <Toy key={toy._id} toy={toy}></Toy>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
