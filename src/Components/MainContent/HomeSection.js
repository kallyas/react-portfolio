import React from "react";

function HomeSection() {
  return (
    //  <!-- Begin of home section -->
    <div
      className="section section-home fullscreen-md fp-auto-height-responsive main-home"
      data-section="home"
    >
      {/* <!-- Begin of section wrapper --> */}
      <div className="section-wrapper">
        {/* <!-- content --> */}
        <div className="section-content anim">
          <div className="row">
            <div className="col-12 col-md-6 text-left">
              {/* <!-- title and description --> */}
              <div className="title-desc">
                <h2 className="display-4 display-title home-title bordered anim-1">
                  Simpleux
                </h2>
                <h4 className="anim-2">
                  A React Bootstrap 4 based template, helping you to build
                  modern and beautiful websites.
                </h4>
              </div>
              {/* <!-- Action button --> */}
              <div className="btns-action anim-3">
                <a className="btn btn-outline-white btn-round" href="#about">
                  Get started
                </a>
              </div>
            </div>
            {/* <!-- begin of right content --> */}
            <div className="col-12 col-md-6 right-content hidden-sm center-vh">
              {/* <!-- content --> */}
              <div className="section-content">
                {/* <!-- illustartion --> */}
                <div className="illustr zoomout-1">
                  <img className="logo" src="img/logo_white.png" alt="Logo" />
                </div>
              </div>
            </div>
            {/* <!-- end of right content --> */}
          </div>
        </div>
        {/* <!-- Arrows scroll down/up --> */}
        <footer className="section-footer scrolldown">
          <a className="down">
            <span className="icon"></span>
            <span className="txt">Scroll Down</span>
          </a>
        </footer>
      </div>
      {/* <!-- End of section wrapper --> */}
    </div>
    //   <!-- End of home section -->
  );
}

export default HomeSection;
