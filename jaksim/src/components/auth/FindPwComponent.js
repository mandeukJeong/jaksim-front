import React from 'react';
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
  margin-bottom: 30px;
  color: #ffffff;
  background-color: #dddddd;
  border: none;
  cursor: pointer;
`;

const ErrorWrap = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #f05650;
`;

const FindPwComponent = () => {
  return (
    <FormWrap>
      <InputWrap>
        <FindPwInput type="email" placeholder="이메일" />
      </InputWrap>
      <FindPwButton type="submit">안내메일 전송</FindPwButton>
    </FormWrap>
  );
};

export default FindPwComponent;
