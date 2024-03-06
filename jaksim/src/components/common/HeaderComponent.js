import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../api/auth';
import { changeUserInfo } from '../../store/user';

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
  align-items: center;
  gap: 30px;

  a {
    text-decoration: none;
    color: #000000;
    font-size: 14px;
  }

  button {
    border: none;
    background-color: inherit;
    color: #000000;
    font-size: 14px;
    cursor: pointer;
  }
`;

const OptionWrap = styled.div`
  width: 18%;
  left: 100px;
  border: 1px solid #a9a9a9;
  background-color: white;
  position: fixed;
  z-index: 10;
  top: 50px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  ul {
    box-sizing: border-box;
    display: flex;
    padding: 15px 20px;
    width: 100%;
    justify-content: center;
  }

  li {
    border-right: 1px solid #a9a9a9;

    &:last-child {
      border-right: none;
    }
  }

  a {
    text-decoration: none;
    font-size: 12px;
    padding: 0 10px;
    color: #000000;
  }
`;

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isRenderMenu, setIsRenderMenu] = useState(false);

  const onLogout = () => {
    logout()
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem('token');
          dispatch(
            changeUserInfo({
              isLogin: false,
              email: '',
              eventCheck: null,
              nickname: '',
            })
          );
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <HeaderWrap>
        <SelectWrap>
          <Link to="/">HARU</Link>
          <CategoryWrap onClick={() => setIsRenderMenu(!isRenderMenu)}>
            <FontAwesomeIcon icon={faBars} />
            <p>전체 카테고리</p>
          </CategoryWrap>
        </SelectWrap>
        <MenuWrap>
          {user.isLogin ? (
            <Link to="/">{user.userInfo.nickname}</Link>
          ) : (
            <Link to="/register">회원가입</Link>
          )}
          {user.isLogin ? (
            <button onClick={onLogout}>로그아웃</button>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </MenuWrap>
      </HeaderWrap>
      {isRenderMenu && (
        <OptionWrap>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsRenderMenu(!isRenderMenu)}>
                작심계획
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setIsRenderMenu(!isRenderMenu)}>
                커뮤니티
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setIsRenderMenu(!isRenderMenu)}>
                마이페이지
              </Link>
            </li>
          </ul>
        </OptionWrap>
      )}
    </>
  );
};

export default HeaderComponent;
