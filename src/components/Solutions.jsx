import React from "react";
import { useLocation, Link } from "react-router-dom";
import Routers from "../Router";
import { motion } from "framer-motion";

function Solutions() {
  const location = useLocation();

  return (
    <div className="text-gray-800 mb-12 overflow-hidden">
      <div className="mt-24 flex justify-center">
        <p className="font-semibold text-4xl">Our Solutions</p>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        <Link
          to="/"
          className={`mx-4 ${
            location.pathname.endsWith("/") ? "border-[0.1vw] px-3  border-orange-600 rounded-xl" : ""
          }`}
        >
          <motion.p whileHover={{color:'#FF4729'}}>All</motion.p>
        </Link>
        <Link to="/CGI"  className={`mx-4 ${
            location.pathname.endsWith("/CGI") ? "border-[0.1vw] px-3  border-orange-600 rounded-xl" : ""
          }`}>
          <motion.p whileHover={{color:'#FF4729'}}>CGI</motion.p>
        </Link>
        <Link to="/Enhance_dbrand_contend"  className={`mx-4 ${
            location.pathname.endsWith("/Enhance_dbrand_contend") ? "border-[0.1vw] px-3  border-orange-600 rounded-xl" : ""
          }`}>
          <motion.p whileHover={{color:'#FF4729'}}>Enhanced Brand Content</motion.p>
        </Link>
        <Link to="/Photography"  className={`mx-4 ${
            location.pathname.endsWith("/Photography") ? "border-[0.1vw] px-3  border-orange-600 rounded-xl" : ""
          }`}>
          <motion.p whileHover={{color:'#FF4729'}}>Product Photography</motion.p>
        </Link>
        <Link to="/CreativeServices"  className={`mx-4 ${
            location.pathname.endsWith("/CreativeServices") ? "border-[0.1vw] px-3  border-orange-600 rounded-xl" : ""
          }`}>
          <motion.p whileHover={{color:'#FF4729'}}>Creative Services</motion.p>
        </Link>
      </div>
      <Routers />
    </div>
  );
}

export default Solutions;
