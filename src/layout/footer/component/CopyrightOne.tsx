import Link from "next/link";
import React from "react";

const CopyrightOne = () => {
  return (
    <div className="copyright-area" style={{ backgroundColor: "#110F2A" }}>
      <div className="container">
        <div className="canonical-assessment-has-copyright-border-top pt-25 pb-20">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <p className="canonical-assessment-copyright-text-4">
                Copyright ©2024{" "}
                All Rights Reserved{" "}
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="canonical-assessment-copyright-menu-link-4 text-end">
                <Link href="/terms-conditions">Terms & Conditions</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="#">Help</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightOne;
