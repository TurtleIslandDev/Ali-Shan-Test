import React from "react";
import ArrowDownSvg from "../../assets/SVGs/ArrowDownSvg";
import SettingsSvg from "../../assets/SVGs/SettingsSvg";

const Dropdown = () => {
  return (
    <>
      <div>
        <button
          id="dropdownTopButton"
          data-dropdown-toggle="dropdownTop"
          data-dropdown-placement="top"
          className="w-80 me-3 mb-3 md:mb-0 text-white bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between  "
          type="button"
        >
          Dispositions
          <ArrowDownSvg />
        </button>

        {/* Dropdown menu */}
        <div
          id="dropdownTop"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700 border border-[#EBEDEF] px-14 py-11"
        >
          <div>
            <div className="flex items-center gap-2">
              <SettingsSvg /> Categories
            </div>
            <ul
              className="py-2 pl-16 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownTopButton"
            >
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Disposition 1
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Disposition 2
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Disposition 3
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <SettingsSvg /> Categories
            </div>
            <ul
              className="py-2 pl-16 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownTopButton"
            >
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Disposition 4
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Disposition 5
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Disposition 7
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Disposition 8
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <SettingsSvg /> Categories
            </div>
            <ul
              className="py-2 pl-16 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownTopButton"
            >
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Disposition 9
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Disposition 10
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Disposition 11
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
