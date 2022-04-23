import {
  createSlice,
  createSelector,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { RootState } from 'store/store';

import { getCategoriesAndDocuments } from 'utils/firebase';

import { Category, CategoryMap } from 'Category-Types';

export const fetchCategoriesAsync = createAsyncThunk(
  'category/fetchCategories',
  async () => await getCategoriesAndDocuments(),
);

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAsync.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
      state.categories = action.payload as Category[];
      state.loading = 'succeeded';
    });
    builder.addCase(fetchCategoriesAsync.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

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
