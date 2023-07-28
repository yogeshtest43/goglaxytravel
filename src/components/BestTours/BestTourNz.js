import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourRp = () => {
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
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("WLG", "MEL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/wellington.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Wellington</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>WLG <i className="fa-solid fa-arrow-right-arrow-left"></i> MEL</span></p>
                                        <p><strong>$1247</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("CHC", "WLG")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/christchurch.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Christchurch</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>CHC <i className="fa-solid fa-arrow-right-arrow-left"></i> WLG</span></p>
                                        <p><strong>$386</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("CHC", "ADL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-7.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Adelaid</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>CHC <i className="fa-solid fa-arrow-right-arrow-left"></i> ADL</span></p>
                                        <p><strong>$1817</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MEL", "BPN")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/balikpapan.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Balikpapan</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MEL <i className="fa-solid fa-arrow-right-arrow-left"></i> BPN</span></p>
                                        <p><strong>$2637</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("WLG", "UPG")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/makassar.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Makassar</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>WLG <i className="fa-solid fa-arrow-right-arrow-left"></i> UPG</span></p>
                                        <p><strong>$4002</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("WLG", "SRG")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/semarang.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Semarang</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>WLG <i className="fa-solid fa-arrow-right-arrow-left"></i> SRG</span></p>
                                        <p><strong>$2149</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MEL", "SUB")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-5.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Surabaya</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MEL <i className="fa-solid fa-arrow-right-arrow-left"></i> SUB</span></p>
                                        <p><strong>$6814</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MEL", "PLW")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/palu.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Palu</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MEL <i className="fa-solid fa-arrow-right-arrow-left"></i> PLW</span></p>
                                        <p><strong>$2149</strong></p>
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
export default BestTourRp;
