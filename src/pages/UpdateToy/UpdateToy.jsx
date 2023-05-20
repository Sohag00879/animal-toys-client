import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const loadedUser = useLoaderData();
  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedUser = {
      name,
      category,
      price,
      rating,
      quantity,
      details,
      photo,
    };

    console.log(updatedUser);

    fetch(`http://localhost:5000/updateToys/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User Updated successfully");
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-16 mb-6">UPDATE TOY</h2>
      <form onSubmit={handleUpdateToy}>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <input
                type="text"
                name="name"
                defaultValue={loadedUser?.name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                defaultValue={loadedUser?.category}
                name="category"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                defaultValue={loadedUser?.price}
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                defaultValue={loadedUser?.rating}
                name="rating"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                defaultValue={loadedUser?.quantity}
                name="quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                defaultValue={loadedUser?.details}
                name="details"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-4">
            <input
              type="text"
              defaultValue={loadedUser?.photo}
              name="photo"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mb-12">
          <button className="btn btn-outline btn-primary">UPDATE TOY</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
