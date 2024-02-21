"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";

const PortfolioRelated = () => {
  return (
    <div className="related-portfolio-area">
      <div className="section-title-4 mb-55">
        <h3 className="s-title">Related Portfolio</h3>
        <p className="s-desc">
          My good sir daft mush a blinding shot mush bugger.{" "}
        </p>
      </div>
      <div className="portfolio-swiper-active mb-40">
        <div>
          {
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              // If we need pagination
              pagination={{
                el: ".swiper-portfolio-pagination",
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                576: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 3,
                },
              }}
            >
            </Swiper>
          }
        </div>
      </div>
      <div className="portfolio-pagination">
        <div className="swiper-portfolio-pagination"></div>
      </div>
    </div>
  );
};

export default PortfolioRelated;
