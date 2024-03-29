import Image from "next/image";
import Link from "next/link";
import React from "react";
import ErrorThumb from "../../../public/assets/img/bg/error-thumb.png";

const ErrorPageMain = () => {
  return (
    <main>
      <div className="content-error-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="content-error-item text-center">
                <div className="error-thumb">
                  <Image
                    src={ErrorThumb}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                </div>
                <div className="section-title">
                  <h2 className="mb-20">Oops! That page can not be found.</h2>
                  <p>
                    I shall remain anonymous for this assessment as requested. 
                  </p>
                </div>
                <div className="error-btn">
                  <Link href="/" className="canonical-assessment-theme-btn ">
                    Back to homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorPageMain;
