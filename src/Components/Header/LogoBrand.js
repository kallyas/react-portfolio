import React from "react";

function LogoBrand() {
  return (
    <div>
      <a className="navbar-brand" href="/">
        <span className="logo">
          <img className="light-logo" src="img/logo.png" alt="Logo" />
        </span>
        <span className="text">
          <span className="line">Simpleux</span>
          <span className="line sub">React Portfolio</span>
        </span>
      </a>
    </div>
  );
}

export default LogoBrand;
