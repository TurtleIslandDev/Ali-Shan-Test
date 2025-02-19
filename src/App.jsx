import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import AgentSystemsTraining from "./pages/agentPages/AgentSystemsTraining";
import InteractionGuidePage from "./pages/IG/InteractionGuidePage";
import AddUserSupervisor from "./pages/supervisorPages/AddUserSupervisor";
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
const UploadDataPage = lazy(() =>
  import("./pages/supervisorPages/UploadDataPage")
);
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
const ExportDataPage = lazy(() =>
  import("./pages/navigation/ExportDataNavigation")
);
const Login = lazy(() => import("./pages/auth/Login"));
const AddUser = lazy(() => import("./pages/auth/AddUser"));
function App() {
  return (
    <>
      {/* there is new react-router-version comming so if any issues faced for routing look at the new documentations */}
      <BrowserRouter>
        <Suspense
          fallback={
            <div class="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
              <div class="flex justify-center items-center mt-[50vh]">
                <div class="fas fa-circle-notch fa-spin fa-5x text-violet-600"></div>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin-navigation/add-user" element={<AddUser />} />
            <Route
              path="/admin-navigation/export-data"
              element={<ExportDataPage />}
            />
            <Route
              path="/qc-and-supervisor-navigation/buzzword-supervisor"
              element={<BuzzWord />}
            />
            <Route
              path="/agent-navigation/buzzword-trainee"
              element={<BuzzWordTrainee />}
            />
            <Route path="/three-circles" element={<ThreeCircleLayout />} />
            <Route path="/admin-navigation" element={<AdminNavigation />} />
            <Route
              path="/admin-navigation/upload-data"
              element={<UploadDataPage />}
            />
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
              path="/program-owner-navigation/add-user"
              element={<AddUser />}
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
              path="/qc-and-supervisor-navigation/upload-data"
              element={<UploadDataPage />}
            />
            <Route
              path="/qc-and-supervisor-navigation/add-user"
              element={<AddUserSupervisor />}
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
            <Route
              path="/interaction-guide"
              element={<InteractionGuidePage />}
            />
            <Route path="/*" element={<div>Page not found</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
