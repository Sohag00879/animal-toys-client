const ShowAllToys = ({ allToy }) => {
  const { toyName, price, availableQuantity, img, sellerName } = allToy;
  return (
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
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <th>
              <button className="btn btn-outline btn-primary">
                VIEW DETAILS
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShowAllToys;
