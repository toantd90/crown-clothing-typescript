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
export const selectCategoryMap = createSelector(
  (state: RootState) => {
    console.log('category map selector');

    return state.category.categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
  },
  (category) => category,
);

export default categorySlice.reducer;
