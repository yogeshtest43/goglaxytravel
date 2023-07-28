import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourUAE = () => {
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
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DXB", "CAI")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/dubai.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Dubai</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DXB <i className="fa-solid fa-arrow-right-arrow-left"></i> CAI</span></p>
                                        <p><strong>AED 2,374</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DXB", "WLG")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/wellington.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Wellington</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DXB <i className="fa-solid fa-arrow-right-arrow-left"></i> WLG</span></p>
                                        <p><strong>AED 10,955</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DXB", "ADL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-7.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Adelaid</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DXB <i className="fa-solid fa-arrow-right-arrow-left"></i> ADL</span></p>
                                        <p><strong>AED 12,515</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MEL", "DXB")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-2.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Melbourne</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MEL <i className="fa-solid fa-arrow-right-arrow-left"></i> DXB</span></p>
                                        <p><strong>AED 10,400</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DXB", "YTO")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/toronto.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Toronto</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DXB <i className="fa-solid fa-arrow-right-arrow-left"></i> YTO</span></p>
                                        <p><strong>AED 17,369</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SHJ", "YTO")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/sharjah.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Sharjah</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SHJ <i className="fa-solid fa-arrow-right-arrow-left"></i> YTO</span></p>
                                        <p><strong>AED 11,064</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("AUH", "WLG")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/abudhabi.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Abu Dhabi</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>AUH <i className="fa-solid fa-arrow-right-arrow-left"></i> WLG</span></p>
                                        <p><strong>AED 10,585</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("AUH", "MEL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-8.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Palu</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>AUH <i className="fa-solid fa-arrow-right-arrow-left"></i> MEL</span></p>
                                        <p><strong>AED 9,095</strong></p>
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
export default BestTourUAE;
