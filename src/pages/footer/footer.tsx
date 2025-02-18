import React from "react";
import insta from "../../images/insta.png";
import browser from "../../images/browser.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";
import company_logo from "../../images/Icon1.png";
import submitIcon from "../../images/submitBtn.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer flex ">
      <div className="Nexcent gap-x-40">
        <div className="flex Nexcent_logo ">
          <img id="Nexcentlogo" src={company_logo} alt="Nexcent logo" />
          <h2 className="company_name">Nexcent</h2>
        </div>
        <div className="copy_right grid gap-6">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </div>
        <div className="Nexcent_social_media flex gap-6">
          <img src={insta} alt="insta" />
          <img src={browser} alt="browser" />
          <img src={twitter} alt="twitter" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
      <div className="footer_Link_sections flex gap-6">
        <div className="company">
          <h2>Company</h2>
          <ul>
            <li>
              <a href="/aboutUs">About us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/Blog">Blog</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/ContactUs">Contact us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/Pricing">Pricing</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/Testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="Support">
          <h2>Support</h2>
          <ul>
            <li>
              <a href="/helpcenter">Help center</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/termsOfService">Terms of service</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/Legal">Legal</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/privacyPolicy">Privacy policy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/Status">Status</a>
            </li>
          </ul>
        </div>
        <div className="Stay_upto_Date">
          <h2>Stay up to date</h2>
          <input
            className="border-2 bg-gray-400"
            type="text"
            placeholder="Your email address"
          />
          <img src={submitIcon} alt="submit" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
