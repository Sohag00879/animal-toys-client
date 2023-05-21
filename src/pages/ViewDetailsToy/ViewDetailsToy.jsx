import { useLoaderData } from "react-router-dom";

const ViewDetailsToy = () => {
  const toy = useLoaderData();
  console.log(toy);
  return (
    <div className="hero min-h-full bg-base-200 mt-16 mb-16">
      <div className="hero-content grid md:grid-cols-3">
        <div className="col-span-1">
          <img
            src={toy.photo}
            className="max-w-sm rounded-lg shadow-2xl w-full  object-cover"
          />
        </div>
        <div className=" md:col-span-2">
          <h1 className="text-5xl font-bold">{toy.name}</h1>
          <p className="mt-4">
            <span className="font-semibold">Category:</span> {toy.category}
          </p>
          <p className="py-4">{toy.details}</p>
          <p className=" text-red-500">Rating:{toy.rating}</p>
          <p className="mb-2">Seller Name: {toy.sellerName}</p>
          <p>Seller Email:{toy.email}</p>
          <p className="mt-4">
            <span className="font-semibold">Available Quantity:</span>{" "}
            {toy.quantity}
          </p>
          <p className=" text-red-700 font-bold text-xl">Price: ${toy.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsToy;
