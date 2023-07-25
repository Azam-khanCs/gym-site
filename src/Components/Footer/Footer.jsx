import React from "react";
import "./Footer.css";
import linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";
import Github from "../../assets/github.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer" id="footer">
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
      <hr />
      <div className="social">
        <img src={linkedin} alt="" />
        <img src={Instagram} alt="" />
        <img src={Github} alt="" />
      </div>
      <div className="footer-logo">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
