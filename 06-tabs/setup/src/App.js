import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    let headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    const newJobs = await fetch(url, { headers: headers }).then((res) =>
      res.json()
    );
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>...loading</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-container">
        <div className="btn-container">
          {jobs.map((job, i) => {
            return (
              <button
                key={job.id}
                className={`job-btn ${i === value && "active-btn"}`}
                onClick={() => {
                  setValue(i);
                }}
              >
                {job.company}
              </button>
            );
          })}
        </div>

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                {duty}
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
