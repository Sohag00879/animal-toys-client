import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllToys from "../pages/AllToys/AllToys";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registation from "../pages/Registation/Registation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registation",
        element: <Registation></Registation>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
