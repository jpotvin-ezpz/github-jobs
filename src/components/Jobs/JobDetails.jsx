import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import moment from "moment";
import { Link } from "react-router-dom";

const JobDetails = ({ jobs }) => {
  const [job, setJob] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setJob(...jobs.filter((job) => job.id === id));
  }, [id, jobs]);

  function createMarkup(html) {
    return { __html: html };
  }

  return (
    <div className="job-details">
      <div className="link-apply--wrapper">
        <Link className="back-link" to="/">
          <span>&#x2190;</span> Back to search
        </Link>
        <h2 className="how-header">How to Apply</h2>
        <p
          className="how-text"
          dangerouslySetInnerHTML={createMarkup(job.how_to_apply)}
        ></p>
      </div>
      <div className="job-main--wrapper">
        <div className="job-title-type--wrapper">
          <h1 className="job-details-title">{job.title}</h1>
          <p className="job-type">{job.type}</p>
        </div>
        <p className="since-posted">
          <span className="material-icons">schedule</span>
          {moment(job.created_at).startOf("day").fromNow()}
        </p>
        <div className="job-logo-location--wrapper">
          <div
            className="job-logo"
            style={{ backgroundImage: `url(${job.company_logo})` }}
          />
          <div className="company-location--wrapper">
            <h2 className="company-name">{job.company}</h2>
            <p className="location">
              <span className="material-icons">public</span>
              {job.location}
            </p>
          </div>
        </div>
        <p
          dangerouslySetInnerHTML={createMarkup(job.description)}
          className="job-desc"
        ></p>
      </div>
    </div>
  );
};

export default JobDetails;
