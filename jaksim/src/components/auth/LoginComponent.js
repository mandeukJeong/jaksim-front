import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const FormWrap = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px;
`;

const LoginInput = styled.input`
  padding: 15px;
  border: 1px solid #a9a9a9;
  &:first-child {
    border-bottom: none;
  }
`;

const OptionWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  color: #9e9e9e;
  font-size: 14px;
  a {
    color: #9e9e9e;
  }
`;

const AutoWrap = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 16px;
  margin-bottom: 30px;
  color: #ffffff;
  background-color: #000000;
  border: none;
  cursor: pointer;
`;

const LoginComponent = () => {
  return (
    <FormWrap>
      <InputWrap>
        <LoginInput type="email" placeholder="이메일" />
        <LoginInput type="password" placeholder="비밀번호" />
      </InputWrap>
      <OptionWrap>
        <AutoWrap>
          <FontAwesomeIcon icon={faCircleCheck} />
          <p>자동로그인</p>
        </AutoWrap>
        <Link to="/">비밀번호찾기</Link>
      </OptionWrap>
      <LoginButton type="submit">로그인</LoginButton>
    </FormWrap>
  );
};

export default LoginComponent;
