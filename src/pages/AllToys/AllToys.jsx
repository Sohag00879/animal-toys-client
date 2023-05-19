import { useEffect, useState } from "react";
import ShowAllToys from "./ShowAllToys";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="mt-16 mb-16">
      <h2 className="font-bold text-center text-3xl mb-14">ALL TOYS</h2>
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
