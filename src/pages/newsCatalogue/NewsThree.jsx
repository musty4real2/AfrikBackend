import React from "react";

import newsThreeHeroImg from "../../assets/images/news/newsThreeHeroImg.png";
import newsThreeRow1Img1 from "../../assets/images/news/newsThreeRow1Img1.png";
import newsThreeRow2Img1 from "../../assets/images/news/newsThreeRow2Img1.png";
import newsThreeRow2Img3 from "../../assets/images/news/newsThreeRow2Img3.png";
import newsThreeRow2Img2 from "../../assets/images/news/newsThreeRow2Img2.png";
import newsThreeRow2Img4 from "../../assets/images/news/newsThreeRow2Img4.png";
import { useNavigate } from "react-router-dom";

const NewsThree = () => {
  const navigate = useNavigate();

  const handleFirstNewsClick = () => {
    navigate("/news-one"); // Assuming '/news-one' is the route for NewsOne component
  };

  const handleSecondNewsClick = () => {
    navigate("/news-two"); // Assuming '/news-one' is the route for NewsOne component
  };

  return (
    <section className="bg-[#F9FEEC] overflow-x-hidden">
      {" "}
      <img src={newsThreeHeroImg} alt="hero image" />
      <div className="lg:px-[80px] md:px-[40px] px-4 py-[64px]">
        <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px] lg:text-left md:text-center text-center pb-8 ">
          Community Health visit in Akwa Ibom State, Nigeria.
        </h2>
        <p className="text-[#555C6A] leading-[26.1px] font-inter font-semibold text-[18px] pb-[64px]">
          As part of Dara’afrik Foundation’s vision to support women’s health in
          rural communities, a team from the foundation embarked on a community
          visit to various locations in Akwa Ibom State. The visit served as a
          prelude to our upcoming women’s health tour scheduled for
          December,2024, aimed at creating awareness and providing essential
          healthcare services to women in underserved areas.
        </p>
        <h2 className="font-inter text-[36px] font-semibold leading-[43.2px] tracking-[-1.44px] pb-4 text-[#020C21]">
          Activities Conducted
        </h2>
        <p className="text-[#555C6A] leading-[23.2px] font-inter font-normal text-[16px] pb-9">
          During the visit, our team carried out several awareness campaigns and
          health checks, including:
        </p>

        <h3 className="font-inter text-[24px] font-medium text-[#353D4D] leading-[28.8px] tracking-[-0.48px] pb-4 ">
          Breast Cancer Awareness:
        </h3>
        <p className="text-[#555C6A] leading-[23.2px] font-inter font-normal text-[16px] pb-6">
          The women were educated on the importance of early detection through
          regular breast self examinations and the need to seek medical help
          when noticing any abnormalities. This session highlighted the risks of
          breast cancer and the steps women can take to protect their health.
        </p>
        <h3 className="font-inter text-[24px] font-medium text-[#353D4D] leading-[28.8px] tracking-[-0.48px] pb-4 ">
          Blood Pressure and Glucose Testing Awareness:
        </h3>
        <p className="text-[#555C6A] leading-[23.2px] font-inter font-normal text-[16px] pb-6">
          The importance of regular monitoring of blood pressure and blood
          glucose levels was emphasized. Many women were unaware of the silent
          dangers posed by hypertension and diabetes, and the need for routine
          testing was stressed to help detect these conditions early and prevent
          complications.
        </p>
        <h3 className="font-inter text-[24px] font-medium text-[#353D4D] leading-[28.8px] tracking-[-0.48px] pb-4 ">
          Promotion of Basic Healthy Lifestyles:
        </h3>
        <p className="text-[#555C6A] leading-[23.2px] font-inter font-normal text-[16px] pb-[80px]">
          The community was informed about the critical role of maintaining a
          healthy lifestyle to promote longevity. Tips on methods of food
          preparation and balanced diets, regular physical activity, proper
          hygiene, and the reduction of risk factors such as excessive alcohol
          intake and tobacco use was emphasised.
        </p>
        <h2 className="font-inter text-[36px] font-semibold leading-[43.2px] tracking-[-1.44px] pb-4 text-[#020C21]">
          Impacts statement
        </h2>
        <p className="text-[#555C6A] leading-[23.2px] font-inter font-normal text-[16px] pb-12">
          The women in the community expressed their appreciation and excitement
          over the health awareness activities conducted by Dara’afrik
          Foundation in which 1000 women were reached as they gained more
          knowledge and insights on preventive measures to frequently
          experienced health challenges faced by women in their community. Many
          women openly thanked the team for providing critical health
          information and showed a lot strong willingness to incorporate
          healthier practices into their daily lives. <br /> The community
          leaders and participants commended Dara’ Afrik Foundation for its
          impactful work and expressed a need for more sustainable health
          programs in their area. Additionally, the women requested further
          support in the form of grants and loans to help boost their economic
          well-being, which they identified as essential for accessing
          healthcare services and improving their overall quality of life.
        </p>
        <h2 className="font-inter text-[36px] font-semibold leading-[43.2px] tracking-[-1.44px] pb-4 text-[#020C21]">
          Conclusion
        </h2>
        <p className="text-[#555C6A] leading-[23.2px] font-inter font-normal text-[16px] pb-12">
          The community visit in Akwa Ibom State has reinforced the need for
          continuous health education and support for women in rural areas.
          Dara’afrik Foundation will continue to advocate for women’s health and
          well-being while exploring opportunities to partner with stakeholders
          for economic empowerment initiatives, such as grants and loans, that
          would enable women in these communities to access better healthcare
          and improve their living standards.
        </p>
        <h2 className="font-inter text-[36px] font-semibold leading-[43.2px] tracking-[-1.44px] pb-4 text-[#020C21]">
          Donate
        </h2>
        <p className="text-[#555C6A] leading-[23.2px] font-inter font-normal text-[16px] pb-12">
          Your donations will go a long way in the implementation of the women’s
          health project December 2024, with a focus on expanding breast cancer
          screenings, blood pressure, blood glucose checks and continued
          community health engagement.
        </p>
        <h2 className="text-[#000] font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.92px] lg:text-left md:text-center text-center py-8">
          Event Gallery
        </h2>
        <div className="flex gap-6 flex-col">
          <div className="flex md:flex-row flex-col gap-6">
            <img
              src={newsThreeRow1Img1}
              alt="imageGallery"
              className="lg:w-[600px] md:[300px] w-full h-[400px] object-cover rounded-[8px]"
            />
            <img
              src={newsThreeRow2Img3}
              alt="image gallery"
              className="w-[600px] h-[400px] object-cover rounded-[8px]"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-6">
            <img
              src={newsThreeRow2Img2}
              alt="image gallery"
              className="w-[600px] h-[500px] object-cover rounded-[8px]"
            />
            <img
              src={newsThreeRow2Img1}
              alt="imageGallery"
              className="w-[600px] h-[500px] object-cover rounded-[8px]"
            />
          </div>
          <div>
            {" "}
            <img
              src={newsThreeRow2Img4}
              alt="image gallery"
              className="w-full object-cover rounded-[8px]"
            />
          </div>
        </div>
        <div className="pt-[80px]">
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
                and school uniforms...
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
                EDUCATION
              </h2>
              <h4 className="py-4 text-[#01010D] font-Inter text-[16px] font-[500] leading-[23.2px]">
                Dara'Afrik Foundation: Shaping the Future Project
              </h4>
              <p className="text-[#8A8A90] font-Inter text-[14px] font-[400] leading-[23.2px]">
                Dara'Afrik Foundation's inaugural education project, "Shaping
                the Future", has made a significant impact in the community by
                reaching out to 300 pupils at Government Primary School, Itung
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsThree;
