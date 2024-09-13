import CardContanier from "@/components/CardContanier";
import CircleSection from "@/components/CircleSection";
import CompanyContainer from "@/components/CompanyContainer";
import CustomerSection from "@/components/CustomerSection";
import Hero from "@/components/Hero";
import LetsTalk from "@/components/LetsTalk";
import Marquee from "@/components/Marquee";
import StateSection from "@/components/StateSection";
import StickyCards from "@/components/StickyCards";
import Swipper from "@/components/Swipper";
import VideoSection from "@/components/VideoSection";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <CompanyContainer />
      <Marquee/>
      <CardContanier/>
      <VideoSection/>
      <StickyCards/>
      <CircleSection/>
      <StateSection/>
      <CustomerSection/>
      <Swipper/>
      <LetsTalk/>
    </>
  );
};

export default page;
