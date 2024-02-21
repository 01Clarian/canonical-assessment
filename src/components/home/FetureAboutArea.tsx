import Link from "next/link";
import React from "react";
import shape1 from "../../../public/assets/img/shape/line-section.png";
import shape2 from "../../../public/assets/img/shape/line-section-inner.png";
import dashboardImg from "../../../public/assets/img/dashbord/dashbord-4-1.png";
import dashboardImgTwo from "../../../public/assets/img/dashbord/dashbord-4-3.png";
import dashboardImgThree from "../../../public/assets/img/dashbord/dashbord-4-2.png";
import dashboardImgFour from "../../../public/assets/img/dashbord/dashbord-4-4.png";

import Image from "next/image";

const FetureeducationArea = () => {
  return (
    <div className="features-education-area pb-150">
      <div className="container p-rel">
        <div className="canonical-assessment-features-education-left-shape-4">
          <Image
            src={shape1}
            style={{ width: "100%", height: "auto" }}
            alt="image not found"
          />
        </div>
        <div className="canonical-assessment-features-education-left-shape-4-2">
          <Image
            src={shape2}
            style={{ width: "100%", height: "auto" }}
            alt="image not found"
          />
        </div>
        <div className="row">
          <div className="col-xxl-8 col-xl-6 col-lg-6">
            <div className="canonical-assessment-features-education-box-main-space pl-10 pr-90">
              <div className="canonical-assessment-features-education-dashbord-wrap-4 canonical-assessment-features-education-dashbord-has-before">
                <div className="row g-20  canonical-assessment-features-education-custom-row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="canonical-assessment-features-education-dashbord-img-4-1">
                      <Image
                        src={dashboardImg}
                        style={{ width: "auto", height: "auto" }}
                        className="wow bounceInUp"
                        data-wow-delay=".1"
                        alt="image not found"
                      />
                    </div>
                    <div className="canonical-assessment-features-education-dashbord-img-4-2">
                      <Image
                        src={dashboardImgTwo}
                        style={{ width: "auto", height: "auto" }}
                        className="wow bounceInUp"
                        data-wow-delay=".2s"
                        alt="image not found"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="canonical-assessment-features-education-dashbord-img-4-3">
                      <Image
                        src={dashboardImgThree}
                        style={{ width: "auto", height: "auto" }}
                        className="wow bounceInUp"
                        data-wow-delay=".3s"
                        alt="image not found"
                      />
                    </div>
                    <div className="canonical-assessment-features-education-dashbord-img-4-4">
                      <Image
                        src={dashboardImgFour}
                        style={{ width: "auto", height: "auto" }}
                        className="wow bounceInUp"
                        data-wow-delay=".4s"
                        alt="image not found"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-lg-6">
            <div className="canonical-assessment-features-education-box-right pt-15">
              <div className="canonical-assessment-section-title-wrap-4 mb-30">
                <span className="canonical-assessment-section-badge-4 mb-15">
                  Modern Developments
                </span>
                <p className="canonical-assessment-section-subtitle-5">
                  What new skill would be next on your list to acquire? Why do you think that will be helpful or important to you? Why do you think you will handle it well?
                </p>
                <div className="canonical-assessment-section-subtitle-4">
                  <p>Driven by a passion for innovation, I&apos;m constantly seeking new ways to enhance my React skills and push the boundaries of what&apos;s possible.</p>
                  <section className="skill-focus">
                    <p>My Next Skill: Mastering the "React Hooks API" Evolution</p>
                    <ul>
                      <li>Deeper understanding of custom hooks for modularity, reusability, and complex state management.</li>
                      <li>Mastering advanced hook composition for building intricate UI behaviors.</li>
                      <li>Integrating libraries like React Query for streamlined data fetching and state management.</li>
                    </ul>
                  </section>
                  <section className="confidence">
                    <h2>Why I&apos;m Confident</h2>
                    <ul>
                      <li>Solid foundation in core hooks.</li>
                      <li>Proactive learning mindset.</li>
                      <li>Engaged with the vibrant React community.</li>
                    </ul>
                  </section>
                </div>
              </div>
              <Link
                href="https://www.udemy.com/user/clariannorth/"
                className="canonical-assessment-featured-bordered-btn-4"
              >
                <span>View My Courses</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetureeducationArea;
