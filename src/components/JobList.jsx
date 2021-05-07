import React, { useState } from "react";
import Paginate from "./FilterAndSearch/Pagination";
import Job from "./Jobs/Job";

const JobList = ({ jobsData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 5;
  const maxPages = Math.ceil(([...jobsData].length) / perPage);
  const offset = currentPage * perPage;
  const currentJobs = [...jobsData].slice(offset, offset + perPage);

  const Jobs = currentJobs.map((job) => {
    return (
      <Job
        key={job.id}
        jobID={job.id}
        jobLogo={job.company_logo}
        companyName={job.company}
        jobTitle={job.title}
        jobType={job.type}
        location={job.location}
        createdAt={job.created_at}
      />
    );
  });
  return (
    <div className="job-list">
      {Jobs}
      <Paginate 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage} 
        maxPages={maxPages}
      />
    </div>
  );
};

export default JobList;
