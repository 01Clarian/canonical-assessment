import Link from "next/link";
import React from "react";

const FooterSocialIcon = () => {
  return (
    <div className="canonical-assessment-footer-widget-social-link-4">
      <h5 className="title">Follow Me</h5>
      <Link href="https://www.facebook.com/clariannorth">
        <i className="fab fa-facebook-f"></i>
      </Link>
      <Link href="https://twitter.com/clarianmusic">
        <i className="fab fa-twitter"></i>
      </Link>
      <Link href="www.linkedin.com/in/clarian-north-350b2736">
        <i className="fab fa-linkedin-in"></i>
      </Link>
    </div>
  );
};

export default FooterSocialIcon;
