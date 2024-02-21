//@refresh
"use client";
import React, { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { usePathname } from "next/navigation";
import HeaderOne from "./header/HeaderOne";
import Footer from "./footer/Footer";
import useLoading from "@/hooks/useLoading";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();
  const isLoading = useLoading(true, 200);
  useEffect(() => {
    setTimeout(() => {
     // animationCreate();
    }, 200);
  }, []);

  return (
    <>
        <>
          <BacktoTop />
          {(() => {
            switch (pathName) {
              case "/":
                return <HeaderOne />;
              case "/index-2":
              case "/login":
              case "/team":
              case "/context":
              case "/portfolio":
              case "/education":
              case "/context-details":
              case "/software":
              case "/blog-list":
              case "/contact":
              case "/terms-conditions":
              case "/privacy-policy":
              case "/forgot-pass":
                return <HeaderOne />;
              default:
                break;
            }
          })()}

          {children}
          {(() => {
            switch (pathName) {
              default:
                return <Footer />;
              case "/":
              case "/team":
              case "/context":
              case "/education":
              case "/contact":
                return <Footer />;
            }
          })()}
        </>
    </>
  );
};

export default Wrapper;
