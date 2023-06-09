import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopCard from '../components/ShopCard';
import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectIsLoading,
} from '../store/categories/category-selector';
import Spinner from '../components/spinner';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className=" fw-bolder mb-4 text-center">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map(product => (
              <ShopCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
};

export default Category;
