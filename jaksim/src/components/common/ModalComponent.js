import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onModalShow } from '../../store/modal';

const ModalWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrap = styled.div`
  position: absolute;
  width: 60%;
  max-width: 800px;
  background-color: white;
  text-align: center;
  padding: 30px 30px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);

  p {
    padding: 15px 0 30px 0;
    font-size: 14px;
    color: black;
  }

  button {
    width: 100%;
    background-color: black;
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
    border: none;
    padding: 12px;
    cursor: pointer;
  }
`;

const ModalComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalContent = useSelector((state) => state.modal);

  const onClick = () => {
    if (modalContent.subject === 'findpw') {
      dispatch(onModalShow(false));
      navigate('/changepw');
    }
  };

  return (
    <ModalWrap>
      <ContentWrap>
        <p>{modalContent.message}</p>
        <button onClick={onClick}>{modalContent.btnText}</button>
      </ContentWrap>
    </ModalWrap>
  );
};

export default ModalComponent;
