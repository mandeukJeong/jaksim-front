import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { onModalShow } from '../../store/modal';
import { findPw, checkAuth } from '../../api/auth';

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
  &:first-child {
    margin-bottom: 10px;
  }
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
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [verifyNumber, setVerifyNumber] = useState('');
  const [isVerify, setIsVerify] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: 이메일 검증 테스트

    findPw(email)
      .then((response) => {
        if (response.status === 200) {
          setErrorMessage(null);
          setIsVerify(true);
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

  const onCertify = (e) => {
    e.preventDefault();

    // TODO: 숫자 입력 검증 테스트

    checkAuth(verifyNumber)
      .then((response) => {
        if (response.status === 200) {
          setErrorMessage(null);
          dispatch(onModalShow(true));
        }
      })
      .catch((e) => {
        if (e.response.status === 401) {
          setErrorMessage(e.response.data.message);
        } else {
          setErrorMessage('인증번호 검증 실패');
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
          disabled={isVerify ? true : false}
        />
        {isVerify && (
          <FindPwInput
            value={verifyNumber}
            type="text"
            placeholder="인증번호"
            onChange={(e) => setVerifyNumber(e.target.value)}
          />
        )}
      </InputWrap>
      {isVerify ? (
        <FindPwButton
          disabled={verifyNumber.length > 0 ? false : true}
          type="submit"
          color={verifyNumber.length > 0 ? '#000000' : '#DDDDDD'}
          cursor={verifyNumber.length > 0 ? 'pointer' : 'default'}
          onClick={onCertify}
        >
          인증번호 확인
        </FindPwButton>
      ) : (
        <FindPwButton
          disabled={email.length > 0 ? false : true}
          type="submit"
          color={email.length > 0 ? '#000000' : '#DDDDDD'}
          cursor={email.length > 0 ? 'pointer' : 'default'}
          onClick={onSubmit}
        >
          안내메일 전송
        </FindPwButton>
      )}
      {errorMessage && <ErrorWrap>{errorMessage}</ErrorWrap>}
    </FormWrap>
  );
};

export default FindPwComponent;
