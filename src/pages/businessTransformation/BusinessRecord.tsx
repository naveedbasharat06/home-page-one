import React from "react";

import memberIcons from "../../images/members.png";
import clubIcon from "../../images/ClubIcon.png";
import eventBookingIcon from "../../images/eventBookings.png";
import paymentIcon from "../../images/payments.png";
import "./businessTransformation.css";
interface BusinessRecordT {
  Id: number;
  icon: string;
  countDownRecords: number;
  catagory: string;
}
const BusinessRecord_Data: BusinessRecordT[] = [
  {
    Id: 1,
    icon: memberIcons,
    countDownRecords: 2245341,
    catagory: "Members",
  },
  {
    Id: 1,
    icon: clubIcon,
    countDownRecords: 46328,
    catagory: "Clubs",
  },
  {
    Id: 2,
    icon: eventBookingIcon,
    countDownRecords: 828867,
    catagory: "Event Booking",
  },
  {
    Id: 2,
    icon: paymentIcon,
    countDownRecords: 1926436,
    catagory: "Payments",
  },
];
const BusinessRecord = () => {
  return (
    <div className="business_transformation">
      <div className="business_detail lg:flex md:flex sm:grid">
        <div className="business_text">
          <span className="business_heaing">
            <h2 id="black_text">Helping a local</h2>
            <h2 id="green_text">business reinvent itself</h2>
            <p id="business_description">
              We reached here with our hard work and dedication
            </p>
          </span>
        </div>
        {/* business achievments */}
        <div className="business_achievements">
          <div className="member_clubs sm:flex md:flex lg:flex xl:flex">
            <div className="members_Card sm:flex md:flex lg:flex xl:flex gap-20">
              <span>
                <img className="cardIcon" src={memberIcons} alt="memeberIcon" />
              </span>
              <span>
                <h2 className="countDownRecords">
                  {BusinessRecord_Data[0].countDownRecords.toLocaleString()}
                </h2>
                <p className="catagory">{BusinessRecord_Data[0].catagory}</p>
              </span>
            </div>
            <div className="clubs_Card sm:flex md:flex lg:flex xl:flex gap-20">
              <span>
                <img className="cardIcon" src={clubIcon} alt="memeberIcon" />
              </span>
              <span>
                <h2 className="countDownRecords">
                  {BusinessRecord_Data[1].countDownRecords.toLocaleString()}
                </h2>
                <p className="catagory">{BusinessRecord_Data[1].catagory}</p>
              </span>
            </div>
          </div>
          <div className="EventBooking_payment sm:flex md:flex lg:flex xl:flex">
            <div className="EventBooking_Card sm:flex md:flex lg:flex xl:flex gap-20">
              <span>
                <img
                  className="cardIcon"
                  src={eventBookingIcon}
                  alt="memeberIcon"
                />
              </span>
              <span>
                <h2 className="countDownRecords">
                  {BusinessRecord_Data[2].countDownRecords.toLocaleString()}
                </h2>
                <p className="catagory">{BusinessRecord_Data[2].catagory}</p>
              </span>
            </div>
            <div className="payment_Card sm:flex md:flex lg:flex xl:flex gap-20">
              <span>
                <img className="cardIcon" src={paymentIcon} alt="memeberIcon" />
              </span>
              <span>
                <h2 className="countDownRecords">
                  {BusinessRecord_Data[3].countDownRecords.toLocaleString()}
                </h2>
                <p className="catagory">{BusinessRecord_Data[3].catagory}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessRecord;
