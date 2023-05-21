import { useEffect, useRef, useState } from "react";
import ShowAllToys from "./ShowAllToys";

const AllToys = () => {
  const [storedToys, setStoredToys] = useState([]);
  const [allToys, setAllToys] = useState([]);
  const searchRef = useRef();
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    fetch("https://animal-toys-server-mocha.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setStoredToys(data);
        console.log(data);
        setIsSearch(false);
      });
  }, []);

  const handleSearch = () => {
    setIsSearch(true);
    const text = searchRef.current.value.toLowerCase();
    // filter the value according to text
    const filterdValue = storedToys.filter((toy) =>
      toy?.name?.toLowerCase()?.includes(text)
    );
    setAllToys(filterdValue);
    console.log(filterdValue);
  };
  const handleRemoveSearch = () => {
    setIsSearch(false);
    setAllToys(storedToys);
    searchRef.current.value = "";
  };

  return (
    <div className="mt-16 mb-16">
      <h2 className="font-bold text-center text-3xl mb-14">ALL TOYS</h2>
      {/* serach */}
      <div className="form-control mb-4">
        <div className="input-group">
          <div className="relative">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            {isSearch && (
              <p
                onClick={handleRemoveSearch}
                className="absolute top-1/4 right-2 cursor-pointer"
              >
                X
              </p>
            )}
          </div>
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>PHOTO</th>
              <th>TOY NAME</th>
              <th>SELLER NAME</th>
              <th>PRICE</th>
              <th>AVIAILABLE QUANTITY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((allToy) => (
              <ShowAllToys key={allToy.id} allToy={allToy}></ShowAllToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
