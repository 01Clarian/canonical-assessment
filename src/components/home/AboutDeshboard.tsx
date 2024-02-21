import Link from "next/link";
import React from "react";
import ShapeOne from "../../../public/assets/img/shape/shape-4-1.png";
import ShapeTwo from "../../../public/assets/img/shape/shape-4-2.png";
import ShapeThree from "../../../public/assets/img/shape/shape-4-3.png";
import ShapeFour from "../../../public/assets/img/shape/shape-4-4.png";
import ShapeFive from "../../../public/assets/img/shape/shape-4-5.png";
import educationImg from "../../../public/assets/img/feature/education-3d.png";
import DeshboardImg from "../../../public/assets/img/dashbord/tablet.png";
import icon1 from "../../../public/assets/img/icon/context-icon-1.png";
import icon2 from "../../../public/assets/img/icon/context-icon-2.png";
import icon3 from "../../../public/assets/img/icon/context-icon-3.png";
import icon4 from "../../../public/assets/img/icon/context-icon-4.png";
import userImg from "../../../public/assets/img/user/t-user-2.png";
import StarIcon from "../../../public/assets/img/icon/star.png";
import Image, { StaticImageData } from "next/image";

interface contextType {
  id: number;
  icon: StaticImageData;
  title: string;
}

const AboutDashboard = () => {
  const contexts: contextType[] = [
    {
      id: 1,
      icon: icon1,
      title: "Daily Auto Update",
    },
    {
      id: 2,
      icon: icon2,
      title: "Why Choose canonical-assessment",
    },
    {
      id: 3,
      icon: icon3,
      title: "Accelerated Process",
    },
    {
      id: 4,
      icon: icon4,
      title: " Google Analytics",
    },
  ];
  return (
    <div
      className="education-dashbord-area pt-120 pb-130 p-rel"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="canonical-assessment-education-dashbord-shape-wrap">
        <div className="shape-1">
          <Image
            src={ShapeOne}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
        </div>
        <div className="shape-2">
          <Image
            src={ShapeTwo}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
        </div>
        <div className="shape-3">
          <Image
            src={ShapeThree}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
        </div>
        <div className="shape-4">
          <Image
            src={ShapeFour}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
        </div>
        <div className="shape-5">
          <Image
            src={ShapeFive}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
        </div>
      </div>
      <div className="container">
        <div className="row pb-65">
          <div className="col-xxl-7 col-xl-7 col-lg-12">
            <div className="canonical-assessment-education-dashbord-left-4">
              <div className="canonical-assessment-education-dashbord-avatar-4">
                <Image
                  src={educationImg}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="canonical-assessment-education-dashbord-avatar-4-2">
                <Image
                  src={DeshboardImg}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-12">
            <div className="canonical-assessment-education-dashbord-right-4 pt-25">
              <div className="canonical-assessment-section-title-wrap-4 mb-30">
                <span className="canonical-assessment-section-badge-4 mb-15">
                  {" "}
                  Workflow Integration
                </span>
                <h4 className="canonical-assessment-section-title-4">
                  Why you
                  <br /> Should choose canonical-assessment
                </h4>
                <p className="canonical-assessment-section-subtitle-4">
                  So how does it work? Let’s check our Getting Started tutorial
                  pre-made templates.
                </p>
              </div>
              <div className="canonical-assessment-sm-project-template-box-4">
                <div className="canonical-assessment-sm-project-template-box-img-4">
                  <Image
                    src={userImg}
                    style={{ width: "auto", height: "auto" }}
                    alt="image not found"
                  />
                  <div className="canonical-assessment-sm-project-template-box-icon-4">
                    <Image
                      src={StarIcon}
                      style={{ width: "auto", height: "auto" }}
                      alt="image not found"
                    />
                  </div>
                </div>
                <div className="canonical-assessment-sm-project-template-box-content-4">
                  <p>
                    <span>We have three projects template</span> large number of
                    possibilities to customize.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="canonical-assessment-education-dashbord-context-wrap-4">
          <div className="row">
            {contexts.map((item) => (
              <div
                className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6"
                key={item.id}
              >
                <div className="canonical-assessment-education-dashbord-context-single-4">
                  <div className="canonical-assessment-education-dashbord-context-icon-4">
                    <Image
                      src={item.icon}
                      style={{ width: "auto", height: "auto" }}
                      alt="image not found"
                    />
                  </div>
                  <div className="canonical-assessment-education-dashbord-context-content-4">
                    <h5 className="canonical-assessment-education-dashbord-context-title-4">
                      {item.title}
                    </h5>
                    <Link
                      href="/context"
                      className="canonical-assessment-education-dashbord-context-link-4"
                    >
                      Learn More <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDashboard;
