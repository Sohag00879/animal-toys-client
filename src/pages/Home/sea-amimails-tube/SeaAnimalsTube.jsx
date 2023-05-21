const SeaAnimalsTube = () => {
  return (
    <div data-aos="flip-left" className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row ">
        <img
          src="https://terrabybattat.com/wp-content/uploads/AN6002_LS_C-2-600x467.jpg"
          className="md:max-w-sm max-w-xs rounded-lg shadow-2xl "
        />
        <div>
          <h1 className="text-5xl font-bold">Sea Animals Tube</h1>
          <p className="py-6">
            <span className="text-red-600 font-semibold">Why it is Great:</span>
            <br /> Filled to the brim with variety, this tube holds <br /> 12
            different sea creatures like sharks,the world is coolest crustacean,
            the lobster!
          </p>
          <p className="mb-4">
            <span className="text-red-600 font-semibold">Fun Fact:</span> <br />
            How fast can a starfish run? About as fast <br /> as a snail, so
            they are more tortoise than hare!
          </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SeaAnimalsTube;
