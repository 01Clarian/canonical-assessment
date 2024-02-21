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
                <h4 className="canonical-assessment-section-subtitle-5">
                Outline your thoughts on the mission of Canonical. 
                  <br />  <br /> 
                  What is it about the company's purpose and goals which is most appealing to you? What is risky or unappealing? 
                  <br /> <br />  
                  Are there any elements of the company goals that you are unsure about?
                </h4>
                <br/>
                <div className="canonical-assessment-section-subtitle-4">
                  <div>
                  <div>
      <h2>Hook</h2>
      <p>
        As a passionate developer interested in the exciting world Canonical, Canonical deeply resonates with me, particularly for its unique blend of open-source philosophy, cutting-edge technology, and focus on user experience.
      </p>
      <h3>What's Appealing</h3>
      <ul>
        <li>
          <strong>Open-Source DNA</strong> Contributing to open-source projects like Vanilla Framework aligns perfectly with my desire to learn, collaborate, and give back to the developer community. Being part of something bigger than myself and directly impacting software used by millions is incredibly motivating.
        </li>
        <li>
          <strong>Technology Stack</strong> The focus on React and TypeScript aligns well with my current learning path. The opportunity to delve into back-end services with Python or Go further broadens my perspective and skillset.
        </li>
        <li>
          <strong>Accessibility Focus:</strong> Building inclusive products that cater to diverse needs is not just essential, but also personally fulfilling. Knowing accessibility is prioritized resonates deeply with my values.
        </li>
      </ul>
      <h3>Uncertainties and Inquiries</h3>
      <ul>
        <li>
          <strong>Balancing Vanilla Framework and Individuality:</strong> While I see the value of central design, I'm curious about opportunities for individual teams to express their brand identity within the framework's structure. Understanding this balance would be helpful.
        </li>
      </ul>
      <h3>Risky Factors</h3>
      <ul>
        <li>
          <strong>Rapidly Evolving Tech Landscape:</strong> Keeping up with bleeding-edge technologies can be both exhilarating and challenging. I'm aware of the constant learning curve but am fully committed to continuous improvement.
        </li>
        <li>
          <strong>Contributing to Large Codebases:</strong> Working on established open-source projects can be a big first dive before you begin to swim and feel comfortable. I'm eager to learn the best customized practices of the Canonical engineering teams and strategies to navigate this aspect.
        </li>
      </ul>
      <h3>Overall</h3>
      <p>
        Despite the uncertainties, Canonical's mission and technology stack ignite my passion for open-source development and accessibility. I'm confident that my eagerness to learn, dedication to quality, and collaborative spirit can be valuable assets to your team. The opportunity to contribute to innovative projects in such a supportive environment makes this role incredibly appealing.
      </p>
    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {context_data.slice(3, 6).map((item) => (
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
