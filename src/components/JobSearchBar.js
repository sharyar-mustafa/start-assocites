import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const JobSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const handleSearch = () => {
    console.log({ searchTerm, location, jobType });
  };

  return (
    <div className="flex flex-wrap items-center bg-white shadow-md p-3 rounded-lg w-full">
      {/* Job Title Input */}
      <input
        type="text"
        placeholder="Job Title, Company, or Keywords"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 p-2 outline-none text-gray-700 mb-2 sm:mb-0 sm:mr-3 w-20"
      />

      {/* Location Dropdown */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border-l px-3 outline-none text-gray-700 bg-transparent mb-2 sm:mb-0 sm:mr-3 p-2"
      >
        <option value="">Select Location</option>
        <option value="New York">New York</option>
        <option value="California">California</option>
      </select>

      {/* Job Type Dropdown */}
      <select
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        className="border-l px-3 outline-none text-gray-700 bg-transparent mb-2 sm:mb-0 sm:mr-3 p-2"
      >
        <option value="">Job Type</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
      </select>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="ml-2 bg-[#0154AA] text-white px-8 py-2 rounded-lg flex items-center"
      >
        <FaSearch className="mr-2" />
        Search
      </button>
    </div>
  );
};

export default JobSearchBar;
