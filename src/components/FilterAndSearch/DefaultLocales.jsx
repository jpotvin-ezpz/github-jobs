import React from "react";

const DefaultLocales = ({setLocale}) => {
  return (
    <form onChange={(e)=>setLocale(e.target.value)} className="default-locales">
      <label className="locale-label" htmlFor="berlin">
        <input
          defaultChecked
          type="radio"
          id="berlin"
          name="city"
          value="berlin"
        />
        <span>Berlin</span>
      </label>
      <label className="locale-label" htmlFor="london">
        <input type="radio" id="london" name="city" value="london" />
        <span>London</span>
      </label>
      <label className="locale-label" htmlFor="washington">
        <input type="radio" id="washington" name="city" value="washington+dc" />
        <span>Washington D.C.</span>
      </label>
      <label className="locale-label" htmlFor="atlanta">
        <input type="radio" id="atlanta" name="city" value="atlanta" />
        <span>Atlanta</span>
      </label>
    </form>
  );
};

export default DefaultLocales;
