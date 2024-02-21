import React from "react";
import CtaBg from "../../../public/assets/img/bg/cta-1.png";
import Link from "next/link";

const educationCtaArea = () => {
  return (
    <div
      className="cta-area cta-1-space pt-135 pb-135 bg-default default-cta-bg cta-bg-default"
      style={{ backgroundImage: `url(${CtaBg.src})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xxl-6 col-xl-8 col-lg-7 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="cta-left mb-30 mb-lg-0">
              <span className="cta-subtitle-1">Call To Action</span>
              <h3 className="cta-title-1">
                Join canonical-assessment and increase your productivity.
              </h3>
            </div>
          </div>
          <div
            className="col-xxl-6 col-xl-4 col-lg-5 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="cta-actions text-lg-end">
              <Link href="/contact" className="cta-border-btn">
                Get Started
              </Link>
              <Link href="/contact" className="cta-solid-btn ml-15">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default educationCtaArea;
