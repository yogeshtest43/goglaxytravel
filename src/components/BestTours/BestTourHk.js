import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourHk = () => {
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
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HKG", "SEL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/seoul.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Seoul</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HKG <i className="fa-solid fa-arrow-right-arrow-left"></i> SEL</span></p>
                                        <p><strong>HK$2,451</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HKG", "YYC")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/calgary.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Calgary</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HKG <i className="fa-solid fa-arrow-right-arrow-left"></i> YYC</span></p>
                                        <p><strong>HK$23,859</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HKG", "BKK")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/bangkok.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Bangkok</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HKG <i className="fa-solid fa-arrow-right-arrow-left"></i> BKK</span></p>
                                        <p><strong>HK$2,164</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HKG", "MNL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/manila.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Manila</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HKG <i className="fa-solid fa-arrow-right-arrow-left"></i> MNL</span></p>
                                        <p><strong>HK$2,187</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HKG", "LAX")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/la.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Los Angeles</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HKG <i className="fa-solid fa-arrow-right-arrow-left"></i> LAX</span></p>
                                        <p><strong>HK$16,683</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HKG", "TYO")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/tokyo.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Tokyo</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HKG <i className="fa-solid fa-arrow-right-arrow-left"></i> TYO</span></p>
                                        <p><strong>HK$2,368</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HKG", "LON")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/london.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">London</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HKG <i className="fa-solid fa-arrow-right-arrow-left"></i> LON</span></p>
                                        <p><strong>HK$10,199</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HKG", "PLW")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/palu.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Palu</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HKG <i className="fa-solid fa-arrow-right-arrow-left"></i> PLW</span></p>
                                        <p><strong>HK$6,663</strong></p>
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
export default BestTourHk;
