import React from "react";
import Hero from "../common/Hero/Hero";
import BrandSlider from "../Elements/Slider/BrandSlider";
import ContextAreaOne from "./ContextAreaOne";
import FetureeducationArea from "./FetureAboutArea";
import FutureArea from "./FutureArea";
import TestimonialSlider from "../Elements/Slider/TestimonialSlider";
import EducationDashboard from "./AboutDeshboard";
import BlogSection from "./BlogSection";
import CtaMainArea from "./CtaMainArea";

const HomeMainArea = () => {
  return (
    <>
      <Hero />
      <BrandSlider />
      <ContextAreaOne />
      <FetureeducationArea />
      <FutureArea />
    </>
  );
};

export default HomeMainArea;
