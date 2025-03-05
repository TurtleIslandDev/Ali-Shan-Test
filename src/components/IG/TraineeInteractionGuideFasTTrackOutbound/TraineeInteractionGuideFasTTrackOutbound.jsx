import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GreetingFirst from "./_components/GreetingFirst";
import { setStep } from "../../../features/slice/igSlice";
import IntroductionSecond from "./_components/IntroductionSecond";
const TraineeInteractionGuideFasTTrackOutbound = () => {
  const { step } = useSelector((state) => state.ig);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setStep({ step: 1 }));
    };
  }, []);
  return (
    <>
      {step === 1 ? (
        <GreetingFirst />
      ) : step === 2 ? (
        <IntroductionSecond />
      ) : null}
    </>
    // <div className=" flex w-full justify-center h-full">
    //   <div
    //     className=" w-full h-full flex flex-col flex-1"
    //     style={{
    //       backgroundImage: `url(${bg})`,
    //       backgroundRepeat: "no-repeat",
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //   >
    //     <div className="bg-white w-full flex justify-between items-center px-10 py-4 rounded-b-md">
    //       <img src={fasTTrackLogo} className="w-40" />
    //       <p className="font-bold text-2xl text-[#1414C9] bg-[#EAEAEA] rounded-md px-2.5 py-1.5">
    //         Greeting
    //       </p>
    //       <div className="transform scale-125">
    //         <TraineeSVG color={"#228512"} />
    //       </div>
    //     </div>
    //     <div className="bg-white w-full flex justify-between flex-col px-10 py-4 flex-1  mt-3">
    //       <p className="font-nunitoSans text-[#3F3F3F] text-[18px] leading-7">
    //         Hi this is [first] calling from fast track regarding the debt
    //         invalidation program currently available to legal state residents of
    //         [state]. You are a legal resident of [state] right?
    //       </p>
    //       <div>
    //         <div>
    //           <p className="font-nunitoSans text-xl text-[#ff0000]">PAUSE</p>
    //           <form onSubmit={handleSubmit(onSubmit)}>
    //             <div>
    //               <label>
    //                 <input
    //                   type="radio"
    //                   value="yes"
    //                   defaultChecked
    //                   {...register("radio", {
    //                     required: "Please select an option",
    //                   })}
    //                 />
    //                 Yes
    //               </label>
    //             </div>

    //             <div>
    //               <label>
    //                 <input
    //                   type="radio"
    //                   value="No"
    //                   {...register("radio", {
    //                     required: "Please select an option",
    //                   })}
    //                 />
    //                 No
    //               </label>
    //             </div>
    //           </form>
    //         </div>
    //         <div>
    //           <p className="font-nunitoSans text-xl text-[#24A652]">
    //             COACHING NOTES
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="bg-white w-full px-10 flex-col gap-4 justify-center items-center py-3">
    //       <div className="bg-transparent w-full flex justify-between items-center mb-3">
    //         <Button bgColor={"#1414C9"} onClick={handleButtonBack}>
    //           <BackSvg />
    //           Back
    //         </Button>
    //         {/* #228512 */}
    //         <ObjectionsDropdown ObjectionsData={ObjectionData} />
    //         <QuestionsDropdown questionsData={questionsData} />
    //         <Button bgColor={"#228512"} onClick={handleButtonNext}>
    //           Next <NextSvg />
    //         </Button>
    //       </div>
    //       <ProgressIG />
    //     </div>
    //   </div>
    // </div>
  );
};

export default TraineeInteractionGuideFasTTrackOutbound;
