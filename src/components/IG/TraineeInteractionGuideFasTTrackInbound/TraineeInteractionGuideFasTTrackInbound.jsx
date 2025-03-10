import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GreetingFirst from "./_components/GreetingFirst";
import { setStep } from "../../../features/slice/igSlice";
import Third from "./_components/Third.jsx";
const TraineeInteractionGuideFasTTrackInbound = () => {
  const { step } = useSelector((state) => state.ig);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setStep({ step: 1 }));
    };
  }, []);
  return <>{step === 1 ? <GreetingFirst /> : step === 2 ? <Third /> : null}</>;
};

export default TraineeInteractionGuideFasTTrackInbound;
