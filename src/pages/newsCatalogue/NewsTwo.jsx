import React from "react";
import newsTwoHeroImg from "../../assets/images/news/newsTwoHeroImg.png";
import newsTwoRowOneImg1 from "../../assets/images/news/newsTwoRowOneImg1.png";
import newsTwoRowOneImg2 from "../../assets/images/news/newsTwoRowOneImg2.png";
import newsTwoRowOneImg3 from "../../assets/images/news/newsTwoRowOneImg3.png";
import newsTwoRowOneImg4 from "../../assets/images/news/newsTwoRowOneImg4.png";
import newsTwoRowTwoImg1 from "../../assets/images/news/newsTwoRowTwoImg1.png";
import newsTwoRowTwoImg2 from "../../assets/images/news/newsTwoRowTwoImg2.png";
import newsTwoRowTwoImg3 from "../../assets/images/news/newsTwoRowTwoImg3.png";
import newsTwoRowThreeImg1 from "../../assets/images/news/newsTwoRowThreeImg1.png";
import newsTwoRowThreeImg2 from "../../assets/images/news/newsTwoRowThreeImg2.png";
import newsTwoRowThreeImg3 from "../../assets/images/news/newsTwoRowThreeImg3.png";
import newsTwoRowThreeImg4 from "../../assets/images/news/newsTwoRowThreeImg4.png";
import newsTwoRowFourImg1 from "../../assets/images/news/newsTwoRowFourImg1.png";
import newsTwoRowFourImg2 from "../../assets/images/news/newsTwoRowFourImg2.png";
import newsTwoRowFourImg3 from "../../assets/images/news/newsTwoRowFourImg3.png";
import { useNavigate } from "react-router-dom";

