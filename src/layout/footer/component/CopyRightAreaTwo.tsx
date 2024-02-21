import Link from "next/link";
import React from "react";

const CopyRightAreaTwo = () => {
  return (
    <div
      className="copyright-area pt-30 pb-30"
      style={{ backgroundColor: "#0c1636" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-12">
            <p
              className="copyright-text text-center"
              style={{ color: "#c0c1cb" }}
            >
              Copyright © 2023{" "}
              <Link href="/education" style={{ color: "#2f75ff" }}>
                canonical-assessment
              </Link>{" "}
              - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRightAreaTwo;
