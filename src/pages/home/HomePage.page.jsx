import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlightSearchForm from "../../components/flight-search-form/FlightSearchForm.component";
import "./Homepage.styles.css";
import { phoneNum } from "../../utils/globalVars";
import moment from "moment";
import SEO from "../../utils/SEO";
import { useNavigate } from "react-router-dom";
// import BestTour from "../../components/BestTours/BestTour";
// import BestTourAu from "../../components/BestTours/BestTourAu";
// import BestTourCa from "../../components/BestTours/BestTourCa";
// import BestTourIn from "../../components/BestTours/BestTourIn";
// import BestTourNz from "../../components/BestTours/BestTourNz";
// import BestTourPh from "../../components/BestTours/BestTourPh";
// import BestTourQa from "../../components/BestTours/BestTourQa";
// import BestTourRp from "../../components/BestTours/BestTourRp";
// import BestTourSg from "../../components/BestTours/BestTourSg";
// import BestTourUAE from "../../components/BestTours/BestTourUAE";
// import BestTourHk from "../../components/BestTours/BestTourHk";
// import BestTourMy from "../../components/BestTours/BestTourMy";
// import BestTourZa from "../../components/BestTours/BestTourZa";
// import BestTourTh from "../../components/BestTours/BestTourTh";
// import BestTourUk from "../../components/BestTours/BestTourUk";
// import BestTourVn from "../../components/BestTours/BestTourVn";


