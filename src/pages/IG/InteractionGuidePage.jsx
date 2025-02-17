import React, { useEffect, useState } from "react";
import InteractionGuide from "./../../components/IG/InteractionGuide";

const useWindowHeight = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
};
const InteractionGuidePage = () => {
  const height = useWindowHeight();
  return (
    <div style={{ background: "blue", height: `${height}px` }}>
      <InteractionGuide />
    </div>
  );
};

export default InteractionGuidePage;
