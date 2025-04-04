import React from "react";
import JobCard from "./JobCard";

const JobSection = ({ title, linkText, jobs }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <h2 className="text-lg text-gray-800">{title}</h2>
        <a href="#" className="text-[#0154AA] underline sm:ml-4 text-sm">
          {linkText}
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobSection;
