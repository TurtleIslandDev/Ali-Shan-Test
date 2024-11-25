import React from "react";

const Button = ({ children, bgColor }) => {
  console.log(bgColor);

  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor }}
      className={`block font-poppins text-lg font-semibold leading-7 text-center decoration-solid underline-offset-4   px-10 py-[10px] rounded-[4px] text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
