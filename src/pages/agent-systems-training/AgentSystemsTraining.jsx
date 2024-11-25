import React from "react";
import bg from "../../assets/bgImages/agent-systems-bg.png";
import DonutChart from "../../components/charts/DonutChart";
import Button from "../../components/Buttons/Button";
const AgentSystemsInterface = () => {
  return (
    <div
      className="w-full px-20 "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[425px] bg-white pt-4">
        <div className="flex shadow-md mx-4">
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
        <Button>Alishan</Button>
      </div>
    </div>
  );
};

export default AgentSystemsInterface;
