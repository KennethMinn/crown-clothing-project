import React from "react";

const CategoriesCard = ({ cat }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${cat.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{cat.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
