import React, { useState } from "react";
import "./Header.css";
import MyLogo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img src={MyLogo} alt="logo" />
      </div>
      {menuOpen === false && mobile === true ? (
        <div className="bars-image">
          <img onClick={() => setMenuOpen(true)} src={Bars} alt="" />
        </div>
      ) : (
        <div className="header-menu">
          <ul className="header-menu-item">
            <li>
              <Link
                to="home"
                span={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="programs"
                span={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                to="reason"
                span={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Why us
              </Link>
            </li>
            <li>
              <Link
                to="pricingplans"
                span={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                span={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Testemonials
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
