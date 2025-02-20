import React from "react";
import img18 from "../../images/image 18.png";
import img19 from "../../images/image 19.png";
import img20 from "../../images/image 20.png";
import "./MarketingBlog.css";

const MarketingBlog = () => {
  return (
    <div className="new_marketing_blog">
      <div className="new_marketing_title text-center mx-auto flex-col">
        <h2>Caring is the new marketing</h2>
        <p>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </div>
      <div className="marketing_Blog flex justify-between gap-6 ">
        <div className="card">
          <img
            className="marketing_blog_img"
            src={img18}
            alt="process with OneRen"
          />
          <div className="card_content">
            <h2>Creating Streamlined Safeguarding Processes with OneRen</h2>
            <button>Readmore ➞</button>
          </div>
        </div>
        <div className="card">
          <div>
            <img
              className="marketing_blog_img"
              src={img19}
              alt="process with OneRen"
            />
          </div>
          <div className="card_content">
            <h2>
              What are your safeguarding responsibilities and how can you manage
              them?
            </h2>
            <button>Readmore ➞</button>
          </div>
        </div>{" "}
        <div className="card">
          <img
            className="marketing_blog_img"
            src={img20}
            alt="process with OneRen"
          />
          <div className="card_content">
            <h2>Revamping the Membership Model with Triathlon Australia</h2>
            <button>Readmore ➞</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingBlog;
