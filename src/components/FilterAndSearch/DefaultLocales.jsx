import React from "react";

const DefaultLocales = () => {
  return (
    <form className="default-locales">
      <label className='locale-label' htmlFor="new york">
      <input type="radio" id="new-york" name="city" value="new york" />
      <span>New York</span></label>
      <label className='locale-label' htmlFor="london">
      <input type="radio" id="london" name="city" value="london" />
      <span>London</span></label>
      <label className='locale-label' htmlFor="washington">
      <input type="radio" id="washington" name="city" value="washington" />
      <span>Washington D.C.</span></label>
      <label className='locale-label' htmlFor="atlanta">
      <input type="radio" id="atlanta" name="city" value="atlanta" />
      <span>Atlanta</span></label>
    </form>
  );
};

export default DefaultLocales;
