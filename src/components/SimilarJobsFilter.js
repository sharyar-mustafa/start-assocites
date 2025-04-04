import React from "react";

const SimilarJobsFilter = ({ filters, onFilterSelect }) => {
  return (
    <div className="flex flex-wrap items-center space-x-2 py-4">
      <span className="text-[#737A91] mr-2">Similar:</span>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterSelect(filter)}
            className="border border-gray-400 text-[#737A91] px-3 py-1 rounded-lg hover:bg-gray-200 transition"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SimilarJobsFilter;
