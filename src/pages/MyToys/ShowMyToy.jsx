import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ShowMyToys = ({ myToy }) => {
  const { name, price, quantity, photo, sellerName, sellerEmail } = myToy;

  const loadedMyToys = useLoaderData();
  const [myToys, setMyToys] = useState(loadedMyToys);

  const handleDeleteToy = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5000/myToys/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted successfully");
          const remaining = myToys.filter((myToy) => myToy._id !== _id);
          setMyToys(remaining);
        }
      });
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{sellerName ? sellerName : "Unknown User"}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <button className="btn btn-outline btn-primary">Update</button>
        <button
          onClick={() => handleDeleteToy(myToy._id)}
          className="btn btn-outline btn-secondary ml-4"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default ShowMyToys;
