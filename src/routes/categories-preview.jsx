import { useState, useContext, Fragment } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import ShopCard from "../components/ShopCard";
import CategoryPreview from "../components/category-preview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
