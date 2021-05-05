import React from 'react';

const LocationSearch = () => {
  return ( 
    <form className='location-search'>
      <label className='location-header'>
        Location
        <input 
          className='location-input'
          placeholder='City, state, zip code or country'
        > 
        </input>
        <span className='material-icons'>public</span>
      </label>
    </form>
   );
}
 
export default LocationSearch;