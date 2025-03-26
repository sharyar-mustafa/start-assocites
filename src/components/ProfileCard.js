import React from 'react'
import profile from '../imges/Oval.png'
import Bgprofile from '../imges/Rbg.png'


const ProfileCard = () => {
    return (
      <div className="bg-white rounded-xl shadow-md p-4 text-center">
        <div className="relative">
          <img
            src={Bgprofile}
            alt="Cover"
            className="w-full h-24 rounded-t-xl object-cover"
          />
          <img
            src={profile}
            alt="Profile"
            className="absolute left-1/2 transform -translate-x-1/2 top-1 w-25 h-25 rounded-full border-4 border-white"
          />
        </div>
        <h3 className="mt-6 text-lg font-semibold">Albert Flores</h3>
        <p className="text-sm text-gray-600">Senior Product Designer | UI/UX Designer | Graphic Designer | Web...</p>
        <p className="text-xs text-gray-500">Clinton, Maryland</p>
        <div className="mt-4 p-2 bg-gray-100 rounded-lg">
          <div className="flex justify-between text-sm">
            <span>Profile Visitors</span>
            <span className="text-blue-600">140</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>Resume Viewers</span>
            <span className="text-blue-600">20</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>My Jobs</span>
            <span className="text-blue-600">88</span>
          </div>
        </div>
        <div className="mt-4 text-left font-semibold text-gray-700">My Calendar</div>
        <p className="text-sm text-blue-600">Upcoming Interviews</p>
      </div>
    );
  };

export default ProfileCard