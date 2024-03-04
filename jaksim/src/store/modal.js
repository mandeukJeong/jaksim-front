import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    message: '',
    btnText: '',
  },
  reducers: {
    changeModalText(state, { payload: { message, btnText } }) {
      state.message = message;
      state.btnText = btnText;
    },
  },
});

export const { changeModalText } = modal.actions;

export default modal;
