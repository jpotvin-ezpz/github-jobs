import React, { useState } from "react";
import DefaultLocales from "./FilterAndSearch/DefaultLocales";
import FullTimeToggle from "./FilterAndSearch/FullTimeToggle";
import JobSearch from "./FilterAndSearch/JobSearch";
import LocationSearch from "./FilterAndSearch/LocationSearch";
import Paginate from "./FilterAndSearch/Pagination";
import JobList from "./JobList";

const Main = ({
  jobsData,
  setFullTime,
  fullTime,
  setLocale,
  setQuery,
  isLoading,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 5;
  const maxPages = Math.ceil([...jobsData].length / perPage);
  const offset = currentPage * perPage;
  const currentJobs = [...jobsData].slice(offset, offset + perPage);

  return (
    <div>
      <JobSearch setQuery={setQuery} />
      <div className="main-content--wrapper">
        <div className="filter-search--wrapper">
          <FullTimeToggle setFullTime={setFullTime} fullTime={fullTime} />
          <LocationSearch setLocale={setLocale} />
          <DefaultLocales setLocale={setLocale} />
        </div>

        <div className="job-list--wrapper">
          <div className='job-listings'>
            {isLoading && <div className="loading">Loading...</div>}
            {currentJobs && <JobList currentJobs={currentJobs} />}
          </div>
          <Paginate
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            maxPages={maxPages}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
