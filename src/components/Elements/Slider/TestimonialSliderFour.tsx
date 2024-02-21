"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";
import TestimonialShape from "../../../../public/assets/img/shape/shape_testimonial.png";
import User from "../../../../public/assets/img/icon/user.png";
import Image from "next/image";

const TestimonialSliderFour = () => {
  return (
    <div className="testimonial-area testimonial-space-1 mb-15 p-rel">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-10">
            <div className="testimonial-active">
              <div>
                {
                  <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                      delay: 5000,
                    }}
                    pagination={{
                      el: ".swiper-pagination",
                      clickable: true,
                    }}
                  >
                    <SwiperSlide>
                      <div
                        className="single-testimonial bg-testimonial-bottom-right default-color-testimonial"
                        style={{
                          backgroundImage: `url(${TestimonialShape.src})`,
                        }}
                      >
                        <div className="testimonial-wrapper">
                          <div
                            className="thumb mr-110 wow fadeInUp"
                            data-wow-delay=".2s"
                          >
                            <Image
                              src={User}
                              style={{ width: "auto", height: "auto" }}
                              alt="user img not found"
                            />
                          </div>
                          <div
                            className="content wow fadeInUp"
                            data-wow-delay=".4s"
                          >
                            <p>
                              Up the kyver cuppa to pukka telling boot sloshed
                              Elizabeth gutted mate owt to do with me skive
                              victoria sponge nicked it.
                            </p>
                            <div className="author-desc">
                              <h4 className="author-name">Hanson Deck</h4>
                              <span className="author-job">
                                Learning and Development
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="single-testimonial bg-testimonial-bottom-right default-color-testimonial"
                        style={{
                          backgroundImage: `url(${TestimonialShape.src})`,
                        }}
                      >
                        <div className="testimonial-wrapper">
                          <div
                            className="thumb mr-110 wow fadeInUp"
                            data-wow-delay=".2s"
                          >
                            <Image
                              src={User}
                              style={{ width: "auto", height: "auto" }}
                              alt="user img not found"
                            />
                          </div>
                          <div
                            className="content wow fadeInUp"
                            data-wow-delay=".4s"
                          >
                            <p>
                              A slightly different description for the second
                              slide while keeping the overall structure and
                              wording the same.
                            </p>
                            <div className="author-desc">
                              <h4 className="author-name">Hanson Deck</h4>
                              <span className="author-job">
                                Learning and business
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="single-testimonial bg-testimonial-bottom-right default-color-testimonial"
                        style={{
                          backgroundImage: `url(${TestimonialShape.src})`,
                        }}
                      >
                        <div className="testimonial-wrapper">
                          <div
                            className="thumb mr-110 wow fadeInUp"
                            data-wow-delay=".2s"
                          >
                            <Image
                              src={User}
                              style={{ width: "auto", height: "auto" }}
                              alt="user img not found"
                            />
                          </div>
                          <div
                            className="content wow fadeInUp"
                            data-wow-delay=".4s"
                          >
                            <p>
                              A slightly different description for the second
                              slide while keeping the overall structure and
                              wording the same.
                            </p>
                            <div className="author-desc">
                              <h4 className="author-name">Hanson Deck</h4>
                              <span className="author-job">
                                Learning and business
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                }
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSliderFour;
