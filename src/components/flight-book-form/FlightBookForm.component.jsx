import React, { useEffect, useState ,useRef } from 'react';
import DateSelector from '../date-selector/DateSelector.component';
import NationalitySelect from './NationalitySelect.component';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../../redux/notifications/notifications.action';
import { charges } from '../../utils/charges';
import travProtection from '../../assets/images/flight/travel-insurance.png';
import axios from 'axios';
import { api_url } from '../../utils/apiInfo';
import { Link, useNavigate } from 'react-router-dom';
import moment from "moment";
import { getDuration } from "../../utils/utilFn";
import { phoneNum } from "../../utils/globalVars";
import parse from 'html-react-parser'
import { useCreditCardValidator, images } from 'react-creditcard-validator';
import { countrySign } from '../../utils/cuntryname';

const FlightBookForm = ({ travData, grandTotal, taxes, flightSummary, data}) => {

  const [termsTab, settermsTab] = useState(0);
  const [activeShow, setactiveShow] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);
 
  const dispatch = useDispatch();

  const currency = useSelector((state) => state.currency);
  
  // Credit card information validation

  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
    meta: { erroredInputs }
  } = useCreditCardValidator();

  /*==========================Calculat4e time =================== */
  const [totalCalc, settotalCalc] = useState(0);

  const Ref = useRef(null);
const [timer, setTimer] = useState('00:00:00');
const getTimeRemaining = (e) => {
const total = Date.parse(e) - Date.parse(new Date());
const seconds = Math.floor((total / 1000) % 60);
const minutes = Math.floor((total / 1000 / 60) % 60);
const hours = Math.floor((total / 1000 * 60 * 60) % 24);
return {
    total, hours, minutes, seconds
  };
}
const startTimer = (e) => {
  let { total, hours, minutes, seconds } = getTimeRemaining(e);
  if (total >= 0) {
    setTimer(
      (hours > 0 ? hours : '0' + hours) + ':' +
      (minutes > 0 ? minutes : '0' + minutes) + ':'
      + (seconds > 0 ? seconds : '0' + seconds)
    )
  }
}
const clearTimer = (e) => {
  if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000)
    Ref.current = id;
}
const getDeadTime = () => {
  let deadline = new Date();
  deadline.setSeconds(deadline.getSeconds() + 1200);
  return deadline;
}
useEffect(() => {
  clearTimer(getDeadTime());
}, []);

