import React from "react";

function ListFeature() {
  return (
    //  <!-- Begin of list feature section -->
    <div
      className="section section-list-feature fp-auto-height-responsive "
      data-section="services"
    >
      {/* <!-- Begin of section wrapper --> */}
      <div className="section-wrapper twoside anim">
        {/* <!-- title --> */}
        <div className="section-title text-center">
          <h2 className="display-4 display-title title-bg">Services</h2>
          <p className="anim-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquet malesuada feugiat.
          </p>
        </div>

        {/* <!-- text or illustration order are manipulated via Bootstrap order-md-1, order-md-2 className -->
        <!-- begin of item --> */}
        <div className="item row justify-content-between fade-1">
          {/* <!-- begin of column content --> */}
          <div className="col-12 col-md-6 col-lg-6">
            {/* <!-- content --> */}
            <div className="section-content">
              {/* <!-- a media object --> */}
              <div className="media">
                <div className="img d-flex mr-3">
                  <i className="icon ion-ios-browsers-outline"></i>
                </div>
                <div className="media-body">
                  <h4>Design</h4>
                  <p>
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at.
                  </p>
                </div>
              </div>
              {/* <!-- a media object --> */}
              <div className="media">
                <div className="img d-flex mr-3">
                  <i className="icon ion-ios-cog-outline"></i>
                </div>
                <div className="media-body">
                  <h4>Coding</h4>
                  <p>
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at..
                  </p>
                </div>
              </div>
              {/* <!-- a media object --> */}
              <div className="media">
                <div className="img d-flex mr-3">
                  <i className="icon ion-ios-analytics-outline"></i>
                </div>
                <div className="media-body">
                  <h4>Analytics</h4>
                  <p>
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end of column content --> */}

          {/* <!-- begin of column content --> */}
          <div className="col-12 col-md-6 col-lg-6">
            {/* <!-- content --> */}
            <div className="section-content">
              {/* <!-- a media object --> */}
              <div className="media">
                <div className="img d-flex mr-3">
                  <i className="icon ion-ios-grid-view-outline"></i>
                </div>
                <div className="media-body">
                  <h4>Concept</h4>
                  <p>
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at.
                  </p>
                </div>
              </div>
              {/* <!-- a media object --> */}
              <div className="media">
                <div className="img d-flex mr-3">
                  <i className="icon ion-ios-lightbulb-outline"></i>
                </div>
                <div className="media-body">
                  <h4>Development</h4>
                  <p>
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at.
                  </p>
                </div>
              </div>
              {/* <!-- a media object --> */}
              <div className="media">
                <div className="img d-flex mr-3">
                  <i className="icon ion-arrow-expand"></i>
                </div>
                <div className="media-body">
                  <h4>Marketing</h4>
                  <p>
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end of column content --> */}
        </div>
        {/* <!-- end of item --> */}

        {/* <!-- Arrows scroll down/up --> */}
        <footer className="section-footer scrolldown">
          <a className="down">
            <span className="icon"></span>
            <span className="txt">Scroll</span>
          </a>
        </footer>
      </div>
      {/* <!-- End of section wrapper --> */}
    </div>
    // <!-- End of list feature section -->
  );
}

export default ListFeature;
