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
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SIN", "BKK")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/bangkok.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Bangkok</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SIN <i className="fa-solid fa-arrow-right-arrow-left"></i> BKK</span></p>
                                        <p><strong>S$ 155</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SIN", "DOH")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/doha.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Doha</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SIN <i className="fa-solid fa-arrow-right-arrow-left"></i> DOH</span></p>
                                        <p><strong>S$ 2507</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SIN", "DEL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/new-delhi.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">New Delhi</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SIN <i className="fa-solid fa-arrow-right-arrow-left"></i> DEL</span></p>
                                        <p><strong>S$ 423</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SIN", "IST")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/istanbul.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Istanbul</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SIN <i className="fa-solid fa-arrow-right-arrow-left"></i> IST</span></p>
                                        <p><strong>S$ 1465</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("BKK", "YYC")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/calgary.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Calgary</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>BKK <i className="fa-solid fa-arrow-right-arrow-left"></i> YYC</span></p>
                                        <p><strong>S$ 2843</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SIN", "LEB")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/lebanon.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Lebanon</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SIN <i className="fa-solid fa-arrow-right-arrow-left"></i> LEB</span></p>
                                        <p><strong>S$ 3693</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SIN", "BOM")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/srinagar.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Mumbai</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SIN <i className="fa-solid fa-arrow-right-arrow-left"></i> BOM</span></p>
                                        <p><strong>S$ 494</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("BKK", "CAI")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/cairo.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Cairo</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>BKK <i className="fa-solid fa-arrow-right-arrow-left"></i> CAI</span></p>
                                        <p><strong>S$ 1158</strong></p>
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
