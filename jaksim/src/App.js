import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/main/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import FindPwPage from './pages/auth/FindPwPage';
import ChangePwPage from './pages/auth/ChangePwPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/findpw" element={<FindPwPage />} />
      <Route path="/changepw" element={<ChangePwPage />} />
    </Routes>
  );
};

export default App;
