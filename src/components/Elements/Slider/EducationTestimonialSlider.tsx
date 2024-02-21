"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";
import testimonial_data from "@/data/testimonial-data";
import Image from "next/image";
const educationTestimonialSlider = () => {
  const getRating = (ratingsNum: any) => {
    let empty_rating_count = 5 - ratingsNum;
    let ratings = [];
    for (let i = 0; i < ratingsNum; i++) {
      ratings.push(<i className="fas fa-star active" key={`l-${i}`}></i>);
    }
    for (let i = 0; i < empty_rating_count; i++) {
      ratings.push(<i className="fal fa-star" key={`p-${i}`}></i>);
    }
    return ratings;
  };
  return (
    <div
      className="testimonial-area pt-110 pb-40"
      style={{ backgroundColor: "#eeeff4" }}
    >
      <div className="container">
        <div className="row align-items-end mb-45">
          <div className="col-xxl-7 col-sm-8 col-md-8">
            <div className="section-title-2">
              <h3
                className="s-title s-title-education visible-br-lg visible-br-md wow fadeInUp"
                data-wow-delay=".2s"
              >
                High School Valedictorian and McGill Conservatory with Honors 
              </h3>
              <p className="s-desc wow fadeInUp" data-wow-delay=".4s">
              Scroll through the slider to review all the answers regarding Educational content.
              </p>
            </div>
          </div>
          <div className="col-xxl-5 col-sm-4 col-md-4">
            <div className="saasup-news-nav-controls text-sm-end canonical-assessment-news-nav-transform">
              <div className="testi-swiper-button-next-2">
                <i className="fal fa-angle-left"></i>
              </div>
              <div className="testi-swiper-button-prev-2">
                <i className="fal fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-active-2">
          <div>
            {
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 5000,
                }}
                // Navigation arrows
                navigation={{
                  nextEl: ".testi-swiper-button-next-2",
                  prevEl: ".testi-swiper-button-prev-2",
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  576: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  1400: {
                    slidesPerView: 3,
                  },
                }}
              >
                {testimonial_data.slice(0, 9).map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className="single-testimonial-2 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div className="single-testimonial-2-content">
                        <h4 className="single-testimonial-2-link">
                          {item.title}
                        </h4>
                        <p className="single-testimonial-2-desc">
                          {item.description}
                        </p>
                      </div>
                      <div className="single-testimonial-2-user">
                        <div className="thumb mr-15">
                          <Image
                            src={item.image}
                            style={{ width: "auto", height: "auto" }}
                            alt="image not found"
                          />
                        </div>
                        <div className="content">
                          <h4 className="testimonial-user-title">
                            {item.authorName}
                          </h4>
                          <span className="testimonial-user-designation">
                            {item.desination}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default educationTestimonialSlider;
