import React from "react";

function PageCover() {
  return (
    //  <!-- BEGIN OF page cover -->
    <div className="page-cover">
      {/* <!-- Cover Background --> */}
      <div
        className="cover-bg bg-img"
        data-image-src="img/bg-default1.jpg"
      ></div>
      {/* <!-- Transluscent mask as filter --> */}
      <div
        className="cover-bg-mask bg-color"
        data-bgcolor="rgba(2, 3, 10, 0.7)"
      ></div>
    </div>
    //   <!--END OF page cover -->
  );
}

export default PageCover;
