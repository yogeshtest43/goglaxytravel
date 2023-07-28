import React, { useState } from "react"
import { Link } from "react-router-dom";

import logo from "../../assets/images/flight/logo-new.png";
import { phoneNum } from "../../utils/globalVars";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import CountrySelector from "../countrySeloctor/CountrySelector"


import "./Footer.styles.css";


const Footer = () => {

    const [isActive, setActive] = useState(false)
    const navigate = useNavigate();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleExpClick = (origin, dest) => {
        navigate({
            pathname: "/flights",
            search: `?search_t=${moment().unix()}&tripType=one-way&dep_loc=${origin}&dest_loc=${dest}&dep_dt=${moment().format(
                "YYYY-MM-DD"
            )}&ret_dt=null&fl_cl=ECONOMY&adt=1&chd=0`,
        });
    };


    return (

        <footer>
            <div class="cm-page-center">
                <div class="footer-text text-center cm-pads">
                    <h2>Our Destination</h2>
                    <div class="our-destin">
                        <ul>
                            <li><a href="#" onClick={(e) => handleExpClick("JFK", "LHR")}>London</a></li>
                            <li><a href="#" onClick={(e) => handleExpClick("JFK", "NYC")}>New York</a></li>
                            <li><a href="#" onClick={(e) => handleExpClick("JFK", "PAR")}>Paris</a></li>
                            <li><a href="#" onClick={(e) => handleExpClick("JFK", "MAN")}>Manchester</a></li>
                            <li><a href="#" onClick={(e) => handleExpClick("JFK", "TKY")}>turkey</a></li>
                            <li><a href="#" onClick={(e) => handleExpClick("JFK", "MEX")}>mexico</a></li>
                            <li><a href="#" onClick={(e) => handleExpClick("JFK", "MOW")}>moscow</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-middle">
                    <div class="col-33">
                        <h5>Phone &amp; Email</h5>
                        <p>(845) 738-8765 </p>
                        <p>Support@gogalaxytravels.com</p>
                    </div>
                    <div class="col-33">
                        <h5>Address</h5>
                        <p>ClipTrip, Llc 25 llis St 14 Framingham, MA 01702, USA</p>
                    </div>
                    <div class="col-33">
                        <h5>Newsletter Subscribe</h5>
                        <div class="hero">
                            <input type="text" />
                            <div class="search">
                                <i class="fa-solid fa-envelope"></i>
                                <input type="submit" value="Subscribe" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="col-33">
                    <p>© 2023 gogalaxytravels.com All rights reserved.</p>
                </div>
                <div class="col-33">
                    <ul>
                        <li><Link to="/privacy-policy">Privacy</Link> </li>
                        <li><Link to="/terms-and-conditions">Terms</Link> </li>
                        <li><Link to="/disclaimer">Disclaimer</Link></li>
                    </ul>
                </div>
                <div class="col-33">
                    <ul>
                        <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
