import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    message: '',
    btnText: '',
  },
  reducers: {
    changModalText(state, { payload: { message, btnText } }) {
      state.message = message;
      state.btnText = btnText;
    },
  },
});

export const { changModalText } = modal.actions;

export default modal;
