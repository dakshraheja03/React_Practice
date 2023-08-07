import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode==="light"?'light':'dark'}`} style={{marginBottom: '35px'}}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode==="light"?'dark':'light'}`} to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`navbar-brand text-${props.mode==="light"?'dark':'light'}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`navbar-brand text-${props.mode==="light"?'dark':'light'}`} to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className={`form-check-label text-${props.mode==="light"?"darak":"light"}`} htmlFor="flexSwitchCheckDefault">{`${props.mode==="light"?'Enable':'Disable'}`} Dark Mode</label>
        </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };
Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "Set Text Here",
};
