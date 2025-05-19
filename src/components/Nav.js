import React from "react";
// import { MdLocalShipping } from "react-icons/md";
import "./styles/Nav.css";
import { FaSearch } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch, searchProduct }) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="header">
        <div className="mid_header">
          <div className="logo">
            <img
              src="../ecommerce-gym-website/images//logo_webp.jpg"
              alt="logo"
            />
          </div>
          <div className="search_box">
            <input
              type="text"
              value={search}
              placeholder="search"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button onClick={searchProduct}>
              <FaSearch />
            </button>
          </div>

          {isAuthenticated ? (
            //if user is login then logout button will show
            <div className="user">
              <div className="icon">
                <CiLogout />
              </div>
              <div className="btn">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            //if user is not login then the login button will show
            <div className="user">
              <div className="icon">
                <CiLogin />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div>
          )}

          <div className="user_profile">
            {
              //user profile will shown here
              isAuthenticated ? (
                <>
                  <div className="icon">
                    <FaUserCircle />
                  </div>
                  <div className="info">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="icon">
                    <FaUserCircle />
                  </div>
                  <div className="info">
                    <p>Please Login</p>
                  </div>
                </>
              )
            }
          </div>
        </div>

        <div className="last_header">
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="link">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="offer">
            <p>flat 10% on all items</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
