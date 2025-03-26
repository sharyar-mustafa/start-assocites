import React from "react";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";



// Job List Component
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


// Main Layout Component
const MainLayout = () => {
  const jobs = [
    { title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)" },
    { title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)" },
    { title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)" },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* <ProfileCard/> */}
      <Sidebar />
      <div className="col-span-2">
        <SearchBar />
        <JobList jobs={jobs} title="Featured Jobs" />
      </div>
    </div>
  );
};

export default MainLayout;