import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

import { Category, CategoryMap } from 'Category-Types';

export interface CategoryState {
  categories: Category[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: CategoryState = {
  categories: [],
  loading: 'idle',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategoriesStart: (state) => {
      state.loading = 'pending';
    },
    fetchCategoriesSuccess: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
      state.loading = 'succeeded';
    },
    fetchCategoriesFailed: (state) => {
      state.loading = 'failed';
    },
  },
});

// actions
export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} = categorySlice.actions;

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

export const selectIsLoading = createSelector(
  selectCategory,
  (categorySlice) => categorySlice.loading === 'pending',
);

export default categorySlice.reducer;
