import React from "react";
import FooterLogo from "../../../public/assets/img/logo/logo-4.png";
import Image from "next/image";
import PhoneIcon from "@/svg/PhoneIcon";
import FooterEmailIcon from "@/svg/FooterEmailIcon";
import FooterSocialIcon from "./component/FooterSocialIcon";
import Link from "next/link";
import CopyrightOne from "./component/CopyrightOne";

const Footer = () => {
  return (
    <>
      <footer
        className="footer-area pt-300 canonical-assessment-footer-4-space pb-45"
        style={{ backgroundColor: "#110F2A" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
              <div className="canonical-assessment-footer-widget-4 canonical-assessment-footer-widget-4-1 mb-40">
                <div className="canonical-assessment-logo-4 mb-25">
                  <Link href="#">
                    <Image
                      src={FooterLogo}
                      style={{ width: "auto", height: "auto" }}
                      alt="image not found"
                    />
                  </Link>
                </div>
                <p className="mb-25">
                Proven track record collaborating with leading brands showcasing years of crafting beautiful, responsive, and high-performing web applications
                </p>
                <div className="canonical-assessment-footer-widget-contact-4 mb-25">
                  <Link href="#">
                    <PhoneIcon />
                    +(914) 374 2564
                  </Link>
                  <Link href="#">
                    <FooterEmailIcon /> clarionnorth@gmail.com
                  </Link>
                </div>
                <FooterSocialIcon />
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
              <div className="canonical-assessment-footer-widget-4 pl-100 canonical-assessment-footer-widget-4-2 mb-40">
                <h5 className="canonical-assessment-footer-widget-title-4">Overview</h5>
                <ul className="mt-35">
                  <li>
                    <Link href="/">Web</Link>
                  </li>
                  <li>
                    <Link href="/software">Software</Link>
                  </li>
                  <li>
                    <Link href="/education">Education</Link>
                  </li>
                  <li>
                    <Link href="/context-details">Context</Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
              <div className="canonical-assessment-footer-widget-4 canonical-assessment-footer-widget-4-2 mb-40">
                <h5 className="canonical-assessment-footer-widget-title-4">Maurice Knecht Newsletter</h5>
                <div className="canonical-assessment-newspaper-form-4 mt-35">
                  <form action="#" className="mb-15">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                    />
                    <button type="submit">Submit</button>
                  </form>
                  <p>
                    By using this Website, you agreed to accept all terms and
                    conditions written in here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CopyrightOne />
    </>
  );
};

export default Footer;
