import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { login } from '../../api/auth';
import { getCookie, setCookie, removeCookie } from '../../utils/cookie';
import { privateApi } from '../../api';
import { changeUserInfo } from '../../store/user';
import { useDispatch } from 'react-redux';

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

const SaveWrap = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
  color: ${(props) => props.color};
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

const ErrorWrap = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #f05650;
`;

const loginReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const LoginComponent = () => {
  const userDispatch = useDispatch();
  const navigate = useNavigate();
  const [saveColor, setSaveColor] = useState('#9e9e9e');
  const [isIdSave, setIsIdSave] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [state, dispatch] = useReducer(loginReducer, {
    email: '',
    password: '',
  });
  const { email, password } = state;

  const changeSaveStatus = () => {
    // 아이디 저장 색상 변경
    setSaveColor((prevState) =>
      prevState === '#9e9e9e' ? '#684FCA' : '#9e9e9e'
    );
    // 아이디 저장 상태 값 변경
    setIsIdSave((prevState) => !prevState);
  };

  const onChange = (e) => {
    dispatch(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // 이메일, 비밀번호 미입력 시
    if (email.trim().length === 0 || password.trim().length === 0) {
      setErrorMessage('이메일 또는 비밀번호를 입력해주세요.');
      return;
    }
    // TODO: 이메일, 비밀번호 형식에 맞지 않을 경우

    // 아이디 저장 체크 로직 (7일간)
    if (isIdSave) {
      setCookie('idSave', email, { path: '/', maxAge: 60 * 60 * 24 * 7 });
    } else {
      removeCookie('idSave', { path: '/' });
    }
    login(email, password)
      .then((response) => {
        if (response.status === 200) {
          setErrorMessage(null);
          localStorage.setItem('token', response.data.accessToken);
          privateApi.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${response.data.accessToken}`;
          userDispatch(
            changeUserInfo({
              isLogin: true,
              email: response.data.email,
              eventCheck: response.data.eventCheck,
              nickname: response.data.nickname,
            })
          );
          navigate('/');
        }
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 401) {
          setErrorMessage(e.response.data);
        } else {
          setErrorMessage('로그인 실패');
        }
      });
  };

  // 아이디 저장 여부 쿠키 값 꺼내기
  useEffect(() => {
    if (getCookie('idSave')) {
      setSaveColor('#684FCA');
      setIsIdSave(true);
      dispatch({ name: 'email', value: getCookie('idSave') });
    }
  }, []);

  return (
    <FormWrap>
      <InputWrap>
        <LoginInput
          name="email"
          value={email}
          type="email"
          placeholder="이메일"
          onChange={onChange}
        />
        <LoginInput
          name="password"
          value={password}
          type="password"
          placeholder="비밀번호"
          autoComplete="off"
          onChange={onChange}
        />
      </InputWrap>
      <OptionWrap>
        <SaveWrap color={saveColor} onClick={changeSaveStatus}>
          <FontAwesomeIcon icon={faCircleCheck} />
          <p>아이디 저장</p>
        </SaveWrap>
        <Link to="/findpw">비밀번호찾기</Link>
      </OptionWrap>
      <LoginButton type="submit" onClick={onSubmit}>
        로그인
      </LoginButton>
      {errorMessage && <ErrorWrap>{errorMessage}</ErrorWrap>}
    </FormWrap>
  );
};

export default LoginComponent;
