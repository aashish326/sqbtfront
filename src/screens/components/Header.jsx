import React, { useEffect } from "react";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../../helper";

let linkstyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "1.5rem",
};

const Header = ({ history }) => {
  return (
    <>
      <nav className="navbar bg-dark ">
        <ul className="nav mx-5 my-3 ">
          <li className="nav-item mx-5">
            <NavLink style={linkstyle} to="/">
              AMAZONE
            </NavLink>
          </li>

          {isAuthenticated() && (
            <li className="nav-item mx-5">
              <NavLink
                style={linkstyle}
                activeStyle={{ color: "grey" }}
                to="/orders"
              >
                ORDERS
              </NavLink>
            </li>
          )}
        </ul>
        <ul className="nav justify-content-end">
          {isAuthenticated() ? (
            <li className="nav-item mx-5">
              <span
                style={linkstyle}
                className="nav-item"
                onClick={() => {
                  signout(() => {
                    <Redirect to="/" />;
                  });
                }}
              >
                SIGN OUT
              </span>
            </li>
          ) : (
            <>
              <li className="nav-item mx-3">
                <NavLink
                  style={linkstyle}
                  activeStyle={{ color: "grey" }}
                  to="/signup"
                >
                  SIGN UP
                </NavLink>
              </li>

              <li className="nav-item me-5">
                <NavLink
                  style={linkstyle}
                  activeStyle={{ color: "grey" }}
                  to="/login"
                >
                  SIGN IN
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default withRouter(Header);
