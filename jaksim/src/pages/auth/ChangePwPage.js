import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './../../assets/img/logo.png';
import ChangePwComponent from '../../components/auth/ChangePwComponent';

const ChangePwWrap = styled.div`
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

const GuideMessage = styled.p`
  color: #999999;
  line-height: 16px;
  margin: 15px 0 10px 0;
  font-size: 13px;
`;

const ChangePwPage = () => {
  return (
    <ChangePwWrap>
      <ContentWrap>
        <Link to="/">
          <img src={Logo} alt="홈으로" />
        </Link>
        <h3>비밀번호 변경</h3>
        <GuideMessage>입력하신 새 비밀번호로 변경 됩니다.</GuideMessage>
        <ChangePwComponent />
      </ContentWrap>
    </ChangePwWrap>
  );
};

export default ChangePwPage;
