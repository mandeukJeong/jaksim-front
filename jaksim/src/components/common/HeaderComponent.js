import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  padding: 10px 40px;
`;

const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  a {
    line-height: 30px;
    font-size: 16px;
    text-decoration: none;
    color: #000000;
    font-weight: 700;
  }
`;

const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  line-height: 30px;
  cursor: pointer;
`;

const MenuWrap = styled.div`
  display: flex;
  gap: 30px;
  a {
    text-decoration: none;
    color: #000000;
    font-size: 14px;
  }
`;

const HeaderComponent = () => {
  return (
    <HeaderWrap>
      <SelectWrap>
        <Link to="/">HARU</Link>
        <CategoryWrap>
          <FontAwesomeIcon icon={faBars} />
          <p>전체 카테고리</p>
        </CategoryWrap>
      </SelectWrap>
      <MenuWrap>
        <Link to="/register">회원가입</Link>
        <Link to="/login">로그인</Link>
      </MenuWrap>
    </HeaderWrap>
  );
};

export default HeaderComponent;