const HomePage = () => {

  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const gallerySetting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleExpClick = (origin, dest) => {
    navigate({
      pathname: "/flights",
      search: `?search_t=${moment().unix()}&tripType=one-way&dep_loc=${origin}&dest_loc=${dest}&dep_dt=${moment().format(
        "YYYY-MM-DD"
      )}&ret_dt=null&fl_cl=ECONOMY&adt=1&chd=0`,
    });
  };

  const loadBestTour = () => {
    let urlname
    urlname = window.location.hostname.split('.')[0];
    if (urlname === 'localhost') {
      urlname = "au"
    } else {
      if (urlname === 'www') {
        urlname = "au"
      }
    }

    return (
      <>
        {/* {urlname === 'Gogalaxytravels' ? <BestTour /> : ""}
        {urlname === 'au' ? <BestTourAu /> : ""}
        {urlname === 'ca' ? <BestTourCa /> : ""}
        {urlname === 'hk' ? <BestTourHk /> : ""}
        {urlname === 'in' ? <BestTourIn /> : ""}
        {urlname === 'id' ? <BestTourRp /> : ""}
        {urlname === 'my' ? <BestTourMy /> : ""}
        {urlname === 'nz' ? <BestTourNz /> : ""}
        {urlname === 'ph' ? <BestTourPh /> : ""}
        {urlname === 'qa' ? <BestTourQa /> : ""}
        {urlname === 'sg' ? <BestTourSg /> : ""}
        {urlname === 'sa' ? <BestTourZa /> : ""}
        {urlname === 'th' ? <BestTourTh /> : ""}
        {urlname === 'en' ? <BestTour /> : ""}
        {urlname === 'es' ? <BestTour /> : ""}
        {urlname === 'ae' ? <BestTourUAE /> : ""}
        {urlname === 'uk' ? <BestTourUk /> : ""}
        {urlname === 'vn' ? <BestTourVn /> : ""} */}
      </>
    )
  }
  return (
    <>
      <SEO
        title="Gogalaxytravels -Ultimate Destination for Cheap Flight Booking"
        description="Gogalaxytravels - Your ultimate destination for hassle-free travel bookings. Find the best deals on flights, and embark on your dream journey today. Visit us"
      />

      <div className="home-banner">
        <div className="cm-page-center">
          <div className="search-banner">
            <div className="banner-split">
              <img src="flymy/Plane-doodle.png" className="planeFirst" alt="" />
              <img src="flymy/Vector.png" className="vectorPlant" alt="" />
            </div>
            <div className="searchflight">
              <h1>Enjoy Your Find Flight To Book</h1>
              <FlightSearchForm />
            </div>
            <div className="BannerSearch">
              <img src="flymy/main-bannner.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="cm-page-center cm-pads">
          <div className="popular-text">
            <h5>Modern &amp; Beautiful</h5>
            <h2>Popular Destinations</h2>
          </div>
          <div className="popular-desti cm-flex">
            <div className="destinations">
              <a href="#" onClick={(e) => handleExpClick("INS", "TKY")}>
                <div className="dest-image">
                  <img src="flymy/turkey.png" alt="" />
                </div>
                <div className="text-center">
                  <h4>Istabul, Turkey</h4>
                  {/* <p>18 Tours</p> */}
                </div>
              </a>
            </div>
            <div className="destinations">
              <a href="#" onClick={(e) => handleExpClick("LHR", "DXB")}>
                <div className="dest-image">
                  <img src="flymy/london.png" alt="" />
                </div>
                <div className="text-center">
                  <h4>London, UK</h4>
                  {/* <p>18 Tours</p> */}
                </div>
              </a>
            </div>
            <div className="destinations">
              <a href="#" onClick={(e) => handleExpClick("NYC", "BOS")}>
                <div className="dest-image">
                  <img src="flymy/usa.png" alt="" />
                </div>
                <div className="text-center">
                  <h4>New York, US</h4>
                  {/* <p>18 Tours</p> */}
                </div>
              </a>
            </div>
            <div className="destinations">
              <a href="#" onClick={(e) => handleExpClick("MAN", "LHR")}>
                <div className="dest-image">
                  <img src="flymy/menchester.png" alt="" />
                </div>
                <div className="text-center">
                  <h4>Manchester, UK</h4>
                  {/* <p>18 Tours</p> */}
                </div>
              </a>
            </div>
            <div className="destinations">
              <a href="#" onClick={(e) => handleExpClick("VIE", "AWP")}>
                <div className="dest-image">
                  <img src="flymy/austria.png" alt="" />
                </div>
                <div className="text-center">
                  <h4>Vienna, Austria</h4>
                  {/* <p>18 Tours</p> */}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section class="offer-section">
        <div class="cm-page-center">
          <div class="popular-text choose-text">
            <h5>Modern &amp; Beautiful</h5>
            <h2>Why Choose Us</h2>
          </div>
          <div class="choose-grids text-center cm-flex">
            <div class="choose-items">
              <img src="flymy/price.png" alt="" />
              <h5>Best Price Guarantee</h5>
              <p>We take pride in offering the Best Price guarantee, ensuring that you always get the most competitive rates for your desired accommodations.</p>
            </div>
            <div class="choose-items">
              <img src="flymy/booking.png" alt="" />
              <h5>Easy Quick Booking</h5>
              <p>Say goodbye to time-consuming processes, as our Easy Quick Booking feature allows you to secure your reservations effortlessly in just a few clicks.</p>
            </div>
            <div class="choose-items">
              <img src="flymy/customer.png" alt="" />
              <h5>24/7 Customer Care</h5>
              <p>Our dedicated and friendly 24/7 Customer Care team is at your service, providing support and assistance whenever you need it, making your travel journey seamless and stress-free.</p>
            </div>
          </div>
        </div>
      </section>


      <section class="service_section">
        <div class="cm-page-center">
          <div class="popular-text">
            <h5>Modern &amp; Beautiful</h5>
            <h2>The Travel Gallery</h2>
          </div>
          <div class="image-gallery">
            <Slider {...gallerySetting} className="cm-home-guide-slider" >
              <div>
                <img src="flymy/1.png" alt="" />
              </div>
              <div>
                <img src="flymy/2.png" alt="" />
              </div>
              <div>
                <img src="flymy/3.png" alt="" />
              </div>
              <div>
                <img src="flymy/4.png" alt="" />
              </div>
              <div>
                <img src="flymy/5.png" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* {loadBestTour()} */}

      <div className="cm-section review-section">
        <div className="cm-page-center">
          <h2 className="cm-txt-center"> Customer Reviews </h2>

          <Slider {...settings} className="cm-home-guide-slider">
            <div className="cm-home-guide-slide">
              <p>Flight Trip Charge created an incredible tour for my family and relatives employing pocket-friendly last-minute travel flights.</p>
              {/* <strong>Customer Name</strong>   */}
            </div>
            <div className="cm-home-guide-slide">
              <p>Wonderful time with you all! The service was really helpful in aiding me with all aspects of my flight change procedures.</p>
              {/* <strong>Customer Name</strong> */}
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomePage;
