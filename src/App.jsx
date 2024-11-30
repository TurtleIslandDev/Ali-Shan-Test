import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// import HomePage from "./pages/home/Homepage";
// import CoachingReportAccept from "./pages/reports/AgentScreens/CoachingReportAccept";
// import Login from "./pages/auth/Login";
import AgentSystemsTraining from "./pages/agent-systems-training/AgentSystemsTraining";
const CoachingReportAccept = lazy(() =>
  import("./pages/reports/AgentScreens/CoachingReportAccept")
);
const CoachingReportSubmit = lazy(() =>
  import("./pages/reports/SupervisorScreens/CoachingReportSubmit")
);
const AgentNavigation = lazy(() =>
  import("./pages/navigation/AgentNavigation")
);
const Login = lazy(() => import("./pages/auth/Login"));
function App() {
  return (
    <>
      {/* there is new react-router-version comming so if any issues faced for routing look at the new documentations */}
      <BrowserRouter>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/agent-navigation" element={<AgentNavigation />} />
            <Route
              path="/coaching-report-submit"
              element={<CoachingReportSubmit />}
            />
            <Route
              path="/coaching-report-accept"
              element={<CoachingReportAccept />}
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
