import React from "react";

import Icon1 from "../../images/logo01.png";
import Icon2 from "../../images/Logo2.png";
import Icon3 from "../../images/Logo3.png";
import Icon4 from "../../images/Logo4.png";
import Icon5 from "../../images/logo5.png";
import Icon6 from "../../images/Logo6.png";
import Icon7 from "../../images/Logo7.png";

const OurClient = () => {
  return (
    <div className="main_div">
      <div className="client_div">
        <div className="client_heading text-center">
          <h2>Our Client</h2>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="client_Icons flex">
          <img src={Icon1} alt=" icon 1" />
          <img src={Icon2} alt="icon 2" />
          <img src={Icon3} alt="icon 3" />
          <img src={Icon4} alt="icon 4" />
          <img src={Icon5} alt="icon 5" />
          <img src={Icon6} alt="icon 6" />
          <img src={Icon7} alt="icon 7" />
        </div>
      </div>
      <div className="community_div"></div>
      <div className="pixelgrade_year"></div>
    </div>
  );
};

export default OurClient;
