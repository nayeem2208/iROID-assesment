import React from "react";
import { useLocation, Link } from "react-router-dom";
import SolutionCards from "./SolutionCards";
import { SolutionsData } from "../datas/solutionsData";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import All from "./solutions/All";
import Routers from "../Router";

function Solutions() {
  const location = useLocation();

  const getButtonClassName = (path) => {
    return location.pathname.endsWith(path) === path ? 'active-button' : '';
  };
  console.log(location.pathname)
  return (
    <div className="text-gray-800 mb-12">
      <div className="mt-24 flex justify-center">
        <p className="font-semibold text-4xl">Our Solutions</p>
      </div>
      <div className="flex justify-center mt-8">
        <Link to='/' className={`mx-4  ${getButtonClassName('/')}`}>
          All
        </Link>
        <Link to='/CGI' className={`mx-4 ${getButtonClassName('/CGI')}`}>
          CGI
        </Link>
        <Link to='/Enhance_dbrand_contend' className={`mx-4 ${getButtonClassName('/Enhanced')}`}>
          Enhanced Brand Content
        </Link>
        <Link to='/Photography' className={`mx-4 ${getButtonClassName('/Photography')}`}>
          Product Photography
        </Link>
        <Link to='/CreativeServices' className={`mx-4 ${getButtonClassName('/CreativeServices')}`}>
          Creative Services
        </Link>
      </div>
      <Routers />
    </div>
  );
}

export default Solutions;
