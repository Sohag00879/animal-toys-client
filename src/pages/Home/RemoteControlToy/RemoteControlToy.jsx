const RemoteControlToy = () => {
  return (
    <div className="mt-14">
      <h2 className="text-3xl font-bold text-center mb-6">
        REMOTE CONTROL TOYS
      </h2>
      <div className="grid grid-cols-3 gap-14">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://terrabybattat.com/wp-content/uploads/AN2801_PR_MAIN-768x768.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Emerald Tree Boa</h2>
            <p>Watch out for those creepy-crawlies!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://terrabybattat.com/wp-content/uploads/AN2818_PR_MAIN-768x768.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Blue Tarantula</h2>
            <p>Use your remote control to guide your animal toys</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://terrabybattat.com/wp-content/uploads/AN2854_PR_MAIN-768x768.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Giant Scolopendra</h2>
            <p>
              They slither and scurry through the forests and deserts of the
              world.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteControlToy;
