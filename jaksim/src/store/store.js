import { configureStore } from '@reduxjs/toolkit';
import modal from './modal';
import user from './user';

export default configureStore({
  reducer: { modal: modal.reducer, user: user.reducer },
});
