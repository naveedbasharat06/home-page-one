import memberIcons from "../../images/members.png";
import clubIcon from "../../images/ClubIcon.png";
import eventBookingIcon from "../../images/eventBookings.png";
import paymentIcon from "../../images/payments.png";
import "./businessTransformation.css";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of component is visible
  });
  return (
    <div className="business_transformation" ref={ref}>
      <div className="business_detail lg:flex md:flex sm:flex-col">
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
          <div className="member_clubs flex sm:flex-row">
            <div className="members_Card flex align-middle">
              {/* <span> */}
              <img className="cardIcon" src={memberIcons} alt="memeberIcon" />
              {/* </span> */}
              <div>
                <h2 className="countDownRecords">
                  {inView && (
                    <CountUp
                      end={BusinessRecord_Data[0].countDownRecords}
                      duration={2}
                      separator=","
                      // className="countDownRecords"
                    />
                  )}
                </h2>
                <p className="catagory">{BusinessRecord_Data[0].catagory}</p>
              </div>
            </div>
            <div className="clubs_Card flex sm:flex-row">
              <img className="cardIcon" src={clubIcon} alt="memeberIcon" />

              <div>
                <h2 className="countDownRecords">
                  {inView && (
                    <CountUp
                      end={BusinessRecord_Data[1].countDownRecords}
                      duration={2}
                      separator=","
                    />
                  )}
                </h2>
                <p className="catagory">{BusinessRecord_Data[1].catagory}</p>
              </div>
            </div>
          </div>
          <div className="EventBooking_payment flex sm:flex-row">
            <div className="EventBooking_Card flex sm:flex-row">
              <img
                className="cardIcon"
                src={eventBookingIcon}
                alt="memeberIcon"
              />

              <div>
                <h2 className="countDownRecords">
                  {inView && (
                    <CountUp
                      end={BusinessRecord_Data[2].countDownRecords}
                      duration={2}
                      separator=","
                    />
                  )}
                </h2>
                <p className="catagory">{BusinessRecord_Data[2].catagory}</p>
              </div>
            </div>
            <div className="payment_Card flex sm:flex-row">
              <img className="cardIcon" src={paymentIcon} alt="memeberIcon" />

              <div>
                <h2 className="countDownRecords">
                  {inView && (
                    <CountUp
                      end={BusinessRecord_Data[3].countDownRecords}
                      duration={2}
                      separator=","
                    />
                  )}
                </h2>
                <p className="catagory">{BusinessRecord_Data[3].catagory}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessRecord;
