import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="pt-8 pb-12" style={{ backgroundColor: "#00002D" }}>
      <div className="flex text-gray-300 footer justify-center ">
        <div className="text-xs font-thin leading-8 mx-8">
          <p className="text-sm font-medium  mb-4" style={{fontWeight:'550'}}>Industries</p>
          <p>Lorem Ipsum</p>
          <p>New Courses</p>
          <p>Lorem pprovel</p>
          <p>Certification</p>
          <p>Lorem Ipsu</p>
          <p>New Courses</p>
          <p>approvel</p>
          <p>Lorem Ipsu</p>
          <p>Certification</p>
        </div>
        <div className="text-xs font-thin leading-8 mx-12">
          <p className="text-sm font-medium mb-4" style={{fontWeight:'550'}}>Solutions</p>
          <p>Lorem Ipsum</p>
          <p>New Lorem</p>
          <p>Approvel</p>
          <p>Certification</p>
        </div>
        <div className="text-xs font-thin leading-8 mx-8">
          <p className="text-sm font-medium mb-4" style={{fontWeight:'550'}}>Platform</p>
          <p>Lorem Ipsum</p>
          <p>New </p>
          <p>Lorem approvel</p>
          <p>Certification</p>
          <p>New </p>
          <p>approvel</p>
          <p>Certification</p>
        </div>
        <div className="text-xs font-thin leading-8 mx-8">
          <p className="text-sm font-medium mb-4" style={{fontWeight:'550'}}>Featured Insights</p>
          <p>Lorem Ipsum</p>
          <p>New </p>
          <p>Approvel</p>
          <p>Certification</p>
          <p>Approvel</p>
          <p>Certification</p>
        </div>
        <div className="text-xs font-thin leading-8 mx-12">
          <p className="text-sm font-medium mb-4" style={{fontWeight:'550'}}>About Us</p>
          <p>Lorem Ipsum</p>
          <p>New Lorem</p>
          <p>Approvel</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className="text-xs font-thin leading-8 mx-8">
          <p className="text-sm font-medium mb-4" style={{fontWeight:'550'}}>Careers</p>
          <p>Lorem Ipsum</p>
          <p>New Courses</p>
          <p>University approvel</p>
          <p>Certification</p>
          <p>Online degree</p>
          <p>New Courses</p>
          <p>University approvel</p>
          <p>Certification</p>
        </div>
      </div>
      <hr className="mt-8 mb-2" style={{filter:'opacity(0.5)'}} />
      <div className="text-gray-300 flex justify-between px-20">
        <p className="text-xs ml-32">Copyright © 2021 Tulfa Inc. All rights reserved.</p>
        <div className="flex mr-32" >
        <FaLinkedinIn className="mx-3 w-4 h-4"/>
        <FaFacebookF   className="mx-3 w-4 h-4"/>
        <FaTwitter  className="mx-3 w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
