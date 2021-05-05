import React from 'react';

const DefaultLocales = () => {
  return (
    <form className='default-locales'>
      <label htmlFor='new york'>
      <input 
        type='radio' 
        id='new-york' 
        name='city' 
        value='new york'
      />
      New York</label>
      <label htmlFor='london'>
      <input 
        type='radio' 
        id='london' 
        name='city' 
        value='london'
      />
      London</label>
      <label htmlFor='washington'>
      <input 
        type='radio' 
        id='washington' 
        name='city' 
        value='washington'
      />
      Washington D.C.</label>
      <label htmlFor='atlanta'>
      <input 
        type='radio' 
        id='atlanta' 
        name='city' 
        value='atlanta'
      />
      Atlanta</label>
    </form>
    );
}
 
export default DefaultLocales;