import React from "react";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import JobSearchBar from "../components/JobSearchBar";
import SimilarJobsFilter from "../components/SimilarJobsFilter";
import JobSection from "../components/JobSection";

const MainLayout = () => {
  const jobs = [
    {
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      postedTime: "1 day ago",
      applicants: "22",
    },
  ];

  const filters = ["Frontend", "Backend", "Graphic Designer"];

  const handleFilterSelect = (filter) => {
    console.log("Selected Filter:", filter);
  };

  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      <Header />
      <div className="p-6 flex flex-col md:flex-row gap-6 px-16">
        {/* Profile Card */}
        <div className="flex-none w-full md:w-[20%]">
          <ProfileCard />
        </div>

        {/* Content Section */}
        <div className="w-[80%] ml-7 mt-9">
          {/* <div className="bg-gray-100"> */}
          <h1 className="text-3xl font-bold text-[#333333] mb-2">
            Find your Dream Job, <span className="text-[#0154AA]">Albert!</span>
          </h1>
          <p className="text-md text-[#585D6E] mb-6">
            Explore the latest job openings and apply for the best opportunities
            available today!
          </p>
          {/* </div> */}
          <JobSearchBar />
          <SimilarJobsFilter
            filters={filters}
            onFilterSelect={handleFilterSelect}
          />
          <JobSection
            title="Featured Jobs"
            linkText="See Featured Jobs"
            jobs={Array(10).fill(jobs[0])}
          />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
