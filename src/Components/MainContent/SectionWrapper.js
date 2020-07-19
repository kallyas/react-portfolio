import React from "react";

function SectionWrapper() {
  return (
    // <!-- Begin of description section -->
    <div
      className="section section-description fp-auto-height-responsive "
      data-section="team"
    >
      {/* <!-- Begin of section wrapper --> */}
      <div className="section-wrapper center-vh dir-col anim">
        {/* <!-- title --> */}
        <div className="section-title text-center">
          <h5 className="title-bg">Team</h5>
        </div>

        {/* <!-- content --> */}
        <div className="section-content anim text-center">
          {/* <!-- text or illustration order are manipulated via Bootstrap order-md-1, order-md-2 className -->
          <!-- begin of item --> */}
          <div className="item row justify-content-between">
            {/* <!-- img-frame-normal demo --> */}
            <div className="col-12 col-sm-6 col-md-4 center-vh">
              <div className="section-content anim translateUp">
                <div className="images text-center">
                  <div className="img-avatar-alpha">
                    <div className="img-1 shadow">
                      <a href="item.html">
                        <img
                          className="img"
                          src="img/items/img-people1-square.jpg"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="legend text-center pos-abs">
                      <h5>Flavien Dupon</h5>
                      <p className="small">Web developer / Designer</p>
                      <div className="icons">
                        <a className="icon-btn" href="#">
                          <i className="icon fa fa-instagram"></i>
                        </a>
                        <a className="icon-btn" href="#">
                          <i className="icon fa fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- img-frame-normal demo --> */}
            <div className="col-12 col-sm-6 col-md-4 center-vh">
              <div className="section-content anim">
                <div className="images text-center">
                  <div className="img-avatar-alpha">
                    <div className="img-1 shadow">
                      <a href="item.html">
                        <img
                          className="img"
                          src="img/items/img-people2-square.jpg"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="legend text-center pos-abs">
                      <h5>Geraldine Cyclone</h5>
                      <p className="small">Architect / Photograph</p>
                      <div className="icons">
                        <a className="icon-btn" href="#">
                          <i className="icon fa fa-instagram"></i>
                        </a>
                        <a className="icon-btn" href="#">
                          <i className="icon fa fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- img-frame-normal demo --> */}
            <div className="col-12 col-sm-6 col-md-4 center-vh">
              <div className="section-content anim translateDown">
                <div className="images text-center">
                  <div className="img-avatar-alpha">
                    <div className="img-1 shadow">
                      <a href="item.html">
                        <img
                          className="img"
                          src="img/items/img-people3-square.jpg"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="legend text-center pos-abs">
                      <h5>Tintin Hergé</h5>
                      <p className="small">Co-founder / Blogger</p>
                      <div className="icons">
                        <a className="icon-btn" href="#">
                          <i className="icon fa fa-instagram"></i>
                        </a>
                        <a className="icon-btn" href="#">
                          <i className="icon fa fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end of item --> */}
        </div>

        {/* <!-- Arrows scroll down/up --> */}
        <footer className="section-footer scrolldown">
          <a className="down">
            <span className="icon"></span>
            <span className="txt">Our Services</span>
          </a>
        </footer>
      </div>
      {/* <!-- End of section wrapper --> */}
    </div>
    // <!-- End of description section -->
  );
}

export default SectionWrapper;
