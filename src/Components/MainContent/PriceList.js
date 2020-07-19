import React from "react";

function PriceList() {
  return (
    //  <!-- Begin of pricelist section -->
    <div className="section section-pricelist " data-section="pricelist">
      {/* <!-- Begin of section wrapper --> */}
      <div className="section-wrapper center-vh dir-col anim">
        {/* <!-- title --> */}
        <div className="section-title text-center">
          <h5 className="title-bg">Pricing</h5>
          <h2 className="display-4 display-title anim-2">Pricing</h2>
        </div>

        {/* <!-- content --> */}
        <div className="section-content anim text-center fullwidth">
          {/* <!-- Princing table --> */}
          <div className="price-table">
            <div className="row">
              <div className="col-12 col-md-4">
                {/* <!-- begin of price item --> */}
                <div className="price-item price-item-secondary shadow mb-4 sr-up-td4">
                  <h4 className="item-name">Lite</h4>
                  <div className="item-price">Free</div>
                  <ul className="item-features text-left">
                    <li className="ok">
                      <i className="icon fa fa-star"></i>Full Components
                    </li>
                    <li className="ok">
                      <i className="icon fa fa-check"></i>Future Updates
                    </li>
                    <li className="ok">
                      <i className="icon fa fa-check"></i>Documentation
                    </li>
                    <li className="ok">
                      <i className="icon fa fa-check"></i>Customer Support
                    </li>
                    <li className="diseabled">
                      <i className="icon fa fa-remove"></i>Cool Option
                    </li>
                  </ul>
                  <div className="item-footer">
                    <a className="btn btn-secondary btn-round" href="#services">
                      Download
                    </a>
                  </div>
                </div>
                {/* <!-- end of price item --> */}
              </div>

              <div className="col-12 col-md-4">
                {/* <!-- begin of price item --> */}
                <div className="price-item featured price-item-primary shadow mb-4 sr-up-td2">
                  <h4 className="item-name">Standard</h4>
                  <div className="item-price">$24</div>
                  <ul className="item-features text-left">
                    <li className="ok">
                      <i className="icon fa fa-star"></i>Full Components
                    </li>
                    <li className="ok">
                      <i className="icon fa fa-check"></i>Future Updates
                    </li>
                    <li className="ok">
                      <i className="icon fa fa-check"></i>Documentation
                    </li>
                    <li className="ok">
                      <i className="icon fa fa-check"></i>Customer Support
                    </li>
                    <li className="diseabled">
                      <i className="icon fa fa-remove"></i>Cool Option
                    </li>
                  </ul>
                  <div className="item-footer">
                    <a className="btn btn-primary btn-round" href="#services">
                      Purchase
                    </a>
                  </div>
                </div>
                {/* <!-- end of price item --> */}
              </div>

              <div className="col-12 col-md-4">
                {/* <!-- begin of price item --> */}
                <div className="price-item price-item-primary shadow sr-up-td3">
                  <h4 className="item-name">Ultimate</h4>
                  <div className="item-price">$39</div>
                  <ul className="item-features text-left">
                    <li className="ok">
                      <i className="icon fa fa-star"></i>Full Components
                    </li>
                    <li className="ok">
                      <i className="icon fa fa-check"></i>Future Updates
                    </li>
                    <li className="ok">
                      <i className="icon fa fa-check"></i>Documentation
                    </li>
                    <li className="ok">
                      <i className="icon fa fa-check"></i>Customer Support
                    </li>
                    <li className="diseabled">
                      <i className="icon fa fa-remove"></i>Cool Option
                    </li>
                  </ul>
                  <div className="item-footer">
                    <a className="btn btn-primary btn-round" href="#services">
                      Subscribe
                    </a>
                  </div>
                </div>
                {/* <!-- end of price item --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of section wrapper --> */}
    </div>
    // <!-- End of pricelist section -->
  );
}

export default PriceList;
