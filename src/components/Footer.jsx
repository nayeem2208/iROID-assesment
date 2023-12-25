import { motion } from "framer-motion";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <div className="pt-8 pb-12" style={{ backgroundColor: "#00002D" }}>
      <div className="flex flex-wrap text-gray-300 footer justify-center ">
        <div className="text-xs font-thin leading-8 mx-2 sm:mx-8">
          <motion.p whileHover={{color:'white',scale:1.02}} className="text-sm font-medium  mb-4" style={{fontWeight:'550'}}>Industries</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Lorem Ipsum</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>New Courses</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Lorem pprovel</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Certification</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Lorem Ipsu</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>New Courses</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>approvel</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Lorem Ipsu</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Certification</motion.p>
        </div>
        <div className="text-xs font-thin leading-8 mx-2 sm:mx-12">
          <motion.p whileHover={{scale:1.02,color:'white'}} className="text-sm font-medium mb-4" style={{fontWeight:'550'}}>Solutions</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Lorem Ipsum</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>New Lorem</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Approvel</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Certification</motion.p>
        </div>
        <div className="text-xs font-thin leading-8 mx-2 sm:mx-8">
          <motion.p whileHover={{scale:1.02,color:'white'}} className="text-sm font-medium mb-4" style={{fontWeight:'550'}}>Platform</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Lorem Ipsum</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>New </motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Lorem approvel</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Certification</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>New </motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>approvel</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Certification</motion.p>
        </div>
        <div className="text-xs font-thin leading-8 mx-2 sm:mx-8">
          <motion.p whileHover={{scale:1.02,color:'white'}} className="text-sm font-medium mb-4" style={{fontWeight:'550'}}>Featured Insights</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Lorem Ipsum</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>New </motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Approvel</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Certification</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Approvel</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Certification</motion.p>
        </div>
        <div className="text-xs font-thin leading-8 mx-2 sm:mx-12">
          <motion.p whileHover={{scale:1.02,color:'white'}} className="text-sm font-medium mb-4" style={{fontWeight:'550'}}>About Us</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Lorem Ipsum</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>New Lorem</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Approvel</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Lorem Ipsum</motion.p>
        </div>
        <div className="text-xs font-thin leading-8 mx-2 sm:mx-8">
          <motion.p whileHover={{scale:1.02,color:'white'}} className="text-sm font-medium mb-4" style={{fontWeight:'550'}}>Careers</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Lorem Ipsum</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>New Courses</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>University approvel</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Certification</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Online degree</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>New Courses</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>University approvel</motion.p>
          <motion.p whileHover={{color:'white',scale:1.02}}>Certification</motion.p>
        </div>
      </div>
      <hr className="mt-8 mb-2" style={{filter:'opacity(0.5)'}} />
      <div className="text-gray-300 flex justify-between px-1 sm:px-2 md:px-20">
        <motion.p whileHover={{scale:1.02,color:'white'}} className="text-xs sm:ml-6 md:ml-32">Copyright © 2021 Tulfa Inc. All rights reserved.</motion.p>
        <div className="flex sm:mr-6 md:mr-32" >
        <FaLinkedinIn className="mx-3 w-4 h-4"/>
        <FaFacebookF   className="mx-3 w-4 h-4"/>
        <FaTwitter  className="mx-3 w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
