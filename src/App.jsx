import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const AgentSystemsTraining = lazy(() =>
  import("./pages/agent-systems-training/AgentSystemsTraining")
);
const DemoAgentCoachingReportAgentVersion = lazy(() =>
  import("./pages/reports/AgentScreens/DemoAgentCoachingReportAgentVersion")
);
const Homepage = lazy(() => import("./pages/home/Homepage"));
const Login = lazy(() => import("./pages/auth/Login"));
function App() {
  return (
    <>
      {/* there is new react-router-version comming so if any issues faced for routing look at the new documentations */}
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Homepage />} />
            <Route
              path="/demo-agent-coaching-report"
              element={<DemoAgentCoachingReportAgentVersion />}
            />
            <Route
              path="/agent-system-interface"
              element={<AgentSystemsTraining />}
            />
            <Route path="/*" element={<div>Page not found</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
