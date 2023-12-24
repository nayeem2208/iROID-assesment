import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center md:h-20">
      <div className="mb-3 md:mb-0">
        <img src="/icon.svg" alt="" className="h-9" />
      </div>
      <div className="flex flex-col md:flex-row font-light text-black text-sm">
        <div className="mx-3 my-2 md:my-0 md:flex">
          Solutions<RiArrowDropDownLine className="w-6 h-6 ml-2" />
        </div>
        <div className="mx-3 my-2 md:my-0 md:flex">
          Platform<RiArrowDropDownLine className="w-6 h-6 ml-2" />
        </div>
        <div className="mx-3 my-2 md:my-0 md:flex">
          Industries<RiArrowDropDownLine className="w-6 h-6 ml-2" />
        </div>
        <div className="mx-3 my-2 md:my-0 md:flex">
          Featured Insights<RiArrowDropDownLine className="w-6 h-6 ml-2" />
        </div>
        <div className="mx-3 my-2 md:my-0 md:flex">
          About Us<RiArrowDropDownLine className="w-6 h-6 ml-2" />
        </div>
        <div className="mx-3 my-2 md:my-0 md:flex">
          Careers<RiArrowDropDownLine className="w-6 h-6 ml-2" />
        </div>
        <div className="mx-3 my-2 md:my-0">Our Work</div>
      </div>
      <div>
        <button
          type="button"
          style={{ backgroundColor: '#3F3FFF' }}
          className="text-white hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Free Consultation
        </button>
      </div>
    </div>
  );
}

export default Header;
