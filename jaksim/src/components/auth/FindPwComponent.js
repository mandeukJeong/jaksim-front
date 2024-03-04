import React, { useState } from 'react';
import styled from 'styled-components';

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
      >
        안내메일 전송
      </FindPwButton>
      {/* <ErrorWrap>존재하지 않는 이메일입니다.</ErrorWrap> */}
    </FormWrap>
  );
};

export default FindPwComponent;
