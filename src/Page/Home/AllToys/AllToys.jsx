import { useEffect, useState } from "react";
import Toy from "./Toy";
import { FaSearch } from "react-icons/fa";
import Loadinge from "../../Sharied/Loadinge/Loadinge";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetch(`https://toy-car-server-rho.vercel.app/totalData?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [limit]);

  const handleSearch = () => {
    fetch(`https://toy-car-server-rho.vercel.app/searchByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  const handelShowMoreData = () => {
    setLimit(0);
  };

  if (!toys.length) {
    return <Loadinge></Loadinge>;
  }

  return (
    <div className="my-cunstom-container">
      <h1 className="text-center font-extrabold text-4xl ">All Toy's</h1>
      <div className="my-cunstom-container text-center  flex items-center justify-center ">
        <input
          type="text"
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search here "
          className="input w-full max-w-2xl border-2  border-[#f65829]"
        />
        <button className="btn ml-3 " onClick={handleSearch}>
          <FaSearch className="w-12 h-6 " />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-compact w-[95%] mx-auto">
          <thead>
            <tr>
              <th>No .</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Sub Cetegory</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details </th>
            </tr>
          </thead>
          <tbody className="p-10">
            {toys.map((toy, index) => (
              <Toy key={toy._id} toy={toy} index={index}></Toy>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-[8rem] mx-auto my-6">
        <button
          className="btn text-center bg-[#f65829]  "
          onClick={handelShowMoreData}
        >
          see more
        </button>
      </div>
    </div>
  );
};

export default AllToys;
