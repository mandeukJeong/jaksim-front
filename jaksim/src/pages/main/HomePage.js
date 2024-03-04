import React from 'react';
import styled from 'styled-components';
import HeaderComponent from '../../components/common/HeaderComponent';
import IconImg from './../../assets/img/icon_wrap.png';

const MainWrap = styled.div`
  width: 100%;
`;

const IconWrap = styled.div`
  margin-top: 55px;
  width: 100%;
  height: 800px;
  background-image: url(${IconImg});
  background-size: contain;
  background-repeat: no-repeat;
`;

const HomePage = () => {
  return (
    <MainWrap>
      <HeaderComponent />
      <IconWrap />
      {/* <div class="introduce-wrap">
            <div class="circle yellow-intro"></div>
            <div class="circle border-yellow"></div>
            <div class="circle border-purple"></div>
            <div class="circle shadow-purple"></div>
            <img src="../img/Jay.png">
            <div>
                <p>
                    다양한 사람들과 함께 만나며 마음껏 지식을 공유해 보세요.<br>
                    작심하루가 여러분들의 앞으로의 여정을 응원하겠습니다.<br>
                    From. 에디터 제이
                </p>
            </div>
        </div>
        <div class="func-wrap">
            <h4>
                <span>작심하루</span>에서는 가능해요.
            </h4>
            <div class="func-element">
                <div>
                    <div class="func-img">
                        <img src="../img/group.png">
                    </div>
                    <p>그룹스터디</p>
                </div>
                <div>
                    <div class="func-img">
                        <img src="../img/goal.png">
                    </div>
                    <p>목표 설정</p>
                </div>
                <div>
                    <div class="func-img">
                        <img src="../img/add-friends.png">
                    </div>
                    <p>친구 추가</p>
                </div>
            </div>
        </div>
        <div class="join-wrap">
            <p>
                작심하루가 도와줄게요!<br>
                다양한 사람들을 만나 함께 공부하고<br>
                계속 성장 하세요!
            </p>
            <a href="#">5초만에 작심하루러 ✍🏻</a>
            <div class="circle pink"></div>
            <div class="circle purple"></div>
            <div class="circle yellow"></div>
        </div>
        <div class="design-wrap"></div> */}
    </MainWrap>
  );
};

export default HomePage;
