import React from "react";
import Button from "../Buttons/Button";
import ObjectionsDropdown from "../dropdowns/ObjectionsDropdown";
import IntroductionSvg from "../../assets/SVGs/interactionGuides/IntroductionSvg";
import QuickStartLogo from "../../assets/SVGs/QuickStartLogo";
import QuestionsDropdown from "../dropdowns/QuestionsDropdown";
import { ProgressIG } from "../Stepper/ProgressIG";
import bg from "../../assets/bgImages/bgInteractionGuide.png";
const IgLayout = () => {
  const ObjectionData = [
    {
      objection: "Objection 1",
      answer:
        "he customer wants to review their current bill, including charges, due date, and payment options",
    },
    {
      objection: "Objection 2",
      answer:
        "he customer wants to review their current bill, including charges, due date, and payment options",
    },
    {
      objection: "Objection 3",
      answer:
        "he customer wants to review their current bill, including charges, due date, and payment options",
    },
    {
      objection: "Objection 4",
      answer:
        "he customer wants to review their current bill, including charges, due date, and payment options",
    },
    {
      objection: "Objection 5",
      answer:
        "he customer wants to review their current bill, including charges, due date, and payment options",
    },
  ];
  const questionsData = [
    {
      question: "Question 1",
      answer:
        "he customer wants to review their current bill, including charges, due date, and payment options",
    },
    {
      question: "Question 2",
      answer:
        "he customer wants to review their current bill, including charges, due date, and payment options",
    },
    {
      question: "Question 3",
      answer:
        "he customer wants to review their current bill, including charges, due date, and payment options",
    },
    {
      question: "Question 4",
      answer:
        "he customer wants to review their current bill, including charges, due date, and payment options",
    },
    {
      question: "Question 5",
      answer:
        "he customer wants to review their current bill, including charges, due date, and payment options",
    },
  ];
  return (
    <div className=" flex h-[calc(100%-100px)] w-full justify-center">
      <div
        className="bg-[#00000060] w-[90%] flex flex-col gap-3"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
          <p className="font-nunitoSans text-[#2C2C2C]">
            Hi is (Mr/Mrs) [Prospect Last] my name is [agents name], This is not
            a Sales Call but I want to let you know Our team at Ti Solutions
            helps businesses like yours identify cost-saving and profit
            opportunities by designing, developing, implementing, and managing
            efficient software and business systems that can simplify customer
            interaction management operations and create a stable foundation for
            growth at an increased profit margin. Does that sound like something
            that could be of interest to you?
          </p>
          <div>
            <p className="font-nunitoSans text-xl text-[#ff0000]">WARNING</p>
            <p className="font-nunitoSans text-xl text-[#24A652]">
              COACHING NOTES
            </p>
          </div>
        </div>
        <div className="bg-transparent w-full px-10 flex-col gap-4 justify-center items-center py-3">
          <div className="bg-transparent w-full flex justify-between items-center mb-3">
            <Button bgColor={"#1414C9"}>Back</Button>
            <ObjectionsDropdown ObjectionsData={ObjectionData} />
            <QuestionsDropdown questionsData={questionsData} />
            <Button bgColor={"#228512"}>Next</Button>
          </div>
          <ProgressIG />
        </div>
      </div>
    </div>
  );
};

export default IgLayout;
