// Import necessary components and pages
import Dashboard from './layout/Dashboard';
import CulturalShift from './pages/dashboard/culturalshift';
import TalentAcquis from './pages/dashboard/talentacquis';
import GlobalTech from './pages/dashboard/globaltech';
import KpiMeasurement from './pages/dashboard/kpimeasurement';
import LeadStability from './pages/dashboard/leadstability';
import PDiversification from './pages/dashboard/pdiversification';
import SalesAndMrktn from './pages/dashboard/salesandmrktn';
import OrgStructure from './pages/dashboard/orgstructure';
import TechInnovation from './pages/dashboard/techinnovation';
import VisionStatement from './pages/dashboard/visionstatement';
import Setting from './common/setting/Setting';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeadershipSettings from './common/setting/leadershipsettings';
import SkillsAnalysis from './common/setting/skillsanalysis';
import OvarAllPerformance from './common/setting/ovarallperformance';
import ProductRoadmap from './common/setting/productroadmap';
import SalesAndMarketingPerformance from './common/setting/salesandmarketingperformance';
import NotificationBell from './components/Notifications/notification';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Dashboard />}>
          <Route path="/dashboard/orgstructure" element={<OrgStructure />} />
          <Route path="/dashboard/techinnovation" element={<TechInnovation />} />
          <Route path="/dashboard/salesandmrktn" element={<SalesAndMrktn />} />
          <Route path="/dashboard/leadstability" element={<LeadStability />} />
          <Route path="/dashboard/pdiversification" element={<PDiversification />} />
          <Route path="/dashboard/kpimeasurement" element={<KpiMeasurement />} />
          <Route path="/dashboard/culturalshift" element={<CulturalShift />} />
          <Route path="/dashboard/globaltech" element={<GlobalTech />} />
          <Route path="/dashboard/talentacquis" element={<TalentAcquis />} />
          <Route path="/dashboard/visionstatement" element={<VisionStatement />} />

          {/* Setting is now a child route of dashboard */}
          <Route path="Setting/*" element={<Setting />} />
          <Route path="/setting/leadershipsettings" element={<LeadershipSettings />} />
          <Route path="/setting/skillsanalysis" element={<SkillsAnalysis />} />
          <Route path="/setting/ovarallperformance" element={<OvarAllPerformance />} />
          <Route path="/setting/salesandmarketingperformance" element={<SalesAndMarketingPerformance />} />
          <Route path="/setting/productroadmap" element={<ProductRoadmap />} />
          <Route path="notification/*" element={<NotificationBell />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