const NewsTwo = () => {
  const navigate = useNavigate();

  const handleFirstNewsClick = () => {
    navigate("/news-one"); // Assuming '/news-one' is the route for NewsOne component
  };

  const handleThirdNewsClick = () => {
    navigate("/news-three"); // Assuming '/news-one' is the route for NewsOne component
  };

  return (
    <section className="bg-[#F9FEEC] overflow-x-hidden">
      <img src={newsTwoHeroImg} alt="heroImge" />
      <div className="lg:px-[80px] md:px-[40px] px-4 py-[64px]">
        <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px] lg:text-left md:text-center text-center pb-8 ">
          Dara'Afrik Foundation: Shaping the Future Project
        </h2>
        <p className="text-[#555C6A] leading-[26.1px] font-inter font-semibold text-[18px] pb-[64px]">
          Dara'Afrik Foundation's inaugural education project, "Shaping the
          Future", has made a significant impact in the community by reaching
          out to 300 pupils at Government Primary School, Itung Abak , Akwa Ibom
          State in Akwa Ibom State, Nigeria. This initiative was launched to
          provide essential learning materials as students prepared for the new
          school session, addressing the critical needs of underserved children
          in the region.
        </p>
        <h2 className="font-inter text-[36px] font-semibold leading-[43.2px] tracking-[-1.44px] pb-4 text-[#020C21]">
          Project Overview
        </h2>
        <p className="text-[#555C6A] leading-[23.2px] font-inter font-normal text-[16px] pb-9">
          The "Shaping the Future" project involved the distribution of vital
          educational supplies, including textbooks, notebooks, writing
          instruments, and other learning materials. Our dedicated team also
          organized a professional development session for the teachers at the
          school. This session was designed to enhance their teaching skills and
          introduce new educational strategies, which the teachers found
          invaluable. The headmistress expressed her gratitude for the support
          received, noting that such initiatives are rare in their community.
          Additionally, local community leaders came forward to appreciate our
          goodwill, recognizing the importance of education as a cornerstone for
          development and empowerment.
        </p>
        <h2 className="font-inter text-[36px] text-[#020C21] font-semibold leading-[43.2px] tracking-[-1.44px] pb-4 ">
          Anticipated Impact
        </h2>
        <p className="text-[#555C6A] leading-[23.2px] font-inter font-normal text-[16px] pb-12">
          By providing these essential learning materials, we anticipate several
          positive outcomes:
        </p>
        <h3 className="font-inter text-[24px] font-medium text-[#353D4D] leading-[28.8px] tracking-[-0.48px] pb-4 ">
          Motivated Educators:
        </h3>
        <p className="text-[#555C6A] leading-[23.2px] font-inter font-normal text-[16px] pb-6">
          The professional development sessions will equip teachers with
          innovative strategies and resources, fostering a more effective
          teaching environment. This motivation will, in turn, enhance the
          learning experience for students.
        </p>
        <h3 className="font-inter text-[24px] font-medium text-[#353D4D] leading-[28.8px] tracking-[-0.48px] pb-4 ">
          Enhanced Academic Performance:
        </h3>
        <p className="text-[#555C6A] leading-[23.2px] font-inter font-normal text-[16px] pb-6">
          The availability of proper learning resources is expected to improve
          students' understanding and retention of course material, leading to
          better academic results.
        </p>
        <h3 className="font-inter text-[24px] font-medium text-[#353D4D] leading-[28.8px] tracking-[-0.48px] pb-4 ">
          Inspired Students:
        </h3>
        <p className="text-[#555C6A] leading-[23.2px] font-inter font-normal text-[16px] pb-6">
          By encouraging pupils to take their studies more seriously, we aim to
          help them envision a brighter future. Our focus on girls’ education
          specifically seeks to break down gender barriers, empowering young
          women to pursue their aspirations and challenging societal norms that
          limit their potential.
        </p>
        <h3 className="font-inter text-[24px] font-medium text-[#353D4D] leading-[28.8px] tracking-[-0.48px] pb-4 ">
          Call to Action
        </h3>
        <p className="text-[#555C6A] leading-[23.2px] font-inter font-normal text-[16px] pb-[64px]">
          As we move forward, we invite organizations and stakeholders to
          partner with us in this crucial endeavor. Your support can help expand
          the reach of the{" "}
          <span className="font-semibold">"Shaping the Future"</span> project,
          ensuring that more children have access to quality education and the
          resources necessary for success. Together, we can make a lasting
          difference in the lives of these children and their communities.
        </p>
        <h2 className="text-[#000] font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.92px] lg:text-left md:text-center text-center pb-8 pt-4 ">
          Event Gallery
        </h2>
        <div className="flex lg:flex-row md:flex-col flex-col gap-6 lg:items-start md:items-center ">
          <div className="flex gap-6">
            <div className="flex flex-col gap-6">
              {" "}
              <img
                src={newsTwoRowOneImg1}
                alt="rowOneImage"
                className=" rounded-[8px]"
              />
              <img
                src={newsTwoRowOneImg2}
                alt="rowOneImage"
                className=" rounded-[8px]  "
              />
              <img
                src={newsTwoRowOneImg3}
                alt="rowOneImage"
                className=" rounded-[8px]"
              />
              <img
                src={newsTwoRowOneImg4}
                alt="rowOneImage"
                className=" rounded-[8px]"
              />
            </div>
            <div className="flex flex-col gap-6">
              {" "}
              <img
                src={newsTwoRowTwoImg1}
                alt="rowOneImage"
                className=" rounded-[8px]"
              />
              <img
                src={newsTwoRowTwoImg2}
                alt="rowOneImage"
                className=" rounded-[8px]"
              />
              <img
                src={newsTwoRowTwoImg3}
                alt="rowOneImage"
                className=" rounded-[8px] w-[280px] "
              />
            </div>
          </div>
          <div className="flex gap-8 pb-[80px]">
            <div className="flex flex-col gap-6">
              {" "}
              <img
                src={newsTwoRowThreeImg1}
                alt="rowOneImage"
                className=" rounded-[8px]"
              />
              <img
                src={newsTwoRowThreeImg2}
                alt="rowOneImage"
                className=" rounded-[8px]"
              />
              <img
                src={newsTwoRowThreeImg3}
                alt="rowOneImage"
                className="rounded-[8px]"
              />
              <img
                src={newsTwoRowThreeImg4}
                alt="rowOneImage"
                className="rounded-[8px]"
              />
            </div>
            <div className="flex flex-col gap-6">
              {" "}
              <img
                src={newsTwoRowFourImg1}
                alt="rowOneImage"
                className=" w-[280px] rounded-[8px]"
              />
              <img
                src={newsTwoRowFourImg2}
                alt="rowOneImage"
                className=" rounded-[8px]"
              />
              <img
                src={newsTwoRowFourImg3}
                alt="rowOneImage"
                className=" lg:h-[380px] md:h-[398px] h-[260px] rounded-[8px]"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-inter text-[36px] text-[#000] leading-[43.2px] tracking-[-1.44px] font-bold pb-12">
            More News
          </h2>
          <div className="flex md:flex-row flex-col gap-12 ">
            <div className="flex justify-center flex-col lg:w-[584px]">
              <h2 className="text-[#000] font-Inter text-[16px] font-[500] leading-[23.2px] bg-[#FFCBB3] p-2 w-[126px]">
                EDUCATION
              </h2>
              <h4 className="py-4 text-[#01010D] font-Inter text-[16px] font-[500] leading-[23.2px]">
                Dara’Afrik Foundation commemorates the World Girl Child...
              </h4>
              <p className="text-[#8A8A90] font-Inter text-[14px] font-[400] leading-[23.2px]">
                Dara'afrik Foundation's recent project, marking the World Girl
                Child Day celebration, has made a significant impact on both the
                local community and the broader public. The initiative, tagged
                "Girls Vision for the Future," reached over 400 pupils from St.
                Paul primary school Utu Etim Ekpo LGA Area, providing them with
                essential educational materials, including books, stationery,
                and school uniforms.
              </p>
              <div className="pt-12 flex justify-start gap-2 items-center">
                <button
                  onClick={handleFirstNewsClick}
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

export default NewsTwo;
