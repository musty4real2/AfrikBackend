import React from "react";

import arrowbutton from "../../assets/images/news/arrowbutton.png";
import { useNavigate } from "react-router-dom";

const NewsArchive = () => {
  const navigate = useNavigate();

  const handleFirstNewsClick = () => {
    navigate("/news-one"); // Assuming '/news-one' is the route for NewsOne component
  };

  const handleSecondNewsClick = () => {
    navigate("/news-two"); // Assuming '/news-one' is the route for NewsOne component
  };

  const handleThirdNewsClick = () => {
    navigate("/news-three"); // Assuming '/news-one' is the route for NewsOne component
  };

  return (
    <section className="bg-[#F9FEEC]">
      <div className="lg:px-[80px] md:px-[40px] px-4">
        <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px]  text-center pb-[64px] pt-6 ">
          News Archive
        </h2>
        <h2 className="text-left font-inter text-[36px] font-semibold leading-[43.2px] tracking-[-1.44px] pb-[56px] text-[#020C21]">
          January 2024
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-12">
          <div className="flex justify-center flex-col">
            <h2 className="text-[#000] font-Inter text-[16px] font-[500] leading-[23.2px] bg-[#FFCBB3] p-2 w-[126px] ">
              EDUCATION
            </h2>
            <h4 className="py-4 text-[#01010D] font-Inter text-[16px] font-[500] leading-[23.2px]">
              Dara’ afrik Foundation commemorates the World Girl Child Day
              celebration
            </h4>
            <p className="text-[#8A8A90] font-Inter text-[14px] font-[400] leading-[23.2px]">
              Dara'afrik Foundation's recent project, marking the World Girl
              Child Day celebration, has made a significant impact on both the
              local community and the broader public. The initiative, tagged
              "Girls Vision for the Future," reached over 400 pupils from St.
              Paul primary school...
            </p>
            <div className="pt-12 flex justify-start gap-2 items-center">
              <button
                onClick={handleFirstNewsClick}
                className="border-[1.5px] border-[#0A6EB4] text-[#0A6EB4] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#e7f1f8] hover:border-[#5b9ecd] hover:text-[#5b9ecd]  transition-colors duration-150 ease-in"
              >
                Read More
              </button>
              <img
                src={arrowbutton}
                alt="arrow"
                onClick={handleFirstNewsClick}
                className="cursor-pointer "
              />
            </div>
          </div>

          <div className="flex justify-center flex-col">
            <h2 className="text-[#000] font-Inter text-[16px] font-[500] leading-[23.2px] bg-[#FFCBB3] p-2 w-[126px]">
              EDUCATION
            </h2>
            <h4 className="py-4 text-[#01010D] font-Inter text-[16px] font-[500] leading-[23.2px]">
              Dara'Afrik Foundation: Shaping the Future Project
            </h4>
            <p className="text-[#8A8A90] font-Inter text-[14px] font-[400] leading-[23.2px]">
              Dara'Afrik Foundation's inaugural education project, "Shaping the
              Future", has made a significant impact in the community by
              reaching out to 300 pupils at Government Primary School, Itung
              Abak , Akwa Ibom State in Akwa Ibom State, Nigeria. This
              initiative was launched to provide essential..
            </p>
            <div className="pt-12 flex justify-start gap-2 items-center">
              <button
                onClick={handleSecondNewsClick}
                className=" border-[1.5px] border-[#0A6EB4] text-[#0A6EB4] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#e7f1f8] hover:border-[#5b9ecd] hover:text-[#5b9ecd]  transition-colors duration-150 ease-in"
              >
                Read More
              </button>
              <img
                src={arrowbutton}
                alt="arrow"
                onClick={handleSecondNewsClick}
                className="cursor-pointer "
              />
            </div>
          </div>

          <div className="flex justify-center flex-col">
            <h2 className="text-[#000] font-Inter text-[16px] font-[500] leading-[23.2px] bg-[#FFCBB3] p-2 w-[126px] ">
              HEALTH
            </h2>
            <h4 className="py-4 text-[#01010D] font-Inter text-[16px] font-[500] leading-[23.2px]">
              Report on Community Health Visit in Akwa Ibom State
            </h4>
            <p className="text-[#8A8A90] font-Inter text-[14px] font-[400] leading-[23.2px]">
              As part of Dara’afrik Foundation’s vision to support women’s
              health in rural communities, a team from the foundation embarked
              on a community visit to various locations in Akwa Ibom State. The
              visit served as a prelude to our upcoming women’s health tour
              scheduled for December,2024, aimed at creating...
            </p>
            <div className="pt-12 flex justify-start gap-2 items-center">
              <button
                onClick={handleThirdNewsClick}
                className=" border-[1.5px] border-[#0A6EB4] text-[#0A6EB4] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#e7f1f8] hover:border-[#5b9ecd] hover:text-[#5b9ecd]  transition-colors duration-150 ease-in"
              >
                Read More
              </button>
              <img
                src={arrowbutton}
                onClick={handleThirdNewsClick}
                alt="arrow"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-12 py-12">
          <div className="flex justify-center flex-col">
            <h2 className="text-[#000] font-Inter text-[16px] font-[500] leading-[23.2px] bg-[#FFCBB3] p-2 w-[126px] ">
              EDUCATION
            </h2>
            <h4 className="py-4 text-[#01010D] font-Inter text-[16px] font-[500] leading-[23.2px]">
              Dara’ afrik Foundation commemorates the World Girl Child Day
              celebration
            </h4>
            <p className="text-[#8A8A90] font-Inter text-[14px] font-[400] leading-[23.2px]">
              Dara'afrik Foundation's recent project, marking the World Girl
              Child Day celebration, has made a significant impact on both the
              local community and the broader public. The initiative, tagged
              "Girls Vision for the Future," reached over 400 pupils from St.
              Paul primary school...
            </p>
            <div className="pt-12 flex justify-start gap-2 items-center">
              <button
                onClick={handleFirstNewsClick}
                className="border-[1.5px] border-[#0A6EB4] text-[#0A6EB4] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#e7f1f8] hover:border-[#5b9ecd] hover:text-[#5b9ecd]  transition-colors duration-150 ease-in"
              >
                Read More
              </button>
              <img
                src={arrowbutton}
                alt="arrow"
                onClick={handleFirstNewsClick}
                className="cursor-pointer "
              />
            </div>
          </div>

          <div className="flex justify-center flex-col">
            <h2 className="text-[#000] font-Inter text-[16px] font-[500] leading-[23.2px] bg-[#FFCBB3] p-2 w-[126px]">
              EDUCATION
            </h2>
            <h4 className="py-4 text-[#01010D] font-Inter text-[16px] font-[500] leading-[23.2px]">
              Dara'Afrik Foundation: Shaping the Future Project
            </h4>
            <p className="text-[#8A8A90] font-Inter text-[14px] font-[400] leading-[23.2px]">
              Dara'Afrik Foundation's inaugural education project, "Shaping the
              Future", has made a significant impact in the community by
              reaching out to 300 pupils at Government Primary School, Itung
              Abak , Akwa Ibom State in Akwa Ibom State, Nigeria. This
              initiative was launched to provide essential..
            </p>
            <div className="pt-12 flex justify-start gap-2 items-center">
              <button
                onClick={handleSecondNewsClick}
                className=" border-[1.5px] border-[#0A6EB4] text-[#0A6EB4] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#e7f1f8] hover:border-[#5b9ecd] hover:text-[#5b9ecd]  transition-colors duration-150 ease-in"
              >
                Read More
              </button>
              <img
                src={arrowbutton}
                alt="arrow"
                onClick={handleSecondNewsClick}
                className="cursor-pointer "
              />
            </div>
          </div>

          <div className="flex justify-center flex-col">
            <h2 className="text-[#000] font-Inter text-[16px] font-[500] leading-[23.2px] bg-[#FFCBB3] p-2 w-[126px] ">
              HEALTH
            </h2>
            <h4 className="py-4 text-[#01010D] font-Inter text-[16px] font-[500] leading-[23.2px]">
              Report on Community Health Visit in Akwa Ibom State
            </h4>
            <p className="text-[#8A8A90] font-Inter text-[14px] font-[400] leading-[23.2px]">
              As part of Dara’afrik Foundation’s vision to support women’s
              health in rural communities, a team from the foundation embarked
              on a community visit to various locations in Akwa Ibom State. The
              visit served as a prelude to our upcoming women’s health tour
              scheduled for December,2024, aimed at creating...
            </p>
            <div className="pt-12 flex justify-start gap-2 items-center">
              <button
                onClick={handleThirdNewsClick}
                className=" border-[1.5px] border-[#0A6EB4] text-[#0A6EB4] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#e7f1f8] hover:border-[#5b9ecd] hover:text-[#5b9ecd]  transition-colors duration-150 ease-in"
              >
                Read More
              </button>
              <img
                src={arrowbutton}
                onClick={handleThirdNewsClick}
                alt="arrow"
              />
            </div>
          </div>
        </div>

        <h2 className="text-left font-inter text-[36px] font-semibold leading-[43.2px] tracking-[-1.44px] pb-[56px] pt-8 text-[#020C21]">
          February 2024
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-12 pb-[80px]">
          <div className="flex justify-center flex-col">
            <h2 className="text-[#000] font-Inter text-[16px] font-[500] leading-[23.2px] bg-[#FFCBB3] p-2 w-[126px] ">
              EDUCATION
            </h2>
            <h4 className="py-4 text-[#01010D] font-Inter text-[16px] font-[500] leading-[23.2px]">
              Dara’ afrik Foundation commemorates the World Girl Child Day
              celebration
            </h4>
            <p className="text-[#8A8A90] font-Inter text-[14px] font-[400] leading-[23.2px]">
              Dara'afrik Foundation's recent project, marking the World Girl
              Child Day celebration, has made a significant impact on both the
              local community and the broader public. The initiative, tagged
              "Girls Vision for the Future," reached over 400 pupils from St.
              Paul primary school...
            </p>
            <div className="pt-12 flex justify-start gap-2 items-center">
              <button
                onClick={handleFirstNewsClick}
                className="border-[1.5px] border-[#0A6EB4] text-[#0A6EB4] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#e7f1f8] hover:border-[#5b9ecd] hover:text-[#5b9ecd]  transition-colors duration-150 ease-in"
              >
                Read More
              </button>
              <img
                src={arrowbutton}
                alt="arrow"
                onClick={handleFirstNewsClick}
                className="cursor-pointer "
              />
            </div>
          </div>

          <div className="flex justify-center flex-col">
            <h2 className="text-[#000] font-Inter text-[16px] font-[500] leading-[23.2px] bg-[#FFCBB3] p-2 w-[126px]">
              EDUCATION
            </h2>
            <h4 className="py-4 text-[#01010D] font-Inter text-[16px] font-[500] leading-[23.2px]">
              Dara'Afrik Foundation: Shaping the Future Project
            </h4>
            <p className="text-[#8A8A90] font-Inter text-[14px] font-[400] leading-[23.2px]">
              Dara'Afrik Foundation's inaugural education project, "Shaping the
              Future", has made a significant impact in the community by
              reaching out to 300 pupils at Government Primary School, Itung
              Abak , Akwa Ibom State in Akwa Ibom State, Nigeria. This
              initiative was launched to provide essential..
            </p>
            <div className="pt-12 flex justify-start gap-2 items-center">
              <button
                onClick={handleSecondNewsClick}
                className=" border-[1.5px] border-[#0A6EB4] text-[#0A6EB4] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#e7f1f8] hover:border-[#5b9ecd] hover:text-[#5b9ecd]  transition-colors duration-150 ease-in"
              >
                Read More
              </button>
              <img
                src={arrowbutton}
                alt="arrow"
                onClick={handleSecondNewsClick}
                className="cursor-pointer "
              />
            </div>
          </div>

          <div className="flex justify-center flex-col">
            <h2 className="text-[#000] font-Inter text-[16px] font-[500] leading-[23.2px] bg-[#FFCBB3] p-2 w-[126px] ">
              HEALTH
            </h2>
            <h4 className="py-4 text-[#01010D] font-Inter text-[16px] font-[500] leading-[23.2px]">
              Report on Community Health Visit in Akwa Ibom State
            </h4>
            <p className="text-[#8A8A90] font-Inter text-[14px] font-[400] leading-[23.2px]">
              As part of Dara’afrik Foundation’s vision to support women’s
              health in rural communities, a team from the foundation embarked
              on a community visit to various locations in Akwa Ibom State. The
              visit served as a prelude to our upcoming women’s health tour
              scheduled for December,2024, aimed at creating...
            </p>
            <div className="pt-12 flex justify-start gap-2 items-center">
              <button
                onClick={handleThirdNewsClick}
                className=" border-[1.5px] border-[#0A6EB4] text-[#0A6EB4] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#e7f1f8] hover:border-[#5b9ecd] hover:text-[#5b9ecd]  transition-colors duration-150 ease-in"
              >
                Read More
              </button>
              <img
                src={arrowbutton}
                onClick={handleThirdNewsClick}
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsArchive;
