import React from "react";
import Proptypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.blindMode==="blindOn"?"blind":props.mode==="dark"?"dark" :"light"}` }
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
              <a className="nav-link active clr" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
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
            } Mode`}</label>
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

//example from docs
// export default function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//     </div>
//   )
// }

// Comment.propTypes={                   //PropTypes
//   author: Proptypes.object.isRequired, //need to be pass else error
//   text:Proptypes.string
// }

// Comment.defaultProps={                 //deaultProps
//   author: {
//     name: 'Name',
//     avatarUrl: ''
//   },
//   text: "default Text"
// }
