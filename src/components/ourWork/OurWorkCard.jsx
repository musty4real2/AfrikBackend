import React from "react";
import "./OurWorkCard.css";

const OurWorkCard = ({ ourWorks }) => {
  // Add a check to ensure ourWorks is defined and is an array
  if (!Array.isArray(ourWorks)) {
    return <p>No works available</p>;
  }

  return (
    <div className="flex flex-wrap md:flex-col lg:flex-row justify-center items-center gap-[24px] pt-8">
      {ourWorks.map((ourWork, index) => {
        const { title, content,summary,featured_image } = ourWork;

        return (
          <div
            key={index}
            className="max-w-[360px] bg-white rounded-[16px] px-4 py-4 shadow-md overflow-hidden"
          >
            {/* Small screen image */}
            <img
              src={featured_image}
              alt={title}
              className="w-full object-cover md:hidden block"
            />

            {/* Large screen image */}
            <img
              src={featured_image}
              alt={title}
              className="w-full object-cover md:block hidden"
            />

            <div className="p-4">
              <h2 className="news-card-title">{title}</h2>
              <p className="news-card-description">{content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OurWorkCard;
