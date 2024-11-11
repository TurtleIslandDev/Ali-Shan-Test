import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Homepage from "./pages/home/Homepage";
import DemoAgentCoachingReportAgentVersion from "./pages/reports/AgentScreens/DemoAgentCoachingReportAgentVersion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route
            path="/demo-agent-coaching-report"
            element={<DemoAgentCoachingReportAgentVersion />}
          />
          <Route path="/*" element={<div>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
