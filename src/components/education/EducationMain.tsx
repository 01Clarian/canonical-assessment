import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FutureArea from "../home/FutureArea";
import Educationcontext from "./EducationContext";
import EducationTestimonialSlider from "../Elements/Slider/EducationTestimonialSlider";
import EducationBrandSlider from "../Elements/Slider/EducationBrandSlider";
import EducationCtaArea from "./EducationCtaArea";

const EducationMain = () => {
  return (
    <>
      <Breadcrumb title="Education" subTitle="Life & Academic" />
      <Educationcontext />
      <EducationTestimonialSlider />
      <EducationBrandSlider />
    </>
  );
};

export default EducationMain;
