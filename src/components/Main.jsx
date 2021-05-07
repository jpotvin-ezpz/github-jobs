import React from "react";
import DefaultLocales from "./FilterAndSearch/DefaultLocales";
import FullTimeToggle from "./FilterAndSearch/FullTimeToggle";
import JobSearch from "./FilterAndSearch/JobSearch";
import LocationSearch from "./FilterAndSearch/LocationSearch";
import JobList from "./JobList";

const Main = ({ jobsData, setFullTime, fullTime, setLocale, setQuery, isLoading }) => {
  return (
    <div>
      <JobSearch setQuery={setQuery}/>
      <div className="main-content--wrapper">
        <div className="filter-search--wrapper">
          <FullTimeToggle setFullTime={setFullTime} fullTime={fullTime}/>
          <LocationSearch setLocale={setLocale}/>
          <DefaultLocales setLocale={setLocale}/>
        </div>
        <div className="job-list--wrapper">
          { isLoading && <div className='loading'>Loading...</div>}
          { jobsData && <JobList jobsData={jobsData} /> }
        </div>
      </div>
    </div>
  );
};

export default Main;
