import React from 'react'

const JobCard = ({ job }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold">{job.title}</h3>
        <p className="text-sm text-gray-500">{job.company}</p>
        <p className="text-xs text-gray-400">{job.location}</p>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Apply Now</button>
      </div>
    );
  };
  
export default JobCard