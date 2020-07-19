import React from "react";

function MenuWrapper() {
  return (
    // <!-- begin of menu wrapper -->
    <div className="all-menu-wrapper" id="navbarMenu">
      {/* <!-- Begin of top menu --> */}
      <nav className="navbar-topmenu">
        {/* <!-- Begin of CTA Actions, & Icons menu --> */}
        <ul className="navbar-nav navbar-nav-actions">
          <li className="nav-item">
            <a className="btn btn-outline-white btn-round" href="#contact">
              Buy Now
            </a>
          </li>
        </ul>
        {/* <!-- End of CTA & Icons menu --> */}
      </nav>
      {/* <!-- End of top menu --> */}

      {/* <!-- Begin of hamburger mainmenu menu --> */}
      <nav className="navbar-mainmenu">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="index.html#home">
              Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="gallery.html">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="item.html">
              Item
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="demo.html">
              Demo
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- End of hamburger mainmenu menu --> */}

      {/* <!-- Begin of sidebar nav menu params className: text-only / icon-only--> */}
      <nav className="navbar-sidebar ">
        <ul className="navbar-nav" id="qmenu">
          <li className="nav-item" data-menuanchor="home">
            <a href="#home">
              <i className="icon ion-ios-home-outline"></i>
              <span className="txt">Home</span>
            </a>
          </li>
          <li className="nav-item" data-menuanchor="about">
            <a href="#about">
              <i className="icon ion-ios-information-outline"></i>
              <span className="txt">About</span>
            </a>
          </li>
          <li className="nav-item" data-menuanchor="services">
            <a href="#services">
              <i className="icon ion-ios-list-outline"></i>
              <span className="txt">Services</span>
            </a>
          </li>
          <li className="nav-item" data-menuanchor="projects">
            <a href="#projects">
              <i className="icon ion-ios-albums-outline"></i>
              <span className="txt">Projects</span>
            </a>
          </li>
          <li className="nav-item" data-menuanchor="register">
            <a href="#register">
              <i className="icon ion-ios-compose-outline"></i>
              <span className="txt">Register</span>
            </a>
          </li>
          <li className="nav-item" data-menuanchor="contact">
            <a href="#contact">
              <i className="icon ion-ios-telephone-outline"></i>
              <span className="txt">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- End of sidebar nav menu --> */}
    </div>
    // <!-- end of menu wrapper -->
  );
}

export default MenuWrapper;
