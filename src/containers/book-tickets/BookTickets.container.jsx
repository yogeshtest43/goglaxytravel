import React, {useEffect, useState, useRef} from "react";
import moment from "moment";

import { phoneNum } from "../../utils/globalVars";
import FlightBookForm from "../../components/flight-book-form/FlightBookForm.component";
import { getDuration } from "../../utils/utilFn";
import "./BookTickets.style.css";
import { charges } from '../../utils/charges';

const BookTicketsContainer = ({ data }) => {

  return (
    <div className="cm-book-container">
      <div className="inner-banner">
        <h2 className="cm-section-h cm-txt-center cm-white-col">Booking</h2>
      </div>
      {/* Start */}
      <FlightBookForm
            travData={data.flData.travelerPricings}
            grandTotal={data.flData.price.base}
            taxes={data.taxes}
            flightSummary={data.flData}
            data={data}
      />
      {/* End */}
    </div>
  );
};

export default BookTicketsContainer;
