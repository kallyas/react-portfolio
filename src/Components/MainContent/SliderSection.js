import React from "react";

function SliderSection() {
  return (
    // <!-- Begin of slider section -->
    <div
      className="section section-twoside fp-auto-height-responsive "
      data-section="projects"
    >
      {/* <!-- Begin of section wrapper --> */}
      <div className="section-wrapper twoside">
        {/* <!-- title --> */}
        <div className="section-title text-center">
          <h5 className="title-bg ">Projects</h5>
        </div>
        {/* <!-- begin of carousel-swiper-beta --> */}
        <div className="slider-wrapper carousel-swiper-beta carousel-smalls carousel-swiper-beta-demo mt-40">
          {/* <!-- slider --> */}
          <div className="slider-container swiper-container">
            <ul className="item-list swiper-wrapper">
              {/* <!-- item --> */}
              <li className="slide-item swiper-slide">
                <div className="item-wrapper">
                  <div className="illustr">
                    <img
                      src="img/items/img-sample2-small.jpg"
                      alt="Image"
                      className="img"
                    />
                  </div>
                  <a className="legend" href="item.html#project_url">
                    <h3 className="display-3">Mountain</h3>
                    <h4>Music / Beats</h4>
                  </a>
                </div>
              </li>
              {/* <!-- item --> */}
              <li className="slide-item swiper-slide">
                <div className="item-wrapper">
                  <div className="illustr">
                    <img
                      src="img/items/img-sample3-small.jpg"
                      alt="Image"
                      className="img"
                    />
                  </div>
                  <a className="legend" href="item.html#project_url">
                    <h3 className="display-3">Cloud</h3>
                    <h4>Music / Beats</h4>
                  </a>
                </div>
              </li>
              {/* <!-- item --> */}
              <li className="slide-item swiper-slide">
                <div className="item-wrapper">
                  <div className="illustr">
                    <img
                      src="img/items/img-sample4-small.jpg"
                      alt="Image"
                      className="img"
                    />
                  </div>
                  <a className="legend" href="item.html#project_url">
                    <h3 className="display-3">Garden</h3>
                    <h4>Music / Beats</h4>
                  </a>
                </div>
              </li>
              {/* <!-- item --> */}
              <li className="slide-item swiper-slide">
                <div className="item-wrapper">
                  <div className="illustr">
                    <img
                      src="img/items/img-sample5-small.jpg"
                      alt="Image"
                      className="img"
                    />
                  </div>
                  <a className="legend" href="item.html#project_url">
                    <h3 className="display-3">Sky</h3>
                    <h4>Music / Beats</h4>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- pagination --> */}
          <div className="items-pagination bar"></div>
          {/* <!-- navigation --> */}
          <div className="items-button bottom fit items-button-prev">
            <a className="btn btn-transp-arrow btn-primary icon-left" href="#">
              <span className="icon arrow-left"></span>
              <span className="text">Prev</span>
            </a>
          </div>
          <div className="items-button bottom fit items-button-next">
            <a className="btn btn-transp-arrow btn-primary" href="#">
              <span className="icon arrow-right"></span>
              <span className="text">Next</span>
            </a>
          </div>
        </div>
        {/* <!-- end of carousel-swiper-beta --> */}
      </div>
      {/* <!-- End of section wrapper --> */}
    </div>
    // {/* <!-- End of slider section --> */}
  );
}

export default SliderSection;
