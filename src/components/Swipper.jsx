"use client";
import React from "react";

// Import Swiper React components and Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Swipper = () => {
  return (
    <>
      <section className="testimonial">
        <div className="tes-text">
          <h1>
            Our Latest <br />
            Insight
          </h1>
        </div>

        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide
            className="swiper-slide"
            style={{
              justifyContent: "flex-start",
              width: "400px",
              height: "450px",
              backgroundColor: "#000",
              marginRight: "20px",
              borderBottom: "3px solid #0082f9",
            }}
          >
            <img
              src="/img/web-design-2024.jpg.png"
              alt=""
              style={{ width: "441px", height: "224px", objectFit: "cover" }}
              className="img-fluid"
            />
            <div
              className="tes-content"
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                margin: "20px",
              }}
            >
              <p
                style={{
                  marginBottom: "20px",
                  color: "#0082f9",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                13 February 2024
              </p>
              <h1
                style={{
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                Finding the Perfect Fit: Top Tips to Choose the Best Staffing
                Agencies for Your Needs
              </h1>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide"
            style={{
              justifyContent: "flex-start",
              width: "400px",
              height: "450px",
              backgroundColor: "#000",
              marginRight: "20px",
              borderBottom: "3px solid #0082f9",
            }}
          >
            <img
              src="/img/web-design-2024.jpg.png"
              alt=""
              style={{ width: "441px", height: "224px", objectFit: "cover" }}
              className="img-fluid"
            />
            <div
              className="tes-content"
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                margin: "20px",
              }}
            >
              <p
                style={{
                  marginBottom: "20px",
                  color: "#0082f9",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                13 February 2024
              </p>
              <h1
                style={{
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                Finding the Perfect Fit: Top Tips to Choose the Best Staffing
                Agencies for Your Needs
              </h1>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide"
            style={{
              justifyContent: "flex-start",
              width: "400px",
              height: "450px",
              backgroundColor: "#000",
              marginRight: "20px",
              borderBottom: "3px solid #0082f9",
            }}
          >
            <img
              src="/img/web-design-2024.jpg.png"
              alt=""
              style={{ width: "441px", height: "224px", objectFit: "cover" }}
              className="img-fluid"
            />
            <div
              className="tes-content"
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                margin: "20px",
              }}
            >
              <p
                style={{
                  marginBottom: "20px",
                  color: "#0082f9",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                13 February 2024
              </p>
              <h1
                style={{
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                Finding the Perfect Fit: Top Tips to Choose the Best Staffing
                Agencies for Your Needs
              </h1>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide"
            style={{
              justifyContent: "flex-start",
              width: "400px",
              height: "450px",
              backgroundColor: "#000",
              marginRight: "20px",
              borderBottom: "3px solid #0082f9",
            }}
          >
            <img
              src="/img/web-design-2024.jpg.png"
              alt=""
              style={{ width: "441px", height: "224px", objectFit: "cover" }}
              className="img-fluid"
            />
            <div
              className="tes-content"
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                margin: "20px",
              }}
            >
              <p
                style={{
                  marginBottom: "20px",
                  color: "#0082f9",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                13 February 2024
              </p>
              <h1
                style={{
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                Finding the Perfect Fit: Top Tips to Choose the Best Staffing
                Agencies for Your Needs
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Swipper;
