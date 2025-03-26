import React from 'react'

const ProfileCard = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="text-center font-semibold mt-2">Albert Flores</h2>
        <p className="text-center text-sm text-gray-500">
          Senior Product Designer | UI/UX Designer
        </p>
        <p className="text-center text-xs text-gray-400">Clinton, Maryland</p>
      </div>
    );
  };

export default ProfileCard