import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import AttendanceLayout from './pages/attendance/AttendanceLayout';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import EmployeeLayout from './pages/employee/EmployeeLayout';
import RequestLayout from './pages/request/RequestLayout';
import ScheduleLayout from './pages/schedule/ScheduleLayout';

// Page Components
import AdminAttendance from './pages/attendance/AdminAttendance';
import UserAttendance from './pages/attendance/UserAttendance';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import UserDashboard from './pages/dashboard/UserDashboard';
import AdminEmployee from './pages/employee/AdminEmployee';
import EmployeeLayoutFile from './pages/employee/EmployeeLayout'; // Layout for employee section
import Login from './pages/login/Login';
import Logout from './pages/login/Logout';
import AdminRequest from './pages/request/AdminRequest';
import UserRequest from './pages/request/UserRequest';
import AdminSchedule from './pages/schedule/AdminSchedule';
import UserSchedule from './pages/schedule/UserSchedule';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page: Redirects root to Admin Dashboard */}
        <Route path="/" element={<Navigate to="/dashboard/admin" replace />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        {/* Dashboard Section */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="user" element={<UserDashboard />} />
        </Route>

        {/* Attendance Section */}
        <Route path="/attendance" element={<AttendanceLayout />}>
          <Route path="admin" element={<AdminAttendance />} />
          <Route path="user" element={<UserAttendance />} />
        </Route>

        {/* Employee Section */}
        <Route path="/employee" element={<EmployeeLayout />}>
          <Route path="admin" element={<AdminEmployee />} />
        </Route>

        {/* Request Section */}
        <Route path="/request" element={<RequestLayout />}>
          <Route path="admin" element={<AdminRequest />} />
          <Route path="user" element={<UserRequest />} />
        </Route>

        {/* Schedule Section */}
        <Route path="/schedule" element={<ScheduleLayout />}>
          <Route path="admin" element={<AdminSchedule />} />
          <Route path="user" element={<UserSchedule />} />
        </Route>

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<Navigate to="/dashboard/admin" replace />} />
      </Routes>
    </Router>
  );
}

export default App;