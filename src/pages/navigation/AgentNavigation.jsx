import React, { useEffect, useState } from "react";
import BuzzWord from "../../assets/SVGs/BuzzWordSvg";
import { useNavigate, Link } from "react-router-dom";
import AgentGuiSvg from "../../assets/SVGs/AgentGuiSvg";
import LearningSVG from "../../assets/SVGs/LearningSVG";
import PayrollSvg from "../../assets/SVGs/PayrollSvg";
import CeritficationsSvg from "../../assets/SVGs/CeritficationsSvg";
import AgentLearningSvg from "../../assets/SVGs/agentScreen/AgentLearningSvg";
import AgentPerformanceSvg from "../../assets/SVGs/agentScreen/AgentPerformanceSvg";

import Cookies from "universal-cookie";

const AgentNavigation = () => {
  const navigate = useNavigate();
  const cookies = new Cookies(null, null, { path: "/" });
  const [hoverStates, setHoverStates] = useState({
    payroll: false,
    agentGUI: false,
    certification: false,
    learning: false,
    performanceManagement: false,
    agentReport: false,
    BuzzWord: false,
  });

  const handleMouseOver = (e, name) => {
    setHoverStates((prev) => ({ ...prev, [name]: true }));
  };
  const handleMouseOut = (e, name) => {
    setHoverStates((prev) => ({ ...prev, [name]: false }));
  };

  useEffect(() => {
    const token = cookies.get("token");
    // if (!token) {
    //   navigate("/");
    // }
  }, []);

  return (
    <div className="w-full h-[calc(100vh+300px)]  flex items-center justify-center ">
      <div className="relative  rounded-full">
        {/* Agent gui */}
        <div
          className={`relative flex items-center justify-center rounded-full border-2 border-dashed border-[#D9D9D9] w-[336px] h-[336px] bg-white  z-[100] `}
        >
          <div
            onClick={() => navigate("/agent-system-interface")}
            onMouseOver={(e) => handleMouseOver(e, "agentGUI")}
            onMouseLeave={(e) => handleMouseOut(e, "agentGUI")}
            className={`relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-10px)] h-[calc(100%-10px)]  ${
              hoverStates.agentGUI ? "bg-[#333] " : "bg-[#D9D9D9] "
            }`}
          >
            {hoverStates.agentGUI ? (
              <p className="uppercase font-bold text-3xl">Work</p>
            ) : (
              <AgentGuiSvg />
            )}
          </div>
        </div>

        {/* Learning*/}
        <div
          onMouseOver={(e) => handleMouseOver(e, "agentReport")}
          onMouseLeave={(e) => handleMouseOut(e, "agentReport")}
          onClick={() => navigate("/coaching-report-accept")}
          className={`flex items-center justify-center rounded-full border-2  border-[#D9D9D930] w-[318px] h-[318px] absolute left-2 -top-64 ${
            hoverStates.agentReport ? "z-[6]" : "z-[3]"
          }`}
        >
          <div
            className={`relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-39px)] h-[calc(100%-39px)] ] ${
              hoverStates.agentReport
                ? "bg-[#1E40AF] z-[6]"
                : "z-[3] bg-[#D5DEFA]"
            } `}
          >
            {hoverStates.agentReport ? (
              <p className="w-[9rem] text-center uppercase font-bold text-[28px]">
                Learning
              </p>
            ) : (
              // <img src="../../assets/react.svg" />
              <AgentLearningSvg />
            )}
          </div>
        </div>
        {/* certification */}
        <div className="flex items-center justify-center rounded-full border-2 border-dashed border-[#D9D9D9] w-44 h-44 absolute -right-[185px] -top-10 ">
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-12px)] h-[calc(100%-12px)]  bg-[#1E40AF66]">
            {/* Dashed circle border */}
            {/* <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-black" /> */}
            {/* Star ribbon icon (replace with an actual SVG icon if available) */}

            <div className="relative text-black">
              {/* Placeholder for the icon; you might want to replace this with an SVG or FontAwesome icon */}
              <CeritficationsSvg />
            </div>
            {/* Dashed lines extending outward */}
            <div className="absolute w-[1px] h-14 transform rotate-[125deg] -top-10 left-0 border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-14 transform  rotate-[0deg] -bottom-14 right-8 border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-4 transform  rotate-[60deg] bottom-10 -left-4 border-[1px] border-dashed border-[#D9D9D9]" />
          </div>
        </div>
        {/* Performance*/}
        <div
          className={`flex items-center justify-center rounded-full border-2  border-[#D9D9D930] w-[318px] h-[318px] absolute -right-56 -bottom-40  ${
            hoverStates.performanceManagement ? "z-[6]" : "z-[3]"
          }`}
        >
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-39px)] h-[calc(100%-39px)] bg-[#22851266]  z-3 hover:z-5">
            <AgentPerformanceSvg />
          </div>
        </div>
        {/* BuzzWord */}
        <div
          onClick={() => navigate("/agent-navigation/buzzword-trainee")}
          onMouseOver={(e) => handleMouseOver(e, "BuzzWord")}
          onMouseLeave={(e) => handleMouseOut(e, "BuzzWord")}
          className="flex items-center justify-center rounded-full border-2 border-dashed border-[#D9D9D9] w-44 h-44 absolute right-20 -bottom-52 "
        >
          <div
            className={`relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-12px)] h-[calc(100%-12px)]  ${
              hoverStates.BuzzWord
                ? "bg-[#F5760E] z-[6]"
                : "z-[3] bg-[#F5760E4D]"
            }`}
          >
            {/* Dashed circle border */}
            {/* <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-black" /> */}
            {/* Star ribbon icon (replace with an actual SVG icon if available) */}
            {hoverStates.BuzzWord ? (
              <p className="w-[9rem] text-center uppercase font-bold text-[24px]">
                Buzzword
              </p>
            ) : (
              // <img src="../../assets/react.svg" />
              <div className="relative text-black">
                {/* Placeholder for the icon; you might want to replace this with an SVG or FontAwesome icon */}
                <BuzzWord />
              </div>
            )}

            {/* Dashed lines extending outward */}
            <div className="absolute w-[1px] h-14 transform rotate-[-75deg] top-[75px] -left-[32px] border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-14 transform  rotate-[75deg] top-[75px] -right-[29px] border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-4 transform  -top-6 right-17 border-[1px] border-dashed border-[#D9D9D9]" />
          </div>
        </div>

        {/* payroll*/}
        <div
          className={`flex items-center justify-center rounded-full border-2  border-[#D9D9D930] w-[318px] h-[318px] absolute -left-56 -bottom-40 ${
            hoverStates.payroll ? "z-[6]" : "z-[3]"
          }`}
        >
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-39px)] h-[calc(100%-39px)] bg-[#fbc89f]  z-3 hover:z-5">
            <PayrollSvg />
          </div>
        </div>
        {/* Compensations */}
        <div className=" flex items-center justify-center rounded-full border-2 border-dashed border-[#D9D9D9] w-44 h-44 absolute -left-[185px] -top-10  ">
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-12px)] h-[calc(100%-12px)] bg-[#22851266]">
            {/* Dashed circle border */}
            {/* <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-black" /> */}
            {/* Star ribbon icon (replace with an actual SVG icon if available) */}
            <div className="relative text-black">
              {/* Placeholder for the icon; you might want to replace this with an SVG or FontAwesome icon */}
              <LearningSVG />
            </div>
            {/* Dashed lines extending outward */}
            <div className="absolute w-[1px] h-14 transform rotate-[50deg] -top-10 right-0 border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-14 transform  rotate-[10deg] -bottom-14 left-6 border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-4 transform  rotate-[125deg] bottom-10 -right-4 border-[1px] border-dashed border-[#D9D9D9]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentNavigation;
