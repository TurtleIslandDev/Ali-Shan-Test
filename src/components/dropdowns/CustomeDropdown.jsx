import React, { useState, useRef, useEffect } from "react";
import settings from "../../assets/images/settings.png";
import ArrowDownSvg from "../../assets/SVGs/ArrowDownSvg";
import styled from "styled-components";
const DropdownMenu = styled.div`
  position: absolute;
  top: -652px; // Correcting calc usage
  left: 53px;
  background-color: white;
  border-radius: 8px;
  padding: 44px 60px;
  z-index: 1000;
  border: 2px solid #ebedef;
`;
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;
const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleItemClick = () => {
    setIsOpen(false); // Close dropdown
  };
  return (
    <DropdownContainer ref={dropdownRef}>
      <button
        className="w-96 h-[70px] me-3 mb-3 md:mb-0 text-white bg-[#1E40AF]  rounded-lg text-[22px] font-[400] px-5 py-2.5 text-center inline-flex items-center justify-between  "
        type="button"
        //   className="dropdown-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Dispositions
        <ArrowDownSvg />
      </button>
      {isOpen && (
        <DropdownMenu>
          <div>
            <div className="flex items-center gap-2 text-[#1E40AF] font-[400] text-[22px]">
              <img src={settings} alt="settings" /> Category 2
            </div>
            <ul
              className="py-2 pl-16 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownTopButton"
            >
              <li
                onClick={handleItemClick}
                className="block px-3.5 py-2 hover:bg-gray-100 text-xl w-max font-[400]"
              >
                Disposition 4
              </li>
              <li
                onClick={handleItemClick}
                className="block px-3.5 py-2 hover:bg-gray-100 text-xl w-max font-[400]"
              >
                Disposition 4
              </li>
              <li
                onClick={handleItemClick}
                className="block px-3.5 py-2 hover:bg-gray-100 text-xl w-max font-[400]"
              >
                Disposition 4
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 text-[#1E40AF] font-[400] text-[22px]">
              <img src={settings} alt="settings" /> Category 2
            </div>
            <ul
              className="py-2 pl-16 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownTopButton"
            >
              <li
                onClick={handleItemClick}
                className="block px-3.5 py-2 hover:bg-gray-100 text-xl w-max font-[400]"
              >
                Disposition 4
              </li>
              <li
                onClick={handleItemClick}
                className="block px-3.5 py-2 hover:bg-gray-100 text-xl w-max font-[400]"
              >
                Disposition 4
              </li>
              <li
                onClick={handleItemClick}
                className="block px-3.5 py-2 hover:bg-gray-100 text-xl w-max font-[400]"
              >
                Disposition 4
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 text-[#1E40AF] font-[400] text-[22px]">
              <img src={settings} alt="settings" /> Category 2
            </div>
            <ul
              className="py-2 pl-16 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownTopButton"
            >
              <li
                onClick={handleItemClick}
                className="block px-3.5 py-2 hover:bg-gray-100 text-xl w-max font-[400]"
              >
                Disposition 4
              </li>
              <li
                onClick={handleItemClick}
                className="block px-3.5 py-2 hover:bg-gray-100 text-xl w-max font-[400]"
              >
                Disposition 4
              </li>
              <li
                onClick={handleItemClick}
                className="block px-3.5 py-2 hover:bg-gray-100 text-xl w-max font-[400]"
              >
                Disposition 4
              </li>
            </ul>
          </div>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default CustomDropdown;
