import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  return isLogin ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
