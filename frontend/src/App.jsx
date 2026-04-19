import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { GlassPanel } from './components/GlassPanel';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Team } from './pages/Team';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ErrorList } from './pages/ErrorList';
import { ErrorDetail } from './pages/ErrorDetail';
import { ApiKeys } from './pages/ApiKeys';
import { Settings } from './pages/Settings';
import { Docs } from './pages/Docs';

// Protected Pages (/app)

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/docs" element={<Docs />} />

        {/* Protected Routes Namespace (/app) */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="errors" element={<ErrorList />} />
          <Route path="errors/:id" element={<ErrorDetail />} />
          
          <Route path="settings" element={<Outlet />}>
            <Route index element={<Settings />} />
            <Route path="api-keys" element={<ApiKeys />} />
            <Route path="team" element={<Team />} />
          </Route>
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
