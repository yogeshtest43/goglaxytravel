import React, { useState, useEffect, useRef} from "react"
import {countryDeta, countrySign} from '../../utils/cuntryname'
import './countryselector.css';
import { useSelector, useDispatch } from "react-redux";

import handleChangeCurrency from "../../redux/currency/currency.action";

const CountrySelector =()=>{
    const countryref = useRef(null)
    const currancyref = useRef(null)
    const [isActive, setActive] = useState(false)
    const [currancyCode, setcurrancyCode] = useState(false)

    let urlname;
    urlname = window.location.hostname.split('.')[0];
    if(urlname==='localhost'){
        urlname = "au"
    }else{
        if(urlname==='www'){
            urlname = "au"
        }
    }

    // urlname = 'au'; 
    const dispatch = useDispatch();
    const myState = useSelector((state) => state.currency );

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isActive && countryref.current && !countryref.current.contains(e.target)) {
              setActive(!isActive)
            }
            if (currancyCode && currancyref.current && !currancyref.current.contains(e.target)) {
              setcurrancyCode(!currancyCode)
            }

        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isActive, currancyCode])

    //   console.log(countryDeta[urlname].countryName, countryDeta[urlname].currencyCode)

    return(
        <>
        <div className="country-picker-selector">
            <div className="country-flag-box" ref={countryref}>
                <div class="country-inp" onClick={()=> setActive(!isActive)}>
                    <img src={`./images/flags/${urlname}.svg`}/>
                    <input type="text" value={countryDeta[urlname].countryName}/>
                </div>
                <div class={`country-picker-box ${isActive? "active" : " "}`}>
                    <a class="country-picker-item" href="https://au.Gogalaxytravels.com/">
                        <span class="country-flag au">&nbsp;</span>
                        <span class="country-picker-item__content">Australia</span>
                    </a>
                    <a class="country-picker-item" href="https://ca.Gogalaxytravels.com/">
                        <span class="country-flag ca">&nbsp;</span>
                        <span class="country-picker-item__content">Canada</span>
                    </a>
                    <a class="country-picker-item" href="https://hk.Gogalaxytravels.com/">
                        <span class="country-flag hk">&nbsp;</span>
                        <span class="country-picker-item__content">Hong Kong</span>
                    </a>
                    <a class="country-picker-item" href="https://in.Gogalaxytravels.com/">
                        <span class="country-flag in">&nbsp;</span>
                        <span class="country-picker-item__content">India</span>
                    </a>
                    <a class="country-picker-item" href="https://id.Gogalaxytravels.com/">
                        <span class="country-flag id">&nbsp;</span>
                        <span class="country-picker-item__content">Indonesia</span>
                    </a>
                    <a class="country-picker-item" href="https://my.Gogalaxytravels.com/">
                        <span class="country-flag my">&nbsp;</span>
                        <span class="country-picker-item__content">Malaysia</span>
                    </a>
                    <a class="country-picker-item" href="https://nz.Gogalaxytravels.com/">
                        <span class="country-flag nz">&nbsp;</span>
                        <span class="country-picker-item__content">New Zealand</span>
                    </a>
                    <a class="country-picker-item" href="https://ph.Gogalaxytravels.com/">
                        <span class="country-flag ph">&nbsp;</span>
                        <span class="country-picker-item__content">Philippines</span>
                    </a>
                    <a class="country-picker-item" href="https://qa.Gogalaxytravels.com/">
                        <span class="country-flag qa">&nbsp;</span>
                        <span class="country-picker-item__content">Qatar</span>
                    </a>
                    <a class="country-picker-item" href="https://sg.Gogalaxytravels.com/">
                        <span class="country-flag sg">&nbsp;</span>
                        <span class="country-picker-item__content">Singapore</span>
                    </a>
                    <a class="country-picker-item" href="https://sa.Gogalaxytravels.com/">
                        <span class="country-flag sa">&nbsp;</span>
                        <span class="country-picker-item__content">South Africa</span>
                    </a>
                    <a class="country-picker-item" href="https://th.Gogalaxytravels.com/">
                        <span class="country-flag th">&nbsp;</span>
                        <span class="country-picker-item__content">Thailand</span>
                    </a>
                    <a class="country-picker-item" href="https://en.Gogalaxytravels.com/" aria-current="page">
                        <span class="country-flag us">&nbsp;</span>
                        <span class="country-picker-item__content">USA (EN)</span>
                    </a>
                    <a class="country-picker-item" href="https://es.Gogalaxytravels.com/">
                        <span class="country-flag us">&nbsp;</span>
                        <span class="country-picker-item__content">USA (ES)</span>
                    </a>
                    <a class="country-picker-item" href="#">
                        <span class="country-flag ae">&nbsp;</span>
                        <span class="country-picker-item__content">United Arab Emirates</span>
                    </a>
                    <a class="country-picker-item" href="https://uk.Gogalaxytravels.com/">
                        <span class="country-flag uk">&nbsp;</span>
                        <span class="country-picker-item__content">United Kingdom</span>
                    </a>
                    <a class="country-picker-item" href="https://vn.Gogalaxytravels.com/">
                        <span class="country-flag vn">&nbsp;</span>
                        <span class="country-picker-item__content">Vietnam</span>
                    </a>
                </div>
            </div>
            <div className="currancy-name" ref={currancyref}>
                <div className="country-inp" onClick={()=> setcurrancyCode(!currancyCode)}>
                    <input type="text" value={countrySign[myState]}/>
                </div>
                <div class={`price-picker-box ${currancyCode? "active" : " "}`}>
                    <ul>
                        <li onClick={() => dispatch(handleChangeCurrency('USD'))}>
                           <span>$</span> USD
                        </li>
                        <li onClick={() =>  dispatch(handleChangeCurrency('INR'))}>
                            <span>₹</span>INR
                        </li>
                        <li onClick={() => dispatch(handleChangeCurrency('AED'))}>
                            <span>AED</span>UAE Dirhams
                        </li>
                        <li onClick={() => dispatch(handleChangeCurrency('CAD'))}>
                            <span>C$</span>CAD
                        </li>
                        <li onClick={() => dispatch(handleChangeCurrency('AUD'))}>
                            <span>$</span>Australian Dollars
                        </li>
                        <li onClick={() => dispatch(handleChangeCurrency('HKD'))}>
                            <span>HK$</span>Hong Kong
                        </li>
                        <li onClick={() => dispatch(handleChangeCurrency('GBP'))}>
                            <span>£</span>Pound Sterling
                        </li>
                        <li onClick={() => dispatch(handleChangeCurrency('THB'))}>
                            <span>฿</span>Thai Baht
                        </li>
                        <li onClick={() => dispatch(handleChangeCurrency('SGD'))}>
                            <span>S$</span>Singapore Dollars
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default CountrySelector