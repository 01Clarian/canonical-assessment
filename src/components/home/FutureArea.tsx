import React from "react";
import FutureImg from "../../../public/assets/img/bg/feature-bg-1.png";
import FutureImgTwo from "../../../public/assets/img/bg/feature-bg-2.png";
import FutureImgThree from "../../../public//assets/img/bg/feature-bg-4.png";
import FutureImgFour from "../../../public/assets/img/bg/feature-bg-5.png";
import thumb1 from "../../../public/assets/img/feature/feature-3d-1.png";
import thumb2 from "../../../public/assets/img/dashbord/dashbord-feature-4-1.png";
import thumb3 from "../../../public/assets/img/dashbord/dashbord-feature-4-2.png";
import thumb4 from "../../../public/assets/img/feature/feature-3d-2.png";
import thumb5 from "../../../public/assets/img/dashbord/dashbord-4-2-1.png";
import thumb6 from "../../../public/assets/img/dashbord/analytics-dashbord-4-1.png";
import thumb7 from "../../../public/assets/img/dashbord/analytics-dashbord-4-2.png";
import thumb8 from "../../../public/assets/img/feature/feature-3d-3.png";
import thumb9 from "../../../public/assets/img/feature/feature-3d-4.png";
import thumb10 from "../../../public/assets/img/feature/feature-3d-5.png";
import Image from "next/image";
import Link from "next/link";

