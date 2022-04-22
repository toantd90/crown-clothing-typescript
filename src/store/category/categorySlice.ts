import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

import { Category, CategoryMap } from 'Category-Types';

export interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;

// selectors
const selectCategory = (state: RootState) => state.category;

const selectCategories = createSelector(
  [selectCategory],
  (categorySlice) => categorySlice.categories,
);

export const selectCategoryMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap),
);

export default categorySlice.reducer;
