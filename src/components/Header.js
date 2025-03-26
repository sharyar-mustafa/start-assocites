import React from 'react'
import logo from '..//imges/Group907.png'
import profile from '..//imges/Rectangle.png'


const Header = () => {
    return (
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-6">
          <img src={logo} alt="Logo" className="h-6" />
          <nav className="flex space-x-4 text-gray-600">
            <a href="#" className="font-bold text-blue-600">Find Jobs</a>
            <a href="#">Top Companies</a>
            <a href="#">Job Tracker</a>
            <a href="#">My Calendar</a>
            <a href="#">Documents</a>
            <a href="#">Messages</a>
            <a href="#">Notifications</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="p-2 border rounded-md text-sm"
          />
          <button className="bg-blue-600 text-white py-1 px-3 rounded">
            Resume Builder
          </button>
          <img
            src={profile}profile
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </header>
    );
  };

export default Header