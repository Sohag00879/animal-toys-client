import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabToy = () => {
  return (
    <div data-aos="flip-left" className="mt-12 mb-12">
      <h2 className="font-bold text-center mt-12 mb-12 text-2xl">
        DIFFERNT CATEGORIES TOY
      </h2>
      <Tabs>
        <TabList>
          <Tab>Wild</Tab>
          <Tab>Fish</Tab>
          <Tab>Bird</Tab>
        </TabList>

        {/* Wild */}
        <TabPanel>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="card card-compact w-96 bg-base-100 p-4 shadow-xl">
              <figure>
                <img
                  src="https://terrabybattat.com/wp-content/uploads/AN2712-pr-c-768x768.jpg"
                  alt="Quarter Horse"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Quarter Horse</h2>
                <p>
                  This realistic Quarter Horse toy makes a great gift and an
                  ideal goodie bag stuffer addition for an animal-themed party.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 p-4 shadow-xl">
              <figure>
                <img
                  src="https://terrabybattat.com/wp-content/uploads/AN2697_PR-768x768.png"
                  alt="Gorilla"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Gorilla</h2>
                <p>
                  This realistic gorilla makes a great gift and an ideal goodie
                  bag stuffer addition for an animal-themed party.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        {/* Fish */}
        <TabPanel>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="card card-compact w-96 bg-base-100 p-4 shadow-xl">
              <figure>
                <img
                  src="https://terrabybattat.com/wp-content/uploads/AN2611-pr-c-hs-768x768.jpg"
                  alt="Dolphin"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Dolphin</h2>
                <p>
                  The dolphin is a favorite among children and adults alike.{" "}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 p-4 shadow-xl">
              <figure>
                <img
                  src="https://terrabybattat.com/wp-content/uploads/AN2604-dp-A-hs-768x768.jpg"
                  alt="Great White Shark"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Great White Shark</h2>
                <p>
                  The great white shark is a favorite among children and adults
                  alike.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        {/* Bird */}
        <TabPanel>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="card card-compact w-96 bg-base-100 p-4 shadow-xl">
              <figure>
                <img
                  src="https://terrabybattat.com/wp-content/uploads/AN2621_PR-768x768.png"
                  alt="Bald Eagle"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Bald Eagle</h2>
                <p>
                  The bald eagle is a majestic bird found in North America. This
                  bald eagle toy makes a great gift and an ideal goodie bag
                  stuffer addition for an animal-themed party.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 p-4 shadow-xl">
              <figure>
                <img
                  src="https://terrabybattat.com/wp-content/uploads/AN2767_PR-768x768.jpg"
                  alt="Emperor Penguin & Baby"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Emperor Penguin & Baby</h2>
                <p>
                  This realistic penguin toy set makes a great gift and an ideal
                  goodie bag stuffer addition for an animal-themed party.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabToy;
