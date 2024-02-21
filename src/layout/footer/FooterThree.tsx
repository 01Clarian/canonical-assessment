import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhiteLogo from "../../../public/assets/img/logo/logo-white.png";
import CopyRightAreaTwo from "./component/CopyRightAreaTwo";
import { usePathname } from "next/navigation";

const FooterThree = () => {
  const pathName = usePathname();
  return (
    <>
      <footer
        className="footer-area pt-100"
        style={{ backgroundColor: "#0c1636" }}
      >
        <div className=" container pb-80 has-border-bottom-3">
          <div className="footer-3">
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-lg-4  col-md-6">
                <div
                  className="footer-widget wow fadeInUp  mb-30 mb-md-0"
                  data-wow-delay=".2s"
                >
                  <div className="logo mb-20">
                    <Link href="/index-3">
                      <Image
                        src={WhiteLogo}
                        style={{ width: "auto", height: "auto" }}
                        alt="image not found"
                      />
                    </Link>
                  </div>
                  <p className="widget-text" style={{ color: "#c0c1cb" }}>
                    Me old mucker cheeky bugger dont
                    <br /> want agro my little.
                  </p>
                  <Link
                    href="/contact"
                    className={
                      pathName === "/login" ||
                      pathName === "/registration" ||
                      pathName === "/forgot-password"
                        ? "canonical-assessment-theme-btn canonical-assessment-theme-btn-2 style-2"
                        : "canonical-assessment-theme-btn canonical-assessment-theme-btn-2"
                    }
                  >
                    <span>Get started</span>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-3  col-xl-2 col-lg-4  col-md-6 col-sm-6">
                <div
                  className="footer-widget footer-widget-3 space-left-0 wow fadeInUp  mb-30 mb-md-0 pl-105"
                  data-wow-delay=".4s"
                >
                  <h5 style={{ color: "#fff" }}>Resources</h5>
                  <ul>
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
              <div className="col-xxl-3  col-xl-2 col-lg-4  col-md-6 col-sm-6">
                <div
                  className="footer-widget footer-widget-3 space-left-0 wow fadeInUp  mb-30 mb-md-0 pl-75"
                  data-wow-delay=".6s"
                >
                  <h5 style={{ color: "#fff" }}>Solutions</h5>
                  <ul>
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
              <div className="col-xxl-3 col-xl-4 ps-xxl-0 col-lg-6 col-md-6 mb-30 mb-xl-0 order-last order-md-first order-lg-last">
                <div
                  className="footer-widget footer-widget-3 pr-20 pr-xl-0 wow fadeInUp  mb-30 mb-md-0"
                  data-wow-delay=".8s"
                >
                  <h5 style={{ color: "#fff" }}>Newsletter</h5>
                  <div
                    className={
                      pathName === "/login" ||
                      pathName === "/registration" ||
                      pathName === "/forgot-password"
                        ? "newsletter-form-2 mb-25"
                        : "newsletter-form mb-25"
                    }
                  >
                    <form action="#">
                      <div className="newsletter-form-input">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email address"
                        />
                      </div>
                      {pathName === "/login" ||
                      pathName === "/registration" ||
                      pathName === "/forgot-password" ? (
                        <button
                          className="canonical-assessment-theme-btn canonical-assessment-theme-btn-2 style-2"
                          type="submit"
                        >
                          Subcribe
                        </button>
                      ) : (
                        <button type="submit">Subcribe</button>
                      )}
                    </form>
                  </div>
                  <div className="newsletter-follow">
                    <h5 className="newsletter-follow-label">Follow Us</h5>
                    <div className="social-follow">
                      <Link href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="https://vimeo.com/">
                        <i className="fab fa-vimeo-v"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CopyRightAreaTwo />
    </>
  );
};

export default FooterThree;
