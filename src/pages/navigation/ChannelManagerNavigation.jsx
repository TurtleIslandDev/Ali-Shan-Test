import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OmnichannelCommunicationSvg from "./../../assets/SVGs/ChannelManagerScreen/OmnichannelCommunicationSvg";
import EmailSvg from "../../assets/SVGs/ChannelManagerScreen/EmailSvg";
import ChatSvg from "../../assets/SVGs/ChannelManagerScreen/ChatSvg";
import BpoSvg from "../../assets/SVGs/ChannelManagerScreen/BpoSvg";
import PaidAdvertisingSvg from "../../assets/SVGs/ChannelManagerScreen/PaidAdvertisingSvg";
import SmsSVG from "../../assets/SVGs/ChannelManagerScreen/SmsSVG";
import WebSvg from "../../assets/SVGs/ChannelManagerScreen/WebSvg";

const ChannelManagerNavigation = () => {
  const navigate = useNavigate();
  const [hoverStates, setHoverStates] = useState({
    omniChannel: false,
    email: false,
    chat: false,
    sms: false,
    bpo: false,
    paidAdvertising: false,
    web: false,
  });

  const handleMouseOver = (e, name) => {
    setHoverStates((prev) => ({ ...prev, [name]: true }));
  };
  const handleMouseOut = (e, name) => {
    setHoverStates((prev) => ({ ...prev, [name]: false }));
  };
  return (
    <div className="w-full h-[calc(100vh+300px)]  flex items-center justify-center ">
      <div className="relative  rounded-full">
        {/* Omni channel svg */}
        <div
          className={`relative flex items-center justify-center rounded-full border-2 border-dashed border-[#D9D9D9] w-[336px] h-[336px] bg-white  z-[100] `}
        >
          <div
            // onClick={() => navigate("/agent-system-interface")}
            onMouseOver={(e) => handleMouseOver(e, "omniChannel")}
            onMouseLeave={(e) => handleMouseOut(e, "omniChannel")}
            className={`relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-10px)] h-[calc(100%-10px)]  ${
              hoverStates.omniChannel ? "bg-[#333] " : "bg-[#D9D9D9] "
            }`}
          >
            {hoverStates.omniChannel ? (
              <p className="uppercase font-bold text-3xl text-center">
                Omni Channel communication
              </p>
            ) : (
              <OmnichannelCommunicationSvg />
            )}
          </div>
        </div>
        {/* Email*/}
        <div
          // onMouseOver={(e) => handleMouseOver(e, "agentReport")}
          // onMouseLeave={(e) => handleMouseOut(e, "agentReport")}
          onClick={() => navigate("/coaching-report-accept")}
          className={`flex items-center justify-center rounded-full border-2  border-[#D9D9D930] w-[318px] h-[318px] absolute left-2 -top-64 ${
            hoverStates.agentReport ? "z-[6]" : "z-[3]"
          }`}
        >
          <div
            className={`relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-39px)] h-[calc(100%-39px)] ] ${
              hoverStates.agentReport
                ? " bg-[#D5DEFA] z-[6]"
                : "z-[3]  bg-[#fbc89f]"
            } `}
          >
            {hoverStates.agentReport ? (
              <p className="w-[9rem] text-center uppercase font-bold text-[28px]">
                Email
              </p>
            ) : (
              // <img src="../../assets/react.svg" />
              <EmailSvg />
            )}
          </div>
        </div>
        {/* SMS */}
        <div className="flex items-center justify-center rounded-full border-2 border-dashed border-[#D9D9D9] w-44 h-44 absolute -right-[185px] -top-10 ">
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-12px)] h-[calc(100%-12px)]  bg-[#22851266]">
            {/* Dashed circle border */}
            {/* <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-black" /> */}
            {/* Star ribbon icon (replace with an actual SVG icon if available) */}

            <div className="relative text-black">
              {/* Placeholder for the icon; you might want to replace this with an SVG or FontAwesome icon */}
              <SmsSVG />
            </div>
            {/* Dashed lines extending outward */}
            <div className="absolute w-[1px] h-14 transform rotate-[125deg] -top-10 left-0 border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-14 transform  rotate-[0deg] -bottom-14 right-8 border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-4 transform  rotate-[60deg] bottom-10 -left-4 border-[1px] border-dashed border-[#D9D9D9]" />
          </div>
        </div>
        {/* BPO*/}
        <div
          className={`flex items-center justify-center rounded-full border-2  border-[#D9D9D930] w-[318px] h-[318px] absolute -right-56 -bottom-40  ${
            hoverStates.bpo ? "z-[6]" : "z-[3]"
          }`}
        >
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-39px)] h-[calc(100%-39px)]  bg-[#1E40AF30]  z-3 hover:z-5">
            <BpoSvg />
          </div>
        </div>
        {/* Paid Advertising */}
        <div className="flex items-center justify-center rounded-full border-2 border-dashed border-[#D9D9D9] w-44 h-44 absolute right-20 -bottom-52 ">
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-12px)] h-[calc(100%-12px)] bg-[#F5760E4D] ">
            {/* Dashed circle border */}
            {/* <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-black" /> */}
            {/* Star ribbon icon (replace with an actual SVG icon if available) */}
            <div className="relative text-black">
              {/* Placeholder for the icon; you might want to replace this with an SVG or FontAwesome icon */}
              <PaidAdvertisingSvg />
            </div>
            {/* Dashed lines extending outward */}
            <div className="absolute w-[1px] h-14 transform rotate-[-75deg] top-[75px] -left-[32px] border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-14 transform  rotate-[75deg] top-[75px] -right-[29px] border-[1px] border-dashed border-[#D9D9D9]" />
            <div className="absolute w-[1px] h-4 transform  -top-6 right-17 border-[1px] border-dashed border-[#D9D9D9]" />
          </div>
        </div>

        {/* Chat*/}
        <div
          className={`flex items-center justify-center rounded-full border-2  border-[#D9D9D930] w-[318px] h-[318px] absolute -left-56 -bottom-40 ${
            hoverStates.chat ? "z-[6]" : "z-[3]"
          }`}
        >
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-39px)] h-[calc(100%-39px)] bg-[#22851266]   z-3 hover:z-5">
            <ChatSvg />
          </div>
        </div>
        {/* web */}
        <div className=" flex items-center justify-center rounded-full border-2 border-dashed border-[#D9D9D9] w-44 h-44 absolute -left-[185px] -top-10  ">
          <div className="relative flex items-center justify-center text-2xl font-semibold text-white rounded-full cursor-pointer w-[calc(100%-12px)] h-[calc(100%-12px)]  bg-[#1E40AF66]">
            {/* Dashed circle border */}
            {/* <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-black" /> */}
            {/* Star ribbon icon (replace with an actual SVG icon if available) */}
            <div className="relative text-black">
              {/* Placeholder for the icon; you might want to replace this with an SVG or FontAwesome icon */}
              <WebSvg />
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

export default ChannelManagerNavigation;
