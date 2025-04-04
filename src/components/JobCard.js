import React from "react";
import company from "../imges/company.png";
import { MapPin, Clock, Bookmark } from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md w-56 bg-white md:w-full">
      {/* Promoted Tag */}
      <span className="text-xs text-[#333333] font-semibold">Promoted</span>

      {/* Job Info - Image, Title, and Company */}
      <div className="flex items-center space-x-3 mt-2">
        {/* Placeholder Image */}
        <img
          src={company}
          alt="Company Logo"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.company}</p>
        </div>
      </div>

      {/* Location with Icon */}
      <p className="text-sm text-gray-500 flex items-center mt-2">
        <MapPin className="text-gray-400 mr-1 w-4 h-4" /> {job.location}
      </p>

      {/* Time & Applicants with Clock Icon */}
      <p className="text-xs text-gray-400 flex items-center mt-1">
        <Clock className="mr-1 w-4 h-4" /> {job.postedTime} |{" "}
        <span className="text-blue-500 ml-2">{job.applicants} applicants</span>
      </p>

      {/* Apply Button & Bookmark Icon */}
      <div className="flex justify-between items-center mt-3">
        <button className="bg-[#0154AA] text-white py-2 px-4 rounded-md  transition w-full">
          Apply Now
        </button>
        <Bookmark className="text-gray-500 w-7 h-7 ml-2 cursor-pointer  transition" />
      </div>
    </div>
  );
};

export default JobCard;
