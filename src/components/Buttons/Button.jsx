import React from "react";

const Button = ({ children, bgColor,onClick,type }) => {
  console.log(bgColor);

  return (
    <button
      type={type?type:"button"}
      style={{ backgroundColor: bgColor }}
      className={`font-poppins text-lg font-semibold leading-7 text-center decoration-solid underline-offset-4   px-5 py-[10px] rounded-[4px] text-white flex gap-2.5 items-center`}
onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
