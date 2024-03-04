import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './../../assets/img/logo.png';
import FindPwComponent from '../../components/auth/FindPwComponent';
import ModalComponent from '../../components/common/ModalComponent';

const FindPwWrap = styled.div`
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

const FindPwPage = () => {
  return (
    <>
      <ModalComponent />
      <FindPwWrap>
        <ContentWrap>
          <Link to="/">
            <img src={Logo} alt="홈으로" />
          </Link>
          <h3>비밀번호를 잊어버리셨나요?</h3>
          <GuideMessage>
            가입할때 사용하신 이메일 주소를 입력하시면
            <br />
            비밀번호 재설정 안내 메일을 보내드립니다.
          </GuideMessage>
          <FindPwComponent />
        </ContentWrap>
      </FindPwWrap>
    </>
  );
};

export default FindPwPage;
