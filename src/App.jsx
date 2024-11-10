import { BrowserRouter, Route, Routes } from "react-router-dom";
import StyledHome from "./components/StyledHome";
import Login from "./pages/auth/Login";
import DemoAgentCoachingReport from "./pages/reports/DemoAgentCoachingReport";

function App() {
  return (
    <>
      {/* <StyledHome /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<StyledHome />} />
          <Route
            path="/demo-agent-coaching-report"
            element={<DemoAgentCoachingReport />}
          />
          <Route path="/*" element={<div>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
