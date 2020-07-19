import React from "react";

function DescriptionSection() {
  return (
    //   <!-- Begin of description section -->
    <div
      className="section section-description fp-auto-height-responsive "
      data-section="about"
    >
      {/* <!-- Begin of section wrapper --> */}
      <div className="section-wrapper center-vh dir-col anim">
        {/* <!-- title --> */}
        <div className="section-title text-center">
          <h5 className="title-bg">About</h5>
          <h2 className="display-4 display-title anim-2">
            Modern Website for your business
          </h2>
        </div>

        {/* <!-- content --> */}
        <div className="section-content reduced anim text-center">
          {/* <!-- title and description --> */}
          <div className="title-desc anim-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              aliquet malesuada feugiat. Curabitur fermentum bibendum nulla, non
              dictum ipsum tincidunt non. Cras vitae neque molestie, rhoncus
              ipsum sit amet, lobortis dui. Fusce in urna sem.
            </p>
          </div>
        </div>

        {/* <!-- Arrows scroll down/up --> */}
        <footer className="section-footer scrolldown">
          <a className="down">
            <span className="icon"></span>
            <span className="txt">Team</span>
          </a>
        </footer>
      </div>
      {/* <!-- End of section wrapper --> */}
    </div>
    // <!-- End of description section -->
  );
}

export default DescriptionSection;
