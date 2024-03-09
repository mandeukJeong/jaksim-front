import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderComponent from './../../components/common/HeaderComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const MainWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const DesignWrap = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 50px;
  background-color: #684fca;
`;

const ProfileWrap = styled.div`
  width: 90%;
  height: 90px;
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: #ffffff;
  position: absolute;
  top: 72.5px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
  z-index: 1;

  p {
    font-weight: 700;
    font-size: 20px;
  }
`;

const ContentWrap = styled.div`
  margin-top: 90px;
  display: flex;
  width: 90%;
`;

const MenuWrap = styled.div``;

const BoardWrap = styled.div``;

const CategoryWrap = styled.div``;

const SearchWrap = styled.div``;

const ListWrap = styled.div``;

const FreeBoardPage = () => {
  return (
    <>
      <HeaderComponent />
      <MainWrap>
        <DesignWrap />
        <ProfileWrap>
          <FontAwesomeIcon
            icon={faUser}
            style={{
              backgroundColor: '#D9D9D9',
              fontSize: '25px',
              borderRadius: '50%',
              padding: '10px 11.57px',
              color: 'FFFFFF',
            }}
          />
          <p>민서</p>
        </ProfileWrap>
        <ContentWrap>
          <MenuWrap>
            <ul>
              <li>
                <Link to="/board/inform">작심하루 안내</Link>
              </li>
              <li>
                <Link to="/board/free">하루톡톡</Link>
              </li>
              <li>
                <Link to="/board/friends">우리 친구해요!</Link>
              </li>
            </ul>
          </MenuWrap>
          <BoardWrap>
            <CategoryWrap>
              <h3>하루안내</h3>
              <p>알아두면 유익한 서비스 꿀팁 참고하세요!</p>
            </CategoryWrap>
            <SearchWrap>
              <input type="text" placeholder="검색어를 입력하세요" />
              <button>글 작성하기</button>
            </SearchWrap>
            <ListWrap>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      backgroundColor: '#000000',
                      fontSize: '25px',
                      borderRadius: '50%',
                      padding: '10px 11.57px',
                      color: 'FFFFFF',
                    }}
                  />
                  <Link>
                    <strong>[공지]</strong> 작심하루 오픈을 축하해주세요!{' '}
                    <span>[5]</span>
                  </Link>
                </li>
              </ul>
            </ListWrap>
          </BoardWrap>
        </ContentWrap>
      </MainWrap>
    </>
  );
};

export default FreeBoardPage;
