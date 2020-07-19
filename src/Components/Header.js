import React from "react";
import MenuIcon from "./Header/MenuIcon";
import LogoBrand from "./Header/LogoBrand";
import MenuWrapper from "./Header/MenuWrapper";

function Header() {
  return (
    <header className="page-header navbar page-header-alpha scrolled-white menu-right topmenu-right">
      <MenuIcon />
      <LogoBrand />
      <MenuWrapper />
    </header>
  );
}

export default Header;
