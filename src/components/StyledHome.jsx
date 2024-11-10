import React, { useState } from "react";
import BuzzWord from "../assets/SVGs/BuzzWordSvg";
import { useNavigate, Link } from "react-router-dom";
import AgentReportSvg from "../assets/SVGs/AgentReportSvg";
import PerformanceManagementSvg from "../assets/SVGs/PerformanceManagementSvg";
import AgentGuiSvg from "../assets/SVGs/AgentGuiSvg";

const StyledHome = () => {
  const navigate = useNavigate();
  const [hoverStates, setHoverStates] = useState({
    payroll: false,
    agentGUI: false,
    certification: false,
    learning: false,
    performanceManagement: false,
    agentReport: false,
    BuzzWord: false,
  });

  return (
    <div className="w-full h-[calc(100vh+300px)]  flex items-center justify-center ">
      <div className="relative  rounded-full">
        {/* Agent gui */}
        <div
          onMouseOver={() => {
            setHoverStates({
              ...hoverStates,
              agentGUI: true,
            });
          }}
          onMouseLeave={() => {
            setHoverStates({
              ...hoverStates,
              agentGUI: false,
            });
          }}
          className={`flex items-center justify-center rounded-full border-2 border-dashed border-[#D9D9D9] w-[336px] h-[336px]  ${
            hoverStates.agentGUI ? " z-50" : " z-1"
          } bg-white`}
        >
          <div
            className={`relative flex items-center justify-center text-2xl font-semibold text-white rounded-full w-[calc(100%-10px)] h-[calc(100%-10px)]  ${
              hoverStates.agentGUI ? "bg-[#333333] z-50" : "bg-[#D9D9D9] z-1"
            }`}
          >
            {hoverStates.agentGUI ? "Agent GUI" : <AgentGuiSvg />}
          </div>
        </div>
        {/* payroll*/}
        <div
          onMouseOver={() => {
            setHoverStates({
              ...hoverStates,
              payroll: true,
            });
          }}
          onMouseLeave={() => {
            setHoverStates({
              ...hoverStates,
              payroll: false,
            });
          }}
          className="flex items-center justify-center rounded-full border-2  border-[#D9D9D9] w-[318px] h-[318px] absolute left-2 -top-64 z-10"
        >
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full w-[calc(100%-39px)] h-[calc(100%-39px)] bg-[#f5760e41] hover:bg-[#F5760E] z-10"></div>
        </div>
        {/* certification */}
        <div
          onMouseOver={() => {
            setHoverStates({
              ...hoverStates,
              payroll: true,
            });
          }}
          onMouseLeave={() => {
            setHoverStates({
              ...hoverStates,
              payroll: false,
            });
          }}
          className="flex items-center justify-center rounded-full border-2 border-dashed border-[#D9D9D9] w-44 h-44 absolute -left-[185px] -top-10 -z-10"
        >
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full w-[calc(100%-12px)] h-[calc(100%-12px)] bg-[#1E40AF66] hover:bg-[#1E40AF] ">
            {/* Dashed circle border */}
            {/* <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-black" /> */}
            {/* Star ribbon icon (replace with an actual SVG icon if available) */}
            <div className="relative text-black">
              {/* Placeholder for the icon; you might want to replace this with an SVG or FontAwesome icon */}
            </div>
            {/* Dashed lines extending outward */}
            <div className="absolute w-[1px] h-14 transform rotate-[50deg] -top-10 right-0 border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-14 transform  rotate-[15deg] -bottom-14 left-6 border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-4 transform  rotate-[125deg] bottom-10 -right-4 border-[1px] border-dashed border-[#D9D9D9]" />
          </div>
        </div>
        {/* learning */}
        <div
          onMouseOver={() => {
            setHoverStates({
              ...hoverStates,
              payroll: true,
            });
          }}
          onMouseLeave={() => {
            setHoverStates({
              ...hoverStates,
              payroll: false,
            });
          }}
          className="flex items-center justify-center rounded-full border-2 border-dashed border-[#D9D9D9] w-44 h-44 absolute -right-[185px] -top-10 -z-10"
        >
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full w-[calc(100%-12px)] h-[calc(100%-12px)] bg-[#22851266] hover:bg-[#228512]">
            {/* Dashed circle border */}
            {/* <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-black" /> */}
            {/* Star ribbon icon (replace with an actual SVG icon if available) */}
            <div className="relative text-black">
              {/* Placeholder for the icon; you might want to replace this with an SVG or FontAwesome icon */}
            </div>
            {/* Dashed lines extending outward */}
            <div className="absolute w-[1px] h-14 transform rotate-[125deg] -top-10 left-0 border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-14 transform  rotate-[15deg] -bottom-14 right-10 border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-4 transform  rotate-[60deg] bottom-10 -left-4 border-[1px] border-dashed border-[#D9D9D9]" />
          </div>
        </div>
        {/* performance management */}
        <div
          onMouseOver={() => {
            setHoverStates({
              ...hoverStates,
              performanceManagement: true,
            });
          }}
          onMouseLeave={() => {
            setHoverStates({
              ...hoverStates,
              performanceManagement: false,
            });
          }}
          className="flex items-center justify-center rounded-full border-2  border-[#D9D9D9] w-[318px] h-[318px] absolute -left-56 -bottom-40 -z-10"
        >
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full w-[calc(100%-39px)] h-[calc(100%-39px)] bg-[#22851266] ">
            {hoverStates.performanceManagement ? (
              "Performance Management"
            ) : (
              <PerformanceManagementSvg />
            )}
          </div>
        </div>
        {/* agent report */}
        <div
          onMouseOver={() => {
            setHoverStates({
              ...hoverStates,
              agentReport: true,
            });
          }}
          onMouseLeave={() => {
            setHoverStates({
              ...hoverStates,
              agentReport: false,
            });
          }}
          onMouseOut={() => {
            setHoverStates({
              ...hoverStates,
              agentReport: false,
            });
          }}
          onClick={() => navigate("/demo-agent-coaching-report")}
          className={`flex items-center justify-center rounded-full border-2  border-[#D9D9D9] w-[318px] h-[318px]  absolute -right-56 -bottom-40 ${
            // hoverStates.agentReport ? "z-50" : "z-0"
            "sa"
          }`}
        >
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full w-[calc(100%-39px)] h-[calc(100%-39px)] bg-[#D5DEFA] ">
            {hoverStates.agentReport ? "Agent Report" : <AgentReportSvg />}
          </div>
        </div>

        {/* BuzzWord */}
        <div
          onMouseOver={() => {
            setHoverStates({
              ...hoverStates,
              payroll: true,
            });
          }}
          onMouseLeave={() => {
            setHoverStates({
              ...hoverStates,
              payroll: false,
            });
          }}
          className="flex items-center justify-center rounded-full border-2 border-dashed border-[#D9D9D9] w-44 h-44 absolute right-20 -bottom-52 z-0"
        >
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full w-[calc(100%-12px)] h-[calc(100%-12px)] bg-[#F5760E4D] ">
            {/* Dashed circle border */}
            {/* <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-black" /> */}
            {/* Star ribbon icon (replace with an actual SVG icon if available) */}
            <div className="relative text-black">
              {/* Placeholder for the icon; you might want to replace this with an SVG or FontAwesome icon */}
              <BuzzWord />
            </div>
            {/* Dashed lines extending outward */}
            <div className="absolute w-[1px] h-14 transform rotate-[-75deg] top-[75px] -left-[32px] border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-14 transform  rotate-[75deg] top-[75px] -right-[29px] border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-4 transform  -top-6 right-17 border-[1px] border-dashed border-[#D9D9D9]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledHome;
