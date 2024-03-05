import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    userInfo: {
      email: '',
      eventCheck: null,
      nickname: '',
    },
  },
  reducers: {
    changeUserInfo(
      state,
      { payload: { isLogin, email, eventCheck, nickname } }
    ) {
      state.isLogin = isLogin;
      state.userInfo.email = email;
      state.userInfo.eventCheck = eventCheck;
      state.userInfo.nickname = nickname;
    },
  },
});

export const { changeUserInfo } = user.actions;

export default user;
