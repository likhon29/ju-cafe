import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/img/jahangirnagar-university-logo-2094E07FAB-seeklogo.com.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  console.log(user, "navbar");
  const navItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/about">About US</Link>
      </li>
      <li>
        <Link to="/reservation">Reservation</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to="/profile">
              {user ? (
               
                  <div className="flex items-center justify-center">
                    <img
                    src={user.photoURL}
                    className="rounded-full border-solid  border-primary border-2 w-3/5"
                    alt=""
                  />
                  </div>
                
              ) : (
                <></>
              )}
            </Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-lime-50	 px-10  flex justify-between">
      <div className="navbar-start">
        <div className="dropdown ">
          <div className="flex items-center">
            <label tabIndex={0} className="btn btn-primary lg:hidden">
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
            {/* <Link to="/" className="btn btn-ghost lg:hidden">
              <img width="70px" src={logo} alt="" />
            </Link> */}
          </div>

          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}

            {/* <img src={user?.photoURL} width='30%' alt="" /> */}
          </ul>
        </div>
        <Link to="/" className="mx-20 flex justify-center items-center">
          <img width="80px" src={logo} alt="" />
          <h1 className="mx-5 text-4xl text-[green] ">JU CAFE</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
        {/* <img src={user?.photoURL} width='10%' alt="" className="rounded-full"/> */}
      </div>
      {/* <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-primary lg:hidden"
      >
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
      </label> */}
    </div>
  );
};

export default Navbar;
