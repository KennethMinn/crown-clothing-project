import React from "react";
import { useNavigate } from "react-router-dom";

const DirectoryCard = ({ cat }) => {
  const { route } = cat;
  const nav = useNavigate();
  const navigateHandler = () => nav(route);

  return (
    <div className="directory-item-container" onClick={navigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${cat.imageUrl})` }}
      />
      <div className="body">
        <h2>{cat.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryCard;
