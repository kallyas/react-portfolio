import React from "react";

function MenuWrapper() {
  return (
    // <!-- begin of menu wrapper -->
    <div class="all-menu-wrapper" id="navbarMenu">
      {/* <!-- Begin of top menu --> */}
      <nav class="navbar-topmenu">
        {/* <!-- Begin of CTA Actions, & Icons menu --> */}
        <ul class="navbar-nav navbar-nav-actions">
          <li class="nav-item">
            <a class="btn btn-outline-white btn-round" href="#contact">
              Buy Now
            </a>
          </li>
        </ul>
        {/* <!-- End of CTA & Icons menu --> */}
      </nav>
      {/* <!-- End of top menu --> */}

      {/* <!-- Begin of hamburger mainmenu menu --> */}
      <nav class="navbar-mainmenu">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.html#home">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="gallery.html">
              Gallery
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="item.html">
              Item
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="demo.html">
              Demo
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- End of hamburger mainmenu menu --> */}

      {/* <!-- Begin of sidebar nav menu params class: text-only / icon-only--> */}
      <nav class="navbar-sidebar ">
        <ul class="navbar-nav" id="qmenu">
          <li class="nav-item" data-menuanchor="home">
            <a href="#home">
              <i class="icon ion-ios-home-outline"></i>
              <span class="txt">Home</span>
            </a>
          </li>
          <li class="nav-item" data-menuanchor="about">
            <a href="#about">
              <i class="icon ion-ios-information-outline"></i>
              <span class="txt">About</span>
            </a>
          </li>
          <li class="nav-item" data-menuanchor="services">
            <a href="#services">
              <i class="icon ion-ios-list-outline"></i>
              <span class="txt">Services</span>
            </a>
          </li>
          <li class="nav-item" data-menuanchor="projects">
            <a href="#projects">
              <i class="icon ion-ios-albums-outline"></i>
              <span class="txt">Projects</span>
            </a>
          </li>
          <li class="nav-item" data-menuanchor="register">
            <a href="#register">
              <i class="icon ion-ios-compose-outline"></i>
              <span class="txt">Register</span>
            </a>
          </li>
          <li class="nav-item" data-menuanchor="contact">
            <a href="#contact">
              <i class="icon ion-ios-telephone-outline"></i>
              <span class="txt">Contact</span>
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
