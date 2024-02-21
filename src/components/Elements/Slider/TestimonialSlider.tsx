"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";
import Image from "next/image";
import ShepeImg from "../../../../public/assets/img/shape/line-testimonial.png";
import userOne from "../../../../public/assets/img/user/t-user-1.png";
import userTwo from "../../../../public/assets/img/user/t-user-2.png";
import userThree from "../../../../public/assets/img/user/t-user-4.png";
import userFour from "../../../../public/assets/img/user/t-user-5.png";
import BgImage from "../../../../public/assets/img/bg/map.png";
import testimonial_data from "@/data/testimonial-data";

const TestimonialSlider = () => {
  return (
    <div className="testimonial-area p-rel pt-180 pb-145 fix">
      <div className="canonical-assessment-testimonial-line-shape-4">
        <img src="assets/img/shape/line-testimonial.png" alt="shape-image" />
      </div>
      <div className="canonical-assessment-testimonial-user-control-active-4">
        <div className="canonical-assessment-t-user-1">
          <Image
            src={userOne}
            style={{ width: "auto", height: "auto" }}
            alt="brand image"
          />
        </div>
        <div className="canonical-assessment-t-user-2">
          <Image
            src={userTwo}
            style={{ width: "auto", height: "auto" }}
            alt="brand image"
          />
        </div>
        <div className="canonical-assessment-t-user-3">
          <Image
            src={userThree}
            style={{ width: "auto", height: "auto" }}
            alt="brand image"
          />
        </div>
        <div className="canonical-assessment-t-user-4">
          <Image
            src={userFour}
            style={{ width: "auto", height: "auto" }}
            alt="brand image"
          />
        </div>
      </div>
      <div className="container">
        <div
          className="canonical-assessment-testimonial-has-map-bg-4"
          style={{ backgroundImage: `url(${BgImage.src})` }}
        >
          <div className="row justify-content-center mb-40">
            <div className="col-xxl-8 col-xl-10">
              <div className="p-rel">
                <div className="canonical-assessment-testimonial-active-4">
                  <div>
                    {
                      <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{
                          delay: 5000,
                        }}
                        // If we need pagination
                        pagination={{
                          el: ".swiper-pagination",
                          clickable: true,
                        }}
                        // Navigation arrows
                        navigation={{
                          nextEl: ".testimonial-swiper-button-next-4",
                          prevEl: ".testimonial-swiper-button-prev-4",
                        }}
                      >
                        {testimonial_data.slice(0, 3).map((item) => (
                          <SwiperSlide key={item.id}>
                            <div className="canonical-assessment-testimonial-box-4  text-center">
                              <div className="canonical-assessment-testimonial-author-box mb-15">
                                <div className="canonical-assessment-testimonial-author-box-img-4">
                                  <Image
                                    src={item.image}
                                    style={{ width: "auto", height: "auto" }}
                                    alt="image not found"
                                  />
                                </div>
                                <div className="canonical-assessment-testimonial-author-box-content-4">
                                  <h5 className="canonical-assessment-testimonial-author-box-name-4">
                                    {item.authorName}{" "}
                                  </h5>
                                  <span className="canonical-assessment-testimonial-author-box-designation-4">
                                    {item.desination}
                                  </span>
                                </div>
                              </div>
                              <div className="canonical-assessment-testimonial-box-content-main-4">
                                <h4 className="canonical-assessment-testimonial-box-content-title-4">
                                  {item.title}
                                  <br /> {`${item.info}"`}
                                </h4>
                                <p className="canonical-assessment-testimonial-box-content-text-4">
                                  {item.description}
                                </p>
                                <div className="canonical-assessment-testimonial-box-brand-4">
                                  {item.brandImg && (
                                    <Image
                                      src={item.brandImg}
                                      style={{ width: "auto", height: "auto" }}
                                      alt="image not found"
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    }
                  </div>
                </div>
                <div className="canonical-assessment-testimonial-arrow-4">
                  <button className="testimonial-swiper-button-prev-4 canonical-assessment-common-swiper-arrow">
                    <i className="fal fa-angle-left"></i>
                  </button>
                  <button className="testimonial-swiper-button-next-4 canonical-assessment-common-swiper-arrow">
                    <i className="fal fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-8">
              <div className="canonical-assessment-testimonial-funfect-wrap-4">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="pl-85">
                      <div className="canonical-assessment-testimonial-funfect-single-4">
                        <h4 className="canonical-assessment-testimonial-funfect-title-4">
                          28%
                        </h4>
                        <span className="canonical-assessment-testimonial-funfect-subtitle-4">
                          Primary Result Stat
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="text-end">
                      <div className="pr-25">
                        <div className="canonical-assessment-testimonial-funfect-single-4 d-inline-block text-start">
                          <h4 className="canonical-assessment-testimonial-funfect-title-4">
                            34x
                          </h4>
                          <span className="canonical-assessment-testimonial-funfect-subtitle-4">
                            Return on Investment
                          </span>
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
    </div>
  );
};

export default TestimonialSlider;
