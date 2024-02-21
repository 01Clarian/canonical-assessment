import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CopyRightArea = () => {
  const pathName = usePathname();
  return (
    <div
      className="copyright-area pt-30 pb-30"
      style={{ backgroundColor: pathName === "/contact" ? "#eeeff4" : "" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7">
            <p className="copyright-text">
              Copyright © 2023{" "}
              <Link
                style={{
                  color:
                    pathName === "/index-3" ||
                    pathName === "/index-4" ||
                    pathName === "/team" ||
                    pathName === "/context" ||
                    pathName === "/education" ||
                    pathName === "/contact"
                      ? "#2f75ff"
                      : "#ff4e80",
                }}
                href="https://themeforest.net/user/bdevs/portfolio"
              >
                canonical-assessment.{" "}
              </Link>
              - All Rights Reserved
            </p>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5">
            <div className="text-lg-end">
              <div className="footer-social">
                <Link
                  href="https://www.facebook.com/"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  href="https://twitter.com/"
                  style={{ backgroundColor: "#1da1f2" }}
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  href="https://www.pinterest.com/"
                  style={{ backgroundColor: "#e60023" }}
                >
                  <i className="fab fa-pinterest-p"></i>
                </Link>
                <Link
                  href="https://vimeo.com/"
                  style={{ backgroundColor: "#1ab7ea" }}
                >
                  <i className="fab fa-vimeo-v"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRightArea;
