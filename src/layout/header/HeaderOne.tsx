import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Logo from "../../../public/assets/img/logo/logo-4.png";
import WhiteLog from "../../../public/assets/img/logo/logo.png";
import useScrollDirection from "@/hooks/sticky-header";
import Menus from "./Menu";
import { AppContextType } from "@/interFace/interFace";
import { AppContext } from "@/contextApi/AppProvider";
import MobileMenu from "./components/MobileMenu";

const HeaderOne = () => {
  const { toggleSideMenu, sideMenuOpen } = useContext(
    AppContext
  ) as AppContextType;
  const scrollDirection = useScrollDirection(null);
  return (
    <>
      <div
        className={`header-area header-transparent ${
          scrollDirection === "down" ? "header-sticky sticky" : ""
        }`}
      >
        <div className="canonical-assessment-header-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                <div className="canonical-assessment-header-logo-4 su-logo">
                  <Link className="su-defaul-log" href="#">
                    <Image
                      src={Logo}
                      style={{ width: "auto", height: "auto" }}
                      alt="image not found"
                    />
                  </Link>
                  <Link className="su-sticky-log" href="#">
                  </Link>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-inline-block">
                <div className="canonical-assessment-header-nav-4 canonical-assessment-header">
                  <nav>
                    <ul>
                      <Menus />
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                <div className="canonical-assessment-header-action-btn">
                  <Link 
                    href="/error"
                    className="canonical-assessment-transparent-btn d-none d-sm-inline-block"
                  >
                    <i className="fal fa-user"></i>Github
                  </Link>
                  <Link
                    href="/error"
                    className="canonical-assessment-theme-btn ml-25 d-none d-sm-inline-block"
                  >
                    <span>Website</span>
                  </Link>
                  <div
                    onClick={toggleSideMenu}
                    className={
                      sideMenuOpen
                        ? "mobile-bar-control mobile-bar-control-white d-inline-block d-lg-none bar-control-clicked"
                        : "mobile-bar-control mobile-bar-control-white d-inline-block d-lg-none"
                    }
                  >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu />
    </>
  );
};

export default HeaderOne;
