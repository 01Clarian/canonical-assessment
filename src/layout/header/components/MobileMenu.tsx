import React, { useContext } from "react";
import Logo from "../../../../public/assets/img/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import Menus from "../Menu";

const MobileMenu = () => {
  const { toggleSideMenu, sideMenuOpen } = useContext(
    AppContext
  ) as AppContextType;
  return (
    <div
      className={
        sideMenuOpen
          ? "responsive-sidebar d-block d-lg-none responsive-sidebar-visible"
          : "responsive-sidebar d-block d-lg-none"
      }
    >
      <div className="responsive-sidebar-inner">
        <div className="logo mb-30 su-logo">
          <div className="row">
            <div className="col-6">
              <Image
                src={Logo}
                style={{ width: "auto", height: "auto" }}
                alt="image not found"
              />
            </div>
            <div className="col-6">
              <div className="text-end">
                <button
                  onClick={toggleSideMenu}
                  className="responsive-sidebar-close"
                >
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mm-menu mb-30">
          <ul>
            <Menus />
          </ul>
        </div>
        <div className="responsive-sidebar-actions">
          <Link
            href="https://github.com/01Clarian"
            className="canonical-assessment-border-btn d-block canonical-assessment-broder-btn-space-3 ms-0 text-center mb-2"
          >
            Github
          </Link>
          <Link
            href="https://www.udemy.com/user/clariannorth/"
            className="canonical-assessment-theme-btn text-center d-inline-block d-sm-none w-100"
          >
            <span>Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
