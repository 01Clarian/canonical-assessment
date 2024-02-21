"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";
import brand_data from "@/data/brand-data";
import Image from "next/image";

const educationBrandSlider = () => {
  return (
    <div
      className="client-area pt-40 pb-115 mb-110"
      style={{ backgroundColor: "#eeeff4" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="client-s-title-parent mb-28">
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="brand-active-2">
                <div>
                  {
                    <Swiper
                      modules={[Autoplay]}
                      spaceBetween={30}
                      loop={true}
                      autoplay={{
                        delay: 5000,
                      }}
                      breakpoints={{
                        320: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                        },
                        576: {
                          slidesPerView: 4,
                        },
                        992: {
                          slidesPerView: 5,
                        },
                        1200: {
                          slidesPerView: 5,
                        },
                        1400: {
                          slidesPerView: 6,
                        },
                      }}
                    >
                      {brand_data.slice(13, 20).map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="single-brand">
                            <Image
                              src={item.image}
                              style={{ width: "105px", height: "auto" }}
                              alt="image not found"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default educationBrandSlider;
