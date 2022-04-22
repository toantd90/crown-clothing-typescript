import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { RootState } from 'store/store';

export interface UserState {
  isUserSignedIn: boolean;
}

const initialState: UserState = {
  isUserSignedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsUserSignedIn: (state, action: PayloadAction<boolean>) => {
      state.isUserSignedIn = action.payload;
    },
  },
});

export const { setIsUserSignedIn } = userSlice.actions;

// selectors
export const selectIsUserSignedIn = createSelector(
  (state: RootState) => state.user.isUserSignedIn,
  (user) => user,
);

export default userSlice.reducer;
