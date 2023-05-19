const ShowAllToys = ({ allToy }) => {
  const { name, price, quantity, photo, sellerName, sellerEmail } = allToy;

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
        <button className="btn btn-outline btn-primary">VIEW DETAILS</button>
      </th>
    </tr>
  );
};

export default ShowAllToys;