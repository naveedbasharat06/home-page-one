import insta from "../../images/insta.png";
import browser from "../../images/browser.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";
import company_logo from "../../images/nexcentLogo.svg";
import submitIcon from "../../images/submitBtn.png";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./footer.css";
const Footer = () => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(true);
  const [isSupportOpen, setIsSupportOpen] = useState(true);

  const toggleCompany = () => setIsCompanyOpen(!isCompanyOpen);
  const toggleSupport = () => setIsSupportOpen(!isSupportOpen);

  return (
    <>
      <div className="footer flex sm:flex-col">
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

              <li>
                <a href="/Blog">Blog</a>
              </li>

              <li>
                <a href="/ContactUs">Contact us</a>
              </li>

              <li>
                <a href="/Pricing">Pricing</a>
              </li>

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

              <li>
                <a href="/termsOfService">Terms of service</a>
              </li>

              <li>
                <a href="/Legal">Legal</a>
              </li>

              <li>
                <a href="/privacyPolicy">Privacy policy</a>
              </li>

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
      {/* MObile View Footer */}
      <div className="mobile_View_footer gap-6">
        <div className="mobileView_companySupport">
          <div className="MobileView_company">
            <h2
              onClick={toggleCompany}
              className="cursor-pointer flex justify-between"
            >
              Company <span>{isCompanyOpen ? "▲" : "▼"}</span>
            </h2>
            <AnimatePresence>
              {isCompanyOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <li>
                    <a href="/aboutUs">About us</a>
                  </li>
                  <li>
                    <a href="/Blog">Blog</a>
                  </li>
                  <li>
                    <a href="/ContactUs">Contact us</a>
                  </li>
                  <li>
                    <a href="/Pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="/Testimonials">Testimonials</a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <div className="MobileView_support">
            <h2
              onClick={toggleSupport}
              className="cursor-pointer flex justify-between"
            >
              Support
              <span>{isSupportOpen ? "▲" : "▼"}</span>
            </h2>
            <AnimatePresence>
              {isSupportOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <li>
                    <a href="/helpcenter">Help center</a>
                  </li>
                  <li>
                    <a href="/termsOfService">Terms of service</a>
                  </li>
                  <li>
                    <a href="/Legal">Legal</a>
                  </li>
                  <li>
                    <a href="/privacyPolicy">Privacy policy</a>
                  </li>
                  <li>
                    <a href="/Status">Status</a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="MobileView_Nexcent_InputFiend">
          <div className="MobileView_Nexcent gap-x-30">
            <div className="flex MobileView_Nexcent_logo">
              <img id="Nexcentlogo" src={company_logo} alt="Nexcent logo" />
              <h2 className="company_name">Nexcent</h2>
            </div>
            <div className="MobileView_copy_right grid gap-6">
              <p>Copyright © 2020 Nexcent ltd.</p>
              <p>All rights reserved</p>
            </div>
            <div className="MobileView_Nexcent_social_media flex gap-6">
              <img src={insta} alt="insta" />
              <img src={browser} alt="browser" />
              <img src={twitter} alt="twitter" />
              <img src={youtube} alt="youtube" />
            </div>
          </div>
          <div className="MobileView_Stay_upto_Date">
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
    </>
  );
};

export default Footer;
