"use client";
import React from "react";
import { useFormik } from "formik";
import { login_schema } from "@/utils/validation-schema";
import Image from "next/image";
import ErrorMsTwo from "./ErrorMsgTwo";
import SignUpImg from "../../public/assets/img/sign-up/sign-up.png";
import Link from "next/link";
// internal

const LoginForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: login_schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-5">
          <div className="signup-box text-center">
            <div className="signup-text">
              <h3>Sign in</h3>
            </div>
            <div className="signup-thumb">
              <Image
                src={SignUpImg}
                style={{ width: "100%", height: "auto" }}
                alt="img not found"
              />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="signup-form-wrapper">
            <div className="signup-wrapper">
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="Email or Username"
              />
              {touched.email && <ErrorMsTwo error={errors.email} />}
            </div>

            <div className="signup-wrapper">
              <input
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeholder="Password"
                id="password"
              />
              {touched.password && <ErrorMsTwo error={errors.password} />}
            </div>
            <div className="signup-action">
              <div className="course-sidebar-list">
                <input
                  className="signup-checkbo"
                  type="checkbox"
                  id="sing-in"
                />
                <label className="sign-check" htmlFor="sing-in">
                  <span>Remember me</span>
                </label>
              </div>
            </div>
            <div className="mb-20">
              <button
                type="submit"
                className="canonical-assessment-theme-btn canonical-assessment-theme-btn-2 style-2 w-100"
              >
                Signin now
              </button>
            </div>
            <div className="registered wrapper">
              <div className="not-register">
                <span>Not registered?</span>
                <span>
                  <Link href="/registration">Signup</Link>
                </span>
              </div>
              <div className="forget-password">
                <Link href="/forgot-pass">Forgot password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
