import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderComponent from './../../components/common/HeaderComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
  padding: 40px 0;
  display: flex;
  width: 90%;
  gap: 40px;
`;

const MenuWrap = styled.div`
  width: 12%;
  margin-top: 15px;
  li {
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 40px;
  }

  a {
    text-decoration: none;
    color: #000000;
    font-size: 16px;
    font-weight: 500;
  }
`;

const BoardWrap = styled.div`
  width: 88%;
`;

const CategoryWrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-end;
  gap: 15px;

  h3 {
    font-weight: 700;
    font-size: 28px;
  }

  p {
    font-size: 15px;
    color: #999999;
    font-weight: 400;
  }
`;

const SearchWrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #bebebe;

  div {
    cursor: pointer;
  }

  input {
    padding: 5px 0;
    margin-right: 5px;
    border: none;
  }

  input::placeholder {
    color: #d8d8d8;
  }

  button {
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    background-color: rgba(217, 217, 217, 0.8);
    border: none;
    color: #ffffff;
    padding: 10px 25px;
  }
`;

const ListWrap = styled.div`
  width: 100%;
  background-color: rgba(216, 216, 216, 0.1);

  li {
    display: flex;
    padding: 15px 30px;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #d9d9d9;

    &:first-child {
      border-top: 1px solid #d9d9d9;
    }
  }

  a {
    text-decoration: none;
    font-size: 15px;
    color: #000000;

    strong {
      color: #4f59ca;
      font-weight: 700;
    }

    span {
      color: #a9a9a9;
      font-weight: 700;
    }
  }

  p {
    margin-top: 5px;
    font-size: 12px;
  }
`;

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
              <div>
                <input type="text" placeholder="검색어를 입력하세요" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <button>글 작성하기</button>
            </SearchWrap>
            <ListWrap>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      backgroundColor: '#000000',
                      fontSize: '20px',
                      borderRadius: '50%',
                      padding: '8px 9.25px',
                      color: 'FFFFFF',
                    }}
                  />
                  <div>
                    <Link>
                      <strong>[공지]</strong> 작심하루 오픈을 축하해주세요!{' '}
                      <span>[5]</span>
                    </Link>
                    <p>운영자</p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      backgroundColor: '#000000',
                      fontSize: '20px',
                      borderRadius: '50%',
                      padding: '8px 9.25px',
                      color: 'FFFFFF',
                    }}
                  />
                  <div>
                    <Link>
                      <strong>[공지]</strong> 작심하루 오픈을 축하해주세요!{' '}
                      <span>[5]</span>
                    </Link>
                    <p>운영자</p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      backgroundColor: '#000000',
                      fontSize: '20px',
                      borderRadius: '50%',
                      padding: '8px 9.25px',
                      color: 'FFFFFF',
                    }}
                  />
                  <div>
                    <Link>
                      <strong>[공지]</strong> 작심하루 오픈을 축하해주세요!{' '}
                      <span>[5]</span>
                    </Link>
                    <p>운영자</p>
                  </div>
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
