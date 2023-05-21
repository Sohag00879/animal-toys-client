import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const ShowMyToys = ({ myToy, myToys, setMyToys }) => {
  const { name, price, quantity, photo, sellerName, sellerEmail } = myToy;
  const handleDeleteToy = (_id) => {
    console.log("delete", _id);
    fetch(`https://animal-toys-server-mocha.vercel.app/myToys/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Deleted successfully!");
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
        <Link to={`/updateToys/${myToy._id}`}>
          <button className="btn btn-outline btn-primary">Update</button>
        </Link>
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
