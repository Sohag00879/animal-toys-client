import Banner from "../Banner/Banner";
import ToyGallery from "../Gallery/ToyGallery";
import RemoteControlToy from "../RemoteControlToy/RemoteControlToy";
import SeaAnimalsTube from "../sea-amimails-tube/SeaAnimalsTube";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ToyGallery></ToyGallery>
      <RemoteControlToy></RemoteControlToy>
      <SeaAnimalsTube></SeaAnimalsTube>
    </div>
  );
};

export default Home;
