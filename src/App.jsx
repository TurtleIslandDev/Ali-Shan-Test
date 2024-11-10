import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import DemoAgentCoachingReport from "./pages/reports/DemoAgentCoachingReport";
import Homepage from "./pages/home/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
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
