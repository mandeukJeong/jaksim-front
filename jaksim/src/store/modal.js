import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    subject: '',
    message: '',
    btnText: '',
    isShow: false,
  },
  reducers: {
    changeModalText(state, { payload: { subject, message, btnText } }) {
      state.subject = subject;
      state.message = message;
      state.btnText = btnText;
    },
    onModalShow(state, { payload }) {
      state.isShow = payload;
    },
  },
});

export const { changeModalText, onModalShow } = modal.actions;

export default modal;
