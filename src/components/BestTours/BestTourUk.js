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
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("LON", "BKK")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/bangkok.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Bangkok</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>LON <i className="fa-solid fa-arrow-right-arrow-left"></i> BKK</span></p>
                                        <p><strong>£1,473</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MAN", "YMQ")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/montreal.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Montreal</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MAN <i className="fa-solid fa-arrow-right-arrow-left"></i> YMQ</span></p>
                                        <p><strong>£781</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("LON", "BCN")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/barcelona.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Barcelona</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>LON <i className="fa-solid fa-arrow-right-arrow-left"></i> BCN</span></p>
                                        <p><strong>£112</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MAN", "CPT")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/wellington.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Cape Town</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MAN <i className="fa-solid fa-arrow-right-arrow-left"></i> CPT</span></p>
                                        <p><strong>£817</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("LON", "MAN")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/manchester.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Manchester City</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>LON <i className="fa-solid fa-arrow-right-arrow-left"></i> MAN</span></p>
                                        <p><strong>£105</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MAN", "PAR")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/paris.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Paris</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MAN <i className="fa-solid fa-arrow-right-arrow-left"></i> PAR</span></p>
                                        <p><strong>£93</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("LON", "NYC")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/new-york.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">New York</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>LON <i className="fa-solid fa-arrow-right-arrow-left"></i> NYC</span></p>
                                        <p><strong>£781</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column cm-wd-25" onClick={(e) => handleExpClick("MAN", "SEL")}>
                            <div className="col-inner">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/seoul.jpg" alt="" />
                                </a>
                                <div className="offter-text">
                                    <div className="title">Seoul</div>
                                    <div className="cm-flex-type-1">
                                        <p><span>MAN <i className="fa-solid fa-arrow-right-arrow-left"></i> SEL</span></p>
                                        <p><strong>£987</strong></p>
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
