import React, { useState } from "react";
import image1 from "../../assets/images/ourWork/imabongImg.png";
import image2 from "../../assets/images/ourWork/Angela.png";
import image3 from "../../assets/images/ourWork/ImaAbasiImg.png";
import image4 from "../../assets/images/ourWork/IdemeImg.png";
import grayArrow from "../../assets/images/ourWork/grayArrow.png";
import blueArrow from "../../assets/images/ourWork/blueArrow.png";
import topQuote from "../../assets/images/ourWork/topQuote.png";
import bottomQuote from "../../assets/images/ourWork/bottomQuote.png";

const stories = [
  {
    id: 1,
    name: "Imaobong Ebenezer",
    position: "Vocal Person and Women Leader for Itung Village",
    image: image1, // Replace placeholder path
    videoLink: "#",
    message: [
      " I appreciate the Dara’Afrik Foundation for her goodwill and for making sure that the vision of helping women is real.",
      "I value the healthcare services provided and have faith that more initiatives will be implemented to prevent untimely deaths among our women. I’m also extending my appreciation to the leadership of Dara'Afrik Foundation for their good gesture towards the women in my community.",
    ],
  },
  {
    id: 2,
    name: "Angela Essiet",
    position: "The Head Teacher of Saint Paul Primary School",
    image: image2, // Replace placeholder path
    videoLink: "#",
    message: [
      " I want to take a moment to express my heartfelt appreciation for the Dara’Afrik Foundation for a successful event marking the International Girls Day.",
      "I was truly impressed by the meticulous organization, and the thoughtful provision of writing materials for our students.",
      "I encourage all the girls to take their education seriously and to apply the valuable lessons they've learned from the facilitators at the Dara’Afrik Foundation, especially regarding personal hygiene and to never doubt their potential to achieve great things just because they are girls.",
      "Lastly, I want to extend my gratitude to the Dara’Afrik Foundation for their incredible efforts, and I hope to see more programs and projects implemented in our school in the future.",
    ],
  },
  {
    id: 3,
    name: "Ima-abasi Emmanson",
    position: "Primary 6 pupil at St. Paul primary school, Abak",
    image: image3, // Replace placeholder path
    videoLink: "#",
    message: [
      "I want to thank Dara’Afrik Foundation for giving us writing materials, books, pencils, erasers and rulers, thank you.",
    ],
  },
  {
    id: 4,
    name: "Udeme Udoh",
    position: "Community Member",
    image: image4, // Replace placeholder path
    videoLink: "#",
    message: [
      "I have a son in the university - Akwa Ibom State University, that I am supporting through my farm work. I grow different kinds of plants, melon, cocoyam and vegetable, and after selling them, I use the money to support myself because I'm a widow and also my son in the university.",
      "I call on Dara’Africk foundation to continue in her good work to support me so that life can be easier and better for me.",
      "I appreciate all the good work Dara'Afrik Foundation has been doing, and call for more support so I can buy fertilizer and insecticide, which we use to help this plant thrive",
    ],
  },
];

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(stories[0]);

  return (
    <div className="container lg:px-[80px] md:px-[40px] px-4 py-8 bg-[#FFF]">
      <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[40px] font-medium leading-[48px] tracking-[-1.6px] pb-12 text-center">
        Our Success Stories
      </h2>

      <div className="flex md:flex-col lg:flex-row flex-col gap-6 justify-center items-center">
        {/* Left Names List */}
        <div className="flex flex-col gap-4 md:w-full w-full lg:w-[371px]">
          {stories.map((story) => (
            <button
              key={story.id}
              className={`group rounded-[10px] px-[30px] py-6 flex justify-between items-center lg:w-[344px] md:w-full h-[77px] shadow-md transition-all duration-300 ${
                activeStory.id === story.id
                  ? "bg-[#F3FAFD] text-[#3B8BC3] hover:text-[#5B9ECD] font-bold font-inter text-[24px] leading-[28.8px] tracking-[0.48px]"
                  : "bg-[#F9FAFB] text-[#8B8F99] hover:text-[#5B9ECD] font-medium font-inter text-[24px] leading-[28.8px] tracking-[0.48px]"
              }`}
              onClick={() => setActiveStory(story)}
            >
              {/* Name aligned to the start */}
              <span className="text-left">{story.name}</span>

              {/* Arrow aligned to the end */}
              <div className="relative w-[20px] h-[15px]">
                {/* Default arrow (gray or blue based on active state) */}
                <img
                  src={activeStory.id === story.id ? blueArrow : grayArrow}
                  alt="Arrow"
                  className="w-full h-full absolute transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Hover state arrow (always blue) */}
                <img
                  src={blueArrow}
                  alt="Arrow"
                  className="w-full h-full absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Right Display Section */}
        <div className="flex-1 flex justify-center items-center md:flex-col ">
          <div className="flex flex-col  lg:flex-row md:flex-col gap-6 items-center">
            {/* Image */}
            <div className="lg:w-[60%] md:px-0 px-6 md:pb-0 pb-6 ">
              <img
                src={activeStory.image}
                alt={activeStory.name}
                className="w-[289px] h-[325px] rounded-lg shadow-lg md:text-center"
              />
              <h3 className=" font-bold font-inter text-[24px] leading-[28.8px] tracking-[0.48px] text-[#353D4D] pt-6">
                {activeStory.name}
              </h3>
              <p className="font-inter text-[14px] font-normal text-[#555C6A] leading-[20.3px] tracking-[0.48px]">
                {activeStory.position}
              </p>
            </div>

            {/* Text Content */}
            <div className="relative lg:w-[80%] md:w-full w-full md:px-6 px-6 lg:px-0">
              {/* Opening Quote */}

              <img
                src={topQuote}
                alt=""
                className="absolute lg:top-[-20px] lg:left-[15px] md:left-[10px] left-[15px] top-[-20px] md:top-[-10px] transform -translate-x-full"
              />
              {/* Blockquote Content */}
              <blockquote className="font-inter text-[16px] leading-[23.2px] font-medium  text-[#555C6A]  relative">
                {activeStory.message.map((paragraph, index) => (
                  <p key={index} className="text-[16px] leading-[23.2px] mb-4">
                    {paragraph}
                  </p>
                ))}

                {/* Closing Quote */}

                <img
                  src={bottomQuote}
                  alt=""
                  className="absolute bottom-[-30px] right-[30px]"
                />
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
