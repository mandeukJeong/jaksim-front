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

const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
`;

const TitleUserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 13.5px;

  p {
    margin-bottom: 3px;
  }

  h4 {
    color: #53bcb6;
  }
`;

const TitleInfoWrap = styled.div`
  display: flex;
  gap: 10px;
  font-size: 13.5px;
  color: #5f5f5f;

  div {
    display: flex;
    gap: 3px;

    &:first-child {
      color: #000000;
      font-weight: 500;

      span {
        color: #4f59ca;
      }
    }
  }
`;

const EditorWrap = styled.div`
  padding: 30px 0;
  font-size: 13px;
  line-height: 20px;
  border-bottom: 1px solid #a3a3a3;
`;

const CommentWrap = styled.div`
  background-color: #f8f8f8;

  li {
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px 30px;
    border-bottom: 1px solid #a3a3a3;
    line-height: 20px;

    strong {
      font-size: 14px;
      color: #53bcb6;
      font-weight: 500;
    }

    button {
      border: none;
      background-color: inherit;
      font-size: 13px;
      font-weight: 500;
      color: #4f59ca;
      cursor: pointer;
    }
  }
`;

const CommentWriteWrap = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #a3a3a3;

  input {
    width: 90%;
    height: 100px;
    border: 1px solid #bdbdbd;
  }

  button {
    color: #ffffff;
    background-color: #000000;
    border: none;
    padding: 20px 25px;
    cursor: pointer;
  }
`;

const ChangePageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    font-size: 15px;
    padding: 0 20px;
    cursor: pointer;
    border: none;
    background-color: inherit;
    border-right: 1px solid #000000;

    &:last-child {
      border-right: none;
    }
  }
`;

const BoardDetailPage = () => {
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
              <h3>우리 친구해요!</h3>
              <p>서로 힘이 되는 친구가 되어주세요</p>
            </CategoryWrap>
            <TitleWrap>
              <TitleUserWrap>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{
                    backgroundColor: '#D9D9D9',
                    fontSize: '20px',
                    borderRadius: '50%',
                    padding: '8px 9.25px',
                    color: 'FFFFFF',
                  }}
                />
                <div>
                  <p>소통할 고3 수험생 구해요~</p>
                  <h4>만득잉</h4>
                </div>
              </TitleUserWrap>
              <TitleInfoWrap>
                <div>
                  <h3>댓글</h3>
                  <span>2</span>
                </div>
                <div>
                  <h3>조회수</h3>
                  <span>10</span>
                </div>
                <p>2024.03.13 12:16</p>
              </TitleInfoWrap>
            </TitleWrap>
            <EditorWrap>
              <p>
                안녕하세요, 고3 수능을 준비하고 있는 수험생입니다!
                <br />
                이것 저것 공부 꿀팁이랑 수험 정보 공유할 고3 수험생 구합니다
                ㅎㅎ!
                <br />
                카톡 아이디 공유해서 카톡으로 얘기 나눠요~
              </p>
            </EditorWrap>
            <CommentWrap>
              <CommentWriteWrap>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{
                    backgroundColor: '#D9D9D9',
                    fontSize: '18px',
                    borderRadius: '50%',
                    padding: '5px 6.13px',
                    color: 'FFFFFF',
                  }}
                />
                <input type="text" />
                <button>등록</button>
              </CommentWriteWrap>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      backgroundColor: '#D9D9D9',
                      fontSize: '18px',
                      borderRadius: '50%',
                      padding: '5px 6.13px',
                      color: 'FFFFFF',
                    }}
                  />
                  <div>
                    <p>
                      <strong>ysj12</strong> 2024.03.14 12:44{' '}
                      <button>답글</button>
                    </p>
                    <p>만득님, 안녕하세요! 저랑 소통해요~</p>
                  </div>
                </li>
                <li style={{ paddingLeft: '45px' }}>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      backgroundColor: '#D9D9D9',
                      fontSize: '18px',
                      borderRadius: '50%',
                      padding: '5px 6.13px',
                      color: 'FFFFFF',
                    }}
                  />
                  <div>
                    <p>
                      <strong>만득잉</strong> 2024.03.14 12:58{' '}
                      <button>답글</button>
                    </p>
                    <p>안녕하세요~~ 좋아요 ㅎㅎ</p>
                  </div>
                </li>
              </ul>
            </CommentWrap>
          </BoardWrap>
        </ContentWrap>
        <ChangePageWrap>
          <button>이전글</button>
          <button>목록</button>
          <button>다음글</button>
        </ChangePageWrap>
      </MainWrap>
    </>
  );
};

export default BoardDetailPage;
