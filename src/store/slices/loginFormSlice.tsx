import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  isLoggedIn: boolean;
  email: string;
}

const initialState: LoginState = {
  isLoggedIn: false,
  email: ''
};

const loginFormSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string }>) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = '';
    }
  }
});

export const { login, logout } = loginFormSlice.actions;
export default loginFormSlice.reducer;