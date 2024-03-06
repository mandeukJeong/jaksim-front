import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './pages/PublicRoute';
import HomePage from './pages/main/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import FindPwPage from './pages/auth/FindPwPage';
import ChangePwPage from './pages/auth/ChangePwPage';
import { getUser } from './api/auth';
import jaksimApi from './api';
import { changeUserInfo } from './store/user';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      jaksimApi.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('token')}`;
      getUser()
        .then((response) => {
          dispatch(
            changeUserInfo({
              isLogin: true,
              email: response.data.email,
              eventCheck: response.data.eventCheck,
              nickname: response.data.nickname,
            })
          );
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/findpw" element={<FindPwPage />} />
        <Route path="/changepw" element={<ChangePwPage />} />
      </Route>
    </Routes>
  );
};

export default App;
