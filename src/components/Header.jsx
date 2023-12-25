import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxDropdownMenu } from "react-icons/rx";

function Header() {
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);
  const [platformsMenuOpen, setPlatformsMenuOpen] = useState(false);
  const [IndustriesMenuOpen, setIndustriesMenuOpen] = useState(false);
  const [FeturedMenuOpen, setFeturedMenuOpen] = useState(false);
  const [ABoutUsMenuOpen, setABoutUsMenuOpen] = useState(false);
  const [CareerMenuOpen, setCareerMenuOpen] = useState(false);

  const isSmallScreen = window.innerWidth <= 640;
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSolutionsMouseEnter = () => {
    setSolutionsMenuOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    setSolutionsMenuOpen(false);
  };

  const handlePlatformsMouseEnter = () => {
    setPlatformsMenuOpen(true);
  };

  const handlePlatformsMouseLeave = () => {
    setPlatformsMenuOpen(false);
  };

  const handleIndustriesMouseEnter = () => {
    setIndustriesMenuOpen(true);
  };

  const handleIndustriesMouseLeave = () => {
    setIndustriesMenuOpen(false);
  };

  const handleFeturedMouseEnter = () => {
    setFeturedMenuOpen(true);
  };

  const handleFeturedMouseLeave = () => {
    setFeturedMenuOpen(false);
  };

  // Similarly for AboutUs and Career
  const handleABoutUsMouseEnter = () => {
    setABoutUsMenuOpen(true);
  };

  const handleABoutUsMouseLeave = () => {
    setABoutUsMenuOpen(false);
  };

  const handleCareerMouseEnter = () => {
    setCareerMenuOpen(true);
  };

  const handleCareerMouseLeave = () => {
    setCareerMenuOpen(false);
  };

  useEffect(() => {
    const handleMouseLeave = () => {
      setMenuOpen(false);
    };

    if (menuOpen) {
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [menuOpen]);

  return (
    <div className="flex  md:flex-row px-4 lg:px-0 justify-between md:justify-between lg:justify-evenly items-center md:h-20 ">
      <div className="mt-6 md:mt-0 mb-3 md:mb-0 min-w-9">
        <img src="./icon.svg" alt="" className="h-9" />
      </div>
      {!collapsed && (
        <>
          <div className="flex flex-col md:flex-row font-light text-black text-xs lg:text-sm ">
            <div
              className="mx-3 my-2 md:my-0 md:flex"
              onMouseEnter={handleSolutionsMouseEnter}
              onMouseLeave={handleSolutionsMouseLeave}
            >
              <Menu as="div" className="relative z-50 inline-block text-left ">
                <div className="mb-3">
                  <Menu.Button
                    className={
                      "text-gray-900  !important group flex w-full items-center rounded-md px-2 z-50"
                    }
                  >
                    {" "}
                    Solutions
                    <RiArrowDropDownLine className="w-6 h-6 " />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  show={solutionsMenuOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            Solutions 1
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            Solution 2
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div
              className="mx-3 my-2 md:my-0 md:flex"
              onMouseEnter={handlePlatformsMouseEnter}
              onMouseLeave={handlePlatformsMouseLeave}
            >
              <Menu as="div" className="relative z-50 inline-block text-left ">
                <div className="mb-3">
                  <Menu.Button
                    className={
                      "text-gray-900  !important group flex w-full items-center rounded-md px-2 z-50"
                    }
                  >
                    {" "}
                    Platforms
                    <RiArrowDropDownLine className="w-6 h-6 " />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  show={platformsMenuOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            Ios
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            Android
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            Pc
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div
              className="mx-3 my-2 md:my-0 md:flex"
              onMouseEnter={handleIndustriesMouseEnter}
              onMouseLeave={handleIndustriesMouseLeave}
            >
              <Menu as="div" className="relative z-50 inline-block text-left ">
                <div className="mb-3">
                  <Menu.Button
                    className={
                      "text-gray-900  !important group flex w-full items-center rounded-md px-2 z-50"
                    }
                  >
                    {" "}
                    Industries
                    <RiArrowDropDownLine className="w-6 h-6 " />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  show={IndustriesMenuOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            IT
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            Non IT
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div
              className="mx-3 my-2 md:my-0 md:flex"
              onMouseEnter={handleFeturedMouseEnter}
              onMouseLeave={handleFeturedMouseLeave}
            >
              <Menu as="div" className="relative z-50 inline-block text-left ">
                <div className="mb-3">
                  <Menu.Button
                    className={
                      "text-gray-900  !important group flex w-full items-center rounded-md px-2 z-50"
                    }
                  >
                    {" "}
                    Featured Insights
                    <RiArrowDropDownLine className="w-6 h-6" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  show={FeturedMenuOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            Featured Insights 1
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            Featured Insights 2
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div
              className="mx-3 my-2 md:my-0 md:flex"
              onMouseEnter={handleABoutUsMouseEnter}
              onMouseLeave={handleABoutUsMouseLeave}
            >
              <Menu as="div" className="relative z-50 inline-block text-left ">
                <div className="mb-3">
                  <Menu.Button
                    className={
                      "text-gray-900  !important group flex w-full items-center rounded-md px-2 z-50"
                    }
                  >
                    {" "}
                    About Us
                    <RiArrowDropDownLine className="w-6 h-6 " />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  show={ABoutUsMenuOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            About Company
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            About Team
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            About Careers
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            About Works
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div
              className="mx-3 my-2 md:my-0 md:flex"
              onMouseEnter={handleCareerMouseEnter}
              onMouseLeave={handleCareerMouseLeave}
            >
              <Menu as="div" className="relative z-50 inline-block text-left ">
                <div className="mb-3">
                  <Menu.Button
                    className={
                      "text-gray-900  !important group flex w-full items-center rounded-md px-2 z-50"
                    }
                  >
                    {" "}
                    Careers
                    <RiArrowDropDownLine className="w-6 h-6 " />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  show={CareerMenuOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            Frontend
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-orange-600 text-white !important"
                                : "text-gray-900  !important"
                            } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                          >
                            Backend
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="mx-3 my-2 md:my-0">Our Work</div>
          </div>
          <div>
            <button
              type="button"
              style={{ backgroundColor: "#3F3FFF" }}
              className="text-white hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Free Consultation
            </button>
          </div>
        </>
      )}
      {collapsed && (
        <div
          className="relative inline-block text-left z-30 "
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <Menu as="div" className="relative inline-block text-left ">
            <div className="mb-3">
              <Menu.Button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex w-full rounded-md font-medium text-orange-500  hover:bg-mainColor focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                {" "}
                <RxDropdownMenu className="mx-2 w-8 h-8 " />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              show={menuOpen}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ml-64">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-orange-600 text-white !important"
                            : "text-gray-900 hover:bg-gray-100 !important"
                        } group flex w-full items-center rounded-md px-2 py-2`}
                        onMouseEnter={handleSolutionsMouseEnter}
                        onMouseLeave={handleSolutionsMouseLeave}
                      >
                        <Menu
                          as="div"
                          className="relative inline-block text-left "
                        >
                          <div className="mb-3">
                            <Menu.Button
                              className={`${
                                active
                                  ? "bg-orange-600 text-white !important"
                                  : "text-gray-900 hover:bg-gray-100 !important"
                              } group flex w-full items-center rounded-md px-2 `}
                            >
                              {" "}
                              Solutions
                              <RiArrowDropDownLine className="w-6 h-6" />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            show={solutionsMenuOpen}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="px-1 py-1 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      Solutions 1
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      Solution 2
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-orange-600 text-white !important"
                            : "text-gray-900 hover:bg-gray-100 !important"
                        } group flex w-full items-center rounded-md px-2 py-2`}
                        onMouseEnter={handlePlatformsMouseEnter}
                        onMouseLeave={handlePlatformsMouseLeave}
                      >
                        <Menu
                          as="div"
                          className="relative inline-block text-left "
                        >
                          <div className="mb-3">
                            <Menu.Button
                              className={`${
                                active
                                  ? "bg-orange-600 text-white !important"
                                  : "text-gray-900 hover:bg-gray-100 !important"
                              } group flex w-full items-center rounded-md px-2 `}
                            >
                              {" "}
                              Platform
                              <RiArrowDropDownLine className="w-6 h-6" />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            show={platformsMenuOpen}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="px-1 py-1 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      IOS
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      Android
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      PC
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-orange-600 text-white !important"
                            : "text-gray-900 hover:bg-gray-100 !important"
                        } group flex w-full items-center rounded-md px-2 py-2`}
                        onMouseEnter={handleIndustriesMouseEnter}
                        onMouseLeave={handleIndustriesMouseLeave}
                      >
                        <Menu
                          as="div"
                          className="relative inline-block text-left "
                        >
                          <div className="mb-3">
                            <Menu.Button
                              className={`${
                                active
                                  ? "bg-orange-600 text-white !important"
                                  : "text-gray-900 hover:bg-gray-100 !important"
                              } group flex w-full items-center rounded-md px-2 `}
                            >
                              {" "}
                              Industries
                              <RiArrowDropDownLine className="w-6 h-6" />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            show={IndustriesMenuOpen}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="px-1 py-1 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      IT
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      Non IT
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-orange-600 text-white !important"
                            : "text-gray-900 hover:bg-gray-100 !important"
                        } group flex w-full items-center rounded-md px-2 py-2`}
                        onMouseEnter={handleFeturedMouseEnter}
                        onMouseLeave={handleFeturedMouseLeave}
                      >
                        <Menu
                          as="div"
                          className="relative inline-block text-left "
                        >
                          <div className="mb-3">
                            <Menu.Button
                              className={`${
                                active
                                  ? "bg-orange-600 text-white !important"
                                  : "text-gray-900 hover:bg-gray-100 !important"
                              } group flex w-full items-center rounded-md px-2 `}
                            >
                              {" "}
                              Featured Insights
                              <RiArrowDropDownLine className="w-6 h-6 ml-2" />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            show={FeturedMenuOpen}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="px-1 py-1 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      Insights 1
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      Insights 2
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-orange-600 text-white !important"
                            : "text-gray-900 hover:bg-gray-100 !important"
                        } group flex w-full items-center rounded-md px-2 py-2`}
                        onMouseEnter={handleABoutUsMouseEnter}
                        onMouseLeave={handleABoutUsMouseLeave}
                      >
                        <Menu
                          as="div"
                          className="relative inline-block text-left "
                        >
                          <div className="mb-3">
                            <Menu.Button
                              className={`${
                                active
                                  ? "bg-orange-600 text-white !important"
                                  : "text-gray-900 hover:bg-gray-100 !important"
                              } group flex w-full items-center rounded-md px-2 `}
                            >
                              {" "}
                              About Us
                              <RiArrowDropDownLine className="w-6 h-6 ml-2" />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            show={ABoutUsMenuOpen}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="px-1 py-1 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      About Company
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      About Team
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      About Work
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-orange-600 text-white !important"
                            : "text-gray-900 hover:bg-gray-100 !important"
                        } group flex w-full items-center rounded-md px-2 py-2`}
                        onMouseEnter={handleCareerMouseEnter}
                        onMouseLeave={handleCareerMouseLeave}
                      >
                        <Menu
                          as="div"
                          className="relative inline-block text-left "
                        >
                          <div className="mb-3">
                            <Menu.Button
                              className={`${
                                active
                                  ? "bg-orange-600 text-white !important"
                                  : "text-gray-900 hover:bg-gray-100 !important"
                              } group flex w-full items-center rounded-md px-2 `}
                            >
                              {" "}
                              Careers
                              <RiArrowDropDownLine className="w-6 h-6 ml-2" />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            show={CareerMenuOpen}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="px-1 py-1 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      Frontend
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      Backend
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      Devops
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      Testing
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-orange-600 text-white !important"
                                          : "text-gray-900 hover:bg-gray-100 !important"
                                      } group flex w-full items-center rounded-md px-2 py-2 z-50`}
                                    >
                                      Team lead
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-orange-600 text-white  !important"
                            : "text-gray-900 hover:bg-gray-100 !important"
                        } group flex w-full items-center rounded-md px-3 py-4`}
                      >
                        Our work
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      type="button"
                      style={{ backgroundColor: "#3F3FFF" }}
                      className="text-white hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm mt-3 px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Free Consultation
                    </button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      )}
    </div>
  );
}

export default Header;
