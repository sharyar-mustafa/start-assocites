import React from "react";
import profile from "../imges/Oval.png";
import Bgprofile from "../imges/Rbg.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ProfileCard = () => {
  return (
    <div>
      <div className="max-w-sm  bg-white rounded-xl overflow-hidden">
        <div className="relative">
          <img
            src={Bgprofile}
            alt="Background"
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center top-24">
            <img
              src={profile}
              alt="Profile"
              className="w-24 h-24 rounded-full border-1 border-white"
            />
          </div>
        </div>
        <div className="text-center mt-5 p-4">
          <h2 className="text-lg font-semibold">Albert Flores</h2>
          <div className="flex justify-center">
            <p className="text-sm text-black text-center w-56">
              Senior Product Designer | UI/UX Designer | Graphic Designer |
              Web...
            </p>
          </div>
          <p className="text-sm mt-1 text-gray-500">Clinton, Maryland</p>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-xl overflow-hidden mt-3  px-8">
        <div className="flex justify-between py-4 text-sm border-b border-gray-300">
          <div className="text-black">Profile Visitors</div>
          <div className="text-[#0154AA]">140</div>
        </div>
        <div className="flex justify-between py-4 text-sm border-b border-gray-300">
          <div className="text-black">Resume Viewers</div>
          <div className="text-[#0154AA]">20</div>
        </div>
        <div className="flex justify-between py-4 text-sm">
          <div className="text-black">My Jobs</div>
          <div className="text-[#0154AA]">88</div>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-xl overflow-hidden mt-3 p-4 px-8 flex justify-between items-center">
        <div>
          <div className="text-black font-bold text-lg">My calendar</div>
          <span className="block text-[#737A91] text-md">
            Upcoming Interviews
          </span>
        </div>
        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
};

export default ProfileCard;
