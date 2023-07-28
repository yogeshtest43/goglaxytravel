import { countryDeta } from "../../utils/cuntryname";
let urlname;
    urlname = window.location.hostname.split('.')[0];
    if(urlname==='localhost'){
        urlname = "au"
    }else{
        if(urlname==='www'){
            urlname = "au"
        }
    }

    // urlname = 'in';

    // console.log("URLNAME", urlname);

    const State_initial  = countryDeta[urlname].currencyCode;

const changeCurrency = (state = State_initial, action) => {
    switch (action.type) {
        case 'CURRENCY': 
        return action.payload;

        default:
        return state;
    }
}

export default changeCurrency;