import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from './categories-preview';
import Category from './Category';
import { useEffect } from 'react';
import { fetchCategoriesAsync } from '../store/categories/category-action';
import { getCategoriesAndDocuments } from '../utils/firebase';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
