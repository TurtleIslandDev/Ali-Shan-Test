import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import InformationSvg from "../../assets/SVGs/interactionGuides/InformationSvg";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const DropdownMenu = styled.div`
  position: absolute;
  left: -110px;
  background-color: white;
  border-radius: 8px;
  z-index: 1000;
  border: 2px solid #ebedef;
  height: 284px;
  top: -300px; /* Add an extra 16px gap */
  overflow-y: auto;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;
function Icon({ id, open }) {
  return (
    <svg
      width={12}
      height={6}
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""} transition-transform`}
    >
      <path d="M6 6L12 0L0 0L6 6Z" fill="#D2D2D2" />
    </svg>
  );
}
const ObjectionsDropdown = ({ ObjectionsData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [open, setOpen] = React.useState(null);

  const handleOpen = (value) => setOpen(open === value ? null : value);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setHeight(rect.height); // Calculate the dropdown height after rendering
    }
  }, [isOpen]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside both the button and the dropdown, close it
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer>
      <button
        ref={buttonRef}
        type="button"
        onClick={(event) => {
          event.stopPropagation(); // Prevent event propagation to handleClickOutside
          setIsOpen((prev) => !prev); // Toggle dropdown state
        }}
      >
        <InformationSvg />
      </button>
      {isOpen && (
        <DropdownMenu ref={dropdownRef} height={height}>
          {ObjectionsData?.map((item, index) => (
            <Accordion
              open={open === index}
              icon={<Icon id={index} open={open} />}
              className="w-56 border-none"
            >
              <AccordionHeader
                onClick={() => handleOpen(index)}
                className={`px-5 py-2.5 text-[#ff0000] text-sm hover:text-[#ff0000] ${
                  open === index ? "border-none" : ""
                }`}
              >
                {item.objection}
              </AccordionHeader>
              <AccordionBody className="px-5 py-2.5 border-none">
                <div className="w-full h-[1.5px] bg-[#ff0000] mb-2.5"></div>
                <p>{item.answer}</p>
              </AccordionBody>
            </Accordion>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default ObjectionsDropdown;
