import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <>
        <nav className="navbar navbar-expand navbar-light ">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/adminTab/createuser">
                  Create User <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/adminTab/userdetails">
                  User Details <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/logout">
                  <button type="button" class="btn btn-danger btn-sm px-3">
                    Logout
                  </button>
                  <span className="sr-only"></span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </>
  );
};

export default Navbar;
