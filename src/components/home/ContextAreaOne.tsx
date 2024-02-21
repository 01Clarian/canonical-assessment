import context_data from "@/data/context-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContextAreaOne = () => {
  return (
    <>
      <div className="context-area pb-180">
        <div className="container">
          <div className="row pb-55">
            <div className="col-xxl-12">
              <div className="canonical-assessment-section-title-wrap-4 text-center">
              <h4>WEB</h4>
                <p className="canonical-assessment-section-subtitle-5">
                  <br/>
                 A) What skill or knowledge have you acquired in the past year that has been particularly helpful?
                  <br /> B) What motivated you to learn it?
                  <br /> C) What has the impact been for you and your team?
                </p>
                <br/>
                <div className="canonical-assessment-section-subtitle-4">
                  <div>
                    <h3>Skill or Knowledge Acquired</h3>
                    <p>
                      Over the past year, <strong>I have delved into mastering Storybook, a tool for developing UI components in isolation for React applications</strong>. Additionally, <strong>I have honed my expertise in React and REST API development, particularly in the context of integrating with OpenAI for intelligent coding assistance</strong>. This involved <strong>creating and maintaining CRUD API endpoints for OpenAI and deep learning frameworks using Node.js and Express</strong>.
                    </p>
                    <h3>Motivation to Learn</h3>
                    <p>
                      The motivation to learn these skills originated from the growing importance of creating robust and visually appealing user interfaces and the need to integrate intelligent coding assistance seamlessly into web applications. Recognizing the significance of Storybook in facilitating UI component development and the demand for seamless integration with REST APIs, <strong>I was driven to acquire these skills to enhance my proficiency and meet the evolving needs of modern web development</strong>.
                    </p>
                    <h3>Impact for Myself and My Team</h3>
                    <p>
                      The impact of acquiring these skills has been substantial for both myself and my team. Individually, <strong>it has empowered me to lead the development of fully responsive user interfaces for logging pages, user settings, and the IDE using React, while also implementing custom React hooks and Context API for efficient state management</strong>. Furthermore, <strong>my expertise in creating and maintaining CRUD API endpoints for OpenAI and deep learning frameworks has facilitated the implementation of an intelligent coding assistant with deep learning and API integrations</strong>.
                    </p>
                    <p>
                      For the team, these skills have translated into <strong>enhanced user experiences, streamlined UI development processes, and the successful integration of intelligent coding assistance into our applications</strong>. This has notably <strong>contributed to the overall success of the projects I have been involved in, positioning me as a valuable contributor in the realm of frontend and backend development, particularly in the context of React, Storybook, and REST API integration with OpenAI</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {context_data.slice(0, 3).map((item) => (
              <div
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-4"
                key={item.id}
              >
                <div
                  className={
                    item.boxWrapperClass
                      ? `canonical-assessment-context-box-4 p-rel ${item.boxWrapperClass}`
                      : "canonical-assessment-context-box-4 p-rel"
                  }
                >
                  <div className="canonical-assessment-context-box-img-4 pb-35">
                    {item.image && (
                      <Image
                        src={item.image}
                        style={{ width: "auto", height: "148px" }}
                        alt="image not found"
                      />
                    )}
                  </div>
                  <div className="canonical-assessment-context-box-content-4 text-center">
                    <h5 className="canonical-assessment-context-box-title-4">
                      <Link href={`context-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h5>
                    <p className="canonical-assessment-context-box-text-4">
                      {item.description}
                    </p>
                    <Link
                      href={`context-details/${item.id}`}
                      className="canonical-assessment-context-box-read-more-link-4"
                    >
                      Learn More <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </div>
                  {item.animated ? <div className={item.animated}></div> : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContextAreaOne;
