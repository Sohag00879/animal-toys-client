import { useEffect, useState } from "react";
import ShowAllToys from "./ShowAllToys";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  return (
    <div className="mt-12 mb-6">
      {allToys.map((allToy) => (
        <ShowAllToys key={allToy.id} allToy={allToy}></ShowAllToys>
      ))}
    </div>
  );
};

export default AllToys;
