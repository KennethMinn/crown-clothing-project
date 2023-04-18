import { createAction } from '../../utils/reducer.utils';
import { CATEGORIES_ACTION_TYPE } from './category-type';

export const setCategories = categories =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categories);