/*===================== End time Calculate ================ */

  const [formVal, setFormVal] = React.useState({
    phoneNumCode: '+1',
    phoneNum: '',
    altPhoneNum: '',
    email: '',
    address1: '',
    country: 'US',
    state: '',
    city: '',
    zipCode: '',
    flight_summary: data,
    acceptTnc:false,
    paymentMethod: 'Credit Card',
    baggage: 0,
    travelProtection: true,
    travelPlaneProtection: 'yes',
    cardNumber: '',
    cvv: '',
    expiryDate: '',
    nameOnCard: '',
    refundable: 'no',
  });

  // Time counter
  const chkReqFields = (arr, dataKey) => {
    let isValid = true;
    arr.forEach((el) => {
      console.log(el, formVal[el]);
      if (formVal[el] === '') isValid = false;
    });

    return isValid;
  };

  const showHide = (val) => {
    let flag;
    console.log("Hide and show", val);
    if(val===true){
      flag = false;
    }else{
      flag = true;
    }
    setactiveShow(flag);
  }

  const handletoTerms = (event) => {
    console.log("Click handle to terms", !formVal.acceptTnc);
    setFormVal({
      ...formVal,
      acceptTnc : !formVal.acceptTnc,
    });
    // settermsTab(event);
  }

  const chkTravDet = () => {
    let isPassValid = true;
    const chkFields = ['firstName', 'lastName', 'gender', 'dob'];

    for (let key in passInfo) {
      chkFields.forEach((el) => {
        if (passInfo[key][el] === '') isPassValid = false;
      });
    }

    return isPassValid;
  };

  const navigate = useNavigate();
  const flightBookSubmit = async (event) => {
    event.preventDefault();
    // 👇️ redirect to /contacts
    // navigate("/payment");
    const chkArr = [
      'phoneNum',
      'email',
      'address1',
      'country',
      'state',
      'city',
      'cardNumber',
      'nameOnCard',
      'cvv',
      'expiryDate',
    ]

    
  
    console.log("Submit Form ", formVal); 
    
    console.log(
      'chkReqFields(chkArr, "formVal")',
      chkReqFields(chkArr, 'formVal')
    );
    
    if (!chkReqFields(chkArr, 'formVal') || !chkTravDet()) {
      dispatch(
        showToast({
          msg: 'Fields marked (*) are required.',
          type: 'error',
        })
      );
      return;
    }

    if(formVal.acceptTnc===false){
      alert("Please accept you terms & condition");
      return ;
    }


    try {
      const dataToSend = {
        ...formVal,
        grandTotal,
        taxes,
        flight_name: data.airlineName,
        itineraries: data.itineraries,
        passInfo: passInfo,
        adult: data.flData.travelerPricings.length,
        child: 0,
        baggageFees: calcTotalBaggagePrice(),
        totalPrice: calcFinalPrice(),
      };

      console.log("dataToSend", dataToSend);
      // return ;
      let baseurl = 'https://cmi.Gogalaxytravels.com';
      // let baseurl = 'http://localhost:8000';
      const res = await axios.post(`${baseurl}/api/addbooking`, dataToSend);

      if (res.data.status === 1) {
        setFormVal({
          phoneNumCode: '+1',
          phoneNum: '',
          altPhoneNum: '',
          email: '',
          address1: '',
          country: 'US',
          state: '',
          city: '',
          zipCode: '',
          flight_summary: data,
          acceptTnc:false,
          paymentMethod: 'Credit Card',
          baggage: 0,
          travelProtection: true,
          travelPlaneProtection: 'yes',
          refundable: 'no',
          cardNumber: '',
          nameOnCard: '',
          cvv: '',
          expiryDate: '',
        });
        dispatch(
          showToast({
            msg: res.data.msg,
            type: 'success',
          })
        );
        navigate('/thank-you-page');
      }
    } catch (error) {
      dispatch(
        showToast({
          msg: 'Some error occured',
          type: 'error',
        })
      );
    }
    
  };

  const loadTravDataFields = () => {
    let dataFields = {};
    for (let i = 0; i < travData.length; i++) {
      dataFields[travData[i].travelerType.toLowerCase() + travData[i].travelerId] = {
        firstName: '',
        middleName: '',
        lastName: '',
        gender: 'male',
        dob: '',
        travelerType: travData[i].travelerType,
      };
    }

    return dataFields;
  };

  const [passInfo, setPassInfo] = React.useState(loadTravDataFields());

  
  const handlePassChange = (e, fieldName, travId) => {
    setPassInfo({
      ...passInfo,
      [travId]: {
        ...passInfo[travId],
        [fieldName]: e.target.value,
      },
    });
  };


  const handleDateChange = (selDate, fieldName) => {
    const splitFieldName = fieldName.toString().split('&');
    setPassInfo({
      ...passInfo,
      [splitFieldName[0]]: {
        ...passInfo[splitFieldName[0]],
        [splitFieldName[1]]: selDate,
      },
    });

  };

  const [startDate, setStartDate] = React.useState(new Date());


  const loadTravFields = () => {
    return travData.map((el) => (
      <div key={el.travelerId} className="cm-form-field-grp cm-pass-info-wrap">
          <h4 className="">
          {el.travelerType} {el.travelerId}
          </h4>
          <p>Passenger details must match your passport or photo ID</p>
        <div className="cm-form-field-third cm-top">
          <div className="cm-form-field">
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              placeholder='First Name'
              value={
                passInfo[el.travelerType.toLowerCase() + el.travelerId]
                  .firstName
              }
              onChange={(e) =>
                handlePassChange(
                  e,
                  'firstName',
                  el.travelerType.toLowerCase() + el.travelerId
                )
              }
            />
          </div>
          <div className="cm-form-field">
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              placeholder='Middle Name'
              value={
                passInfo[el.travelerType.toLowerCase() + el.travelerId]
                  .middleName
              }
              onChange={(e) =>
                handlePassChange(
                  e,
                  'middleName',
                  el.travelerType.toLowerCase() + el.travelerId
                )
              }
            />
          </div>
          <div className="cm-form-field">
            <label>Last Name*</label>
            <input
              type="text"
              name="lastName"
              placeholder='Last Name'
              value={
                passInfo[el.travelerType.toLowerCase() + el.travelerId].lastName
              }
              onChange={(e) =>
                handlePassChange(
                  e,
                  'lastName',
                  el.travelerType.toLowerCase() + el.travelerId
                )
              }
            />
          </div>
        </div>
        <div className="cm-form-field-half">
          <div className="cm-form-field">
            <label>Gender*</label>
            <select
              name="gender"
              value={
                passInfo[el.travelerType.toLowerCase() + el.travelerId].gender
              }
              onChange={(e) =>
                handlePassChange(
                  e,
                  'gender',
                  el.travelerType.toLowerCase() + el.travelerId
                )
              }
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="cm-form-field">
            <label>Date of Birth*</label>
            <input type='date' name='dob' onChange={(e) =>
                handlePassChange(
                  e,
                  'dob',
                  el.travelerType.toLowerCase() + el.travelerId
                )
              } 
              />
          </div>
        </div>
      </div>
    ));
  };

  const travelProtection = (e) => {
    setFormVal({
      ...formVal,
      travelPlaneProtection: e.target.value,
    });
    calcFinalPrice();
  }

  const addtrageTTP = () => {
    if(formVal.baggage === 0){
      setFormVal({
        ...formVal,
        baggage: 7,
      });
      return ;
    }
    
    setFormVal({
      ...formVal,
      baggage: 0,
    });
    // calcFinalPrice();
  }

  const refundableTravel = (e) => {
    setFormVal({
      ...formVal,
      refundable: e.target.value,
    });

    calcFinalPrice();

  } 
 
  const calcFinalPrice = () => {
    console.log("Baggage", formVal.baggage);
    let prot = formVal.travelProtection ? charges.travelProtection : 0.0;
    let baggage = formVal.baggage > 0 ? grandTotal * formVal.baggage/100  : 0.0;
    let refundables = (formVal.refundable==='yes') ? (travData.length * grandTotal)*20/100 : 0;
    let travelprotection = (formVal.travelPlaneProtection==='yes') ? (travData.length * grandTotal)*10/100 : 0;
    let total =
      parseFloat(grandTotal) +
      parseFloat(taxes) +
      parseFloat(refundables) +
      // parseFloat(calcTotalBaggagePrice()) +
      // parseFloat(prot)+
      parseFloat(baggage)+
      parseFloat(travelprotection);
      // setTotalAmount(total.toFixed(2));
      // calcprice(total.toFixed(2))
    return total.toFixed(2);
  };

  const loadFares = () => {
    return (
      <table
        className="table table-bordered"
        border="1"
        cellPadding="0"
        cellSpacing="0"
      >
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Passenger</th>
            <th>
              Base (<span currency="code">{currency}</span>)
            </th>
            <th>
              Total (<span currency="code">{currency}</span>)
            </th>
          </tr>
        </thead>
        <tbody>
          {travData.map((el) => (
            <tr key={el.travelerId}>
              <td>{el.travelerId}</td>
              <td>{el.travelerType}</td>
              <td currency="value" fare="921.00">
                {el.price.base}
              </td>
              <td currency="value" fare="1552.50">
                {el.price.total}
              </td>
            </tr>
          ))}
          <tr>
            <th colSpan={3} style={{ fontWeight: '400' }}>
              Total (<span currency="code">{currency}</span>)
            </th>
            <td
              currency="value"
              className="cm-wt-700 cm-prim-col"
              fare={grandTotal}
            >
              {countrySign[currency]} {grandTotal}
            </td>
          </tr>
          <tr>
            <th colSpan={3} style={{ fontWeight: '400' }}>
              Tax (<span currency="code">{currency}</span>)
            </th>
            <td currency="value" className="cm-wt-700 cm-prim-col" fare={taxes}>
              {countrySign[currency]} {taxes}
            </td>
          </tr>
          {/* <tr>
            <th colSpan={3} style={{ fontWeight: '400' }}>
              Baggage Price (<span currency="code">USD</span>)
            </th>
            <td
              currency="value"
              className="cm-wt-700 cm-prim-col"
              fare={calcTotalBaggagePrice()}
            >
              $ {calcTotalBaggagePrice()}
            </td>
          </tr> */}
          {/* <tr>
            <th colSpan={3} style={{ fontWeight: '400' }}>
              Travel Protection (<span currency="code">USD</span>)
            </th>
            <td
              currency="value"
              className="cm-wt-700 cm-prim-col"
              fare={formVal.travelProtection ? charges.travelProtection : 0.0}
            >
              $ {formVal.travelProtection ? charges.travelProtection : 0.0}
            </td>
          </tr> */}
          <tr>
            <th colSpan={3}>
              Final Total Price: (<span currency="code">{currency}</span>)
            </th>
            <td currency="value" className="cm-gd-total cm-wt-700 cm-prim-col">
              {countrySign[currency]} {calcFinalPrice()}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const handleFieldChange = (e, fieldName) => {
    setFormVal({
      ...formVal,
      [fieldName]: e.target.value,
    });

    
  };

  

  const handleCheckChange = (e, fieldName) => {
    if (e.target.checked) {
      setFormVal({
        ...formVal,
        [fieldName]: [...formVal[fieldName], e.target.value],
      });
    } else {
      setFormVal((prevState) => ({
        ...prevState,
        [fieldName]: prevState[fieldName].filter((el) => el !== e.target.value),
      }));
    }
  };

  const handleRadioChange = (fieldName, value) => {
    setFormVal({
      ...formVal,
      [fieldName]: value,
    });
  };

  const calcTotalBaggagePrice = () => {
    let total = 0;
    if (formVal.baggage.length > 0) {
      formVal.baggage.forEach((el) => (total += parseFloat(el.split('$')[1])));
    }
    return total.toFixed(2);
  };

  const getAirportNames = (iataCode) => {
    if (!!data.airportNames)
      return `${data.airportNames[iataCode].code} | ${data.airportNames[iataCode].name}, ${data.airportNames[iataCode].country}`;
  };

  const getAirlineName = (code) => data.allAirlineNames[code];

  const loadSegments = (segmentArr) => {
    // console.log("Segment", segmentArr);
    return segmentArr.map((el) => (
      <div key={el.id} className="cm-content cm-flex-type-1">
        <div className="cm-col cm-col1">
          <img src={`https://www.pnrconverter.com/images/airlines/png/150/${el.carrierCode.toLowerCase()}.png`} />
          <h4>{getAirlineName(el.carrierCode)}</h4>
          <p className="cm-fl-code">
            {el.carrierCode} - {el.number}
          </p>
        </div>
        <div className="cm-col cm-col2">
          <h4 className="cm-prim-col">{el.departure.iataCode}</h4>
          <p>
            {getAirportNames(el.departure.iataCode)} Terminal:{" "}
            {el.departure.terminal}
          </p>
          <p className="cm-fl-date">
            {moment(el.departure.at).format("DD MMM, hh:mm a, dddd")}
          </p>
        </div>
        <div className="cm-col cm-col3">
          <h4 className="cm-prim-col">{el.arrival.iataCode}</h4>
          <p>
            {getAirportNames(el.arrival.iataCode)} Terminal:{" "}
            {el.arrival.terminal}
          </p>
          <p className="cm-fl-date">
            {moment(el.arrival.at).format("DD MMM, hh:mm a, dddd")}
          </p>
        </div>
        <div className="cm-col cm-col4">
          <h4 className="cm-prim-col">Duration</h4>
          <p className="cm-fl-date">{getDuration(el.duration)}</p>
        </div>
      </div>
    ));
  };


  const loadFullItinerary = (arr) => {
    return arr.map((el, index) => {
      return (
        <div key={index} className="cm-iti-item">
          <div class="cm-flex-type-1 flight-description">
            <div class="cm-flex summary-title">
              <img src="/images/icon/p-flight-summary.svg" />
              <h3 >Flight Summary</h3>
            </div>
            <p class="cancellation-easy"><i class="fa fa-check" aria-hidden="true"></i> Easy Cancellation within 24 hours.</p>
          </div>
          <h2>
            <i className="fa-solid fa-plane-departure"></i>{" "}
            {index === 0 ? "Departure" : "Return"}-{" "}
            {getAirportNames(el.segments[0].departure.iataCode)}
          </h2>
          {loadSegments(el.segments)}
        </div>
      );
    });
  };


 
  
  // console.log('formVal', formVal);

//  Yogesh Code working
const travelProtectionLoad = () => {
  let extraOrder = '';
  console.log();
  if(formVal.travelPlaneProtection==='yes'){
    extraOrder +=`<div className="cm-flex-type-1 price">
        <p>Travel Protection</p>
        <p><strong>${countrySign[currency]} ${((data.flData.price.base) * 10/100).toFixed(2)} each</strong></p> 
      </div>`;
  }
  if(formVal.baggage > 0){
    extraOrder +=`<div className="cm-flex-type-1 price">
    <p>TTP</p>
    <p><strong>${countrySign[currency]} ${(data.flData.price.base * 7/100).toFixed(2)} each</strong></p> 
    </div>`;
  }

  if(formVal.refundable ==='yes'){
    console.log("Fldata Price", data.flData.price.base);
    extraOrder +=`<div className="cm-flex-type-1 price">
    <p>Refundable Booking</p>
    <p><strong>${countrySign[currency]} ${((data.flData.price.base) * 20/100).toFixed(2)} each</strong></p> 
    </div>`;
  }
  // console.log("Extra Order", JSON.stringify(extraOrder));
  return extraOrder;
}


  return (
    // start
    <div className=" cm-section cm-page-center cm-flex-type-1 cm-flex-align-fs">
        <div className="cm-left-col cm-lr-pad">
          <div className="cart-time">
            <p className="title">Book now before tickets run out!</p>
            <div className="cm-flex-type-1 cart-timer">
              <span>
                <p className="timecount">{timer}</p>
                {/* <p>Minutes</p> */}
              </span>
              <span><img src="/images/icon/clock.png" /></span>
            </div>
          </div>
          <div className="cm-fl-res-iti-tab">
            {/* {console.log("Flight Summary", flightSummary)} */}
            {loadFullItinerary(flightSummary.itineraries)}
          </div>
          <div className="cm-fl-book-form">
            <div className="cm-form-section">
              <div className="cm-form-head">
                <div className='cm-flex passger-head-info'>
                  <img src='/images/icon/p-contact.svg' />
                  <h3 className="cm-section-sh">Booking details will be sent to</h3>
                </div>
              </div>
              <div className='cm-passeger-detail'>
                <div>
                  <div className='cm-form-field-third'>
                    <div className="cm-form-field">
                      <label>Email*</label>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter email Address"
                          onChange={(e) => handleFieldChange(e, 'email')}
                          value={formVal.email}
                        />
                      </div>
                    </div>
                    <div className="cm-form-field">
                      <label>Phone Number*</label>
                      <div className="cm-phone-inp">
                        <input
                          type="text"
                          placeholder="+1"
                          name="phoneNumCode"
                          value={formVal.phoneNumCode}
                          onChange={(e) => handleFieldChange(e, 'phoneNumCode')}
                        />
                        <input
                          value={formVal.phoneNum}
                          type="tel"
                          name="phoneNum"
                          placeholder="Enter Phone Number"
                          onChange={(e) => handleFieldChange(e, 'phoneNum')}
                        />
                      </div>
                    </div>
                    <div className="cm-form-field">
                        <label>Alternate Number</label>
                        <input
                          value={formVal.altPhoneNum}
                          type="tel"
                          name="altPhoneNum"
                          placeholder="Enter Alternate Number"
                          onChange={(e) => handleFieldChange(e, 'altPhoneNum')}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cm-form-section">
              <div className="cm-form-head">
                <div className='cm-flex passger-head-info'>
                  <img src='/images/icon/p-traveller-information.svg' />
                  <h3 className="cm-section-sh">Traveler Information</h3>
                </div>
              </div>
              <div className='passger-body-text'>
                <p>
                  IMPORTANT: Each passengers' full name must be entered as it appears on
                  their passport or government issued photo ID. Name changes are not
                  permitted after booking.
                </p>
                <h5>Enter Traveler(s) Details Below:</h5>
              </div>
            
              <div className='cm-passeger-detail'>
                {loadTravFields()}
              </div>
            </div>

            <div className='cm-fl-book-form'>
              <div className='cm-form-section'>
                <div className="cm-form-head">
                  <div className='cm-flex passger-head-info'>
                    <img src='/images/icon/p-refund-protected.svg' />
                    <h3 className="cm-section-sh">Refundable Booking</h3>
                  </div>
                  <div className='cm-section-body-refundable'>
                    <div class="refund-subtital">Choose Refundable Booking and receive a flight refund <b>({countrySign[currency]}{grandTotal})</b> even <b>up to 60 days</b> after you missed the flight and can <b>provide evidence</b> for one of the many reasons including:</div> 
                    
                  </div>
                  <div className="covid-txt">COVID-19 Infection and Isolation, <a onclick="window.open('https://www.refundable.me/covid/', 'info', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=800,height=600, screenX=50,screenY=50')" href="javascript: void(0);" class="text-link">see details</a></div>
                  <div className="refund-details">
                    <ul className="fraList">
                      <li>Flight refund: <b>({countrySign[currency]}{grandTotal})</b></li>
                      <li>Home Emergency</li>
                      <li>Illness / Injury (including Covid-19)</li>
                      <li>Adverse Weather</li>
                      <li>Sickness, Accident and Injury</li>
                      <li>Private vehicle failure</li>
                      <li>Pre-existing Medical Condition</li>
                      <li>Public Transport Failure</li>
                    </ul>
                    <img src="/images/icon/shild.png" alt="shild" className="icon_image" />
                  </div>
                  <h3> ${(( data.flData.travelerPricings[0].price.base) * 20/100).toFixed(2)}  per person</h3>
                  <div>
                    <div className='cm-flex-type-1'>
                      <div className='cm-booking-refund'>
                        <input type="radio" checked={formVal.refundable==='yes'} onChange={refundableTravel} name='refund' value="yes" />
                        <span><b>Yes,</b> make my booking refundable</span>
                      </div>
                      <div className='cm-booking-refund'>
                        <input type="radio" checked={formVal.refundable==='no'} onChange={refundableTravel}  name='refund' value="no" />
                        <span><b>No,</b> don't make my booking refundable</span>
                      </div>
                    </div>
                    <div className='upgrade-txt'>
                      <p>Upgrade your booking for a small increase of {countrySign[currency]}{grandTotal} and receive a 100% refund if you cannot attend and can <b>provide evidence</b> for one of the many reasons in our <a href="javascript: void(0);" class="text-link">Terms &amp; Conditions</a>, which you accept when you select a Refundable Booking.</p></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='cm-fl-book-form'>
              <div className='cm-form-section'>
                <div className="cm-form-head">
                  <div className='cm-flex passger-head-info'>
                    <img src='/images/icon/p-refund-protected.svg' />
                    <h3 className="cm-section-sh">Travel Protection Plan</h3>
                  </div>
                  <div class="travel-protection-block">
                    <div class="row">
                      <div class="col-sm-9 col-xs-12">
                        <div class="cm-flex travel-protectlist cm-wd-80">
                          <div class="">
                            <ul>
                            <li>Air Ticket Cost* protected if <b>Trip Cancelation</b> due to a covered reason, including sickness of a traveling companion.</li>
                            <li>Up to $750 <b>Travel Delay</b>, including delays relating to quarantine.</li>
                            </ul>
                          </div>
                          <div class="">
                            <ul>
                            <li>Up to $50,000 <b>Emergency Evacuation.</b></li>
                            <li>Up to $25,000 <b>Medical Expense</b>, covers COVID-19 the same as any sickness.</li>
                            </ul>
                          </div>
                        </div>
                        <div class="txt">* To a Maximum of $10,000 for Domestic Air Tickets or $50,000 for International Air Tickets. Trip cancelation due to government travel advisories or fear of travel is not covered.</div>
                      </div>
                      <div class="col-sm-3 hidden-xs">
                        <img src="/images/icon/travel-protection-plan.gif" class="image-bnr" alt="" />
                      </div>
                    </div>
                    <div>
                      <h3 className='cm-section-head'>{countrySign[currency]} {( data.flData.travelerPricings[0].price.base*10/100).toFixed(2)} per person</h3>
                    </div>
                    <div className=''>
                      <div className='cm-flex-type-1'>
                        <div className='cm-booking-refund'>
                          {/* {console.log("FormVAl", formVal)} */}
                          <input type="radio" value="yes" checked={formVal.travelPlaneProtection === "yes"} name='protect' onChange={travelProtection}/>
                          <span><b>Yes,</b> I want to protect my trip</span>
                        </div>
                        <div className='cm-booking-refund'>
                          <input type="radio" checked={formVal.travelPlaneProtection === "no"}  value="no" name='protect' onChange={travelProtection} />
                          <span><b>No,</b> I would risk my entire trip <b>({countrySign[currency]}<span id="grndTotalIns">{grandTotal}</span>)</b></span>
                        </div>
                      </div>
                      <div>The quoted price for the travel protection plan includes the plan premium and a fee for non-insurance assistance services. You may obtain information on the plan fees by emailing <a href="mailto:info@Gogalaxytravels.com">info@Gogalaxytravels.com</a>.</div>
                      <p className='ptb-1'>To learn more <a href='' className='text-blue'>Click here</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* travel trusted programm */}
            <div className='cm-fl-book-form'>
              <div className='cm-form-section'>
                <div className="cm-form-head">
                  <div className='cm-flex passger-head-info'>
                    <img src='/images/icon/p-refund-protected.svg' />
                    <h3 className="cm-section-sh">Traveler's trusted Programm (TTP)</h3>
                  </div>
                </div>
                <div className='cm-travel-programm'>
                  <p>Step up your travel game with Travelers' Trusted Program (TTP), for you can trust us with all of your travel-related assistance.</p>
                  <div className='cm-flex'>
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="text-left heading">Services</th>
                        <th class="tdwidth heading"> Standard</th>
                        <th class="tdwidth heading"> Premium </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="pd-top">
                        <strong>Baggage Protection</strong> 
                        <span>Get benefits of up to $1000 per bag</span>
                        </td>
                        <td class="tdwidth"><img src="/images/icon/minus.png" alt="alt" /> </td>
                        <td class="tdwidth"><img src="/images/icon/check.svg" /> </td>
                      </tr>
                      <tr>
                        <td>
                        <strong> Dedicated Services</strong> 
                        <span>Dedicated Personalized Service &amp; Toll-Free</span>
                        </td>
                        <td class="tdwidth"><img src="/images/icon/minus.png" alt="alt" /> </td>
                        <td class="tdwidth"><img src="/images/icon/check.svg" /> </td>
                      </tr>
                      <tr>
                        <td>
                        <strong>Cancelation</strong>
                        <span>Within 24 hrs</span>
                        </td>
                        <td class="tdwidth"><img src="/images/icon/check.svg" alt="alt" /> </td>
                        <td class="tdwidth"><img src="/images/icon/check.svg" /> </td>
                      </tr>
                      <tr>
                        <td>
                        <strong>Rescheduling</strong>
                        <span>If the airline changes its schedule, we will help you find the next best alternative.</span>
                        </td>
                        <td class="tdwidth"><img src="/images/icon/minus.png" alt="alt" /> </td>
                        <td class="tdwidth"><img src="/images/icon/check.svg" /> </td>
                      </tr>

                      <tr>
                        <td className="bottom">
                          <a href="javascript: void(0);" onClick={() => showHide(activeShow)} class={`${activeShow ? '': 'collapsed'} learn-more`}> {activeShow ? 'Learn More': 'Learn Hide'} </a>
                        </td>
                        <td>
                        <div class="tcp_price">
                        <strong>{countrySign[currency]}0.00</strong> Per Person
                        </div>
                        <a href="javascript:void(0);" className="cm-btn cm-prim-gray cm-white-col">Included</a>
                        </td>
                        <td class="btm-blue">
                        <div class="tcp_price">
                        <strong>{countrySign[currency]} {( data.flData.travelerPricings[0].price.base * 7/100).toFixed(2)}</strong> Per Person
                        </div>
                        <a id="buttcpselect" onClick={() => addtrageTTP(7)} className="cm-btn cm-prim-bg cm-white-col">{formVal.baggage > 0 ? 'Remove': 'Add' }</a>
                        </td>
                      </tr>
                    
                    </tbody>
                  </table>
                  </div>
                  <div className={`${!activeShow ? 'active': 'hide'} show-traveler-terms`}>
                    <ul class="nav nav-tabs" role="tablist">
                      <li class={`${(termsTab===0) ? 'active': "hide"}`}>
                        <a href="javascript:void(0)"> Terms and Conditions </a>
                      </li>
                      <li class={`${(termsTab===1) ? 'active': "hide"}`}>
                        <a href="javascript:void(0)"> Baggage Protection Policy </a>
                      </li>
                    </ul>
                    <div class={`${(termsTab===0) ? 'active': "hide"} tabtersm`}>
                      <p class="mt5">Signing up for “Travelers' Trusted Program” will entitle you to some remarkable benefits. It will let you cancel and rebook your flight tickets without paying any change and cancelation penalties and our service fee. And that's not it, you get a host of other benefits as well. </p>
                      <p class="mt5">
                      Travelers' Trusted Programc subscribers are warranted free rescheduling and name changes, individualized dedicated service without any charges, a separate Toll-Free Number along with complimentary seat assignment and meal preference on international sector.
                      </p>
                      <p class="mt5"><strong>Note:</strong> This is an additional service that we offer, other than Insurance plan and it is non-refundable. </p>
                    </div>
                    <div  class={`${(termsTab===1) ? 'active': "hide"} tabtersm`}>
                      <p>
                      NOTE: This service is applicable for this flight booking only. If you require any changes, you must report to <a href="mailto:info@Gogalaxytravels.com" class="brb-link">info@Gogalaxytravels.com</a> prior your scheduled departure. Please mention your Service Agreement Number in the subject line and it may require additional purchases.
                      </p>
                      <p>
                      Once clicked on 'Add', I agree to the <a class="brb-link" target="_blank" href="/us/description.pdf">Terms and Conditions*</a>
                      </p>
                      <h4>A Comprehensive Overview</h4>
                      <p>Please note that this service is provided on Lookbyfare by Blue Ribbon Bags.</p>
                      <ul class="brb-list">
                      <li>Once added to your booking, Blue Ribbon Bags (BRB) will track your delayed baggage and speed up its return within 96 hours (4 days of your flight arrival) of it being lost.</li>
                      <li>Each purchase of BRB is per person, per round trip and does not include the connections during your flight trip.</li>
                      <li>Under this protection plan categorized into three, Blue Ribbon Bag will pay you.</li>
                      </ul>
                      <p class="clearfix"></p>
                      <p class="mt10"> <span> Please click here to <b><a href="/us/baggage-protection" target="_blank">View the Description of Baggage</a></b> </span> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cm-form-section">
              <div className="cm-flex passger-head-info cm-form-head">
                <img src="/images/icon/p-billing-information.svg" alt="" />
                <h3 className="cm-section-sh">Billing Information</h3>
              </div>
              <div className="cm-form-field-grp cm-pay-info-wrap">
                <div className='cm-form-field-half'>
                  <div className="cm-form-field">
                    <label>
                      Country<sup>*</sup>
                    </label>
                    <select
                      name="country"
                      placeholder="Country"
                      value={formVal.country}
                      onChange={(e) => handleFieldChange(e, 'country')}
                    >
                      <option label="Select Country" value="0" selected="selected">
                        Select Country
                      </option>
                      <option label="United States" selected="selected" value="US">
                        United States
                      </option>
                      <option label="Canada" value="CA">
                        Canada
                      </option>
                      <option label="United Kingdom" value="GB">
                        United Kingdom
                      </option>
                      <option label="Anguilla" value="AI">
                        Anguilla
                      </option>
                      <option label="Antigua and Barbuda" value="AG">
                        Antigua and Barbuda
                      </option>
                      <option label="Argentina" value="AR">
                        Argentina
                      </option>
                      <option label="Armenia" value="AM">
                        Armenia
                      </option>
                      <option label="Aruba" value="AW">
                        Aruba
                      </option>
                      <option label="Australia" value="AU">
                        Australia
                      </option>
                      <option label="Austria" value="AT">
                        Austria
                      </option>
                      <option label="Azerbaijan" value="AZ">
                        Azerbaijan
                      </option>
                      <option label="Bahamas" value="BS">
                        Bahamas
                      </option>
                      <option label="Bahrain" value="BH">
                        Bahrain
                      </option>
                      <option label="Barbados" value="BB">
                        Barbados
                      </option>
                      <option label="Belgium" value="BE">
                        Belgium
                      </option>
                      <option label="Belize" value="BZ">
                        Belize
                      </option>
                      <option label="Bermuda" value="BM">
                        Bermuda
                      </option>
                      <option label="Bolivia" value="BO">
                        Bolivia
                      </option>
                      <option label="Bosnia Herzegovina" value="BA">
                        Bosnia Herzegovina
                      </option>
                      <option label="Botswana" value="BW">
                        Botswana
                      </option>
                      <option label="Brazil" value="BR">
                        Brazil
                      </option>
                      <option label="British Virgin Islands" value="VG">
                        British Virgin Islands
                      </option>
                      <option label="Brunei Darussalam" value="BN">
                        Brunei Darussalam
                      </option>
                      <option label="Bulgaria" value="BG">
                        Bulgaria
                      </option>
                      <option label="Cambodia" value="KH">
                        Cambodia
                      </option>
                      <option label="Cayman Islands" value="KY">
                        Cayman Islands
                      </option>
                      <option label="Chile" value="CL">
                        Chile
                      </option>
                      <option label="China" value="CN">
                        China
                      </option>
                      <option label="Costa Rica" value="CR">
                        Costa Rica
                      </option>
                      <option label="Croatia" value="HR">
                        Croatia
                      </option>
                      <option label="Cyprus" value="CY">
                        Cyprus
                      </option>
                      <option label="Czech Republic" value="CZ">
                        Czech Republic
                      </option>
                      <option label="Denmark" value="DK">
                        Denmark
                      </option>
                      <option label="Dominica" value="DM">
                        Dominica
                      </option>
                      <option label="Dominican Republic" value="DO">
                        Dominican Republic
                      </option>
                      <option label="Ecuador" value="EC">
                        Ecuador
                      </option>
                      <option label="Egypt" value="EG">
                        Egypt
                      </option>
                      <option label="El Salvador" value="SV">
                        El Salvador
                      </option>
                      <option label="Estonia" value="EE">
                        Estonia
                      </option>
                      <option label="Finland" value="FI">
                        Finland
                      </option>
                      <option label="France" value="FR">
                        France
                      </option>
                      <option label="Georgia" value="GE">
                        Georgia
                      </option>
                      <option label="Germany" value="DE">
                        Germany
                      </option>
                      <option label="Greece" value="GR">
                        Greece
                      </option>
                      <option label="Grenada" value="GD">
                        Grenada
                      </option>
                      <option label="Guadeloupe" value="GP">
                        Guadeloupe
                      </option>
                      <option label="Guam" value="GU">
                        Guam
                      </option>
                      <option label="Guatemala" value="GT">
                        Guatemala
                      </option>
                      <option label="Guyana" value="GY">
                        Guyana
                      </option>
                      <option label="Haiti" value="HT">
                        Haiti
                      </option>
                      <option label="Honduras" value="HN">
                        Honduras
                      </option>
                      <option label="Hong Kong" value="HK">
                        Hong Kong
                      </option>
                      <option label="Hungary" value="HU">
                        Hungary
                      </option>
                      <option label="Iceland" value="IS">
                        Iceland
                      </option>
                      <option label="India" value="IN">
                        India
                      </option>
                      <option label="Indonesia" value="ID">
                        Indonesia
                      </option>
                      <option label="Iraq" value="IQ">
                        Iraq
                      </option>
                      <option label="Ireland" value="IE">
                        Ireland
                      </option>
                      <option label="Israel" value="IL">
                        Israel
                      </option>
                      <option label="Italy" value="IT">
                        Italy
                      </option>
                      <option label="Jamaica" value="JM">
                        Jamaica
                      </option>
                      <option label="Japan" value="JP">
                        Japan
                      </option>
                      <option label="Jordan" value="JO">
                        Jordan
                      </option>
                      <option label="Kazakstan" value="KZ">
                        Kazakstan
                      </option>
                      <option label="Kuwait" value="KW">
                        Kuwait
                      </option>
                      <option label="Kyrgyzstan" value="KG">
                        Kyrgyzstan
                      </option>
                      <option label="Lao Peoples Democratic Republic" value="LA">
                        Lao Peoples Democratic Republic
                      </option>
                      <option label="Latvia" value="LV">
                        Latvia
                      </option>
                      <option label="Lebanon" value="LB">
                        Lebanon
                      </option>
                      <option label="Lithuania" value="LT">
                        Lithuania
                      </option>
                      <option label="Luxembourg" value="LU">
                        Luxembourg
                      </option>
                      <option label="Macau" value="MO">
                        Macau
                      </option>
                      <option label="Malaysia" value="MY">
                        Malaysia
                      </option>
                      <option label="Malta" value="MT">
                        Malta
                      </option>
                      <option label="Martinique" value="MQ">
                        Martinique
                      </option>
                      <option label="Mexico" value="MX">
                        Mexico
                      </option>
                      <option label="Micronesia" value="FM">
                        Micronesia
                      </option>
                      <option label="Mongolia" value="MN">
                        Mongolia
                      </option>
                      <option label="Montserrat" value="MS">
                        Montserrat
                      </option>
                      <option label="Namibia" value="NA">
                        Namibia
                      </option>
                      <option label="Netherlands" value="NL">
                        Netherlands
                      </option>
                      <option label="Netherlands Antilles" value="AN">
                        Netherlands Antilles
                      </option>
                      <option label="New Zealand" value="NZ">
                        New Zealand
                      </option>
                      <option label="Nicaragua" value="NI">
                        Nicaragua
                      </option>
                      <option label="Norway" value="NO">
                        Norway
                      </option>
                      <option label="Oman" value="OM">
                        Oman
                      </option>
                      <option label="Palestinian Territory, Occupied" value="PS">
                        Palestinian Territory, Occupied
                      </option>
                      <option label="Papua New Guinea" value="PG">
                        Papua New Guinea
                      </option>
                      <option label="Paraguay" value="PY">
                        Paraguay
                      </option>
                      <option label="Philippines" value="PH">
                        Philippines
                      </option>
                      <option label="Poland" value="PL">
                        Poland
                      </option>
                      <option label="Portugal" value="PT">
                        Portugal
                      </option>
                      <option label="Qatar" value="QA">
                        Qatar
                      </option>
                      <option label="Republic of Macedonia" value="MK">
                        Republic of Macedonia
                      </option>
                      <option label="Romania" value="RO">
                        Romania
                      </option>
                      <option label="Russia" value="RU">
                        Russia
                      </option>
                      <option label="San Marino" value="SM">
                        San Marino
                      </option>
                      <option label="Saudi Arabia" value="SA">
                        Saudi Arabia
                      </option>
                      <option label="Serbia" value="RS">
                        Serbia
                      </option>
                      <option label="Singapore" value="SG">
                        Singapore
                      </option>
                      <option label="Slovakia" value="SK">
                        Slovakia
                      </option>
                      <option label="Slovenia" value="SI">
                        Slovenia
                      </option>
                      <option label="South Africa" value="ZA">
                        South Africa
                      </option>
                      <option label="South Korea" value="KR">
                        South Korea
                      </option>
                      <option label="Spain" value="ES">
                        Spain
                      </option>
                      <option label="Sri Lanka" value="LK">
                        Sri Lanka
                      </option>
                      <option label="St. Christopher (St. Kitts) Nevis" value="KN">
                        St. Christopher (St. Kitts) Nevis
                      </option>
                      <option label="St. Lucia" value="LC">
                        St. Lucia
                      </option>
                      <option label="St. Pierre and Miquelon" value="PM">
                        St. Pierre and Miquelon
                      </option>
                      <option label="St. Vincent and The Grenadines" value="VC">
                        St. Vincent and The Grenadines
                      </option>
                      <option label="Suriname" value="SR">
                        Suriname
                      </option>
                      <option label="Sweden" value="SE">
                        Sweden
                      </option>
                      <option label="Switzerland" value="CH">
                        Switzerland
                      </option>
                      <option label="Syrian Arab Republic" value="SY">
                        Syrian Arab Republic
                      </option>
                      <option label="Taiwan" value="TW">
                        Taiwan
                      </option>
                      <option label="Thailand" value="TH">
                        Thailand
                      </option>
                      <option label="Trinidad and Tobago" value="TT">
                        Trinidad and Tobago
                      </option>
                      <option label="Turkey" value="TR">
                        Turkey
                      </option>
                      <option label="Turks and Caicos Islands" value="TC">
                        Turks and Caicos Islands
                      </option>
                      <option label="Ukraine" value="UA">
                        Ukraine
                      </option>
                      <option label="United Arab Emirates" value="AE">
                        United Arab Emirates
                      </option>
                      <option label="Uruguay" value="UY">
                        Uruguay
                      </option>
                      <option label="US Virgin Islands" value="VI">
                        US Virgin Islands
                      </option>
                      <option label="Venezuela" value="VE">
                        Venezuela
                      </option>
                      <option label="Vietnam" value="VN">
                        Vietnam
                      </option>
                      <option label="Yemen" value="YE">
                        Yemen
                      </option>
                    </select>
                  </div>
                </div>
                
                <div className="cm-form-field">
                  <div className="cm-form-field">
                    <label>
                      Address<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="address1"
                      value={formVal.address1}
                      placeholder='Address'
                      onChange={(e) => handleFieldChange(e, 'address1')}
                    />
                  </div>
                  {/* <div className="cm-form-field">
                    <label>Address 2</label>
                    <input
                      type="text"
                      name="address2"
                      value={formVal.address2}
                      onChange={(e) => handleFieldChange(e, 'address2')}
                    />
                  </div> */}
                </div>
                
                <div className="cm-form-field-half">
                  <div className="cm-form-field">
                    <label>State*</label>
                    <input
                      type="text"
                      name="state"
                      value={formVal.state}
                      placeholder='State'
                      onChange={(e) => handleFieldChange(e, 'state')}
                    />
                  </div>
                  <div className="cm-form-field">
                    <label>
                      City<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder='City'
                      value={formVal.city}
                      onChange={(e) => handleFieldChange(e, 'city')}
                    />
                  </div>
                  <div className="cm-form-field">
                    <label>Zip Code*</label>
                    <input
                      type="text"
                      name="zipCode"
                      placeholder='zip Code'
                      value={formVal.zipCode}
                      onChange={(e) => handleFieldChange(e, 'zipCode')}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='cm-form-section'>
              <div className="cm-flex passger-head-info cm-form-head">
                <img src="/images/icon/p-billing-information.svg" alt="" />
                <h3 className="cm-section-sh"> Payment Details </h3>
              </div>
              <div className='cm-payment-detail-body'>
                <p>All card information is fully encrypted, secure and protected.</p>
                <div>
                  <div className='cm-flex-type-1 payment-type-detail'>
                    <div>
                      {/* <input type="radio" name='paymentMethod' value="yes" onChange={(e) => handleFieldChange(e, 'paymentMethod')} checked={formVal.paymentMethod=='yes'} /> */}
                      <span><h4>Credit or Debit Card</h4></span>
                    </div>
                    <img src="/images/icon/debitcard-blank.svg" alt="" srcset="" />
                  </div>
                  <div>
                    <div className="cm-form-field">
                      <div className="cm-form-field cm-wd-70">
                        <label>Card Number*</label>
                        <input
                          type="text"
                          name="cardNumber"
                          {...getCardNumberProps({
                            onChange: (e) =>
                              setFormVal({
                                ...formVal,
                                [e.target.name]: e.target.value
                              })
                          })}
                          // onChange={(e) => getCardNumberProps(e, 'cardNumber')}
                        />
                        {/* <small>{erroredInputs.cardNumber && erroredInputs.cardNumber}</small> */}
                      </div>
                      <div className="cm-form-field cm-wd-70">
                        <label>
                          Name On Card<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          name="nameOnCard"
                          placeholder='Name On Card'
                          value={formVal.nameOnCard}
                          onChange={(e) => handleFieldChange(e, 'nameOnCard')}
                        />
                      </div>
                      <div className="cm-form-field cm-wd-70">
                        <label>Expiry Date*</label>
                        <input
                          type="text"
                          name="expiryDate"
                          {...getExpiryDateProps({
                            onChange: (e) =>
                              setFormVal({
                                ...formVal,
                                [e.target.name]: e.target.value
                              })
                          })}
                        />
                      </div>
                      <div className="cm-form-field cm-wd-70">
                        <label>CVC*</label>
                        <input
                          type="text"
                          name="cvc"
                          {...getCVCProps({
                            onChange: (e) =>
                              setFormVal({
                                ...formVal,
                                ['cvv']: e.target.value
                              })
                          })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='cm-flex'></div>
                </div>
              </div>
              <div className='cm-payment-detail-footer'>
                <div className='cm-flex-type-1 cm-wd-40'>
                  <img src="/images/icon/pci-dss.png" alt="" srcset="" />
                  <img src="/images/icon/godaddy.png" alt="" srcset="" />
                  <img src="/images/icon/download.png" alt="" srcset="" />
                </div>
              </div>
            </div>

            <div className='cm-terms-conditionscontent cm-form-section'>
              <div className="cm-rev-policy">
                <h4 className="cm-section-h">Review Policy</h4>
                <ul>
                  <li>Please Make sure that the information of the passenger is accurate (including the Name of the Passenger, Date of Travel, etc.).</li>
                  <li>The name of traveler must match with his or her name in passport and/or other government-issued ID.</li>
                  <li>The price shown on this portal covers applicable taxes and our fees. However, some airlines may apply additional charges on baggage and other services.</li>
                  <li>Discounted flight tickets do not fall under the category of airline Frequent Flyer Mileage accrual. Also, fares are not guaranteed until ticketed.</li>
                </ul>
              </div>
              <div className="cm-tnc-section">
                <p><strong>PLEASE NOTE</strong> THESE TICKETS ARE NON-REFUNDABLE AS PER AIRLINE RULES. Travel Date changes and/or Routing changes requested by passenger after the issuance of the ticket will be subject to airline penalties and our fees. Please refer to 
                <Link a="/Refund-and-cancellation-Policy" target="_blank">
                  <strong>Refund and Cancellation Policy</strong>
                </Link>.</p>
                <p>Please read the policies listed below and check the boxes next to each policy to confirm that you have read each of these policies.</p>
                <div className="tnc-section">
                  <h4>Terms and Conditions</h4>
                  <label for="ho">
                    <input type="checkbox" checked={formVal.acceptTnc} onChange={handletoTerms} name="acceptTnc" id="ho"/>By clicking "Confirm Booking", | agree that | have read the following Policies of <strong>Gogalaxytravels.com</strong>.
                  </label>
                </div>
              </div>
            </div>

          <div className='cm-form-section'>
            <div className='cm-payment-detail-body'>
              <div>Please be careful - Passenger details must match your passport or photo ID</div>
              <div class="head">
                <p id="pxdtails">
                  <span> Adult 1 - <span id="p0_confirm_name">Missing name</span>
                    <a href="javacript:void(0);">(make changes)</a></span>
                  <br/>
                </p>
              </div>
              <div id="" class="alert-msgs">
                <i class="fa fa-info-circle"></i> <span> Please confirm the dates and times of your flights are correct</span>
              </div>
              <div class="imp-msg">
                <div class="tnc-txt">
                  <p class="hidden-xs hidden-sm">By clicking, <span class="bkdyntxt">Book Now</span> I agree that I have read and accepted Lookbyfare <a href="/us/terms-conditions" target="_blank">Terms &amp; Conditions</a> and <a href="/us/privacy-policy" target="_blank">Privacy Policy</a></p>
                </div>
              </div>

              <div class="step-continue">
                <button class="cm-btn cm-prim-bg cm-white-col" onClick={flightBookSubmit}  id="btnBookNow" name="btnBookNow" >
                  <i class="fa fa-lock" aria-hidden="true"></i> Book Now</button>
                <p><br /><small>Your payment details are secured via 256 Bit encryption by GoDaddy</small></p>
              </div>
              <div class="imp-msg">
                <div class="tnc-txt">
                  <p>
                    <b>NOTE: </b><span class="text-blue">Please check if the dates and timings of flight departure are correct.</span> Also, make sure that the name of the traveler is accurate as tickets are non-refundable and any change in the name of the traveler is not permitted. Date and routing changes will be subject to airline penalties and our service fees. Fares are not guaranteed until ticketed. All our service fees and taxes are included in the total ticket cost. Itineraries cannot be changed within 7 days before departure, and no credit will be issued. You can cancel your reservation within 24 hrs of purchase for a full refund by calling our 24/7 customer support provided the purchase was made before 7 days of departure. However, a nominal cancelation fee will be applicable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="cm-right-col cm-lr-pad">
          <div className="cart-time">
            <p className="title">Book now before tickets run out!</p>
            <div className="cm-flex-type-1 cart-timer">
              <span>
                <p className="timecount">{timer}</p>
                {/* <p>Minutes</p> */}
              </span>
              <span><img src="/images/icon/clock.png" /></span>
            </div>
          </div>
          {/* Price Fare Detail */}
          <div className="cm-price-fare-detail">
            <div className="title"><p> Price Details </p></div>
            <div className="cm-price-fare-body">
            <div className="cm-flex-type-1 price">
                  <p>ADULT X {data.flData.travelerPricings.length}</p>
                  <p><strong>{countrySign[currency]} {data.flData.travelerPricings.length * data.flData.travelerPricings[0].price.base} </strong></p> 
                </div>
              {/* ADULT X {data.flData.travelerPricings.length * data.flData.travelerPricings[0].price.base} 
              {data.flData.travelerPricings.map((el) => (
                <div key={el.travelerId} className="cm-flex-type-1 price">
                  <p>{el.travelerId} {el.travelerType}</p>
                  <p><strong>{countrySign[currency]} {el.price.base}</strong></p> 
                </div>
              ))} */}
              <div>{parse(travelProtectionLoad())}</div>
              <div className="cm-flex-type-1 price">
                <p>Taxes & Fees</p>
                <p><strong>{countrySign[currency]} {data.taxes} </strong></p> 
              </div>
              <div className="total-amt cm-flex-type-1">
                <p>Total Price: {currency}</p>
                <p><strong>{calcFinalPrice()}</strong></p>
              </div>
              <p className="descr-price-fare">Please note: All fares are quoted in {currency}. Some airlines may charge baggage fees. Your credit/debit card may be billed in multiple charges totaling the final total price.</p>
            </div>
          </div>
          {/* End price Fare Detail */}
          <div className="cm-booking-cta cm-txt-center">
            <h4>Need Help?</h4>
            <div className="cm-content">
              <p>
                Our travel experts are just a call away! Get in touch now to
                customize your vacation hassle-free and enjoy your time away!
              </p>
              <h5>Call Us</h5>
              <a className="cm-prim-col" href={`tel: ${phoneNum.value}`}>
                {phoneNum.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    // end
  );
};

export default FlightBookForm;
