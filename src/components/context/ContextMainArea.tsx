import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ContextAreaOne from "./ContextAreaOne";

const ContextMainArea = () => {
  return (
    <>
      <Breadcrumb title="Context" subTitle="Brief Canonical Analysis" />
      <ContextAreaOne />
    </>
  );
};

export default ContextMainArea;
