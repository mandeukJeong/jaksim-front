import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderComponent from './../../components/common/HeaderComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

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
  margin-top: 70px;
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

const WriteWrap = styled.form`
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
  gap: 20px;
  margin-bottom: 20px;

  select {
    width: 15%;
    padding: 10px 20px;
    text-align: center;
    border: 1px solid #0000004d;
  }

  input {
    width: 85%;
    padding: 10px;
    border: 1px solid #0000004d;

    &::placeholder {
      color: #000000;
    }
  }
`;

const EditorWrap = styled.div`
  margin-bottom: 20px;

  .wrapper-class {
    width: 100%;
    border: 1px solid #0000004d;
  }

  .editor {
    border-top: 1px solid #0000004d;
    padding: 10px 20px;
    height: 50vh;
  }

  .toolbar-class {
    background: #e3e3e3cc;
    margin: 0;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  button {
    cursor: pointer;
    font-size: 13px;
    font-weight: 700;
    padding: 8px 35px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backColor};
  }
`;

const BoardWritePage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

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
          <WriteWrap>
            <CategoryWrap>
              <h3>하루안내</h3>
              <p>알아두면 유익한 서비스 꿀팁 참고하세요!</p>
            </CategoryWrap>
            <TitleWrap>
              <select>
                <option>말머리 없음</option>
              </select>
              <input type="text" placeholder="제목을 입력해 주세요." />
            </TitleWrap>
            <EditorWrap>
              <Editor
                wrapperClassName="wrapper-class"
                editorClassName="editor"
                toolbarClassName="toolbar-class"
                toolbar={{
                  options: [
                    'inline',
                    'fontSize',
                    'list',
                    'textAlign',
                    'history',
                  ],
                  list: { inDropdowm: true },
                  textAlign: { inDropdowm: true },
                  link: { inDropdowm: true },
                  history: { inDropdowm: true },
                }}
                placeholder="이 게시판은 공지사항을 작성할 수 있는 하루안내입니다."
                localization={{
                  locale: 'ko',
                }}
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
              />
            </EditorWrap>
            <ButtonWrap>
              <button
                style={{
                  color: '#ffffff',
                  backgroundColor: '#000000CC',
                  border: 'none',
                }}
              >
                등록
              </button>
              <button
                style={{
                  color: '#000000',
                  backgroundColor: '#FFFFFFCC',
                  border: '1px solid #0000004D',
                }}
              >
                취소
              </button>
            </ButtonWrap>
          </WriteWrap>
        </ContentWrap>
      </MainWrap>
    </>
  );
};

export default BoardWritePage;
