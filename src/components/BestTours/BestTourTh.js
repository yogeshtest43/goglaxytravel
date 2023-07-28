import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourTh = () => {
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
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("CNX", "BKK")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/chiang-mai.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Chiang Mai</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>CNX <i className="fa-solid fa-arrow-right-arrow-left"></i> BKK</span></p>
                                        <p><strong>฿2,478</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("CNX", "HKT")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/phuket.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Phuket</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>CNX <i className="fa-solid fa-arrow-right-arrow-left"></i> HKT</span></p>
                                        <p><strong>฿4,688</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HKT", "HDY")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/hat-yai.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Hat Yai</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HKT <i className="fa-solid fa-arrow-right-arrow-left"></i> HDY</span></p>
                                        <p><strong>฿4,688</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HDY", "BKK")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/bangkok.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Bangkok</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HDY <i className="fa-solid fa-arrow-right-arrow-left"></i> BKK</span></p>
                                        <p><strong>฿4,010</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("BKK", "SIN")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/singapore.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Singapore</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>BKK <i className="fa-solid fa-arrow-right-arrow-left"></i> SIN</span></p>
                                        <p><strong>฿8,918</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HKT", "LGK")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/langkawi.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Langkawi</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HKT <i className="fa-solid fa-arrow-right-arrow-left"></i> LGK</span></p>
                                        <p><strong>฿6,625</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("CNX", "ICN")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/incheon.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Incheon</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>CNX <i className="fa-solid fa-arrow-right-arrow-left"></i> ICN</span></p>
                                        <p><strong>฿18,261</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HDY", "WLG")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/wellington.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Wellington</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HDY <i className="fa-solid fa-arrow-right-arrow-left"></i> WLG</span></p>
                                        <p><strong>฿50,277</strong></p>
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
export default BestTourTh;
