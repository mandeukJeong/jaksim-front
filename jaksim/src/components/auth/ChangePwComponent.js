import React, { useReducer, useState } from 'react';
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

const changePwReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const ChangePwComponent = () => {
  const [state, dispatch] = useReducer(changePwReducer, {
    password: '',
    passwordConfirm: '',
  });

  const { password, passwordConfirm } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: 비밀번호 검증 테스트

    // 비밀번호 확인이 일치하지 않을 경우
    if (password !== passwordConfirm) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }
  };

  const [errorMessage, setErrorMessage] = useState(null);
  return (
    <FormWrap>
      <InputWrap>
        <ChangePwInput
          name="password"
          value={password}
          type="password"
          placeholder="새 비밀번호"
          autoComplete="off"
          onChange={onChange}
        />
        <ChangePwInput
          name="passwordConfirm"
          value={passwordConfirm}
          type="password"
          placeholder="새 비밀번호 확인"
          autoComplete="off"
          onChange={onChange}
        />
      </InputWrap>
      <ChangePwButton
        type="submit"
        disabled={
          password.length > 0 && passwordConfirm.length > 0 ? false : true
        }
        color={
          password.length > 0 && passwordConfirm.length > 0
            ? '#000000'
            : '#DDDDDD'
        }
        cursor={
          password.length > 0 && passwordConfirm.length > 0
            ? 'pointer'
            : 'default'
        }
        onClick={onSubmit}
      >
        비밀번호 변경
      </ChangePwButton>
      {errorMessage && <ErrorWrap>{errorMessage}</ErrorWrap>}
    </FormWrap>
  );
};

export default ChangePwComponent;
