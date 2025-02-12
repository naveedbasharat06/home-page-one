import React, { useState } from "react";
import HeroSectionImg from "../../images/Illustration.png";
import "./heroSection.css";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;
  return (
    <section className="heroSection">
      <div className=" w-full mx-auto ">
        <div className="hero_flex_section">
          {/* Left Content */}
          <div className="heroSection_left">
            <div className="heroHeading">
              <h2>Lessons and insights </h2>
              <span className="herosubheading">from 8 years</span>
            </div>

            <p className="heroSubtext">
              Where to grow your business as a photographer: site or social
              media?
            </p>

            <button className="heroCta">Register</button>
          </div>

          {/* Right Image Placeholder */}
          <div className="heroSection_right">
            <img
              id="heroSection_Image"
              src={HeroSectionImg}
              alt="Hero section Imag"
            />
          </div>
        </div>
        {/* slider section */}
        <div className="sliderDots">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`sliderDot ${activeSlide === index ? "active" : ""}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
