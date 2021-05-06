import React, { useEffect, useState } from "react";
import FilterSearch from "./components/FilterSearch";
import "./styles/index.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [locale, setLocale] = useState("berlin");
  const [fullTime, setFullTime] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${query}&location=${locale}&full_time=${fullTime}`
    )
      .then((response) => {
        if (!response.ok) {
          alert(
            "Request access at https://cors-anywhere.herokuapp.com/corsdemo"
          );
          throw new Error(
            "Too many Requests or Check access https://cors-anywhere.herokuapp.com/corsdemo",
            response
          );
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setJobs([...data]);
        setIsLoading(false)
      });
  }, [locale, query, fullTime]);

  return (
    <div className="App">
      <p className="github-header">
        <span className="bold-text">Github</span> Jobs
      </p>
      <FilterSearch 
        jobsData={jobs} 
        setLocale={setLocale} 
        setQuery={setQuery}
        fullTime={fullTime} 
        setFullTime={setFullTime}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
