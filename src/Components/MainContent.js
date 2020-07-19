import React from "react";
import HomeSection from "./MainContent/HomeSection";
import DescriptionSection from "./MainContent/DescriptionSection";
import SectionWrapper from "./MainContent/SectionWrapper";
import ListFeature from "./MainContent/ListFeature";
import PriceList from "./MainContent/PriceList";
import SliderSection from "./MainContent/SliderSection";

function MainContent() {
  return (
    <main className="page-main page-fullpage main-anim" id="mainpage">
      <HomeSection />
      <DescriptionSection />
      <SectionWrapper />
      <ListFeature />
      <PriceList />
      <SliderSection />
    </main>
  );
}

export default MainContent;
