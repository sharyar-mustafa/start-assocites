import React from 'react'

const JobList = ({ jobs, title }) => {
    return (
      <div>
        <h2 className="font-semibold mb-2">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    );
  };
export default JobList