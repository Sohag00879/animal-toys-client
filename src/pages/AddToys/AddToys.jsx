import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const sellerInfo = {
      name,
      category,
      price,
      rating,
      quantity,
      details,
      photo,
      sellerName: user.displayName,
      email: user.email,
    };

    console.log(sellerInfo);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sellerInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-16 mb-6">ADD TOY</h2>
      <form onSubmit={handleAddToy}>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Toy Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Sub Category"
                name="category"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Available Quantity"
                name="quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Details"
                name="details"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-4">
            <input
              type="text"
              placeholder="Photo Url"
              name="photo"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mb-12">
          <button className="btn btn-outline btn-primary">ADD TOY</button>
        </div>
      </form>
    </div>
  );
};

export default AddToys;
