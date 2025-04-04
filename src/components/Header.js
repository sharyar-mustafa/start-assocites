import React, { useState } from "react";
import logo from "../imges/Group907.png";
import profile from "../imges/Rectangle.png";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4 md:px-16 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-10" />
        <nav className="hidden md:flex space-x-4 text-gray-600">
          <a href="#" className="font-bold text-[#0154AA]">
            Find Jobs
          </a>
          <a href="#" className="text-[#737A91]">
            Top Companies
          </a>
          <a href="#" className="text-[#737A91]">
            Job Tracker
          </a>
          <a href="#" className="text-[#737A91]">
            My Calendar
          </a>
          <a href="#" className="text-[#737A91]">
            Documents
          </a>
          <a href="#" className="text-[#737A91]">
            Messages
          </a>
          <a href="#" className="text-[#737A91]">
            Notifications
          </a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2 bg-[#F6F9FF] p-3 rounded-md w-72">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-gray-500 w-full"
          />
        </div>
        <button className="hidden md:block bg-[#0154AA] text-white p-3 rounded-lg">
          Resume Builder
        </button>
        <img
          src={profile}
          alt="Profile"
          className="h-10 w-10 rounded-full hidden md:block"
        />

        {/* Hamburger menu for mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          <Bars3Icon className="h-8 w-8 text-gray-700" />
        </button>
      </div>

      {/* Mobile Side Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col space-y-4 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <img src={logo} alt="Logo" className="h-8" />
              <button onClick={() => setMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <img
              src={profile}
              alt="Profile"
              className="h-10 w-10 rounded-full self-center"
            />
            <div className="flex items-center space-x-2 bg-[#F6F9FF] p-2 rounded-md">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-gray-500 w-full"
              />
            </div>
            <button className="bg-[#0154AA] text-white py-2 rounded-lg w-full">
              Resume Builder
            </button>

            <nav className="flex flex-col text-gray-700 divide-y divide-gray-200">
              <a href="#" className="font-bold text-[#0154AA] py-3 px-1">
                Find Jobs
              </a>
              <a
                href="#"
                className="text-[#737A91] py-3 px-1 hover:text-[#0154AA] transition"
              >
                Top Companies
              </a>
              <a
                href="#"
                className="text-[#737A91] py-3 px-1 hover:text-[#0154AA] transition"
              >
                Job Tracker
              </a>
              <a
                href="#"
                className="text-[#737A91] py-3 px-1 hover:text-[#0154AA] transition"
              >
                My Calendar
              </a>
              <a
                href="#"
                className="text-[#737A91] py-3 px-1 hover:text-[#0154AA] transition"
              >
                Documents
              </a>
              <a
                href="#"
                className="text-[#737A91] py-3 px-1 hover:text-[#0154AA] transition"
              >
                Messages
              </a>
              <a
                href="#"
                className="text-[#737A91] py-3 px-1 hover:text-[#0154AA] transition"
              >
                Notifications
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
