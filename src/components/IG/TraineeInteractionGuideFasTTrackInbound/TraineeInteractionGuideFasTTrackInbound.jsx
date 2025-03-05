import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GreetingFirst from "./_components/GreetingFirst";
import { setStep } from "../../../features/slice/igSlice";
const TraineeInteractionGuideFasTTrackInbound = () => {
  const { step } = useSelector((state) => state.ig);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setStep({ step: 1 }));
    };
  }, []);
  return (
    <>
      <GreetingFirst />
    </>
  );
};

export default TraineeInteractionGuideFasTTrackInbound;
