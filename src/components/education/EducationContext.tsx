import React from "react";
import contextImg from "../../../public/assets/img/context/context_img_1.png";
import contextImg2 from "../../../public/assets/img/context/context_img_2.png";
import contextImg3 from "../../../public/assets/img/context/context_img_3.png";
import contextImg4 from "../../../public/assets/img/context/context_img_4.png";
import Image from "next/image";
import Link from "next/link";

const educationContext = () => {
  return (
    <div className="context-area pb-110">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="context-left-2 pl-70 pr-10">
              <div className="row mb-60 mb-lg-0">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="context-left-2-wrap">
                    <div
                      className="context-left-2-thumb mb-30 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <Image
                        src={contextImg}
                        style={{ width: "100%", height: "auto" }}
                        alt="image not found"
                      />
                    </div>
                    <div
                      className="context-left-2-thumb mb-30 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <Image
                        src={contextImg2}
                        style={{ width: "100%", height: "auto" }}
                        alt="image not found"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="context-left-2-wrap mt-30">
                    <div
                      className="context-left-2-thumb mb-30 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <Image
                        src={contextImg3}
                        style={{ width: "100%", height: "auto" }}
                        alt="image not found"
                      />
                    </div>
                    <div
                      className="context-left-2-thumb mb-30 wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <Image
                        src={contextImg4}
                        style={{ width: "100%", height: "auto" }}
                        alt="image not found"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="context-right-area-2 pl-70">
              <div className="section-title-2 mb-30">
                <h3
                  className="s-title visible-br-lg visible-br-md wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  Education and Hard Knocks Achievements 
                </h3>
                <p
                  className="s-desc wow fadeInUp line-height-24"
                  data-wow-delay=".4s"
                >
                  During my high school and university years, my most exceptional achievement wasn not within the traditional academic system. I discovered a passion for audio engineering. So, I moonlighted non-stop at a highly reverred analog studio in Montreal, building patch bays and configuring modular synths from the 60s – without any instruction manuals! By 22, this self-taught hustle landed me gigs at top companies and launched me on a journey that has taken me around the world highlighted by Rolling Stone, Mixmag, Vice, NY Mag, Guardian, The BBC etc...
                </p>
                <p
                  className="s-desc wow fadeInUp line-height-24"
                  data-wow-delay=".4s"
                  style={{fontWeight:"bold"}}
                >
                  Please scroll down to read each individual assessment question answered in listed numerical order.
                </p>
              </div>
              <div
                className="context-right-list-2 w-list-50 mb-30 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <ul>
                  <li className="context-right-list-item">
                    <i className="fal fa-check"></i> McGill Conservatory with Honors
                  </li>
                  <li className="context-right-list-item">
                    <i className="fal fa-check"></i> Grad Valedictorian
                  </li>
                  <li className="context-right-list-item">
                    <i className="fal fa-check"></i> Over 100,000 Engineers Trained
                  </li>
                  <li className="context-right-list-item">
                    <i className="fal fa-check"></i> Critically Acclaimed Engineer
                  </li>
                </ul>
              </div>
              <div
                className="context-right-link-2 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <Link href="https://www.udemy.com/user/clariannorth" className="canonical-assessment-theme-btn">
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default educationContext;
