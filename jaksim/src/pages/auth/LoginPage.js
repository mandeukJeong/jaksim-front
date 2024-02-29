import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './../../assets/img/logo.png';
import NaverLogin from './../../assets/img/btn_naver.png';
import KakaoLogin from './../../assets/img/btn_kakao.png';
import LoginComponent from '../../components/auth/LoginComponent';

const LoginWrap = styled.div`
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
    border-bottom: 1px solid #dddddd;
  }

  img {
    width: 10%;
    max-width: 45px;
  }
`;

const JoinWrap = styled.div`
  width: 100%;
  margin-top: 25px;
  text-align: start;

  h4 {
    width: 100%;
    font-size: 15px;
    margin-bottom: 5px;
  }

  p {
    width: 100%;
    font-size: 14px;
    color: #a9a9a9;
    margin-bottom: 25px;
  }

  button {
    width: 100%;
    padding: 15px;
    border: 1px solid #a9a9a9;
    background-color: #ffffff;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`;

const LoginPage = () => {
  return (
    <LoginWrap>
      <ContentWrap>
        <Link to="/">
          <img src={Logo} alt="홈으로" />
        </Link>
        <LoginComponent />
        <SnsWrap>
          <p>SNS 계정으로 로그인</p>
          <div>
            <img src={NaverLogin} alt="네이버 로그인" />
            <img src={KakaoLogin} alt="카카오 로그인" />
          </div>
        </SnsWrap>
        <JoinWrap>
          <h4>매일 매일 변화하는 삶,</h4>
          <p>작심하루에서 시작해보세요!</p>
          <button>
            <Link to="/register">회원가입하기</Link>
          </button>
        </JoinWrap>
      </ContentWrap>
    </LoginWrap>
  );
};

export default LoginPage;
