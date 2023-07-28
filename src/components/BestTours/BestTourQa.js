import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourQa = () => {
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
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DOH", "YOW")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/ottawa.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Canada</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DOH <i className="fa-solid fa-arrow-right-arrow-left"></i> YOW</span></p>
                                        <p><strong>6789 QAR</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("YOW", "DOH")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/doha.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Doha</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>YOW <i className="fa-solid fa-arrow-right-arrow-left"></i> DOH</span></p>
                                        <p><strong>6780 QAR</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DOH", "SEB")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/sharjah.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Sharjah</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DOH <i className="fa-solid fa-arrow-right-arrow-left"></i> SEB</span></p>
                                        <p><strong>968 QAR</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DOH", "CMB")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/colombo.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Colombo</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DOH <i className="fa-solid fa-arrow-right-arrow-left"></i> CMB</span></p>
                                        <p><strong>2430 QAR</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DOH", "LEB")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/lebanon.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Lebanon</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DOH <i className="fa-solid fa-arrow-right-arrow-left"></i> LEB</span></p>
                                        <p><strong>8008 QAR</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SHJ", "SXR")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/srinagar.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Sri Nagar</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SHJ <i className="fa-solid fa-arrow-right-arrow-left"></i> SXR</span></p>
                                        <p><strong>9228 QAR</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DOH", "TYO")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/tokyo.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Tokyo</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DOH <i className="fa-solid fa-arrow-right-arrow-left"></i> TYO</span></p>
                                        <p><strong>8272 QAR</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SHJ", "TAG")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/panglao.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Panglao</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SHJ <i className="fa-solid fa-arrow-right-arrow-left"></i> TAG</span></p>
                                        <p><strong>5598 QAR</strong></p>
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
export default BestTourQa;
