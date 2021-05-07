import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

const Job = ({
  jobLogo,
  companyName,
  jobTitle,
  jobType,
  location,
  createdAt,
  jobID,
}) => {
  return (
    <Link to={`/desc/${jobID}`} style={{ textDecoration: 'none' }}>
      <div className="job">
        <div className='logo--wrapper'>
        <div
          className="company-logo"
          style={{ backgroundImage: `url(${jobLogo})` }}
        />
        </div>
        <div className="company--wrapper">
          <h2 className="company-name-header">{companyName}</h2>
          <h1 className="job-title">{jobTitle}</h1>
          <p className="job-type">{jobType}</p>
          <div className="location-creation--wrapper">
            <p className="location">
              <span className="material-icons">public</span>
              {location}
            </p>
            <p className="since-posted">
              <span className="material-icons">schedule</span>
              {moment(createdAt).startOf('day').fromNow()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Job;
