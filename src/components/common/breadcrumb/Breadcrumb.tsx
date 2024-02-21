import React from "react";
import Link from "next/link";
import bgImage from "../../../../public/assets/img/bg/breadcrumb_bg.jpg";

interface PropsData {
  title: string | undefined;
  subTitle: string | undefined;
}

const Breadcrumb = ({ title, subTitle }: PropsData) => {
  return (
    <>
      <div
        className="breadcrumb-area pt-215 pb-140 mb-120 pb-130"
        style={{ backgroundImage: `url(${bgImage.src})` }}
        data-background="assets/img/bg/breadcrumb_bg.jpg"
      >
        <div className="container">
          <div className="breadcrumb-content text-center">
            <h3 className="breadcrumb-title">{title}</h3>
            <div className="breadcrumb-trail">
              <nav>
                <ul className="trail-items">
                  <li className="trail-item">
                    <Link href="/">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="trail-item">
                    <span>{subTitle}</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
