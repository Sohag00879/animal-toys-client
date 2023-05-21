import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Main;
