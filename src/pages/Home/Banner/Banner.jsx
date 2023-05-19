const Banner = () => {
  return (
    <div className="carousel w-full h-[400px] mt-16">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://terrabybattat.com/wp-content/uploads/header-cateogry_animal-toys-wild.jpg"
          className="w-full rounded-xl object-cover"
        />
        <div className="absolute rounded-xl h-full flex items-center right-0 top-0 bg-gradient-to-r from-[rgba(21,21,21,0)] to-[black]">
          <div className="text-white space-y-7 pr-16 text-right  ">
            <h2 className="text-5xl font-bold">
              Animal Toys Of Local
              <br /> Kingdom
            </h2>
            <p className="font-bold">
              We gathered local animal kingdom news for <br /> inspiring stories
              of love and loyalty!
            </p>
            <div>
              <button className="btn btn-outline btn-info">See More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 bottom-20">
          <a href="#slide4" className="btn btn-circle mt-8">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://terrabybattat.com/wp-content/uploads/header-cateogry_playsets.jpg"
          className="w-full rounded-xl object-cover"
        />
        <div className="absolute rounded-xl h-full flex items-center right-0 top-0 bg-gradient-to-r from-[rgba(21,21,21,0)] to-[black]">
          <div className="text-white space-y-7 pr-16 text-right  ">
            <h2 className="text-5xl font-bold">
              Animal Toys For <br /> Cute Baby
            </h2>
            <p className="font-bold">
              There are many types of toys. Baby <br /> is so happy and he has
              many toys.
            </p>
            <div>
              <button className="btn btn-outline btn-info">See More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 bottom-20">
          <a href="#slide1" className="btn btn-circle mt-8">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://terrabybattat.com/wp-content/uploads/header-cateogry_dinosaurs.jpg"
          className="w-full rounded-xl object-cover"
        />
        <div className="absolute rounded-xl h-full flex items-center right-0 top-0 bg-gradient-to-r from-[rgba(21,21,21,0)] to-[black]">
          <div className="text-white space-y-7 pr-16 text-right  ">
            <h2 className="text-5xl font-bold">
              Animal Toys Of
              <br /> Dragon
            </h2>
            <p className="font-bold">
              This are local animal kingdom of <br /> dragon stories of love and
              amazaing!
            </p>
            <div>
              <button className="btn btn-outline btn-info">See More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 bottom-20">
          <a href="#slide2" className="btn btn-circle mt-8">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
