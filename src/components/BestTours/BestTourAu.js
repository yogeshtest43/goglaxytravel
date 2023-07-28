import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourAu = () => {
    const navigate = useNavigate();

    const handleExpClick = (origin, dest) => {
        navigate({
            pathname: "/flights",
            search: `?search_t=${moment().unix()}&tripType=one-way&dep_loc=${origin}&dest_loc=${dest}&dep_dt=${moment().format(
                "YYYY-MM-DD"
            )}&ret_dt=null&fl_cl=ECONOMY&adt=1&chd=0`,
        });
    };
    return (
        <>
            <div className="offer-section">
                <div className=" cm-page-center">
                    <div className="offer-title">
                        <h2>Gogalaxytravels Best Tours</h2>
                    </div>
                    <div className="offer-slider-row cm-flex cm-flex-wrap">
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SYD", "LHR")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-1.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Sydney</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SYD <i className="fa-solid fa-arrow-right-arrow-left"></i> LHR</span></p>
                                        <p><strong>$1369</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MEL", "LHR")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-2.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Melbourne</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MEL <i className="fa-solid fa-arrow-right-arrow-left"></i> LHR</span></p>
                                        <p><strong>$1558</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("BNE", "JFK")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-3.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Brisbane</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>BNE <i className="fa-solid fa-arrow-right-arrow-left"></i> JFK</span></p>
                                        <p><strong>$1394</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MEL", "SIN")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-4.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Singapore</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MEL <i className="fa-solid fa-arrow-right-arrow-left"></i> SIN</span></p>
                                        <p><strong>$1309</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SYD", "LON")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-5.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">London</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SYD <i className="fa-solid fa-arrow-right-arrow-left"></i> LON</span></p>
                                        <p><strong>$5086</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MEL", "ADE")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-6.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Adelaid</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MEL <i className="fa-solid fa-arrow-right-arrow-left"></i> ADE</span></p>
                                        <p><strong>$165</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MEL", "BNE")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-7.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Auckland</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MEL <i className="fa-solid fa-arrow-right-arrow-left"></i> BNE</span></p>
                                        <p><strong>$204</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MEL", "HBA")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-8.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Hobart</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MEL <i className="fa-solid fa-arrow-right-arrow-left"></i> HBA</span></p>
                                        <p><strong>$142</strong></p>
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
export default BestTourAu;
