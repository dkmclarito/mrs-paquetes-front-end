import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/Login/PrivateRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Logout from './components/Login/Logout';
import AuthService from './services/authService';
import 'bootstrap/dist/css/bootstrap.min.css';
import GestionEmpleados from './pages/GestionEmpleados';
import AgregarEmpleado from './pages/AgregarEmpleado';

const App = () => {
  const isAuthenticated = AuthService.getCurrentUser();

  return (
    
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/home" element={<PrivateRoute />}>
          <Route path="" element={<HomePage />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />}
        />
         <Route path="/GestionEmpleados" element={<PrivateRoute />}>
            <Route path="" element={<GestionEmpleados />} />
          </Route>
          <Route path="/AgregarEmpleado" element={<PrivateRoute />}>
            <Route path="" element={<AgregarEmpleado />} />
          </Route>
      </Routes>
    </Router>
  );
};

export default App;
