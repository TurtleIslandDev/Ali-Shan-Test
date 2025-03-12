import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import AgentSystemsTraining from "./pages/agentPages/AgentSystemsTraining";
import InteractionGuidePage from "./pages/IG/InteractionGuidePage";
import AddUserSupervisor from "./pages/supervisorPages/AddUserSupervisor";
import OB_Telemarketing_ContactInfo from "./components/IG/Fastrack Marketing/Outbound/OB - Telemarketing - Contact Info/OB_Telemarketing_ContactInfo";
import useWindowHeight from "./features/hooks/useWindowHeight";
import OB_Telemarketing_No_Contact from "./components/IG/Fastrack Marketing/Outbound/OB - Telemarketing - No Contact/OB_Telemarketing_No_Contact";
import Outbound from "./components/IG/ItsBuzzmarketing/Outbound/OutBound";
import Inbound from "./components/IG/ItsBuzzmarketing/Inbound/Inbound";
import Service from "./components/IG/ItsBuzzmarketing/Service/Service";
import Client from "./components/IG/ItsBuzzmarketing/Client/Client";
import SupportPage from "./pages/Support/SupportPage";
import SupportItsBuzzMarketing from "./components/IG/ItsBuzzmarketing/Support/SupportItsBuzzMarketing";
import SupportIFasttMarketing from "./components/IG/FasTT Marketing/Support/SupportIFasttMarketing";
import AddUserProgramManager from "./pages/ProgramManagerPages/AddUserProgramManager";
import ContactInfo from "./components/IG/Fastrack Marketing/Inbound/Contact Info/ContactInfo";
import NoContact from "./components/IG/Fastrack Marketing/Inbound/No Contact/NoContact";
import ServiceFastrackMarketing from "./components/IG/Fastrack Marketing/Service/ServiceFastrackMarketing";
import AgentTraineeNavigation from "./pages/navigation/AgentTraineeNavigation";
import TraineeInteractionGuideFasTTrackOutbound from "./components/IG/TraineeInteractionGuideFasTTrackOutbound/TraineeInteractionGuideFasTTrackOutbound";
import TraineeInteractionGuideFasTTrackInbound from "./components/IG/TraineeInteractionGuideFasTTrackInbound/TraineeInteractionGuideFasTTrackInbound";
import DataNavigation from "./pages/adminPages/DataNavigation";
import Form1099 from "./components/googleDriveForms/Form1099";
import TestForm1099 from "./components/googleDriveForms/testForm";
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
  const height = useWindowHeight();
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
            <Route path="/support" element={<SupportPage />} />
            <Route path="/admin-navigation/add-user" element={<AddUser />} />
            <Route
              path="/admin-navigation/export-data"
              element={<ExportDataPage />}
            />
            <Route path="/admin-navigation/data" element={<DataNavigation />} />
            <Route
              path="/admin-navigation/buzzword-admin"
              element={<BuzzWord />}
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
              path="/program-manager-navigation/add-user"
              element={<AddUserProgramManager />}
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
              path="/agent-trainee-navigation"
              element={<AgentTraineeNavigation />}
            />
            <Route
              path="/agent-trainee-navigation/buzzword-trainee"
              element={<BuzzWordTrainee />}
            />
            <Route
              path="/agent-trainee-navigation/trainee-interaction-guide-fasttrack"
              element={
                <div style={{ height: `${height}px` }}>
                  <TraineeInteractionGuideFasTTrackOutbound />
                </div>
              }
            />
            <Route
              path="/agent-trainee-navigation/trainee-interaction-guide-fasttrack/inbound"
              element={
                <div style={{ height: `${height}px` }}>
                  <TraineeInteractionGuideFasTTrackInbound />
                </div>
              }
            />
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
            <Route
              path="/interaction-guide/itsbuzzmarketing/outbound"
              element={
                <div style={{ height: `${height}px` }}>
                  <Outbound />
                </div>
              }
            />
            <Route
              path="/interaction-guide/itsbuzzmarketing/inbound"
              element={
                <div style={{ height: `${height}px` }}>
                  <Inbound />
                </div>
              }
            />
            <Route
              path="/interaction-guide/itsbuzzmarketing/service"
              element={
                <div style={{ height: `${height}px` }}>
                  <Service />
                </div>
              }
            />
            <Route
              path="/interaction-guide/itsbuzzmarketing/support"
              element={
                <div style={{ height: `${height}px` }}>
                  <SupportItsBuzzMarketing />
                </div>
              }
            />
            <Route
              path="/interaction-guide/itsbuzzmarketing/client"
              element={
                <div style={{ height: `${height}px` }}>
                  <Client />
                </div>
              }
            />
            <Route
              path="/interaction-guide/fastt-marketing/support"
              element={
                <div style={{ height: `${height}px` }}>
                  <SupportIFasttMarketing />
                </div>
              }
            />
            <Route
              path="/interaction-guide/fastrack-marketing/service"
              element={
                <div style={{ height: `${height}px` }}>
                  <ServiceFastrackMarketing />
                </div>
              }
            />
            <Route
              path="/interaction-guide/fastrack-marketing/inbound/contact-info"
              element={
                <div style={{ height: `${height}px` }}>
                  <ContactInfo />
                </div>
              }
            />
            <Route
              path="/interaction-guide/fastrack-marketing/inbound/no-contact"
              element={
                <div style={{ height: `${height}px` }}>
                  <NoContact />
                </div>
              }
            />
            <Route
              path="/interaction-guide/fastrack-marketing/outbound/ob-telemarketing-no-contact"
              element={
                <div style={{ height: `${height}px` }}>
                  <OB_Telemarketing_No_Contact />
                </div>
              }
            />
            <Route
              path="/interaction-guide/fastrack-marketing/outbound/ob-telemarketing-contact-info"
              element={
                <div style={{ height: `${height}px` }}>
                  <OB_Telemarketing_ContactInfo />
                </div>
              }
            />
            <Route path="/form1099" element={<Form1099 />} />
            <Route path="/testform1099" element={<TestForm1099 />} />
            <Route path="/*" element={<div>Page not found</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
