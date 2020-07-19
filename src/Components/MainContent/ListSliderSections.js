import React from 'react'

function ListSliderSections() {
    return (
        //    <!-- Begin of list two side 1 section -->
    <div className="section section-twoside fp-auto-height-responsive " data-section="products">
      {/* <!-- Begin of section wrapper --> */}
      <div className="section-wrapper twoside">

         {/*  <!-- title --> */}
        <div className="section-title text-center ">
          <h5 className="title-bg">Products</h5>
          <div className="title-abs">
            <h2 className="display-4 display-title">Products</h2>
            <p>Here is the list of our awesome pages.</p>
          </div>
        </div>

        {/* <!-- text or illustration order are manipulated via Bootstrap order-md-1, order-md-2 className -->
        <!-- begin of item --> */}
        <div className="item row justify-content-between">
          {/* <!-- img-frame-normal demo --> */}
          <div className="col-12 col-sm-6 col-md-4 center-vh">
            <div className="section-content anim translateUp">
              <div className="images text-center">
                <div className="img-frame-normal">
                  <div className="img-1 shadow">
                    <a href="index.html">
                      <img className="img" src="demopage/default.jpg" alt="Image" />
                    </a>
                  </div>
                  <div className="legend text-left pos-abs">
                    <h5>Default</h5>
                    <p className="small">Image or solid color as background of the page</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- img-frame-normal demo --> */}
          <div className="col-12 col-sm-6 col-md-4 center-vh">
            <div className="section-content anim">
              <div className="images text-center">
                <div className="img-frame-normal">
                  <div className="img-1 shadow">
                    <a href="index-slideshow.html">
                      <img className="img" src="demopage/slideshow.jpg" alt="Image" />
                    </a>
                  </div>
                  <div className="legend text-left pos-abs">
                    <h5>Slideshow</h5>
                    <p className="small">Fullscreen background image slideshow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- img-frame-normal demo --> */}
          <div className="col-12 col-sm-6 col-md-4 center-vh">
            <div className="section-content anim translateDown">
              <div className="images text-center">
                <div className="img-frame-normal">
                  <div className="img-1 shadow">
                    <a href="index-video.html">
                      <img className="img" src="demopage/video.jpg" alt="Image" />
                    </a>
                  </div>
                  <div className="legend text-left pos-abs">
                    <h5>Video</h5>
                    <p className="small">Fullscreen video background</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
         {/*  <!-- end of item --> */}
      </div>
      {/* <!-- End of section wrapper --> */}
    </div>
    //  <!-- End of list two side 1 section --> 

    // <!-- Begin of list two side 1 section --> 
    <div className="section section-twoside fp-auto-height-responsive " data-section="products-2">
      {/* <!-- Begin of section wrapper --> */}
      <div className="section-wrapper twoside">
         {/*  <!-- title --> */}
        <div className="section-title text-center">
          <h5 className="title-bg">Products</h5>
        </div>

        {/* <!-- text or illustration order are manipulated via Bootstrap order-md-1, order-md-2 className --> */}
        {/* <!-- begin of item --> */}
        <div className="item row justify-content-between">
          {/* <!-- img-frame-normal demo --> */}
          <div className="col-12 col-md-6 center-vh start-h">
            <div className="section-content anim translateUp">
              <div className="images text-center">
                <div className="img-frame-normal">
                  <div className="img-1 shadow">
                    <a href="item.html#project_url">
                      <img className="img" src="img/items/img-sample7.jpg" alt="Image" />
                    </a>
                  </div>
                  <div className="legend text-left pos-abs">
                    <h5>Computer Desktop</h5>
                    <p className="small">Art / Programing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- img-frame-normal demo, portrait orientation --> */}
          <div className="col-12 col-sm-6 col-md-5 col-lg-4 center-vh end-h">
            <div className="section-content anim">
              <div className="images text-center">
                <div className="img-frame-normal portrait">
                  <div className="img-1 shadow">
                    <a href="item.html#project_url">
                      <img className="img" src="img/items/img-portrait.jpg" alt="Image" />
                    </a>
                  </div>
                  <div className="legend text-right pos-abs">
                    <h5>Computer Desktop</h5>
                    <p className="small">Art / Programing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/*  <!-- end of item --> */}
      </div>
      {/* <!-- End of section wrapper --> */}
    </div>
    //  <!-- End of list two side 1 section --> 

    // {/* <!-- Begin of list two side 1 section --> */}
    <div className="section section-twoside fp-auto-height-responsive " data-section="product-item-alpha">
      {/* <!-- Begin of section wrapper --> */}
      <div className="section-wrapper twoside center-vh dir-col">
        {/*  {/*  <!-- title --> */} */}
        <div className="section-title text-center">
          <h5 className="title-bg">Interior</h5>
        </div>
        {/* <!-- text or illustration order are manipulated via Bootstrap order-md-1, order-md-2 className --> */}
        <div className="item row justify-content-between">
          {/*  <!-- img-frame-legend-alpha demo --> */}
          <div className="col-12 col-sm-6 center-vh">
            <div className="section-content anim translateUp">
              <div className="images text-center">
                <div className="img-frame-legend-alpha">
                  <div className="img-1 shadow">
                    <img className="img" src="img/items/img-sample7.jpg" alt="Image" />
                  </div>
                  <div className="legend">
                    <h2 className="display-4">
                      <strong>Computer Desktop</strong>
                    </h2>
                    <p className="">Art / Interior Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- img-frame-legend-alpha portrait mode bottom demo --> */}
          <div className="col-12 col-sm-6 col-md-5">
            <div className="section-content anim">
              {/* <!-- title and description --> */}
              <div className="title-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet
                  malesuada feugiat. Curabitur fermentum bibendum nulla, non dictum
                  ipsum tincidunt non. Quisque convallis pharetra tempor. Donec id
                  pretium leo. Pellentesque luctus massa non elit viverra pellentesque.
                  Cras vitae neque molestie, rhoncus ipsum sit amet, lobortis dui.
                  Fusce in urna sem.</p>
              </div>

              <a className="btn btn-transp-arrow btn-outline btn-primary btn-round" href="item.html#project_url">
                <span className="icon arrow-right"></span>
                <span className="text">View</span>
              </a>
            </div>
          </div>


        </div>
        {/*  {/*  <!-- end of item --> */} */}
      </div>
      {/* <!-- End of section wrapper --> */}
    </div>
    //  {/* <!-- End of list two side 1 section --> */}

    // {/* <!-- Begin of list two side 1 section --> */}
    <div className="section section-twoside fp-auto-height-responsive " data-section="product-item-beta">
      {/* <!-- Begin of section wrapper --> */}
      <div className="section-wrapper twoside center-vh dir-col">
        {/*  {/*  <!-- title --> */} */}
        <div className="section-title text-center">
          <h5 className="title-bg">Photography</h5>
        </div>
        {/* <!-- text or illustration order are manipulated via Bootstrap order-md-1, order-md-2 className --> */}
        <div className="item row justify-content-between">

          {/*  <!-- img-frame-legend-alpha demo --> */}
          <div className="col-12 col-sm-6 center-vh">
            <div className="section-content anim translateUp">
              <div className="images text-center">
                <div className="img-frame-legend-alpha">
                  <div className="img-1 shadow">
                    <img className="img" src="img/items/img-sample2.jpg" alt="Image" />
                  </div>
                  <div className="legend">
                    <h2 className="display-4">
                      <strong>Expedition</strong>
                    </h2>
                    <p className="">Photo / Campaign</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- img-frame-legend-alpha portrait mode bottom demo --> */}
          <div className="col-12 col-sm-6 col-md-5">
            <div className="section-content anim">
              {/* <!-- title and description --> */}
              <div className="title-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet
                  malesuada feugiat. Curabitur fermentum bibendum nulla, non dictum
                  ipsum tincidunt non. Quisque convallis pharetra tempor. Donec id
                  pretium leo. Pellentesque luctus massa non elit viverra pellentesque.
                  Cras vitae neque molestie, rhoncus ipsum sit amet, lobortis dui.
                  Fusce in urna sem.</p>
              </div>

              <a className="btn btn-transp-arrow btn-outline btn-primary btn-round" href="item.html#project_url">
                <span className="icon arrow-right"></span>
                <span className="text">View</span>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- end of item -->   */}
      </div>
      {/* <!-- End of section wrapper --> */}
        </div>
    //  <!-- End of list two side 1 section -->
    )
}

export default ListSliderSections
