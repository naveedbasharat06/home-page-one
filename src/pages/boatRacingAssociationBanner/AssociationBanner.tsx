import "./AssociationBanner.css";
import racingBoatImg from "../../images/association-banner.png";
import BIcon1 from "../../images/BIcon1.png";
import BIcon2 from "../../images/BIcon2.png";
import BIcon3 from "../../images/Bicon3.png";
import BIcon4 from "../../images/BIcons4.png";
import BIcon5 from "../../images/BIcon5.png";
import BIcon6 from "../../images/BIcon6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const AssociationBanner = () => {
  return (
    <div className="association_banner">
      <div className="association_banner_flex flex justify-between sm:flex-row mx-auto items-center">
        <div className="association_banner_img">
          <img src={racingBoatImg} alt="associatio banner" />
        </div>
        <div className="association_banner_content">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h2 className="profile_name">Tim Smith</h2>
          <p className="profile_title">
            British Dragon Boat Racing Association
          </p>
          <div className="associationBanner_social flex flex-col sm:flex-row items-center sm:justify-between w-full">
            <Swiper
              className="w-full sm:w-auto"
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={6}
              loop={true}
              navigation={false}
              autoplay={{
                delay: 0, // No delay, continuous movement
                disableOnInteraction: false,
              }}
              speed={2000}
              breakpoints={{
                290: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                320: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },

                480: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },

                768: {
                  slidesPerView: 6,
                  spaceBetween: 3,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 2,
                },
                1440: {
                  slidesPerView: 6,
                  spaceBetween: 2,
                },
              }}
            >
              {[BIcon1, BIcon2, BIcon3, BIcon4, BIcon5, BIcon6].map(
                (icon, index) => (
                  <SwiperSlide key={index} className="flex justify-between">
                    <img
                      src={icon}
                      alt={`client icon ${index + 1}`}
                      className="association_banner_Icon"
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
            <div className="w-[50] sm:w-full  sm:mt-4">
              <button className="meet_all_customer text-left">
                Meet all customers ➡
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociationBanner;
