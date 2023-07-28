import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTour =()=>{   
    const navigate = useNavigate();

    const handleExpClick = (origin, dest) => {
        navigate({
        pathname: "/flights",
        search: `?search_t=${moment().unix()}&tripType=one-way&dep_loc=${origin}&dest_loc=${dest}&dep_dt=${moment().format(
            "YYYY-MM-DD"
        )}&ret_dt=null&fl_cl=ECONOMY&adt=1&chd=0`,
        });
    };
    return(
        <>
        <div className="offer-section">
            <div className=" cm-page-center">
                <div className="offer-title">
                    <h2>Gogalaxytravels Best Tours</h2>
                </div>
                <div className="offer-slider-row cm-flex cm-flex-wrap">
                    <div className="column cm-wd-25" onClick={(e) => handleExpClick("JFK", "LHR")}>
                        <div className="col-inner">
                            <a href="#" className="image-box">
                                <img src="./images/traditional-gondola-near-world-famous-canal-grande-rialto-bridge.png" alt="" />
                            </a>
                            <div className="offter-text">
                                <div className="title">Thrilling Italy</div>
                                <div className="cm-flex-type-1">
                                <p><span>JFK <i className="fa-solid fa-arrow-right-arrow-left"></i> LHR</span></p>
                                <p><strong>$155</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column cm-wd-25" onClick={(e) => handleExpClick("MAD", "LHR")}>
                        <div className="col-inner">
                            <a href="#" className="image-box">
                            <img src="./images/colosseum-rome-morning-sun-italy.png" alt="" />
                            </a>
                            <div className="offter-text">
                                <div className="title">Big in spain</div>
                                <div className="cm-flex-type-1">
                                <p><span>MAD <i className="fa-solid fa-arrow-right-arrow-left"></i> LHR</span></p>
                                <p><strong>$100</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column cm-wd-25" onClick={(e) => handleExpClick("ATL", "JFK")}>
                        <div className="col-inner">
                            <a href="#" className="image-box">
                            <img src="./images/view-great-sphinx.png" alt="" />
                            </a>
                            <div className="offter-text">
                                <div className="title">Trip to Ancient Egypt</div>
                                <div className="cm-flex-type-1">
                                <p><span>ATL <i className="fa-solid fa-arrow-right-arrow-left"></i> JFK</span></p>
                                <p><strong>$120</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column cm-wd-25" onClick={(e) => handleExpClick("SYD", "LHR")}>
                        <div className="col-inner">
                            <a href="#" className="image-box">
                            <img src="./images/downtown-chicago-skyline-sunset-illinois-usa.png" alt="" />
                            </a>
                            <div className="offter-text">
                                <div className="title">Faraway Baston</div>
                                <div className="cm-flex-type-1">
                                <p><span>SYD <i className="fa-solid fa-arrow-right-arrow-left"></i> LHR</span></p>
                                <p><strong>$147</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column cm-wd-25" onClick={(e) => handleExpClick("BER", "LHR")}>
                        <div className="col-inner">
                            <a href="#" className="image-box">
                            <img src="./images/paris-eiffel-tower-skyline-aerial-france.png" alt="" />
                            </a>
                            <div className="offter-text">
                                <div className="title">Colorful Paris</div>
                                <div className="cm-flex-type-1">
                                <p><span>BER <i className="fa-solid fa-arrow-right-arrow-left"></i> LHR</span></p>
                                <p><strong>$135</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column cm-wd-25" onClick={(e) => handleExpClick("TYO", "BOS")}>
                        <div className="col-inner">
                            <a href="#" className="image-box">
                            <img src="./images/tokyo.jpg" alt="" />
                            </a>
                            <div className="offter-text">
                                <div className="title">Beautiful Tokyo</div>
                                <div className="cm-flex-type-1">
                                <p><span>TYO <i className="fa-solid fa-arrow-right-arrow-left"></i> BOS</span></p>
                                <p><strong>$189</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column cm-wd-25" onClick={(e) => handleExpClick("LHR", "JFK")}>
                        <div className="col-inner">
                            <a href="#" className="image-box">
                            <img src="./images/big-ben-clock-tower-london-england.png" alt="" />
                            </a>
                            <div className="offter-text">
                                <div className="title">A weekend in London</div>
                                <div className="cm-flex-type-1">
                                <p><span>LHR <i className="fa-solid fa-arrow-right-arrow-left"></i> JFK</span></p>
                                <p><strong>$135</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column cm-wd-25" onClick={(e) => handleExpClick("AMS", "LOS")}>
                        <div className="col-inner">
                            <a href="#" className="image-box">
                            <img src="./images/amsterdam.jpg" alt="" />
                            </a>
                            <div className="offter-text">
                                <div className="title">Awesome Amsterdam</div>
                                <div className="cm-flex-type-1">
                                <p><span>AMS <i className="fa-solid fa-arrow-right-arrow-left"></i> LOS</span></p>
                                <p><strong>$110</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}   
export default BestTour;
