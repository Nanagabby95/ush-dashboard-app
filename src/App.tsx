// Import necessary components and pages
import Dashboard from './layout/Dashboard';
import Problems from './pages/dashboard/problems';
import StrategicPlans from './pages/dashboard/strategicplans';
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
          <Route path="/dashboard/problems" element={<Problems />} />
          <Route path="/dashboard/strategicplans" element={<StrategicPlans />} />
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
