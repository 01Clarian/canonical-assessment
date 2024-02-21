"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";
import brand_data from "@/data/brand-data";
import Image from "next/image";

const BrandSlider = () => {
  return (
    <div className="brand-area pt-30 pb-128">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="canonical-assessment-sm-section-title-wrap">
              <h5 className="canonical-assessment-sm-section-title">
                Maurice has worked with world class brands
              </h5>
              <div className="row">
                <div className="col-xxl-8 col-xl-12 col-lg-12">
                  <div className="pr-90 canonical-assessment-sm-brand-space-right-4">
                    <div className="canonical-assessment-sm-brand-active">
                      <div>
                        {
                          <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                              delay: 5000,
                            }}
                            pagination={{
                              el: ".swiper-brand-paginate",
                              clickable: true,
                            }}
                            navigation={{
                              nextEl: ".swiper-sm-brand-next",
                              prevEl: ".swiper-sm-brand-prev",
                            }}
                            breakpoints={{
                              320: {
                                slidesPerView: 2,
                              },
                              576: {
                                slidesPerView: 3,
                              },
                              768: {
                                slidesPerView: 3,
                              },
                              992: {
                                slidesPerView: 4,
                              },
                              1200: {
                                slidesPerView: 6,
                              },
                              1400: {
                                slidesPerView: 6,
                              },
                            }}
                          >
                            {brand_data &&
                              brand_data.slice(0, 5).map((item) => (
                                <SwiperSlide key={item.id}>
                                  <div className="canonical-assessment-sm-brand-single-4">
                                    {item?.image && (
                                      <Image
                                        src={item?.image}
                                        style={{
                                          width: "100%",
                                          height: "auto",
                                        }}
                                        alt="image not found"
                                      />
                                    )}
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
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
