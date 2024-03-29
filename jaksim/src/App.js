import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './pages/PublicRoute';
import PrivateRoute from './pages/PrivateRoute';
import HomePage from './pages/main/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import FindPwPage from './pages/auth/FindPwPage';
import ChangePwPage from './pages/auth/ChangePwPage';
import FreeBoardPage from './pages/board/FreeBoardPage';
import BoardWritePage from './pages/board/BoardWritePage';
import BoardDetailPage from './pages/board/BoardDetailPage';
import { getUser } from './api/auth';
import { changeUserInfo } from './store/user';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUser()
        .then((response) => {
          dispatch(
            changeUserInfo({
              isLogin: true,
              email: response.data.email,
              eventCheck: response.data.eventCheck,
              nickname: response.data.nickname,
              authId: response.data.authId,
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
      <Route element={<PrivateRoute />}>
        <Route path="/board/free" element={<FreeBoardPage />} />
        <Route path="/write/free" element={<BoardWritePage />} />
        <Route path="/detail" element={<BoardDetailPage />} />
      </Route>
    </Routes>
  );
};

export default App;
