import React from "react";

import Icon1 from "../../images/logo01.png";
import Icon2 from "../../images/Logo2.png";
import Icon3 from "../../images/Logo3.png";
import Icon4 from "../../images/Logo4.png";
import Icon5 from "../../images/logo5.png";
import Icon6 from "../../images/Logo6.png";
import Icon7 from "../../images/Logo7.png";
import membershipIcon from "../../images/membershipIcon.png";
import NationalIcon from "../../images/NationalIcon.png";
import ClubIcon from "../../images/ClubIcon.png";
import frame35 from "../../images/Frame 35.png";
import "./OurClient.css";
// Update the imports at the top
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
interface CommunityCard {
  id: number;
  icon: any;
  heading: string;
  description: string;
}
const CommunityCard_Data: CommunityCard[] = [
  {
    id: 1,
    icon: membershipIcon,
    heading: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 2,
    icon: NationalIcon,

    heading: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 2,
    icon: ClubIcon,
    heading: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];
const OurClient = () => {
  return (
    <div className="main_div">
      <div className="client_div">
        <div className="client_heading text-center">
          <h2>Our Client</h2>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        {/* <div className=""> */}
        <Swiper
          className="mx-auto flex justify-between"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween="auto"
          slidesPerView="auto"
          loop={true}
          navigation={false}
          autoplay={{
            delay: 0, // No delay, continuous movement
            disableOnInteraction: false, // Keep autoplay active on user interaction
          }}
          speed={2000}
          // pagination={{ clickable: false }}
          breakpoints={{
            // when window width is >= 320px
            290: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 640px

            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
        >
          {[Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7].map(
            (icon, index) => (
              <SwiperSlide
                key={index}
                className="client_Icons flex justify-between"
              >
                <img
                  src={icon}
                  alt={`client icon ${index + 1}`}
                  className="client_icon"
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
        {/* </div> */}
      </div>

      {/* community Card */}
      <div className="community_div">
        <div className="community_header text-center">
          <h2>
            Manage your entire community <br /> in a single system
          </h2>
          <p>Who is Nextcent suitable for?</p>
        </div>

        <div className="community_card">
          {CommunityCard_Data.map((card, index) => (
            <div key={index} className="card">
              <img src={card.icon} alt={card.heading} className="mx-auto" />
              <h2>{card.heading}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* PixelGrade_year  */}
      <div className="pixelgrade_year flex sm:flex-row">
        {/* Image for Large & Medium screens */}
        <div className="pixelGrade_img_div large-screen">
          <img src={frame35} alt="Pixel Grade Imag" />
        </div>
        <div className="pixelGrade_content">
          <h1>The unseen of spending three years at Pixelgrade</h1>
          {/* Image for Small screens (hidden by default on larger screens) */}
          <div className="pixelGrade_img_div small-screen">
            <img src={frame35} alt="Pixel Grade Imag" />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