const FutureArea = () => {
  return (
    <>
      <div className="features-area has-feature-top-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="canonical-assessment-section-title-wrap-4 mb-70 text-center">
                <span className="canonical-assessment-section-badge-4 mb-15">Maurice&apos;s Strengths</span>
                <h4 className="canonical-assessment-section-title-4">
                  If you can think it, I
                  <br /> Can build it.
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div
                className="canonical-assessment-features-box-4 mb-30 bg-default"
                style={{ backgroundImage: `url(${FutureImg.src})` }}
              >
                <div className="canonical-assessment-features-box-content-top-4 mb-65">
                  <h4 className="canonical-assessment-features-box-title-4">
                    <div>
                      In your experience, which libraries and frameworks do you think will succeed in Web development tool sets?
                      <br /> Campaigns
                    </div>
                  </h4>
                  <div
                    className="canonical-assessment-context-box-read-more-link-4"
                  >
                    <div>
                      <h2>Web Development Outlook</h2>
                      <h6>1. React and its Ecosystem:</h6>
                      <ul>
                        <li>React itself is likely to solidify its position due to its component-based architecture, flexibility, and strong community.</li>
                        <li>Next.js: Its server-side rendering, static site generation, and data fetching capabilities make it ideal for performance-critical applications and SEO.</li>
                        <li>Remix: While still young, Remix&apos;s focus on server-side rendering, routing, and data fetching could make it a strong contender, especially for large-scale or data-intensive projects.</li>
                      </ul>
                      <br />
                      <h6>2. TypeScript:</h6>
                      <ul>
                        <li>Its optional static typing enhances code stability and maintainability, making it crucial for larger codebases or complex projects.</li>
                        <li>Integration with React and frameworks like Next.js is already strong, and its adoption is likely to grow.</li>
                      </ul>
                      <br />
                      <h6>3. WebAssembly (Wasm):</h6>
                      <ul>
                        <li>As Wasm matures and integrates better with JavaScript frameworks, it will unlock doors for high-performance web applications, especially for computationally intensive tasks.</li>
                      </ul>
                      <br />
                      <h6>4. Progressive Web App (PWA) Tools:</h6>
                      <ul>
                        <li>With increasing demand for offline capabilities and native-like experiences, frameworks like Workbox and PWA Builder will gain importance.</li>
                      </ul>
                      <br />
                      <h6>5. Data Management Libraries:</h6>
                      <ul>
                        <li>GraphQL and React Query offer efficient and flexible ways to handle data fetching and state management, likely shaping the future of data handling in React apps.</li>
                      </ul>
                      <br />
                      <h6>Beyond Established Trends:</h6>
                      <ul>
                        <li>Focus on Accessibility: Libraries and frameworks that prioritize accessibility (e.g., A11y React) will see increased adoption due to legal and ethical considerations.</li>
                        <li>Security-Focused Tools: With growing security concerns, frameworks incorporating built-in security features or integrating seamlessly with security libraries will be valued.</li>
                        <li>Emerging JavaScript Features: As experimental features like Class Fields and Decorators become stable, frameworks may need to adapt to support them.</li>
                      </ul>
                      <p>Remember: This is just my speculative outlook, and the web development landscape is constantly evolving. The key is to stay adaptable and keep learning to remain relevant!</p>
                    </div>
                  </div>
                </div>
                <div className="canonical-assessment-features-box-content-bottom-4-1">
                  <div className="canonical-assessment-features-box-content-img-left-4">
                    <Image
                      src={thumb1}
                      style={{ width: "auto", height: "auto" }}
                      alt="image not found"
                    />
                  </div>
                  <div className="canonical-assessment-features-box-content-img-wrap-4">
                    <div className="item-1">
                      <Image
                        src={thumb2}
                        className="wow bounceInUp"
                        data-wow-delay=".1s"
                        style={{ width: "auto", height: "auto" }}
                        alt="image not found"
                      />
                    </div>
                    <div className="item-2">
                      <Image
                        src={thumb3}
                        className="wow bounceInUp"
                        data-wow-delay=".3s"
                        style={{ width: "auto", height: "auto" }}
                        alt="image not found"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div
                className="canonical-assessment-features-box-4 mb-30 style-2 bg-default"
                style={{ backgroundImage: `url(${FutureImgTwo.src})` }}
              >
                <div className="canonical-assessment-features-box-content-top-4 mb-95">
                  <h4 className="canonical-assessment-features-box-title-4">
                    <div>
                      Describe your experience of web programming - JavaScript, Typescript, React, CSS and Python in particular.
                    </div>
                  </h4>
                  <div>
                    <h2>My Web Programming Experience</h2>
                    <p>
                      Let&apos;s dive into my web programming experience! When it comes to JavaScript and TypeScript, I consider myself a front-end maestro. Building beautiful, responsive, and performant UIs is my jam. Whether it&apos;s the music streaming platform I led, or the educational tools I crafted, I thrive on creating engaging user experiences. My expertise in React and Next.js is rock-solid, and I&apos;m a whiz at integrating third-party APIs to make things tick seamlessly.
                    </p>
                    <p>
                      But I&apos;m not just a front-end one-trick pony. I&apos;ve delved into full-stack territory with Node.js and Express. From crafting secure CRUD APIs to implementing deep learning algorithms, I enjoy getting my hands dirty on the back-end too. This flexibility makes me a valuable asset, able to adapt to diverse project needs.
                    </p>
                    <p>
                      Now, let&apos;s talk about React and CSS. Designing and building initial UI/UX prototypes is something I truly relish. It&apos;s where my strategic thinking and creativity come together to translate ideas into user-friendly interfaces. From artist profiles to payment flows, I&apos;ve tackled various challenges with a focus on both functionality and aesthetics.
                    </p>
                    <p>
                      While JavaScript technologies are my sweet spot, I&apos;ve also dabbled in Python. Whether it was for data analysis, scripting, or even back-end development, this exposure shows my willingness to learn and adapt new languages. It&apos;s all about expanding my skillset and becoming a more well-rounded developer.
                    </p>
                    <p>
                      In a nutshell, I&apos;m a passionate and results-oriented developer who thrives in dynamic environments. I&apos;m comfortable taking ownership, leading projects, and constantly seeking new challenges and technologies to conquer. My impressive track record and dedication to growth make me confident I can be a valuable asset to your team.
                    </p>
                    <p>
                      So, how can my skills and experience contribute to your specific needs? Let&apos;s explore that further!
                    </p>
                  </div>
                </div>
                <div className="canonical-assessment-features-box-content-bottom-4-2">
                  <div className="canonical-assessment-features-box-3d-img-4-2">
                    <Image
                      src={thumb4}
                      style={{ width: "auto", height: "auto" }}
                      alt="image not found"
                    />
                  </div>
                  <div className="canonical-assessment-features-box-3d-img-4-2-2">
                    <Image
                      src={thumb5}
                      style={{ width: "auto", height: "auto" }}
                      alt="image not found"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div
                className="canonical-assessment-features-box-4 mb-30 style-3 bg-default"
                style={{ backgroundImage: `url(${FutureImgThree.src})` }}
              >
                <div className="canonical-assessment-features-box-content-top-4 mb-60">
                  <h4 className="canonical-assessment-features-box-title-4">
                    <div>
                      Describe your experience building large systems with many services - web front ends, REST APIs, data stores, event processing and other kinds of integration between components. What are the key things to think about in regard to architecture, maintainability, and reliability in these large systems?
                    </div>
                  </h4>
                  <div>
                    <h2>Professional Experience</h2>
                    <p>
                      <strong>Leading Tamastream&apos;s Development:</strong> As the front-end lead at Tamastream, I played a pivotal role in building the platform from the ground up. We hit 43 million impressions worldwide, and I&apos;m proud of my contributions to:
                    </p>
                    <ul>
                      <li>Designing the initial UI/UX prototype: This included the core music streaming player, which laid the foundation for a user-friendly experience.</li>
                      <li>Choosing the tech stack: Opting for Next.js, React, and Tailwind CSS ensured performance, maintainability, and a visually appealing interface.</li>
                      <li>Leading the development of key features: I spearheaded the creation of artist profiles, search algorithms, and payment processing UIs, enhancing user functionality and engagement.</li>
                    </ul>
                    <p>
                      <strong>Empowering Developers with Web3:</strong> I developed the official Web3 NEAR Education course on Udemy, currently boasting over 7,000 enrollments. I&apos;m passionate about helping others get up to speed with these cutting-edge technologies.
                    </p>
                    <p>
                      <strong>Boosting Efficiency with Content Management:</strong> My work at Listed Productions involved building a full-stack CMS system for a thriving Booking Agency. This streamlined content management processes, making website updates smoother and content creation more efficient.
                    </p>
                    <p>
                      <strong>Creative Collaboration on "No Fantasy Required":</strong> As Lead Engineer at Universal Publishing with Tiga, I led a team and defined the technical infrastructure for his acclaimed LP. This involved innovative audio engineering solutions and digital media technologies, all while remaining within budget and on schedule.
                    </p>
                    <p>
                      <strong>Beyond the Technical:</strong> While I understand the technical complexities of large systems, I also recognize the importance of other aspects like:
                    </p>
                    <ul>
                      <li>Architecture: I prioritize choosing the right tools for the job, like Next.js and Kubernetes, to ensure scalability, maintainability, and reliability.</li>
                      <li>Maintainability: I write clean and efficient code, utilizing techniques like state management and secure authentication to make systems easier to update and manage.</li>
                      <li>Reliability: Deploying systems with high uptime and availability is crucial. I have experience with GKE and other tools to achieve this.</li>
                    </ul>
                    <p>
                      I&apos;m confident that my blend of technical expertise, teamwork, and leadership skills makes me a valuable asset for building and maintaining large systems. I&apos;m always eager to learn and adapt to new challenges, and I&apos;m passionate about creating systems that are both powerful and user-friendly.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-8">
                    <div className="canonical-assessment-features-box-content-bottom-4-3">
                      <div className="canonical-assessment-features-box-3d-img-4-3">
                        <Image
                          src={thumb6}
                          style={{ width: "auto", height: "auto" }}
                          className="wow bounceInUp"
                          data-wow-delay=".1s"
                          alt="image not found"
                        />
                      </div>
                      <div className="canonical-assessment-features-box-3d-img-4-2-3">
                        <Image
                          src={thumb7}
                          style={{ width: "auto", height: "auto" }}
                          className="wow bounceInUp"
                          data-wow-delay=".3s"
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4">
                    <div className="canonical-assessment-features-box-3d-img-4-3-img">
                      <Image
                        src={thumb8}
                        style={{ width: "auto", height: "auto" }}
                        alt="image not found"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div
                className="canonical-assessment-features-box-4 mb-30 style-4 bg-default"
                style={{ backgroundImage: `url(${FutureImgFour.src})` }}
              >
                <div className="canonical-assessment-features-box-content-top-4 mb-60">
                  <h4 className="canonical-assessment-features-box-title-4">
                    <a href="/context">
                    Describe any experience you have with Flutter.
                    </a>
                  </h4>
                  <div className="intro">
                    <h6>Stepping into the Flutterverse: My Perspective</h6>
                    <p>
                      As a mobile developer currently utilizing React Native and Expo, I&apos;ve
                      developed a strong interest in Flutter&apos;s capabilities. Having explored
                      some online examples, I&apos;m impressed by its hot reload functionality and
                      expressive UI approach.
                    </p>
                    <p>
                      While my experience with Flutter isn&apos;t extensive, my background in
                      cross-platform development through React Native and Expo provides a
                      valuable foundation. Both frameworks share similarities in hot reload,
                      declarative UI, and the ability to build cross-platform apps, easing my
                      transition into the Flutter learning curve.
                    </p>
                    <h6>Breakdown of My Perspective on Learning Flutter in a Few Weeks:</h6>
                    <h4>Technical Similarities:</h4>
                    <ul>
                      <li>
                        <strong>Cross-platform development:</strong> Both React Native and Flutter
                        offer efficient code reusability for building iOS and Android apps.
                      </li>
                      <li>
                        <strong>Declarative UI:</strong> Both frameworks utilize a declarative
                        approach where you define the UI, and the framework renders it
                        accordingly.
                      </li>
                      <li>
                        <strong>Hot reload:</strong> Both streamline development with instant
                        updates reflecting code changes, fostering an agile development
                        experience.
                      </li>
                    </ul>
                    <h6>Unique Advantages of Flutter:</h6>
                    <ul>
                      <li>
                        <strong>Native performance:</strong> Compiling code directly into native
                        ARM code, Flutter often showcases performance benefits compared to
                        React Native&apos;s JavaScript bridge approach.
                      </li>
                      <li>
                        <strong>Customizable UI:</strong> Flutter&apos;s extensive widget library and
                        custom widget capabilities provide greater control over UI design,
                        enabling the creation of unique and visually appealing apps.
                      </li>
                    </ul>
                    <h6>Strategies for Accelerated Learning:</h6>
                    <ul>
                      <li>
                        <strong>Official Flutter Tutorials:</strong> The well-structured official
                        tutorials effectively guide beginners through the fundamentals.
                      </li>
                      <li>
                        <strong>Engaging with the Flutter Community:</strong> Stack Overflow,
                        forums, and the Flutter Awesome list provide valuable resources for
                        troubleshooting, tips, and inspiration.
                      </li>
                      <li>
                        <strong>Hands-on Practice:</strong> Building small projects based on
                        tutorials or app ideas solidifies theoretical knowledge through
                        practical application.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-7">
                    <div className="canonical-assessment-features-message-img-4-1">
                      <Image
                        src={thumb9}
                        style={{ width: "auto", height: "auto" }}
                        className="wow bounceInUp"
                        data-wow-delay=".1s"
                        alt="image not found"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-5">
                    <div className="canonical-assessment-features-message-img-4-2">
                      <Image
                        src={thumb10}
                        style={{ width: "auto", height: "auto" }}
                        alt="image not found"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FutureArea;
