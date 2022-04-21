import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { RootState } from 'store/store';

export interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

// selectors
export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export default userSlice.reducer;
