import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from 'utils/firebase';

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './slice';

export function* fetchCategoriesAsync(): any {
  try {
    const categories = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    console.error(error);
    yield put(fetchCategoriesFailed());
  }
}

export function* onFetchCategories() {
  yield takeLatest(fetchCategoriesStart.type, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
