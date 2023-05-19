import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      <li>
        <Link to="/addToys">Add Toys</Link>
      </li>
      <li>
        <Link to="/myToys">My Toys</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img src={logo} height={70} width={70} alt="" />
        </Link>
        <p className="font-semibold text-rose-800">ANIMAL TOYS</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {!user && (
          <div>
            <Link className="mr-4" to="/login">
              Login
            </Link>
            <Link to="/registation">Registation</Link>
          </div>
        )}
      </div>
      {user && (
        <div>
          <img
            src={user?.photoURL}
            title={user?.displayName}
            width={35}
            height={35}
            alt=""
          />
          <button onClick={logOut} className=" ms-4">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
