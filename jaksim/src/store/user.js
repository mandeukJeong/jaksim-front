import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    userInfo: {
      email: '',
      eventCheck: null,
      nickname: '',
      authId: null,
    },
  },
  reducers: {
    changeUserInfo(
      state,
      { payload: { isLogin, email, eventCheck, nickname, authId } }
    ) {
      state.isLogin = isLogin;
      state.userInfo.email = email;
      state.userInfo.eventCheck = eventCheck;
      state.userInfo.nickname = nickname;
      state.userInfo.authId = authId;
    },
  },
});

export const { changeUserInfo } = user.actions;

export default user;
