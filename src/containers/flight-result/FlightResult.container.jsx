import React, { useEffect, useState } from "react";
import moment from "moment";

// import CtaType1 from "../../components/cta/CtaType1.component";
import CtaPopup from "../../components/cta-popup/CtaPopup.component";
import FlightResultItem from "../../components/flight-result-item/FlightResultItem.component";
import CarriersFilter from "../../components/carriers-filter/CarriersFilter.component";
import StopsFilter from "../../components/stops-filter/StopsFilter.component";
import TimeFilter from "../../components/time-filter/TitmeFilter";
import { useNavigate } from "react-router-dom";
import {phoneNum} from "../../utils/globalVars";
import BannerSearchForm from "../../components/flight-search-form/BannerSearchForm.component";
import axios from "axios";

const FlightResultContainer = ({ dataToSend, flData, travObj }) => {
  const [data, setData] = React.useState(null);
  const [sectorWiseData, setSectorWiseData] = React.useState([]); 
  const [airlieData, setairlieData] = useState([]);

  const navigate = useNavigate();
  const [filters, setFilters] = React.useState({
    stops: dataToSend.filters.stopsFilter,
    start: "",
    end: "",
    carriers: !!dataToSend.filters.carrierFilter
      ? dataToSend.filters.carrierFilter.split(",")
      : [],
  });

  

  React.useEffect(() => {
    axios.get('https://cmi.Gogalaxytravels.com/api/getruledata').then((response) => {
      setairlieData(response.data.data);
    });
  }, []);

  React.useEffect(()=>{

    if(airlieData.length>0){

      // console.log("Airlines", airlieData);
      const dataToSearch = dataToSend.locationDeparture + dataToSend.locationArrival;
      const filterSectorData = airlieData.filter(el=> el.origin+el.destination===dataToSearch);
      // console.log("Data To Search", filterSectorData);
      setSectorWiseData(filterSectorData);
    }

  },[airlieData]);

  const loadflights = () => {

    function dateCheck(from,to,check) {
   
      var fDate,lDate,cDate;
      fDate = Date.parse(from);
      lDate = Date.parse(to);
      cDate = Date.parse(check);
  
      if((cDate <= lDate && cDate >= fDate)) {
          return true;
      }
      return false;
    }
    // console.log("airlines Data", airlieData);
    return flData.data.data.map((el) => {
      const airlineName = flData.data.dictionaries.carriers[el.validatingAirlineCodes[0]];
      let flightPrice = {};
        const carriesrObj = flData.data.dictionaries.carriers;

        // console.log('Carrier Object', carriesrObj);
        // const filteredData = sectorWiseData.filter(el=>el.airlines===airlineName.toLowerCase()); 

        for(let key in carriesrObj){
          const dataToSearch = dataToSend.locationDeparture + dataToSend.locationArrival;

          let filteredData = sectorWiseData.filter(el=> (el.airline.toLowerCase()===key.toLowerCase()) &&  (el.origin+el.destination===dataToSearch));

          let dateChecks = filteredData.filter(el => dateCheck(el.bookingFromDate, el.BookingToDate, dataToSend.departure));
          let passeger = filteredData.filter(el => el.paxnoTo >= dataToSend.travellers.length);

          if(dateChecks.length>0){
            // console.log("Filter Data", dateChecks, dataToSend.departure);
            filteredData = dateChecks.filter(el=> (el.airline.toLowerCase()===key.toLowerCase()) &&  (el.origin+el.destination===dataToSearch) && dateCheck(el.bookingFromDate, el.BookingToDate, dataToSend.departure));
          }

          if(dateChecks.length>0 && passeger.length>0){
            filteredData = passeger.filter(el=> (el.airline.toLowerCase()===key.toLowerCase()) &&  (el.origin+el.destination===dataToSearch) && el.paxnoTo >= dataToSend.travellers.length);
            // console.log("passager", dataToSend.travellers.length)
          }

          flightPrice[key] = {
            amount: filteredData.length>0?filteredData[0].amount:null,
            bookingFromDate: filteredData.length>0?filteredData[0].bookingFromDate:null,
            BookingToDate: filteredData.length>0?filteredData[0].BookingToDate:null,
            amountType: filteredData.length>0?filteredData[0].amountType:null,
            calculateOn: filteredData.length>0?filteredData[0].calculateOn:null,
          }
        }

        return (
          <FlightResultItem
            flData={el}
            key={el.id}
            airlineName={airlineName}
            airportNames={flData.data.airportNames}
            allAirlineNames={flData.data.dictionaries.carriers}
            navigate={navigate}
            flightPrice={flightPrice}
          />
        );
    });
  };

  const handleStopChange = (val) => {
    handleFilters({
      ...filters,
      stops: filters.stops !== val ? val : null,
    });

    setFilters({
      ...filters,
      stops: filters.stops !== val ? val : null,
    });
  };

  // timefitler
  const handleFlightTime = (val) =>{
    console.log("filer DATa time", val.start.hours+':'+val.start.minutes);
    
    handleFilters({
      ...filters,
      start: val.start.hours+":"+val.start.minutes,
      end:  val.end.hours+":"+val.end.minutes,
    });

    setFilters({
        ...filters,
        start: val.start.hours+":"+val.start.minutes,
        end:  val.end.hours+":"+val.end.minutes,
      });
    }

  const handleCarrierChange = (val) => {
    const isPresent = filters.carriers.includes(val);
    let newCarrArr = [];
    if (isPresent) {
      newCarrArr = filters.carriers.filter((el) => el !== val);
    } else {
      newCarrArr = [...filters.carriers, val];
    }

    handleFilters({
      ...filters,
      carriers: newCarrArr,
    });

    setFilters({
      ...filters,
      carriers: newCarrArr,
    });
  };



  const handleFilters = (filters) => {
    const filterString = `${!!filters.stops ? `&stopsFil=${filters.stops}` : ""}${filters.carriers.length > 0 ? `&carFil=${filters.carriers.join()}` : ""}${filters.start!=="" ? `&start=${filters.start}` : ""}${filters.end!=="" ? `&end=${filters.end}`:""}`;

    navigate({
      pathname: "/flights",
      search: `?search_t=${moment().unix()}&tripType=${
        dataToSend.tripType
      }&dep_loc=${dataToSend.locationDeparture}&dest_loc=${
        dataToSend.locationArrival
      }&dep_dt=${dataToSend.departure}&ret_dt=${dataToSend.arrival}&fl_cl=${
        dataToSend.flightClass
      }&adt=${travObj.adults}&chd=${travObj.child}${filterString}`,
    });

    console.log("filterString", filterString);
  };

  return (
    <div className="cm-flight-result-container ticket_booking">
      <BannerSearchForm depVal={data} urlVal={dataToSend} />
      {flData.data.data.length > 0 ? (
        <>
          {/* <CtaType1 fareToShow={flData.data.data[0].price.base} /> */}
          <div className="cm-section cm-flight-result-wrapper">
            <div className="cm-page-center cm-flex cm-flex-align-fs">
              <div className="cm-filter-sidebar">
                <div className="inner-sidebar">
                  <StopsFilter
                    selected={filters.stops}
                    handleStopChange={handleStopChange}
                  />
                  <CarriersFilter
                    selected={filters.carriers}
                    handleCarrierChange={handleCarrierChange}
                    data={flData.data.dictionaries.carriers}
                  />
                  <TimeFilter
                    start={filters.start}
                    end={filters.end}
                    handleFlightTime={handleFlightTime}
                    destination={dataToSend}
                  />
                </div>
                <div className="social-media-add">
                  <a href="https://www.facebook.com/Gogalaxytravels" target="_blank">
                    <img src="/flymy/FacebookTravelgency.jpg"/>
                  </a>
                  <a href="https://twitter.com/Gogalaxytravels" target="_blank">
                    <img src="./flymy/TwitterTravelGency.jpg"/>
                  </a>
                </div>
              </div>
              <div className="cm-result-wrap cm-lr-pad">
                {loadflights()}
                </div>
              <div className="add-col">
                <a href={`tel:${phoneNum.value}`}>
                  <img src="./flymy/CallingTravelGency.jpg"/>
                </a>
              </div>
            </div>
          </div>
          <CtaPopup dataToSend={dataToSend} />
        </>
      ) : (
        <div className="cm-empty-fl-container cm-section cm-txt-center">
          <p className="cm-empty-msg">No flights available.</p>
          <button
            className="cm-btn cm-sec-bg2 cm-white-col"
            onClick={() => navigate("/")} >
            Go back
          </button>
        </div>
      )}
    </div>
  );
};

export default FlightResultContainer;
