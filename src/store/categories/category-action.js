import { createAction } from '../../utils/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './category-type';
import { getCategoriesAndDocuments } from '../../utils/firebase';

// export const setCategories = categories =>
//   createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categories);

const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

const fetchCategoriesSuccess = newCategories =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, newCategories);

const fetchCategoriesFail = error =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async dispatch => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArr = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArr));
  } catch (err) {
    dispatch(fetchCategoriesFail(err));
  }
};
