import React, { useState } from "react";
import bgImg from "../../pics/backgroundImg.png";

const JobSearch = ({setQuery}) => {
  const [searchVal, setSearchVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchVal);
  }

  return (
    <div
      className="search-bar--wrapper"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <form 
        className="search-form"
        onSubmit={(searchVal) => handleSubmit(searchVal)}
      >
        <div className="input-wrapper">
          <span className="material-icons">work_outline</span>
          <input
            className="search-input"
            placeholder="Title, companies, expertise or benefits"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </div>
        <input className="search-btn" type="submit" value="Search"></input>
      </form>
    </div>
  );
};

export default JobSearch;
