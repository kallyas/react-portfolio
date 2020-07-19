import React from "react";

function MenuIcon() {
  return (
    // <!-- Begin of menu icon toggler -->
    <button className="navbar-toggler site-menu-icon" id="navMenuIcon">
      {/* <!-- Available className : menu-icon-dot / menu-icon-thick /menu-icon-random --> */}
      <span className="menu-icon menu-icon-random">
        <span className="bars">
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </span>
      </span>
    </button>
    // <!--End of menu icon toggler -->
  );
}

export default MenuIcon;
