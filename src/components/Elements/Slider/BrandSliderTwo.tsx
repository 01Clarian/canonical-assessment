"use client";
import brand_data from "@/data/brand-data";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";
import Link from "next/link";
import Image from "next/image";

const BrandSliderTwo = () => {
  return (
    <div className="brand-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8">
            <div className="brand-active">
              <div>
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 4000,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 3,
                    },
                    480: {
                      slidesPerView: 4,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                    1400: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {brand_data.slice(7, 13).map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className={item.brandClass}>
                        <Link href="/education">
                          <Image
                            src={item.image}
                            style={{ width: "auto", height: "auto" }}
                            alt="image not found"
                          />
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSliderTwo;
