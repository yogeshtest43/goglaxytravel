import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourCa = () => {
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
                        {/* <h2>Gogalaxytravels Best Tours</h2> */}
                    </div>
                    <div className="offer-slider-row cm-flex cm-flex-wrap">
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("YTO", "LHR")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/toronto.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Toronto</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>YTO <i className="fa-solid fa-arrow-right-arrow-left"></i> LHR</span></p>
                                        <p><strong>C$ 155</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("YVR", "LHR")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/vancouver.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Vancouver</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>YVR <i className="fa-solid fa-arrow-right-arrow-left"></i> LHR</span></p>
                                        <p><strong>C$ 2256</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("ORL", "JFK")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/orlando.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Orlando</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>ORL <i className="fa-solid fa-arrow-right-arrow-left"></i> JFK</span></p>
                                        <p><strong>C$ 554</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("YYC", "BNE")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/calgary.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Calgary</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>YYC <i className="fa-solid fa-arrow-right-arrow-left"></i> BNE</span></p>
                                        <p><strong>C$ 3123</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("YMQ", "YTO")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/montreal.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Montreal</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>YMQ <i className="fa-solid fa-arrow-right-arrow-left"></i> YTO</span></p>
                                        <p><strong>C$ 435</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("YOW", "YQM")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/ottawa.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Ottawa</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>YOW <i className="fa-solid fa-arrow-right-arrow-left"></i> YQM</span></p>
                                        <p><strong>C$ 659</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("YQM", "YTO")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/moncton.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Moncton</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>YQM <i className="fa-solid fa-arrow-right-arrow-left"></i> YTO</span></p>
                                        <p><strong>C$ 1849</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("YYT", "YVR")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/stjohn.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">St. John's</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>YYT <i className="fa-solid fa-arrow-right-arrow-left"></i> YVR</span></p>
                                        <p><strong>C$ 1593</strong></p>
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
export default BestTourCa;
