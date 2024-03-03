import React from 'react';
import styled from 'styled-components';
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

const RegisterComponent = () => {
  return (
    <FormWrap>
      <InputWrap>
        <EmailWrap>
          <RegisterInput type="text" placeholder="이메일" />
          <select>
            <option value={''}>직접입력</option>
            <option value={'@naver.com'}>@naver.com</option>
            <option value={'@gmail.com'}>@gmail.com</option>
            <option value={'@kakao.com'}>@kakao.com</option>
            <option value={'@daum.com'}>@daum.com</option>
          </select>
        </EmailWrap>

        <RegisterInput type="text" placeholder="닉네임" />
        <RegisterInput
          type="password"
          placeholder="비밀번호"
          autoComplete="off"
        />
        <RegisterInput
          type="password"
          placeholder="비밀번호 확인"
          autoComplete="off"
        />
      </InputWrap>
      <OptionWrap>
        <CheckWrap>
          <FontAwesomeIcon icon={faCircleCheck} />
          <p>서비스 이용약관에 동의합니다. (필수)</p>
        </CheckWrap>
        <CheckWrap>
          <FontAwesomeIcon icon={faCircleCheck} />
          <p>개인정보 수집 및 이용에 동의합니다. (필수)</p>
        </CheckWrap>
        <CheckWrap>
          <FontAwesomeIcon icon={faCircleCheck} />
          <p>이벤트 정보등의 마케팅 수신에 동의합니다. (선택)</p>
        </CheckWrap>
      </OptionWrap>
      {/* <ErrorWrap>빈칸을 모두 입력해주세요.</ErrorWrap> */}
      <RegisterButton type="submit">회원가입</RegisterButton>
    </FormWrap>
  );
};

export default RegisterComponent;
