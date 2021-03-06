import React, { useState } from "react";
import NewProjectModal from "../NewProjectModal/NewProjectModal";
import "./cards.css";
import {signOut} from '../../../Auth/Firebase/firebase_init'

const Navigate = () => {
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);

  return (
    <div className="Navigate">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <i className="fa fa-chevron-left"></i> Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <span
                onClick={() => setShowNewProjectModal(true)}
                className="av-link"
              >
                New Project  
              </span>
            </li>
            <li className="nav-item ">
              <span
                onClick={() => {signOut()}}
                className="av-link"
              >
                Sign Out
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <NewProjectModal
        show={showNewProjectModal}
        onHide={() => setShowNewProjectModal(false)}
      />
    </div>
  );
};

export default Navigate;
