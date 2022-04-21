import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

import { CategoryMap } from 'Category-Types';

export interface CategoryState {
  categoriesMap: CategoryMap;
}

const initialState: CategoryState = {
  categoriesMap: {},
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoriesMap: (state, action: PayloadAction<CategoryMap>) => {
      state.categoriesMap = action.payload;
    },
  },
});

export const { setCategoriesMap } = categorySlice.actions;

// selectors
export const selectCategoryMap = (state: RootState) =>
  state.category.categoriesMap;

export default categorySlice.reducer;
