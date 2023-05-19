import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ShowMyToys from "./ShowMyToy";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="mt-12 mb-6">
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
            {myToys.map((myToy) => (
              <ShowMyToys key={myToy.id} myToy={myToy}></ShowMyToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;