import React from 'react';

const LocationSearch = () => {
  return ( 
    <form className='location-search'>
      <label className='location-header'>
        Location
      </label>
      <div className='location-input--wrapper'>
        <span className='material-icons'>public</span>
        <input 
          className='location-input'
          placeholder='City, state, zip code or country'
        /> 
        </div>
    </form>
   );
}
 
export default LocationSearch;