import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../components/common/HeaderComponent';
import IconImg from './../../assets/img/icon_wrap.png';
import JayImg from './../../assets/img/Jay.png';
import GroupImg from './../../assets/img/group.png';
import GoalImg from './../../assets/img/goal.png';
import FriendsImg from './../../assets/img/add_friends.png';

const MainWrap = styled.div`
  width: 100%;
`;

const IconWrap = styled.div`
  margin-top: 55px;
  width: 100%;
  height: 74vh;
  background-image: url(${IconImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const IntroduceWrap = styled.div`
  background-color: #333245;
  width: 100%;
  height: 600px;
  padding: 80px 80px 40px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  img {
    position: absolute;
    top: 80px;
    width: 10%;
    max-width: 130px;
    padding: 20px 25px;
    background: #4f59ca;
    border-radius: 50%;
    z-index: 1;
  }

  p {
    line-height: 30px;
    font-size: 20px;
  }
`;

const IntroduceTextWrap = styled.div`
  width: 60%;
  background-color: white;
  padding: 100px;
  border-radius: 100px;
  position: absolute;
  top: 200px;
`;

const FuncWrap = styled.div`
  width: 100%;
  height: 600px;
  text-align: center;
  padding: 60px 80px;
  background-color: white;

  h4 {
    color: #4f59ca;
    font-size: 25px;
    margin-bottom: 50px;
  }

  span {
    font-weight: 700;
  }
`;

const FuncElement = styled.div`
  display: flex;
  width: 100%;

  > div {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    background-color: rgba(78, 92, 195, 0.5);
    color: white;
    padding: 10px 50px;
    border-radius: 30px;
    font-size: 20px;
    font-weight: 700;
  }
`;

const FuncImgWrap = styled.div`
  width: 70%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  img {
    width: 100%;
  }
`;

const JoinWrap = styled.div`
  width: 100%;
  height: 600px;
  background-color: #fef9ee;
  text-align: center;
  padding: 150px;
  position: relative;

  p {
    font-size: 25px;
    line-height: 40px;
    color: #4e5cc3;
    margin-bottom: 50px;
  }

  a {
    text-decoration: none;
    background-color: #4e5cc3;
    color: white;
    font-weight: 700;
    font-size: 20px;
    padding: 20px 40px;
    border-radius: 30px;
  }
`;

const HomePage = () => {
  return (
    <MainWrap>
      <HeaderComponent />
      <IconWrap />
      <IntroduceWrap>
        <img src={JayImg} alt="Jay" />
        <IntroduceTextWrap>
          <p>
            다양한 사람들과 함께 만나며 마음껏 지식을 공유해 보세요.
            <br />
            작심하루가 여러분들의 앞으로의 여정을 응원하겠습니다.
            <br />
            From. 에디터 제이
          </p>
        </IntroduceTextWrap>
      </IntroduceWrap>
      <FuncWrap>
        <h4>
          <span>작심하루</span>에서는 가능해요.
        </h4>
        <FuncElement>
          <div>
            <FuncImgWrap>
              <img src={GroupImg} alt="그룹스터디" />
            </FuncImgWrap>
            <p>마이페이지</p>
          </div>
          <div>
            <FuncImgWrap>
              <img src={GoalImg} alt="목표 설정" />
            </FuncImgWrap>
            <p>목표 설정</p>
          </div>
          <div>
            <FuncImgWrap>
              <img src={FriendsImg} alt="친구 추가" />
            </FuncImgWrap>
            <p>커뮤니티</p>
          </div>
        </FuncElement>
      </FuncWrap>
      <JoinWrap>
        <p>
          작심하루가 도와줄게요!
          <br />
          다양한 사람들을 만나 함께 공부하고
          <br />
          계속 성장 하세요!
        </p>
        <Link to="/register">5초만에 작심하루러 ✍🏻</Link>
      </JoinWrap>
    </MainWrap>
  );
};

export default HomePage;
