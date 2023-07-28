import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourSg = () => {
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
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("JNB", "PLZ")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/johanesburg.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Johannesburg</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>JNB <i className="fa-solid fa-arrow-right-arrow-left"></i> PLZ</span></p>
                                        <p><strong>R2 489</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("PLZ", "CPT")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/port.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Port Elizabeth</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>PLZ <i className="fa-solid fa-arrow-right-arrow-left"></i> CPT</span></p>
                                        <p><strong>R2 388</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("CPT", "DOH")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/cape-town.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Cape Town</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>CPT <i className="fa-solid fa-arrow-right-arrow-left"></i> DOH</span></p>
                                        <p><strong>R20 436</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DUR", "PER")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/durban.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Durban</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DUR <i className="fa-solid fa-arrow-right-arrow-left"></i> PER</span></p>
                                        <p><strong>R34 876</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("JNB", "SIN")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/singapore.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Singapore</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>JNB <i className="fa-solid fa-arrow-right-arrow-left"></i> SIN</span></p>
                                        <p><strong>R14 375</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("PLZ", "KUL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/kuala.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Kuala Lampur</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>PLZ <i className="fa-solid fa-arrow-right-arrow-left"></i> KUL</span></p>
                                        <p><strong>R32 699</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DUR", "BKK")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/bangkok.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Bangkok</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DUR <i className="fa-solid fa-arrow-right-arrow-left"></i> BKK</span></p>
                                        <p><strong>R15 105</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("CPT", "CAI")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/cairo.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Cairo</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>CPT <i className="fa-solid fa-arrow-right-arrow-left"></i> CAI</span></p>
                                        <p><strong>R15 929</strong></p>
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
export default BestTourSg;
