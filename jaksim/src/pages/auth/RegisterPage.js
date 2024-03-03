import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './../../assets/img/logo.png';
import NaverLogin from './../../assets/img/btn_naver.png';
import KakaoLogin from './../../assets/img/btn_kakao.png';
import RegisterComponent from '../../components/auth/RegisterComponent';

const RegisterWrap = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 50%;
  max-width: 450px;
  text-align: center;

  img {
    max-width: 300px;
    width: 100%;
  }

  h3 {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700;
  }
`;

const SnsWrap = styled.div`
  width: 100%;
  font-size: 15px;

  div {
    margin-top: 20px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    gap: 25px;
  }

  img {
    width: 10%;
    max-width: 45px;
  }
`;

const RegisterPage = () => {
  return (
    <RegisterWrap>
      <ContentWrap>
        <Link to="/">
          <img src={Logo} alt="홈으로" />
        </Link>
        <h3>목표를 위한 걸음, 작심하루가 도와줄게요!</h3>
        <RegisterComponent />
        <SnsWrap>
          <p>SNS 계정으로 가입</p>
          <div>
            <img src={NaverLogin} alt="네이버 로그인" />
            <img src={KakaoLogin} alt="카카오 로그인" />
          </div>
        </SnsWrap>
      </ContentWrap>
    </RegisterWrap>
  );
};

export default RegisterPage;
