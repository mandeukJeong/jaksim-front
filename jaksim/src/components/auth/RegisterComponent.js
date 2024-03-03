import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { register } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

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
  margin: 20px;
`;

const EmailWrap = styled.div`
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  gap: 10px;
  input[type='text'] {
    width: calc(100% / 12 * 8);
  }

  select {
    width: calc(100% / 12 * 4);
    padding: 15px;
    border: 1px solid #a9a9a9;
  }
`;

const RegisterInput = styled.input`
  padding: 15px;
  margin-bottom: 8px;
  border: 1px solid #a9a9a9;
  &:first-child,
  &:last-child {
    margin-bottom: 0px;
  }
`;

const OptionWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #737373;
  font-size: 14px;
  a {
    color: #737373;
  }
`;

const CheckWrap = styled.div`
  display: flex;
  font-size: 12px;
  gap: 5px;
  cursor: pointer;
  color: ${(props) => props.color};
`;

const RegisterButton = styled.button`
  width: 100%;
  padding: 16px;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  background-color: #a9a9a9;
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

const registerReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [checkColor, setCheckColor] = useState({
    serviceCheck: '#737373',
    personalCheck: '#737373',
    eventCheck: '#737373',
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [autoEmailText, setAutoEmailText] = useState('');
  const [state, dispatch] = useReducer(registerReducer, {
    email: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
    serviceCheck: false,
    personalCheck: false,
    eventCheck: false,
  });

  const {
    email,
    nickname,
    password,
    passwordConfirm,
    serviceCheck,
    personalCheck,
    eventCheck,
  } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  const onClick = (checkTarget) => {
    setCheckColor((prevState) => {
      return {
        ...prevState,
        [checkTarget]:
          checkColor[checkTarget] === '#737373' ? '#684FCA' : '#737373',
      };
    });
    dispatch({ name: checkTarget, value: !state[checkTarget] });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // input 빈칸 존재시
    if (
      Object.values({ email, nickname, password, passwordConfirm }).some(
        (value) => value === ''
      )
    ) {
      setErrorMessage('빈칸을 모두 입력해주세요.');
      return;
    }

    // 이메일, 비밀번호 형식 검증
    const sendForEmail = autoEmailText === '' ? email : email + autoEmailText;

    // 비밀번호 확인이 일치하지 않을 경우
    if (password !== passwordConfirm) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 서비스 이용약관, 개인정보 수집 동의 체크 안했을 경우
    if (
      Object.values({ serviceCheck, personalCheck }).some(
        (value) => value === false
      )
    ) {
      setErrorMessage('필수 동의 항목을 체크해주세요.');
      return;
    }

    register(
      sendForEmail,
      nickname,
      password,
      serviceCheck,
      personalCheck,
      eventCheck
    )
      .then((response) => {
        if (response.status === 201) {
          setErrorMessage(null);
          // 추후 모달창으로 변경
          alert('회원가입 성공');
          navigate('/login');
        }
      })
      .catch((e) => {
        // 중복 계정 존재
        if (e.response.status === 400) {
          setErrorMessage(e.response.data.error);
        } else {
          setErrorMessage('회원가입 실패');
        }
      });
  };

  return (
    <FormWrap>
      <InputWrap>
        <EmailWrap>
          <RegisterInput
            name="email"
            value={email}
            type="text"
            placeholder="이메일"
            onChange={onChange}
          />
          <select
            value={autoEmailText}
            onChange={(e) => setAutoEmailText(e.target.value)}
          >
            <option value={''}>직접입력</option>
            <option value={'@naver.com'}>@naver.com</option>
            <option value={'@gmail.com'}>@gmail.com</option>
            <option value={'@kakao.com'}>@kakao.com</option>
            <option value={'@daum.com'}>@daum.com</option>
          </select>
        </EmailWrap>
        <RegisterInput
          name="nickname"
          value={nickname}
          type="text"
          placeholder="닉네임"
          onChange={onChange}
        />
        <RegisterInput
          name="password"
          value={password}
          type="password"
          placeholder="비밀번호"
          autoComplete="off"
          onChange={onChange}
        />
        <RegisterInput
          name="passwordConfirm"
          value={passwordConfirm}
          type="password"
          placeholder="비밀번호 확인"
          autoComplete="off"
          onChange={onChange}
        />
      </InputWrap>
      <OptionWrap>
        <CheckWrap
          color={checkColor.serviceCheck}
          value={serviceCheck}
          onClick={() => onClick('serviceCheck')}
        >
          <FontAwesomeIcon icon={faCircleCheck} />
          <p>서비스 이용약관에 동의합니다. (필수)</p>
        </CheckWrap>
        <CheckWrap
          color={checkColor.personalCheck}
          value={personalCheck}
          onClick={() => onClick('personalCheck')}
        >
          <FontAwesomeIcon icon={faCircleCheck} />
          <p>개인정보 수집 및 이용에 동의합니다. (필수)</p>
        </CheckWrap>
        <CheckWrap
          color={checkColor.eventCheck}
          value={eventCheck}
          onClick={() => onClick('eventCheck')}
        >
          <FontAwesomeIcon icon={faCircleCheck} />
          <p>이벤트 정보등의 마케팅 수신에 동의합니다. (선택)</p>
        </CheckWrap>
      </OptionWrap>
      {errorMessage && <ErrorWrap>{errorMessage}</ErrorWrap>}
      <RegisterButton type="submit" onClick={onSubmit}>
        회원가입
      </RegisterButton>
    </FormWrap>
  );
};

export default RegisterComponent;
