import React from "react";
import ProfileCard from "../components/ProfileCard";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";



// Main Layout Component
const MainLayout = () => {
  const jobs = [
    { title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)" },
    { title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)" },
    { title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)" },
  ];

  return (
    <>    
    <Header/>
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProfileCard/>
      <div className="col-span-2">
        <SearchBar />
        <JobList jobs={jobs} title="Featured Jobs" />
      </div>
    </div>
    </>

  );
};

export default MainLayout;