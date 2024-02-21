import Link from "next/link";
import React from "react";
import Logo from "../../../public/assets/img/logo/logo.png";
import Image from "next/image";
import CopyRightArea from "./component/copyright-area";
import { usePathname } from "next/navigation";

const FooterTwo = () => {
  const pathName = usePathname();
  return (
    <>
      <footer
        className="footer-area pt-90"
        style={{
          background: pathName === "/contact" ? "#eeeff4" : "",
        }}
      >
        <div className=" container pb-80 has-border-bottom">
          <div className="footer-2">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 order-last col-sm-12 order-lg-first">
                <div
                  className="footer-widget wow fadeInUp mb-30 mb-lg-0"
                  data-wow-delay=".2s"
                >
                  <div className="logo mb-20">
                    <Link href="/index-3">
                      <Image
                        src={Logo}
                        style={{ width: "auto", height: "auto" }}
                        alt="image not found"
                      />
                    </Link>
                  </div>
                  <p className="widget-text">
                    Me old mucker cheeky bugger is dont
                    <br /> want agro in my flat little.
                  </p>
                  <Link
                    href="/contact"
                    className={
                      pathName === "/index-3" ||
                      pathName === "/index-4" ||
                      pathName === "/context" ||
                      pathName === "/team" ||
                      pathName === "/education" ||
                      pathName === "/software" ||
                      pathName === "/contact"
                        ? `canonical-assessment-theme-btn canonical-assessment-theme-btn-2`
                        : "canonical-assessment-theme-btn canonical-assessment-theme-btn-2 style-2"
                    }
                  >
                    <span>Get started</span>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="row mb-30 mb-lg-0">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div
                      className="footer-widget wow fadeInUp mb-30 mb-lg-0"
                      data-wow-delay=".4s"
                    >
                      <h5>Product</h5>
                      <ul>
                        <li></li>
                        <li>
                          <Link href="/context">Product Tour</Link>
                        </li>
                        <li>
                          <Link href="/education">Analytics</Link>
                        </li>
                        <li>
                          <Link href="/context-details">Product Overview</Link>
                        </li>
                        <li>
                          <Link href="/education">What’s New</Link>
                        </li>
                        <li>
                          <Link href="/portfolio">Templates</Link>
                        </li>
                        <li>
                          <Link href="/education">Quotes</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="footer-widget mb-30 mb-lg-0">
                      <h5>Resources</h5>
                      <ul>
                        <li></li>
                        <li>
                          <Link href="/education">Documentation</Link>
                        </li>
                        <li>
                          <Link href="/context">Solutions</Link>
                        </li>
                        <li>
                          <Link href="/education">Road Map</Link>
                        </li>
                        <li>
                          <Link href="/portfolio">Brand Assets</Link>
                        </li>
                        <li>
                          <Link href="/context">Feature List</Link>
                        </li>
                        <li>
                          <Link href="/team">User Flow</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="footer-widget">
                      <h5>Solutions</h5>
                      <ul>
                        <li></li>
                        <li>
                          <Link href="/contact">Support</Link>
                        </li>
                        <li>
                          <Link href="/education">Proposals</Link>
                        </li>
                        <li>
                          <Link href="/education">Guides</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contracts</Link>
                        </li>
                        <li>
                          <Link href="/education">Signatures</Link>
                        </li>
                        <li>
                          <Link href="/education">Payments</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CopyRightArea />
    </>
  );
};

export default FooterTwo;
