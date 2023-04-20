import { createAction } from '../../utils/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './category-type';

// export const setCategories = categories =>
//   createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = newCategories =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, newCategories);

export const fetchCategoriesFail = error =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// export const fetchCategoriesAsync = () => async dispatch => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoriesArr = await getCategoriesAndDocuments('categories');
//     dispatch(fetchCategoriesSuccess(categoriesArr));
//   } catch (err) {
//     dispatch(fetchCategoriesFail(err));
//   }
// };
