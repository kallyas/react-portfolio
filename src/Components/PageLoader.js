import React from "react";

const PageLoader = () => {
  return (
    //    <!-- Page Loader : just comment these lines to remove it -->
    <div className="page-loader" id="page-loader">
      <div>
        <div className="icon ion-spin"></div>
        <p>loading</p>
      </div>
    </div>
  );
};

export default PageLoader;
