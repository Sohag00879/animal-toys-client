const AddToys = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-16 mb-6">ADD TOY</h2>
      <div className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              type="text"
              placeholder="Toy Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Sub Category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Available Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Details"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-4">
          <input
            type="text"
            placeholder="Photo Url"
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mb-12">
        <button className="btn btn-outline btn-primary">ADD TOY</button>
      </div>
    </div>
  );
};

export default AddToys;
