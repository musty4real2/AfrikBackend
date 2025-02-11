// Card.js
import React from "react";
import "./NewsCard.css";

const NewsCard = ({ image, title, description }) => {
  return (
    <div className="max-w-[360px] bg-white rounded-[16px] px-4 py-4 shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full  object-cover" />
      <div className="p-4">
        <h2 className="news-card-title">{title}</h2>
        <p className="news-card-description">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
