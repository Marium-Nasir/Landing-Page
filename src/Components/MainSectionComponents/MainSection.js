import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import BlackCard from "./BlackCard";
import BottomCards from "./BottomCards";
import Footer from "../FooterComponent/Footer";

const MainSection = () => {
  return (
    <>
      <div className="lg:w-full w-full m-[0] bg-[#F0F0F0] flex flex-col">
        <Card1 />
        <Card2 />
        <Card3 />
        <BlackCard />
        <BottomCards />
        <Footer />
      </div>
    </>
  );
};

export default MainSection;
