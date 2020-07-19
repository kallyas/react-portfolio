import React from "react";
import PageLoader from "./Components/PageLoader";
import Header from "./Components/Header";
import PageCover from "./Components/PageCover";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div>
      <PageLoader />
      <Header />
      <PageCover />
      <MainContent />
    </div>
  );
}

export default App;
