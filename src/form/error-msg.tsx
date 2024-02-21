import React from "react";

const ErrorMsg = ({ error }: any) => {
  return (
    <>
      <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
    </>
  );
};

export default ErrorMsg;
