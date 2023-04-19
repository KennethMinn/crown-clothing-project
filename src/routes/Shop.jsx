import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from './categories-preview';
import Category from './Category';
import { useEffect } from 'react';
import { setCategories } from '../store/categories/category-action';
import { getCategoriesAndDocuments } from '../utils/firebase';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArr = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArr));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
