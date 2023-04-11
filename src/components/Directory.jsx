import React from "react";
import CategoriesCard from "./CategoriesCard";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((cat) => (
        <CategoriesCard key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default Directory;
