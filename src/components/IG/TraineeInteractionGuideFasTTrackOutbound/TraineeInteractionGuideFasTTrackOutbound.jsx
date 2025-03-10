import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import GreetingFirst from "./_components/GreetingFirst";
import IntroductionSecond from "./_components/IntroductionSecond";
import useInteractionGuide from "../../../features/hooks/InteractionGuideHooks";
import Third from "./_components/Third";

const TraineeInteractionGuideFasTTrackOutbound = () => {
  const { step } = useSelector((state) => state.ig);
  const { extractLeadInfo } = useInteractionGuide();
  extractLeadInfo(2); //send Total steps

  return (
    <>
      {step === 1 ? (
        <GreetingFirst />
      ) : step === 2 ? (
        <IntroductionSecond />
      ) : step === 3 ? (
        <Third />
      ) : null}
    </>
  );
};

export default TraineeInteractionGuideFasTTrackOutbound;
