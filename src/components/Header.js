// import React from "react";

// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// const Header = () => {
//   return (
//     <header className="flex items-center justify-between p-7 px-16 bg-white shadow-md">
//       <div className="flex items-center space-x-6">
//         <img src={logo} alt="Logo" className="h-10" />
//         <nav className="flex space-x-4 text-gray-600">
//           <a href="#" className="font-bold text-[#0154AA]">
//             Find Jobs
//           </a>
//           <a href="#" className="text-[#737A91]">
//             Top Companies
//           </a>
//           <a href="#" className="text-[#737A91]">
//             Job Tracker
//           </a>
//           <a href="#" className="text-[#737A91]">
//             My Calendar
//           </a>
//           <a href="#" className="text-[#737A91]">
//             Documents
//           </a>
//           <a href="#" className="text-[#737A91]">
//             Messages
//           </a>
//           <a href="#" className="text-[#737A91]">
//             Notifications
//           </a>
//         </nav>
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="flex items-center space-x-2 bg-[#F6F9FF] p-3 rounded-md w-72">
//           <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent outline-none text-gray-500 w-full"
//           />
//         </div>
//         <button className="bg-[#0154AA] text-white p-3 rounded-lg">
//           Resume Builder
//         </button>
//         <img
//           src={profile}
//           profile
//           alt="Profile"
//           className="h-14 w-14 rounded-full"
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "..//imges/Group907.png";
import profile from "..//imges/Rectangle.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container flex justify-between items-center">
        {/* Logo and Links */}
        <div className="flex items-center gap-6">
          <img src={logo} alt="Logo" className="h-10" />
          <div className="text-blue-600 font-bold text-lg">Find Jobs</div>
          <div className="hidden md:flex gap-4 text-gray-600">
            <a href="#" className="hover:text-blue-600">
              Top Companies
            </a>
            <a href="#" className="hover:text-blue-600">
              Job Tracker
            </a>
            <a href="#" className="hover:text-blue-600">
              My Calendar
            </a>
            <a href="#" className="hover:text-blue-600">
              Documents
            </a>
            <a href="#" className="hover:text-blue-600">
              Messages
            </a>
            <a href="#" className="hover:text-blue-600">
              Notifications
            </a>
          </div>
        </div>

        {/* Search and Button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center border px-2 py-1 rounded-lg">
            <Search className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="outline-none ml-2 text-sm"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Resume Builder
          </button>
          <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-lg p-4 mt-2">
          <a href="#" className="py-2 border-b">
            Top Companies
          </a>
          <a href="#" className="py-2 border-b">
            Job Tracker
          </a>
          <a href="#" className="py-2 border-b">
            My Calendar
          </a>
          <a href="#" className="py-2 border-b">
            Documents
          </a>
          <a href="#" className="py-2 border-b">
            Messages
          </a>
          <a href="#" className="py-2 border-b">
            Notifications
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
