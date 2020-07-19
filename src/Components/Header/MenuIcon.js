import React from "react";

function MenuIcon() {
  return (
    // <!-- Begin of menu icon toggler -->
    <button class="navbar-toggler site-menu-icon" id="navMenuIcon">
      {/* <!-- Available class : menu-icon-dot / menu-icon-thick /menu-icon-random --> */}
      <span class="menu-icon menu-icon-random">
        <span class="bars">
          <span class="bar1"></span>
          <span class="bar2"></span>
          <span class="bar3"></span>
        </span>
      </span>
    </button>
    // <!--End of menu icon toggler -->
  );
}

export default MenuIcon;
