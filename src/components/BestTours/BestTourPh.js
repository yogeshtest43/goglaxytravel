import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourPh = () => {
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
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MNL", "CEB")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/manila.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Manila</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MNL <i className="fa-solid fa-arrow-right-arrow-left"></i> CEB</span></p>
                                        <p><strong>₱8,398</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("CEB", "MNL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/cebu-city.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Cebu City</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>CEB <i className="fa-solid fa-arrow-right-arrow-left"></i> MNL</span></p>
                                        <p><strong>₱7,810</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MPH", "SEB")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/boracay.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Boracay</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MPH <i className="fa-solid fa-arrow-right-arrow-left"></i> SEB</span></p>
                                        <p><strong>₱7,810</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DVO", "MNL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/davao-city.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Davao City</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DVO <i className="fa-solid fa-arrow-right-arrow-left"></i> MNL</span></p>
                                        <p><strong>₱12,023</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MPH", "SIN")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/singapore.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Singapore</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MPH <i className="fa-solid fa-arrow-right-arrow-left"></i> SIN</span></p>
                                        <p><strong>₱22,128</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DVO", "LAX")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/la.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Los Angeles</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DVO <i className="fa-solid fa-arrow-right-arrow-left"></i> LAX</span></p>
                                        <p><strong>₱181,132</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MNL", "TYO")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/tokyo.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Tokyo</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MNL <i className="fa-solid fa-arrow-right-arrow-left"></i> TYO</span></p>
                                        <p><strong>₱70,640</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("TAG", "MNL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/panglao.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Panglao</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>TAG <i className="fa-solid fa-arrow-right-arrow-left"></i> MNL</span></p>
                                        <p><strong>₱8,221</strong></p>
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
export default BestTourPh;
