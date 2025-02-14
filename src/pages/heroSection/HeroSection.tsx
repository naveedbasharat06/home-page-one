import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // Correct way to import modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import HeroSectionImg from "../../images/Illustration.png";
import "./heroSection.css";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <section className="heroSection">
      <div className="w-full mx-auto">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} mt-6 " style="background-color: ${
                index === activeSlide ? "#ff7f50" : "gray"
              } "></span>`;
            },
          }}
          navigation={false}
          onSlideChange={handleSlideChange}
          className="mySwiper"
        >
          {[...Array(totalSlides)].map((_, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{
                  opacity: 0,
                  x: activeSlide > index ? "100%" : "-100%",
                }}
                animate={{ opacity: 1, x: "0%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="hero_flex_section"
              >
                {/* Left Content */}
                <div className="heroSection_left">
                  <div className="heroHeading">
                    <h2>Lessons and insights </h2>
                    <span className="herosubheading">from 8 years</span>
                  </div>
                  <p className="heroSubtext">
                    Where to grow your business as a photographer: site or
                    social media?
                  </p>
                  <button className="heroCta">Register</button>
                </div>

                {/* Right Image */}
                <div className="heroSection_right">
                  <motion.img
                    src={HeroSectionImg}
                    alt={"slider Img"}
                    id="heroSection_Image"
                    initial={{
                      x: activeSlide > index ? "100%" : "-100%",
                      opacity: 0,
                    }}
                    animate={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Dots */}
        {/* <div className="sliderDots">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`sliderDot ${activeSlide === index ? "active" : ""}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
