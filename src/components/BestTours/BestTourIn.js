import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourIn = () => {
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
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DEL", "BOM")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/mombai.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Mumbai</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DEL <i className="fa-solid fa-arrow-right-arrow-left"></i> BOM</span></p>
                                        <p><strong>₹9,167</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DEL", "BLR")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/banglore.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Banglore</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DEL <i className="fa-solid fa-arrow-right-arrow-left"></i> BLR</span></p>
                                        <p><strong>₹10,323</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DEL", "GOI")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/goa.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">GOA</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DEL <i className="fa-solid fa-arrow-right-arrow-left"></i> GOI</span></p>
                                        <p><strong>₹8,722</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DEL", "DXB")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/dubai.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Dubai</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DEL <i className="fa-solid fa-arrow-right-arrow-left"></i> DXB</span></p>
                                        <p><strong>₹26,760</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DEL", "YTO")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/toronto.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Toronto</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DEL <i className="fa-solid fa-arrow-right-arrow-left"></i> YTO</span></p>
                                        <p><strong>₹139,901</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("YOW", "YQM")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/london.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">London</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>YOW <i className="fa-solid fa-arrow-right-arrow-left"></i> YQM</span></p>
                                        <p><strong>₹70510</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DEL", "HYD")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/hyderabad.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Hyderabad</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DEL <i className="fa-solid fa-arrow-right-arrow-left"></i> HYD</span></p>
                                        <p><strong>₹10538</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DEL", "MAA")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/stjohn.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Chennai</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DEL <i className="fa-solid fa-arrow-right-arrow-left"></i> MAA</span></p>
                                        <p><strong>₹22307</strong></p>
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
export default BestTourIn;
