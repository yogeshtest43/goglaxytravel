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
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("JKT", "DPS")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/jakarta.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Jakarta</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>JKT <i className="fa-solid fa-arrow-right-arrow-left"></i> DPS</span></p>
                                        <p><strong>Rp 3,254,880</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("JKT", "KUL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/kuala.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Kuala Lampur</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>JKT <i className="fa-solid fa-arrow-right-arrow-left"></i> KUL</span></p>
                                        <p><strong>Rp 3,325,800</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("DPS", "BPN")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/denpasar.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Denpasar</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>DPS <i className="fa-solid fa-arrow-right-arrow-left"></i> BPN</span></p>
                                        <p><strong>Rp 4,165,816</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("BPN", "JKT")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/balikpapan.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Balikpapan</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>BPN <i className="fa-solid fa-arrow-right-arrow-left"></i> JKT</span></p>
                                        <p><strong>Rp 3,288,760</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("UPG", "KUL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/makassar.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Makassar</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>UPG <i className="fa-solid fa-arrow-right-arrow-left"></i> KUL</span></p>
                                        <p><strong>Rp 3,175,900</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SUB", "UPG")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/surabaya.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Surabaya</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SUB <i className="fa-solid fa-arrow-right-arrow-left"></i> UPG</span></p>
                                        <p><strong>Rp 2,350,652</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("PLW", "SUB")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/palu.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Palu</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>PLW <i className="fa-solid fa-arrow-right-arrow-left"></i> SUB</span></p>
                                        <p><strong>Rp 17,168,280</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("SRG", "PLW")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/semarang.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Semarang</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>SRG <i className="fa-solid fa-arrow-right-arrow-left"></i> PLW</span></p>
                                        <p><strong>Rp 5,609,004</strong></p>
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
