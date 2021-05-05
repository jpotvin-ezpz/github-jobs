import React from 'react';

const FullTimeToggle = () => {
  return ( 
    <div>
      <label htmlFor='fulltime'>
      <input 
        className='fulltime-toggle'
        type='checkbox'
        name='fulltime'
        id='fulltime'
        value='fulltime'
      >
      </input>
      Full time</label>
    </div>
   );
}
 
export default FullTimeToggle;