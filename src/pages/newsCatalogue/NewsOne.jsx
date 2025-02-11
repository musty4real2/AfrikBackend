import React from "react";
import newsOneHeroImg from "../../assets/images/news/newsOneHeroImg.png";
import RowOneImg1 from "../../assets/images/news/RowOneImg1.png";
import RowOneImg2 from "../../assets/images/news/RowOneImg2.png";
import RowOneImg3 from "../../assets/images/news/RowOneImg3.png";
import RowTwoImg1 from "../../assets/images/news/RowTwoImg1.png";
import RowTwoImg2 from "../../assets/images/news/RowTwoImg2.png";
import RowTwoImg3 from "../../assets/images/news/RowTwoImg3.png";
import RowThreeImg1 from "../../assets/images/news/RowThreeImg1.png";
import RowThreeImg2 from "../../assets/images/news/RowThreeImg2.png";
import RowThreeImg3 from "../../assets/images/news/RowThreeImg3.png";
import RowThreeImg4 from "../../assets/images/news/RowThreeImg4.png";
import RowFourImg1 from "../../assets/images/news/RowFourImg1.png";
import RowFourImg2 from "../../assets/images/news/RowFourImg2.png";
import { useNavigate } from "react-router-dom";

const NewsOne = () => {
  const navigate = useNavigate();

  const handleSecondNewsClick = () => {
    console.log("Navigating to /news-two");
    navigate("/news-two"); // Assuming '/news-one' is the route for NewsOne component
  };

  const handleThirdNewsClick = () => {
    navigate("/news-three"); // Assuming '/news-one' is the route for NewsOne component
  };
  return (
    <section className="bg-[#F9FEEC]  overflow-x-hidden">
      <img src={newsOneHeroImg} alt="heroImage" />
      <div className="lg:px-[80px] md:px-[40px] px-4">
        <div className="  py-[64px]  ">
          <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px] lg:text-left md:text-center text-center pb-8 ">
            Dara’Afrik Foundation commemorates the World Girl Child Day
            celebration
          </h2>
          <p className="pb-6 text-[#555C6A] leading-[26.1px] font-inter font-medium text-[18px]">
            Dara'afrik Foundation's recent project, marking the World Girl Child
            Day celebration, has made a significant impact on both the local
            community and the broader public. The initiative, tagged "Girls
            Vision for the Future," reached over 400 pupils from St. Paul
            Primary School, providing them with essential educational materials,
            including books, stationery, and school uniforms. This effort
            greatly benefited vulnerable pupils, ensuring that girls in need
            received proper school attire, which enhanced their sense of
            belonging and confidence.
          </p>
          <p className="pb-6 text-[#555C6A] leading-[26.1px] font-inter font-medium text-[18px]">
            The positive media coverage following the project has helped elevate
            the foundation's profile, showcasing its commitment to advancing
            education and supporting vulnerable children. Through strategic
            media engagement, the foundation highlighted the importance of
            empowering young girls to envision a brighter future, a message that
            resonated with a wide audience. The initiative not only addressed
            immediate needs but also reinforced Dara'afrik Foundation’s role in
            economic development and social impact within the community.
          </p>
          <p className=" pb-4 text-[#555C6A] leading-[26.1px] font-inter font-medium text-[18px]">
            This media visibility has attracted potential partnerships and
            garnered support from both local stakeholders and the wider public,
            further strengthening Dara'afrik Foundation’s capacity to continue
            its mission of uplifting and empowering girls across the region.
          </p>
        </div>
        <h2 className="text-[#000] font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.92px] lg:text-left md:text-center text-center pb-8 ">
          Event Gallery
        </h2>
        <div className="flex lg:flex-row md:flex-col flex-col gap-6 lg:items-start md:items-center ">
          <div className="flex gap-6">
            <div className="flex flex-col gap-6">
              <img
                src={RowOneImg1}
                alt="rowOneImage"
                className="rounded-[8px]"
              />
              <img
                src={RowOneImg2}
                alt="rowTwoImage"
                className="rounded-[8px]"
              />
              <img
                src={RowOneImg3}
                alt="rowThreeImage"
                className="rounded-[8px]"
              />
            </div>
            <div className="flex flex-col gap-6">
              <img
                src={RowTwoImg1}
                alt="rowOneImage"
                className="rounded-[8px]"
              />
              <img
                src={RowTwoImg2}
                alt="rowTwoImage"
                className="rounded-[8px]"
              />
              <img
                src={RowTwoImg3}
                alt="rowThreeImage"
                className="rounded-[8px] w-[280px]  "
              />
            </div>
          </div>
          <div className="flex gap-6 pb-[80px]">
            <div className="flex flex-col gap-6">
              <img
                src={RowThreeImg1}
                alt="rowOneImage"
                className="rounded-[8px]"
              />
              <img
                src={RowThreeImg2}
                alt="rowTwoImage"
                className="rounded-[8px]"
              />
              <img
                src={RowThreeImg3}
                alt="rowThreeImage"
                className="rounded-[8px]"
              />
              <img
                src={RowThreeImg4}
                alt="rowThreeImage"
                className="rounded-[8px] w-[280px] lg:h-[244px] h-[260px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <img
                src={RowFourImg1}
                alt="rowOneImage"
                className="rounded-[8px] w-[280px] lg:h-[663px] h-[590px] md:h-[810px] object-cover "
              />
              <img
                src={RowFourImg2}
                alt="rowTwoImage"
                className="rounded-[8px] h-[434px] md:h-[620px] lg:h-[644px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="pb-[80px]">
          <h2 className="font-inter text-[36px] text-[#000] leading-[43.2px] tracking-[-1.44px] font-bold pb-12">
            More News
          </h2>
          <div className="flex md:flex-row flex-col gap-12  ">
            <div className="flex justify-center flex-col lg:w-[584px]">
              <h2 className="text-[#000] font-Inter text-[16px] font-[500] leading-[23.2px] bg-[#FFCBB3] p-2 w-[126px]">
                EDUCATION
              </h2>
              <h4 className="py-4 text-[#01010D] font-Inter text-[16px] font-[500] leading-[23.2px]">
                Dara'Afrik Foundation: Shaping the Future Project
              </h4>
              <p className="text-[#8A8A90] font-Inter text-[14px] font-[400] leading-[23.2px]">
                Dara'Afrik Foundation's inaugural education project, "Shaping
                the Future", has made a significant impact in the community by
                reaching out to 300 pupils at a Government Primary School, Itung
                Abak , Akwa Ibom State in Akwa Ibom State, Nigeria. This
                initiative was launched to provide essential learning materials
                as students prepared for the new school session, addressing the
                critical needs of underserved...
              </p>
              <div className="pt-12 flex justify-start gap-2 items-center">
                <button
                  onClick={handleSecondNewsClick}
                  className="bg-[#0A6EB4] text-[#FAFEF0] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#3b8bc3]  transition-colors duration-150 ease-in"
                >
                  Read More
                </button>
              </div>
            </div>

            <div className="flex justify-center flex-col lg:w-[584px]">
              <h2 className="text-[#000] font-Inter text-[16px] font-[500] leading-[23.2px] bg-[#FFCBB3] p-2 w-[126px] ">
                HEALTH
              </h2>
              <h4 className="py-4 text-[#01010D] font-Inter text-[16px] font-[500] leading-[23.2px]">
                Report on Community Health Visit in Akwa Ibom State
              </h4>
              <p className="text-[#8A8A90] font-Inter text-[14px] font-[400] leading-[23.2px]">
                As part of Dara’afrik Foundation’s vision to support women’s
                health in rural communities, a team from the foundation embarked
                on a community visit to various locations in Akwa Ibom State.
                The visit served as a prelude to our upcoming women’s health
                tour scheduled for December,2024, aimed at creating awareness
                and providing essential healthcare services to women in
                underserved areas.
              </p>
              <div className="pt-12 flex justify-start gap-2 items-center">
                <button
                  onClick={handleThirdNewsClick}
                  className="bg-[#0A6EB4] text-[#FAFEF0] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#3b8bc3]  transition-colors duration-150 ease-in"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsOne;
