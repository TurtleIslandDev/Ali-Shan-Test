import React from "react";
import bg from "../../assets/bgImages/agent-systems-bg.png";
import DonutChart from "../../components/charts/DonutChart";
import Button from "../../components/Buttons/Button";
import MicSvg from "./../../assets/SVGs/MicSvg";
import CallSvg from "../../assets/SVGs/CallSvg";
import NotificationSvg from "../../assets/SVGs/NotificationSvg";
import QuickStartLogo from "./../../assets/SVGs/QuickStartLogo";
import IconButton from "../../components/Buttons/IconButton";
import Dropdown from "../../components/dropdowns/Dropdown";
const AgentSystemsInterface = () => {
  return (
    <div
      className="w-full px-20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-[#121729]">
        <div className="flex gap-5">
          <div className="w-full max-w-[425px] bg-white flex flex-col items-center justify-between p-4 gap-16">
            <div className="flex shadow-md rounded-xl w-full ">
              <div>
                <DonutChart />
              </div>
              {/* <div>
            <div className="flex gap-4 items-center px-4">
              <div className="rounded-full w-[18px] h-[18px] bg-slate-900"></div>
              <p>Label 1</p>
              <p>25%</p>
            </div>
          </div> */}
            </div>

            <IconButton>
              <CallSvg />
            </IconButton>
            <IconButton>
              <MicSvg />
            </IconButton>
            <div className="flex flex-col gap-4 mx-4 mt-4">
              <button
                type="button"
                className={`block font-poppins text-lg font-semibold leading-7 text-center decoration-solid underline-offset-4  bg-[#F5760E] px-10 py-[10px] rounded-[4px] text-white w-max`}
              >
                Customer Support
              </button>
              <Button bgColor={"#1E40AF"}>Prospect</Button>
              <Button bgColor={"#228512"}>Sales</Button>
            </div>

            <button type="button" className="relative ">
              <QuickStartLogo />
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-1 end-7 dark:border-gray-900">
                <NotificationSvg />
              </div>
            </button>
          </div>
          <div className="w-full bg-transparent flex flex-col gap-5 ">
            <div className="flex gap-5 mt-5 flex-wrap">
              <div className="py-5 px-[10px] text-center w-max bg-white rounded-[4px] min-w-[145px]">
                <p className="text-[#6F6F6F] text-[18px]">First Name</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">
                  Alishan Masood
                </p>
              </div>
              <div className="py-5 px-[10px] text-center w-max bg-white rounded-[4px] min-w-[145px]">
                <p className="text-[#6F6F6F] text-[18px]">Field</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">Data</p>
              </div>
              <div className="py-5 px-[10px] text-center w-max bg-white rounded-[4px] min-w-[145px]">
                <p className="text-[#6F6F6F] text-[18px]">Field</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">Data</p>
              </div>
              <div className="py-5 px-[10px] text-center w-max bg-white rounded-[4px] min-w-[145px]">
                <p className="text-[#6F6F6F] text-[18px]">Field</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">Data</p>
              </div>
              <div className="py-5 px-[10px] text-center w-max bg-white rounded-[4px] min-w-[145px]">
                <p className="text-[#6F6F6F] text-[18px]">Field</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">Data</p>
              </div>
              <div className="py-5 px-[10px] text-center w-max bg-white rounded-[4px] min-w-[145px]">
                <p className="text-[#6F6F6F] text-[18px]">Field</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">Data</p>
              </div>
              <div className="py-5 px-[10px] text-center w-max bg-white rounded-[4px] min-w-[145px]">
                <p className="text-[#6F6F6F] text-[18px]">First Name</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">
                  Alishan Masood
                </p>
              </div>
              <div className="bg-white flex items-center justify-center w-24 h-24 rounded-full pt-1 pr-2">
                <CallSvg />
              </div>
            </div>
            <div className=" bg-white w-full flex h-[calc(100%-100px)]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-end items-center h-[145px] pr-6 gap-20">
            <div className="relative w-[707px] h-2 bg-gradient-to-r from-orange-500 via-green-500 to-orange-500 rounded-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-gray-300 cursor-pointer flex items-center justify-center">
                <div className="bg-green-500 w-3 h-3 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-1 h-10 bg-white rounded-full border-4 border-gray-300 cursor-pointer flex items-center justify-center"></div>
              <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-1 h-10 bg-white rounded-full border-4 border-gray-300 cursor-pointer flex items-center justify-center"></div>
            </div>
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSystemsInterface;
