import React from "react";
import DefaultLocales from "./FilterAndSearch/DefaultLocales";
import FullTimeToggle from "./FilterAndSearch/FullTimeToggle";
import JobSearch from "./FilterAndSearch/JobSearch";
import LocationSearch from "./FilterAndSearch/LocationSearch";
import JobList from "./JobList";

const FilterSearch = ({ jobsData }) => {
  return (
    <div>
      <JobSearch />
      <div className="main-content--wrapper">
        <div className="filter-search--wrapper">
          <FullTimeToggle />
          <LocationSearch />
          <DefaultLocales />
        </div>
        <div className="job-list--wrapper">
          <JobList jobsData={jobsData} />
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
