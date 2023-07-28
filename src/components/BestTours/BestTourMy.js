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
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("BKI", "LGK")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/kota-kinabalu.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Kota Kinabalu</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>BKI <i className="fa-solid fa-arrow-right-arrow-left"></i> LGK</span></p>
                                        <p><strong>RM 641</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("LGK", "KCH")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/langkawi.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Langkawi</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>LGK <i className="fa-solid fa-arrow-right-arrow-left"></i> KCH</span></p>
                                        <p><strong>RM 830</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("KCH", "PEN")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/kuching.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Kuching</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>KCH <i className="fa-solid fa-arrow-right-arrow-left"></i> PEN</span></p>
                                        <p><strong>RM 545</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("PEN", "BKI")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/penang.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Penang</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>PEN <i className="fa-solid fa-arrow-right-arrow-left"></i> BKI</span></p>
                                        <p><strong>RM 653</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("PEN", "GOI")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/goa.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Goa</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>PEN <i className="fa-solid fa-arrow-right-arrow-left"></i> GOI</span></p>
                                        <p><strong>RM 2346</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("KCH", "DXB")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/dubai.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Dubai</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>KCH <i className="fa-solid fa-arrow-right-arrow-left"></i> DXB</span></p>
                                        <p><strong>RM 4873</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("BKI", "YQM")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/moncton.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Moncton</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>BKI <i className="fa-solid fa-arrow-right-arrow-left"></i> YQM</span></p>
                                        <p><strong>RM 37,052</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("LGK", "DPS")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/denpasar.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Denpasar</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>LGK <i className="fa-solid fa-arrow-right-arrow-left"></i> DPS</span></p>
                                        <p><strong>RM 1252</strong></p>
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
