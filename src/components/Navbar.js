import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.blindMode==="blindOn"?"blind":props.mode==="dark"?"dark" :"light"}` }
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        {/* <a className="navbar-brand" href="/">
          {props.title}
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active clr" aria-current="page" to="/">
                Home
              </Link>
              {/* <a className="nav-link active clr" aria-current="page" href="/home">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
              {/* <a className="nav-link" from="/about">  
                {props.aboutText}
              </a> */}
            </li> 
          </ul>

          <div
            className={`my-blind form-check form-switch text-${props.mode==="dark"?"blind":"noBlind"}`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toogleBlindMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >{`${props.capitalize(props.blindMode.slice(0,5))} Mode`}</label>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toogleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >{`${
              props.mode === "light"
                ? "Dark"
                : "Light"
            } Mode`}
            </label>
          </div>
        </div>
      </div>
    </nav>

  );
}

Navbar.propTypes = {
  //PropTypes
  title: Proptypes.string,
  aboutText: Proptypes.string,
};

Navbar.defaultProps = {
  //deaultProps
  title: "put title",
  aboutText: "About",
  mode: "dark",
};
