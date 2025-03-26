import React from 'react'

const SearchBar = () => {
    return (
      <div className="flex space-x-2 p-4 bg-gray-100 rounded-lg">
        <input
          type="text"
          placeholder="Job Title, Company or Keywords"
          className="flex-grow p-2 border rounded"
        />
        <select className="p-2 border rounded">
          <option>Select Location</option>
        </select>
        <select className="p-2 border rounded">
          <option>Job Type</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
      </div>
    );
  };

export default SearchBar