import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase';
import { fetchCategoriesSuccess, fetchCategoriesFail } from './category-action';
import { CATEGORIES_ACTION_TYPES } from './category-type';

// export const fetchCategoriesAsync = () => async dispatch => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoriesArr = await getCategoriesAndDocuments('categoriesnpm');
//     dispatch(fetchCategoriesSuccess(categoriesArr));
//   } catch (err) {
//     dispatch(fetchCategoriesFail(err));
//   }
// };

export function* fetchCategoriesAsync() {
  try {
    const categoriesArr = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess(categoriesArr));
  } catch (err) {
    yield put(fetchCategoriesFail(err));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
