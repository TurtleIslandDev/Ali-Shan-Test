import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import AgentSystemsTraining from "./pages/agentPages/AgentSystemsTraining";
const BuzzWordTrainee = lazy(() =>
  import("./pages/traineePages/BuzzWordTrainee")
);
const CoachingReportAccept = lazy(() =>
  import("./pages/agentPages/CoachingReportAccept")
);
const CoachingReportSubmit = lazy(() =>
  import("./pages/supervisorPages/CoachingReportSubmit")
);
const PerformanceNavigation = lazy(() =>
  import("./pages/navigation/PerformanceNavigation")
);
const AgentNavigation = lazy(() =>
  import("./pages/navigation/AgentNavigation")
);
const AddUserNavigation = lazy(() =>
  import("./pages/navigation/AddUserNavigation")
);
const QcAndSupervisorNavigation = lazy(() =>
  import("./pages/navigation/QcAndSupervisorNavigation")
);
const ProgramManagerNavigation = lazy(() =>
  import("./pages/navigation/ProgramManagerNavigation")
);
const TeamLeadNavigation = lazy(() =>
  import("./pages/navigation/TeamLeadNavigation")
);
const ProgramOwnerNavigation = lazy(() =>
  import("./pages/navigation/ProgramOwnerNavigation")
);
const DataVendorNavigation = lazy(() =>
  import("./pages/navigation/DataVendorNavigation")
);
const BpoNavigation = lazy(() => import("./pages/navigation/BpoNavigation"));
const AdminNavigation = lazy(() =>
  import("./pages/navigation/AdminNavigation")
);
const ThreeCircleLayout = lazy(() =>
  import("./pages/navigation/ThreeCircleLayout")
);
const BuzzWord = lazy(() => import("./pages/supervisorPages/BuzzWord"));
const ChannelManagerNavigation = lazy(() =>
  import("./pages/navigation/ChannelManagerNavigation")
);
const DataManagerNavigation = lazy(() =>
  import("./pages/navigation/DataManagerNavigation")
);
const SalesManagerNavigation = lazy(() =>
  import("./pages/navigation/SalesManagerNavigation")
);
const BroadcastCustomerNavigation = lazy(() =>
  import("./pages/navigation/BroadcastCustomerNavigation")
);
const Login = lazy(() => import("./pages/auth/Login"));
function App() {
  return (
    <>
      {/* there is new react-router-version comming so if any issues faced for routing look at the new documentations */}
      <BrowserRouter>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            {/* 
            Navigation pages completed
            agent-navigation
broadcast-customer-navigation
performance-navigation
sales-manager-navigation
data-manager-navigation
channel-manager-navigation
add-user-navigation
qc-and-supervisor-navigation
program-manager-navigation
            */}
            <Route path="/" element={<Login />} />
            <Route path="/buzzword-supervisor" element={<BuzzWord />} />
            <Route path="/buzzword-trainee" element={<BuzzWordTrainee />} />
            <Route path="/three-circles" element={<ThreeCircleLayout />} />
            <Route path="/admin-navigation" element={<AdminNavigation />} />
            <Route path="bpo-navigation" element={<BpoNavigation />} />
            <Route
              path="/data-vendor-navigation"
              element={<DataVendorNavigation />}
            />
            <Route
              path="/program-owner-navigation"
              element={<ProgramOwnerNavigation />}
            />
            <Route
              path="/team-lead-navigation"
              element={<TeamLeadNavigation />}
            />
            <Route
              path="/program-manager-navigation"
              element={<ProgramManagerNavigation />}
            />
            <Route
              path="/qc-and-supervisor-navigation"
              element={<QcAndSupervisorNavigation />}
            />
            <Route
              path="/add-user-navigation"
              element={<AddUserNavigation />}
            />
            <Route path="/agent-navigation" element={<AgentNavigation />} />
            <Route
              path="/broadcast-customer-navigation"
              element={<BroadcastCustomerNavigation />}
            />
            <Route
              path="/performance-navigation"
              element={<PerformanceNavigation />}
            />
            <Route
              path="/sales-manager-navigation"
              element={<SalesManagerNavigation />}
            />
            <Route
              path="/data-manager-navigation"
              element={<DataManagerNavigation />}
            />
            <Route
              path="/channel-manager-navigation"
              element={<ChannelManagerNavigation />}
            />
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
