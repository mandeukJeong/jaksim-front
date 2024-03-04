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

const ChangePwInput = styled.input`
  padding: 15px;
  border: 1px solid #dddddd;
  &:first-child {
    border-bottom: none;
  }
`;

const ChangePwButton = styled.button`
  width: 100%;
  font-weight: 700;
  font-size: 15px;
  padding: 16px;
  margin-bottom: 20px;
  color: #ffffff;
  background-color: #dddddd;
  /* background-color: ${(props) => props.color}; */
  border: none;
  /* cursor: ${(props) => props.cursor}; */
`;

const ErrorWrap = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: 700;
  color: #f05650;
`;

const ChangePwComponent = () => {
  return (
    <FormWrap>
      <InputWrap>
        <ChangePwInput type="password" placeholder="새 비밀번호" />
        <ChangePwInput type="password" placeholder="새 비밀번호 확인" />
      </InputWrap>
      <ChangePwButton type="submit">비밀번호 변경</ChangePwButton>
    </FormWrap>
  );
};

export default ChangePwComponent;
