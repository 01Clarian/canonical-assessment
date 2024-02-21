"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";
import context_data from "@/data/context-data";
import Link from "next/link";
import Image from "next/image";

const NewsAreaSlider = () => {
  return (
    <div
      className="news-area pt-105 pb-115 mb-110"
      style={{ backgroundColor: "#f2f3f8" }}
    >
      <div className="container">
        <div className="news-top mb-45">
          <div className="row align-items-end">
            <div className="col-xxl-7 col-sm-8 col-md-8">
              <div className="section-title-2 mb-3">
                <h3
                  className="s-title visible-br-lg visible-br-md wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  We guarantee
                  <br />
                  you support for everyone.
                </h3>
                <p className="s-desc wow fadeInUp" data-wow-delay=".4s">
                  The wireless horse play {`it's`} all gone to pot that down the
                  pub bleeder William.
                </p>
              </div>
            </div>
            <div className="col-xxl-5  col-sm-4 col-md-4">
              <div className="saasup-news-nav-controls text-sm-end canonical-assessment-news-nav-transform">
                <div className="news-swiper-button-next">
                  <i className="fal fa-angle-left"></i>
                </div>
                <div className="news-swiper-button-prev">
                  <i className="fal fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-bottom fix">
        <div className="news-container">
          <div className="news-active-2 mb-15">
            <div>
              {
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  slidesPerView={5}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                  }}
                  pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                  }}
                  navigation={{
                    nextEl: ".news-swiper-button-next",
                    prevEl: ".news-swiper-button-prev",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {context_data.slice(3, 9).map((item) => (
                    <SwiperSlide key={item.id}>
                      <div
                        className="single-news-2 text-center mb-30 swiper-slide demo-width wow fadeInUp"
                        data-wow-delay={
                          item.animatedClass ? item.animatedClass : ".2s"
                        }
                      >
                        <div className="thumb mb-30">
                          {item.image && (
                            <Image
                              src={item.image}
                              style={{ width: "auto", height: "auto" }}
                              alt="image not found"
                            />
                          )}
                        </div>
                        <div className="content">
                          <h4 className="single-news-2-title">
                            <Link href={`/context-details/${item.id}`}>
                              {item.title}
                            </Link>
                          </h4>
                          <p className="single-news-2-desc">
                            {item.description}
                          </p>
                          <Link
                            href={`/context-details/${item.id}`}
                            className="news-read-more style-2"
                          >
                            Read More <i className="fal fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              }
            </div>
          </div>
          <Link href="/context" className="view-all-context">
            View All contexts <i className="fal fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsAreaSlider;
