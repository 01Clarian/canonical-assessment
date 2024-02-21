"use client";

import React from "react";
import BannerImage from "../../../../public/assets/img/bg/banner-1.png";
import Icon1 from "../../../../public/assets/img/icon/icon-4-1.png";
import Icon2 from "../../../../public/assets/img/icon/icon-4-4.png";
import Icon3 from "../../../../public/assets/img/icon/icon-4-6.png";
import Icon4 from "../../../../public/assets/img/icon/icon-4-3.png";
import Icon5 from "../../../../public/assets/img/icon/icon-4-5.png";
import HeroImg from "../../../../public/assets/img/hero/hero-2.png";
import Image from "next/image";

const Hero = () => {

  const handleScroll = () => {
    window.scroll({
      top: 800, // Adjust this value to scroll down by the desired amount
      behavior: "smooth" // Optional: Add smooth scrolling behavior
    });
  };

  return (
    <div
      className="hero-area canonical-assessment-hero-height-4 p-rel bg-top-left d-flex align-items-center"
      style={{ backgroundImage: `url(${BannerImage.src})` }}
    >
      <div className="hero-area-shape-wrap-4">
        <div className="shape-1">
          <Image
            src={Icon1}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
        </div>
        <div className="shape-2">
          <Image
            src={Icon2}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
        </div>
        <div className="shape-3">
          <Image
            src={Icon3}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
        </div>
      </div>
      <div className="container p-rel">
        <div className="hero-container-shape-wrap-4">
          <div className="shape-3">
            <Image
              src={Icon4}
              style={{ width: "auto", height: "auto" }}
              alt="image not found"
            />
          </div>
          <div className="shape-4">
            <Image
              src={Icon5}
              style={{ width: "auto", height: "auto" }}
              alt="image not found"
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="canonical-assessment-hero-content-4">
              <span className="canonical-assessment-hero-subtitle-4">
                Maurice Knecht Profile
              </span>
              <h3 className="canonical-assessment-hero-title-4">
                Canonical <br />
                Assessment
                <br /> Built in Vanilla Framework 
              </h3>
              <p className="canonical-assessment-hero-text-4">
                Written assessment #2: Built in React, Next Js, Typescript, Sass & 
                the hero of our event: Vanilla Framework
              </p>
              <a onClick={handleScroll}
              
              className="canonical-assessment-hero-started-btn-4">
                <span>Get Started</span>
              </a>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6"
                      style={{marginBottom:'30px'}}

          >
            <div className="canonical-assessment-hero-content-right-img-4"            >
              <Image
                src={HeroImg}
                style={{ width: "auto", height: "auto" }}
                alt="image not found"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
