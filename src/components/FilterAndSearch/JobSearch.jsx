import React from "react";
import bgImg from '../../pics/backgroundImg.png'

const JobSearch = () => {
  return (
  <div className="search-bar--wrapper" 
       style={{ backgroundImage: `url(${bgImg})`}}
       >
    <form className='search-form'>
      <div className='input-wrapper'>
      <span className='material-icons'>
        work_outline
      </span>
      <input 
        className='search-input'
        placeholder="Title, companies, expertise or benefits"
      />
      </div>
      <input 
        className='search-btn'
        type='submit' 
        value='Search'
        ></input>
    </form>
  </div>
  );
};

export default JobSearch;
