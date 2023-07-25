import React from "react";
import "./Reason.css";
import Image4 from "../../assets/wallpaperflare.com_wallpaper.jpg";
import Tick from "../../assets/tick.png";
import Addidas from "../../assets/adidas.png";
import Nike from "../../assets/nike.png";
import Nb from "../../assets/nb.png";

const Reason = () => {
  return (
    <div className="Reasons" id="reason">
      <div className="left-r">
        <img src={Image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some reason</span>
        <div>
          <span className="stroke-text">why </span>
          <span>choose us</span>
        </div>
        <div className="details-r">
          <div>
            <span>
              <img src={Tick} alt="" />
            </span>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <span>
              <img src={Tick} alt="" />
            </span>
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <span>
              <img src={Tick} alt="" />
            </span>
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <span>
              <img src={Tick} alt="" />
            </span>
            <span>RELIABLE PARTNERS</span>
          </div>
          <div className="our-partners">Our Partners</div>
          <div className="partners-logo">
            <img src={Addidas} alt="" />
            <img src={Nike} alt="" />
            <img src={Nb} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
