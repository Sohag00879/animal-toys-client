import { useLoaderData } from "react-router-dom";

const ViewDetailsToy = () => {
  const toy = useLoaderData();
  console.log(toy);
  return (
    <div>
      <h2>{toy.name} </h2>
    </div>
  );
};

export default ViewDetailsToy;
