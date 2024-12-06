import React, { useEffect, useState } from "react";
import bg from "../../assets/bgImages/bgInteractionGuide.png";
import DonutChart from "../../components/charts/DonutChart";
import Button from "../../components/Buttons/Button";
import MicSvg from "../../assets/SVGs/MicSvg";
import CallSvg from "../../assets/SVGs/CallSvg";
import NotificationSvg from "../../assets/SVGs/NotificationSvg";
import QuickStartLogo from "../../assets/SVGs/QuickStartLogo";
import IconButton from "../../components/Buttons/IconButton";
import MuteMicSvg from "../../assets/SVGs/MuteMicSvg";
import OutBoundCall from "../../assets/SVGs/OutBoundCall";
import CustomDropdown from "../../components/dropdowns/CustomeDropdown";
import IgLayout from "../../components/IG/IgLayout";
const AgentSystemsInterface = () => {
  const [micOn, setMicOn] = useState(true);
  const [inBound, setInBound] = useState(true);
  const [selectedDisposition, setSelectedDisposition] = useState("");
  //this sound result is the value which will automatically increase and decrease the value of green in the bottom voice bar
  //max value is 40 and 0 is optimal
  let soundResult = 0;
  const handleMic = () => {
    setMicOn(!micOn);
  };
  const handleCall = () => {
    setInBound(!inBound);
  };

  let dispositionData = [
    {
      id: "1",
      category: "Category 1",
      disposttions: ["Disposition 1", "Disposition 2", "Disposition 3"],
    },
    {
      id: "2",
      category: "Category 2",
      disposttions: [
        "Disposition 4",
        "Disposition 5",
        "Disposition 6",
        "Disposition 4",
        "Disposition 5",
        "Disposition 6",
      ],
    },
    {
      id: "3",
      category: "Category 3",
      disposttions: ["Disposition 7", "Disposition 8", "Disposition 9"],
    },
  ];
  return (
    <div
      className="w-full px-20 h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-[#121729] h-screen">
        <div className="flex gap-5 h-[88vh]">
          <div className=" w-full max-w-[425px] bg-white flex flex-col items-center justify-between px-4 pb-4 ">
            <div className="flex shadow-md rounded-xl w-full ">
              <div>
                <DonutChart />
              </div>
            </div>

            <IconButton onClick={handleCall}>
              {inBound ? <CallSvg /> : <OutBoundCall />}
            </IconButton>
            <IconButton onClick={handleMic}>
              {micOn ? <MicSvg /> : <MuteMicSvg />}
            </IconButton>
            <div className="flex flex-col mx-4 gap-2 ">
              <Button bgColor={"#F5760E"}>Customer Care</Button>
              <Button bgColor={"#1E40AF"}>Prospect</Button>
              <Button bgColor={"#228512"}>Sales</Button>
            </div>

            <button type="button" className="relative ">
              <QuickStartLogo />
              <div className="absolute inline-flex items-center justify-center text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-0 end-4 dark:border-gray-900">
                <NotificationSvg />
              </div>
            </button>
          </div>
          <div className="w-full bg-transparent flex flex-col gap-5 ">
            <div className="flex gap-5 mt-2 flex-1 justify-between pr-3">
              <div className="py-3 px-[10px] text-center  bg-white rounded-[4px] flex-grow">
                <p className="text-[#6F6F6F] text-[18px]">First Name</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">
                  Alishan
                </p>
              </div>
              <div className="py-3 px-[10px] text-center  bg-white rounded-[4px] flex-grow">
                <p className="text-[#6F6F6F] text-[18px]">Last Name</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">
                  Masood
                </p>
              </div>
              <div className="py-3 px-[10px] text-center  bg-white rounded-[4px] flex-grow">
                <p className="text-[#6F6F6F] text-[18px]">Field</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">Data</p>
              </div>
              <div className="py-3 px-[10px] text-center  bg-white rounded-[4px] flex-grow">
                <p className="text-[#6F6F6F] text-[18px]">Field</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">Data</p>
              </div>
              <div className="py-3 px-[10px] text-center  bg-white rounded-[4px] flex-grow">
                <p className="text-[#6F6F6F] text-[18px]">Field</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">Data</p>
              </div>
              <div className="py-3 px-[10px] text-center  bg-white rounded-[4px] flex-grow">
                <p className="text-[#6F6F6F] text-[18px]">Field</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">Data</p>
              </div>
              <div className="py-3 px-[10px] text-center  bg-white rounded-[4px] flex-grow">
                <p className="text-[#6F6F6F] text-[18px]">Field</p>
                <p className="text-[#3F3F3F] text-[20px] font-semibold">Data</p>
              </div>

              <div className="bg-white flex items-center justify-center w-20 h-20 rounded-full pt-1 pr-2">
                <div className="w-[50px] h-[50px] ">
                  <CallSvg size={"small"} />
                </div>
              </div>
            </div>
            <IgLayout />
            {/* <div className=" bg-red-400 flex h-[calc(100%-100px)] w-full justify-center">
              <div className="bg-[#00000060] w-[90%] flex flex-col gap-3">
                <div className="bg-white w-full flex justify-between items-center px-10 py-4 rounded-b-md">
                  <QuickStartLogo size={"small"} />
                  <p className="font-bold text-2xl text-[#1414C9] bg-[#EAEAEA] rounded-md px-2.5 py-1.5">
                    Introduction
                  </p>
                  <div>
                    <IntroductionSvg />
                  </div>
                </div>
                <div className="bg-white w-full flex justify-between flex-col px-10 py-4 flex-1 rounded-md">
                  <p>
                    Hi is (Mr/Mrs) [Prospect Last] my name is [agents name],
                    This is not a Sales Call but I want to let you know Our team
                    at Ti Solutions helps businesses like yours identify
                    cost-saving and profit opportunities by designing,
                    developing, implementing, and managing efficient software
                    and business systems that can simplify customer interaction
                    management operations and create a stable foundation for
                    growth at an increased profit margin. Does that sound like
                    something that could be of interest to you?
                  </p>
                  <div>
                    <p>Warning</p>
                  </div>
                </div>
                <div className="bg-transparent w-full flex justify-between items-center px-10 py-4">
                  <Button bgColor={"#1414C9"}>Back</Button>
                  <ObjectionsDropdown ObjectionsData={["alishan", "masood"]} />
                  <IconButton>
                    <QuestionSvg />
                  </IconButton>
                  <Button bgColor={"#228512"}>Next</Button>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="flex justify-end items-center h-[12vh] gap-4">
          <div
            className="relative w-[707px] h-4  rounded-full"
            style={{
              background: `linear-gradient(
                270deg,
                rgba(250, 111, 5, 1) 0%,
                rgba(254, 195, 0, 1) ${30.63 - soundResult}%,
                rgba(126, 199, 62, 1) ${38.14 - soundResult}%,   
                rgba(117, 196, 66, 1) ${61.47 + soundResult}%,
                rgba(254, 189, 0, 1) ${69.68 + soundResult}%,
                rgba(255, 108, 3, 1) 100%
              )`,
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full border-4 border-gray-300 cursor-pointer flex items-center justify-center">
              <div className="bg-green-500 w-3 h-3 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-1 h-10 bg-white rounded-full border-4 border-gray-300 cursor-pointer flex items-center justify-center"></div>
            <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-1 h-10 bg-white rounded-full border-4 border-gray-300 cursor-pointer flex items-center justify-center"></div>
          </div>
          {/* <Dropdown /> */}
          <CustomDropdown
            selectedDisposition={selectedDisposition}
            setSelectedDisposition={setSelectedDisposition}
            dispositionData={dispositionData}
          />
        </div>
      </div>
    </div>
  );
};

export default AgentSystemsInterface;
