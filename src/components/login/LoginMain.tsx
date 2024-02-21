import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import LoginForm from "@/form/login-form";

const LoginMain = () => {
  return (
    <>
      <Breadcrumb title="Sign in" subTitle="Sign in" />
      <div className="signin-page-area pb-120">
        <div className="signin-page-area-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-10">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginMain;
