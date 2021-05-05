import React from "react";
import DefaultLocales from "./FilterAndSearch/DefaultLocales";
import FullTimeToggle from "./FilterAndSearch/FullTimeToggle";
import JobSearch from "./FilterAndSearch/JobSearch";
import LocationSearch from "./FilterAndSearch/LocationSearch";
import JobList from "./JobList";

const FilterSearch = ({ jobsData }) => {
  return (
    <div className="main-wrapper">
      <div className="filter-search--wrapper">
        <JobSearch />
        <FullTimeToggle />
        <LocationSearch />
        <DefaultLocales />
      </div>
      <JobList jobsData={jobsData} />
    </div>
  );
};

export default FilterSearch;
