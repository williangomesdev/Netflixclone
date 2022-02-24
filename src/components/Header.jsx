import Profile from "../assets/images/profile.png";
import React from "react";

export default () => {
  return (
    <header>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="netflix LOgo"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={Profile} className="profileImage" alt="" />
        </a>
      </div>
    </header>
  );
};
