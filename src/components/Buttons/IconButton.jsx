import React from "react";

const IconButton = ({ children, bgColor }) => {
  console.log(bgColor);

  return (
    <button
      type="button"
      className={`block font-poppins text-lg font-semibold leading-7 text-center decoration-solid underline-offset-4  bg-[${
        bgColor ? bgColor : ""
      }] rounded-[4px] text-white w-max`}
    >
      {children}
    </button>
  );
};

export default IconButton;
