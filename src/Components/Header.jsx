import { useState } from "react";
import logo from "../assets/images/logo3.jpg";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Movies' },
    { id: 3, name: 'av' },
    { id: 4, name: 'Sports' },
    { id: 5, name: 'News' },
    { id: 6, name: 'Hubs' },
  ];

  return (
    <div className="flex justify-between items-center p-4 px-10">
      <img src={logo} className="w-[80px]" alt="logo" />

      <ul className="hidden md:flex gap-8">
        {menu.map((item) => (
          <li 
            key={item.id} 
            className={`text-[18px] font-medium cursor-pointer px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out 
            ${item.name === 'Home' ? 'text-white font-bold bg-gray-700' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}
          >
            {item.name}
          </li>
        ))}
      </ul>

      
      <div className="md:hidden">
      
        <div 
          className={`flex items-center px-3 pb-2 py-1 cursor-pointer rounded-md 
          ${!toggle ? 'bg-gray-700 text-white font-bold' : 'text-gray-400'}`} 
          onClick={() => setToggle(!toggle)}
        >
          Home
          {toggle ? <FaAngleUp className="ml-2 mt-1" /> : <FaAngleDown className="ml-2 mt-1" />}
        </div>

        
        {toggle && (
          <ul className="absolute bg-gray-800 p-4 rounded-md mt-2 w-[150px]">
            {menu.map((item) => (
              <li 
                key={item.id} 
                className={`text-[18px] font-medium cursor-pointer px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out 
                ${item.name === 'Home' ? 'text-white font-bold bg-gray-700' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Search and Profile */}
      <div className="flex gap-10">
        <CiSearch className="text-[35px] text-gray-300 hover:bg-gray-700 px-[3px] pb-[2px] py-[2px] rounded-md hover:text-white transition-all duration-500 ease-in-out cursor-pointer" />
        <h2 className="px-[10px] text-[20px] text-gray-300 border-[2px] border-white rounded-full">A</h2>
      </div>
    </div>
  );
}

export default Header;
