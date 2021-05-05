import React from "react";

const Job = ({
  jobLogo,
  companyName,
  jobTitle,
  jobType,
  location,
  createdAt,
}) => {
  const sincePosted = timeSince(createdAt);

  return (
    <div className="job">
      <div className="logo-title--wrapper">
        <img src={jobLogo} alt="company logo" className="company-logo" />
        <div className="company--wrapper">
          <h2 className="company-name-header">{companyName}</h2>
          <h1 className="job-title">{jobTitle}</h1>
          <p className="fulltime-parttime">{jobType}</p>
        </div>
        <div className="location-creation--wrapper">
          <p className="location">
            <span className="material-icons">public</span>
            {location}
          </p>
          <p className="since-posted">
            <span className="material-icons">schedule</span>
            {sincePosted}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Job;

function timeSince(time) {
  const now = new Date();
  const daysSince = Math.floor((now.getTime() - Date.parse(time)) / 86400000);
  return `${daysSince} days ago`;
}
