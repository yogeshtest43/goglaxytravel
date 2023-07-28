import React from "react";
import { Link } from "react-router-dom";

import "./Header.styles.css";
import logo from "../../assets/images/flight/logo-new.png";
import callNow from "../../assets/images/flight/call-now.png";
import support from "../../assets/images/flight/support (1).png";
import direction from "../../assets/images/flight/direction.png";
import { phoneNum } from "../../utils/globalVars";
import CountrySelector from "../countrySeloctor/CountrySelector"

const Header = () => {
  return (
    <header>
      <div className="cm-page-center cm-flex-type-1">
        <div className="cm-header-logo">
          <Link to="/">
            <img src={logo} alt="Trian Fly" />
          </Link>
        </div>
        <div className="cm-header-op cm-flex cm-flex-align-mid">
          <div className="cm-sec-menu">
            <ul className="navMenu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/packages">Packages</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
            <ul className="cm-menu-ul cm-flex-type-1">
              {/* <li className="cm-flex-type-2 cm-header-phone">
                <i className="fa fa-headphones cm-white-col cm-flex-type-2" aria-hidden="true"></i>
                <span>
                  <a href={`tel:${phoneNum.label}`}>Support</a>
                </span>
              </li> */}
              <li className="cm-header-phone">
                <img src={callNow} alt="Trian Fly" />
                <a href={`tel:${phoneNum.label}`}>
                  {phoneNum.label}
                </a>
                <span>Speak to a travel expert</span>
              </li>
              {/* <li>
                <CountrySelector/>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
