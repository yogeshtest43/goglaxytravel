import React from "react";
import axios from "axios";
import { api_url } from "../../utils/apiInfo";
import suggestion from "../../assets/data/suggestion.json";
import { searchFilter } from "../../utils/utilFn";


const SearchInputs = ({ handleSelectedVal, selectedVal, fieldName, placeholder, urlVal }) => {
  let urldeparture = urlVal!=="" ? urlVal:  '';
  if(urlVal===undefined){
    urldeparture = !!selectedVal ? `${selectedVal.name} (${selectedVal.iataCode})` : '';
  }

  const [searchTerm, setSearchTerm] = React.useState({
    term: urldeparture,
    shouldSearch: selectedVal,
    clickVaue: false,
  });
  const [searchData, setSearchData] = React.useState({
    result: [],
    isLoading: false,
    noResults: false,
  });

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.term.length > 1 && searchTerm.shouldSearch && searchTerm.clickVaue) {
        setSearchData({
          ...searchData,
          isLoading: true,
          noResults: false,
        });

        const res = await axios.post(`${api_url}/flight/search-airport`, {
          searchTerm: searchTerm.term,
        });

        console.log("result", res.data);

        setSearchData({
          result: res.data.data,
          isLoading: false,
          noResults: res.data.length === 0,
        });
      } else {
        setSearchData({
          ...searchData,
          result: [],
        });
      }
    }, 10);
    // delayDebounceFn
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm({
      term: e.target.value,
      shouldSearch: true,
      clickVaue: true,
    });



  };

  const loadResults = () => {
    if (searchData.result.length > 0) {
      return searchData.result.map((el) => (
        <li
          key={el.id}
          onClick={() => handleListClick(el)}
          className="cm-pointer cm-flex-type-1"
        >
          <p>
            <span>
              {el.address.cityName}, {el.address.countryName}
            </span>
            <span>{el.name}</span>
          </p>
          <span className="cm-loc-code">{el.iataCode}</span>
        </li>
      ));
    }

    if (searchData.noResults) {
      return <li>No search results found.</li>;
    }
  };

  const handleListClick = (el) => {
    handleSelectedVal(el, fieldName);
    setSearchTerm({
      ...searchTerm,
      term: `${el.name} (${el.iataCode})`,
      shouldSearch: false,
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
      <div className="cm-search-inputs cm-pos-relative">
        <div className="cm-content cm-pos-relative">
          <input
            type="text"
            value={searchTerm.term}
            name="fromFlight"
            onChange={handleChange}
            autoComplete="off"
            placeholder={placeholder}
          />
          <i className="fa-solid fa-location-dot"></i>
          {searchData.isLoading ? <div className="cm-inp-loader"></div> : null}
        </div>
        {!searchData.isLoading ? (
          <ul className="cm-menu-ul cm-sb-ul cm-result-list cm-sec-col box-shadow-2">
            {loadResults()}
          </ul>
        ) : null}
      </div>
    </form>
  );
};

export default SearchInputs;
