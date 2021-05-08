import React from "react";
import Job from "./Jobs/Job";

const JobList = ({ currentJobs }) => {


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
    </div>
  );
};

export default JobList;
