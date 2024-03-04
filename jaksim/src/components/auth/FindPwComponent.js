import React, { useState } from 'react';
import styled from 'styled-components';
import { findPw } from '../../api/auth';

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
  margin: 10px;
`;

const FindPwInput = styled.input`
  padding: 15px;
  border: 1px solid #dddddd;
`;

const FindPwButton = styled.button`
  width: 100%;
  font-weight: 700;
  font-size: 15px;
  padding: 16px;
  margin-bottom: 20px;
  color: #ffffff;
  background-color: ${(props) => props.color};
  border: none;
  cursor: ${(props) => props.cursor};
`;

const ErrorWrap = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: 700;
  color: #f05650;
`;

const FindPwComponent = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    findPw(email)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
        }
      })
      .catch((e) => {
        if (e.response.status === 404) {
          setErrorMessage(e.response.data.error);
        } else {
          setErrorMessage('인증번호 전송 실패');
        }
      });
  };

  return (
    <FormWrap>
      <InputWrap>
        <FindPwInput
          value={email}
          type="email"
          placeholder="이메일"
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputWrap>
      <FindPwButton
        disabled={email.length > 0 ? false : true}
        type="submit"
        color={email.length > 0 ? '#000000' : '#DDDDDD'}
        cursor={email.length > 0 ? 'pointer' : 'default'}
        onClick={onSubmit}
      >
        안내메일 전송
      </FindPwButton>
      <ErrorWrap>{errorMessage}</ErrorWrap>
    </FormWrap>
  );
};

export default FindPwComponent;
