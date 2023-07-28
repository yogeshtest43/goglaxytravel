import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourUk = () => {
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
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SGN", "HAN")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/hochiminh.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Ho Chi Minh City</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SGN <i className="fa-solid fa-arrow-right-arrow-left"></i> HAN</span></p>
                                        <p><strong>2,386,452 ₫</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HAN", "DAD")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/hanoi.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Hanoi</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HAN <i className="fa-solid fa-arrow-right-arrow-left"></i> DAD</span></p>
                                        <p><strong>2,414,000 ₫</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DAD", "PQC")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/da-nang.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">De Nang</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DAD <i className="fa-solid fa-arrow-right-arrow-left"></i> PQC</span></p>
                                        <p><strong>2,762,056 ₫</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("PQC", "SGN")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/phu.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Phu Quoc</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>PQC <i className="fa-solid fa-arrow-right-arrow-left"></i> SGN</span></p>
                                        <p><strong>1,517,519 ₫</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("HAN", "UPG")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/makassar.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Makassar</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>HAN <i className="fa-solid fa-arrow-right-arrow-left"></i> UPG</span></p>
                                        <p><strong>10,863,086 ₫</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DAD", "DPS")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/denpasar.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Denpasar</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DAD <i className="fa-solid fa-arrow-right-arrow-left"></i> DPS</span></p>
                                        <p><strong>6,765,225 ₫</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("PQC", "CEB")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/cebu-city.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Cebu City</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>PQC <i className="fa-solid fa-arrow-right-arrow-left"></i> CEB</span></p>
                                        <p><strong>17,356,456 ₫</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SGN", "DXB")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/dubai.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Dubai</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SGN <i className="fa-solid fa-arrow-right-arrow-left"></i> DXB</span></p>
                                        <p><strong>16,730,000 ₫</strong></p>
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
export default BestTourUk;
