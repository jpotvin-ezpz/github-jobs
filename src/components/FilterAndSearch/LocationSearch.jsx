/* eslint-disable react-hooks/exhaustive-deps */
import { debounce } from "lodash";
import React, { useCallback } from "react";

const LocationSearch = ({ setLocale }) => {
  const debounced = useCallback(debounce(setLocale, 1000), []);
  const handleChange = (value) => {
    debounced(value);
  };

  return (
    <form className="location-search">
      <label className="location-header">Location</label>
      <div className="location-input--wrapper">
        <span className="material-icons">public</span>
        <input
          className="location-input"
          placeholder="City, state, zip code or country"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </form>
  );
};

export default LocationSearch;
