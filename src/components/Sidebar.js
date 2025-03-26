  import React from 'react'
  
 const Sidebar = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold">Profile Visitors</h3>
        <p className="text-gray-500">140</p>
        <h3 className="font-semibold mt-2">Resume Viewers</h3>
        <p className="text-gray-500">20</p>
        <h3 className="font-semibold mt-2">My Jobs</h3>
        <p className="text-gray-500">88</p>
      </div>
    );
  };
  
  export default Sidebar;