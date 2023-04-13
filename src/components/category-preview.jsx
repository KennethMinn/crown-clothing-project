import React from "react";
import ShopCard from "./ShopCard";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <Link to={title} className=" text-decoration-none text-dark mb-3">
        <h2>
          <span className="title fw-bolder">{title.toUpperCase()}</span>
        </h2>
      </Link>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ShopCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
