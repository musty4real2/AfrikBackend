import React, { useState, useEffect } from "react";
import heroImg from "../assets/images/hero.png";
import ArrowImg from "../assets/images/aboutUsImg/ArrowUpRight.png";
import springImg from "../assets/images/spring.png";
// import newsCardData from "../components/News/newsCardData";
import NewsCard from "../components/News/NewsCard";
// import ourWorkData from "../components/ourWork/ourWorkData";
import OurWorkCard from "../components/ourWork/OurWorkCard";
import ProjectCard from "../components/Projects/ProjectCard";
// import ProjectsData from "../components/Projects/ProjectsData";
import { useNavigate } from "react-router-dom";
import homepageVideoLgImg from "../assets/images/homepageVideoLg.png";
import homepageVideoMdImg from "../assets/images/homepageVideoMd.png";
import homepageVideoSmImg from "../assets/images/homepageVideoSm.png";
import nl2br from "react-nl2br";
import { useLanguage } from "../Context/LanguageContext";

const Home = () => {
  const { translate, news, loading, error } = useLanguage();
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);

  const handleDonationClick = () => {
    navigate("/specific-project-donation");
  };

  const handleReadMoreClick = () => {
    navigate("/news-and-resources");
  };

  const [newsCardData, setNewsCardData] = useState([]);
  const { ourWork } = useLanguage();
  const { ourProject } = useLanguage();

  useEffect(() => {
    if (news.length > 0) {
      setNewsCardData(
          news.map((item) => ({
            image: item.featured_image,
            title: item.title,
            description: item.summary, // Assuming you want to show the summary as description
          }))
      );
    }
  }, [news]);

  return (
    <>
      <section
        className="relative flex items-center justify-center bg-cover bg-center overflow-x-hidden "
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Content on top of the overlay */}
        <div className="relative  text-center px-4 lg:px-[70px] md:px-[40px] py-4 lg:py-[202px] md:py-[132px] flex flex-col justify-center">
          <>
            {/* H1 for small screens */}
            <h1 className="text-primary text-[48px]  font-normal text-center md:hidden leading-[100%] tracking-[-1.92px] font-[Gilroy-Bold] pt-[29px]">
              {nl2br(translate("Banner_header"))}{" "}
              <span className="text-secondary text-[48px] font-normal leading-[100%] tracking-[-1.92px] font-[Gilroy-Bold]">
                {translate("Girls and Women")}
              </span>{" "}
              {translate("in Africa")}
            </h1>
            {/* H1 for large screens */}
            <h1 className="text-primary  text-[48px] font-[Gilroy-Bold] tracking-[-1.92px] font-normal leading-[100%] text-center hidden md:block">
              {translate("Banner_header")}{" "} <br />
              <span className="text-secondary  text-[48px] font-[Gilroy-Bold] font-normal leading-[100%] tracking-[-1.92px]">
                {translate("Girls and Women")}{" "}
              </span>{" "}
              {translate("in Africa")}
            </h1>
          </>

          <p className="mt-4 text-[24px] lg:leading-[34.8px] font-inter text-center font-semibold leading-[26.1px] text-[#E6E7E9]">
            {translate("Empowering underserved women and girls through edu")}
          </p>

          {/* Centered spring image */}
          <div className="relative mt-4">
            <img
              src={springImg}
              alt="Decorative spring"
              className="absolute top-[-75px] lg:right-[360px] md:right-[160px] right-[-30px]"
            />
          </div>

          <div className="mt-[104px] pb-[70px] md:pb-0 flex flex-col items-center gap-6 md:flex-row md:justify-center">
            <button
              className={`donate-button-variant flex items-center flex-row gap-2 w-[269px] ${
                isClicked ? "border-[1px] border-[#B53E07] bg-[#E84F09]" : ""
              }`}
              onClick={handleDonationClick}
            >
              <span>{translate("Donate To Our Projects")}</span>{" "}
              <img src={ArrowImg} alt="arrowimage" />
              </button>
            <button
              className="join-us-button"
              onClick={() => navigate("/join-us")}
            >
              <span className="join-us-button-text"> {translate("Join Us")}</span>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-headerBg pt-[48px] pb-[64px] lg:px-[60px]">
        <div>
          <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] lg:text-[40px] text-[32px] font-normal lg:leading-[48px] leading-[38.4px] lg:tracking-[-1.6px] tracking-[-1.28px]">
            {translate("Our Vision")}
          </h2>
          <p className="text-foundationText text-center font-Inter text-[18px] lg:text-[20px] font-[500] lg:leading-[29px] leading-[26.1px] pt-4">
            “{translate('a_word')}”
          </p>
        </div>

        <button
          className="join-us-variant-button mx-auto mt-12 "
          onClick={() => navigate("/join-us")}
        >
          {translate("Join Us")}
        </button>
      </section>
      <section className="bg-[var(--Primary-Sky-Blue-primary-sky-blue-50,#F3FAFD)] py-[64px] overflow-x-hidden">
        <div>
          <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] lg:text-[40px] text-[32px] font-normal lg:leading-[48px] leading-[38.4px] lg:tracking-[-1.6px] tracking-[-1.28px]">
            {translate("News and Updates")}{" "}
          </h2>
          <p className="text-foundationText text-center font-Inter text-[16px] font-[400] lg:leading-[29px] leading-[26.1px] pt-4 pb-8">
            {translate("stay_connected")}
          </p>
        </div>
        <div className="flex flex-wrap justify-center lg:flex-row md:flex-col items-center gap-[24px] ">
          {newsCardData.map((card, index) => (
            <NewsCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <button
          onClick={handleReadMoreClick}
          className="join-us-variant-button mx-auto mt-12 "
        >
          {translate("Read More")}
        </button>
      </section>
      <section className="our-impact bg-[var(--Primary-800,#063D63)]  ">
        <div className="py-[36px] lg:px-[80px] px-4">
          <h2 className="text-[#E6E7E9] text-center font-[Gilroy-Bold] text-[40px]  font-normal leading-[48px]  tracking-[-1.6px]">
            {translate("Our Impact")}
          </h2>
          <p
            style={{ color: "rgba(255, 255, 255, 0.60)" }}
            className="text-center font-Inter text-[16px] font-[400] pb-[64px]"
          >
           {translate("impact-intro")}
          </p>
          <div className="flex justify-center md:flex-row flex-col items-center gap-[100px]">
            {/* First Column */}
            <div className="flex flex-col items-center">
              <h2 className="text-primaryText text-center font-Inter text-[64px] font-bold leading-normal">
                {translate("impact-intro-1")}
              </h2>
              <p className="text-foundationText50 text-center font-inter text-[12px] font-normal leading-normal">
                {translate("impact-intro-1-text")}
              </p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col items-center">
              <h2 className="text-primaryText text-center font-Inter text-[64px] font-bold leading-normal">
                {translate("impact-intro-2")}
              </h2>
              <p className="text-foundationText50 text-center font-inter text-[12px] font-normal leading-normal">
                {translate("impact-intro-2-text")}
              </p>
            </div>

            {/* Third Column */}
            <div className="flex flex-col items-center">
              <h2 className="text-primaryText text-center font-Inter text-[64px] font-bold leading-normal">
                {translate("impact-intro-3")}
              </h2>
              <p className="text-foundationText50 text-center font-inter text-[12px] font-normal leading-normal">
                {translate("impact-intro-3-text")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--Primary-Sky-Blue-primary-sky-blue-50,#F3FAFD)] py-[64px] overflow-x-hidden">
        <div className="px-4">
          <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] lg:text-[40px] text-[32px] font-normal lg:leading-[48px] leading-[38.4px] lg:tracking-[-1.6px] tracking-[-1.28px]">
            {translate("Our Work")}
          </h2>
          <p className="text-foundationText text-center font-Inter text-[16px]  font-[400] lg:leading-[29px] leading-[26.1px] pt-4 pb-8">
            {nl2br(translate("our-work-intro-1"))}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[24px] pt-8 ">
          <OurWorkCard ourWorks={ourWork} />
        </div>
      </section>
      <section className="inspiringStory bg-headerBg pb-[80px] lg:px-[80px] pt-[32px] lg:pt-[64px]  overflow-x-hidden">
        <div className="md:px-[40px] px-4 ">
          <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] lg:text-[40px] text-[32px] font-normal lg:leading-[48px] leading-[38.4px] lg:tracking-[-1.6px] tracking-[-1.28px]">
            {translate("our-success")}
          </h2>
          <p className="text-foundationText text-center font-Inter text-[16px] font-[400] lg:leading-[29px] leading-[26.1px] pt-4 pb-8">
            {nl2br(translate("our-success-1"))}
          </p>
        </div>
        <div>
          <img
            src={homepageVideoLgImg}
            alt="video"
            className="lg:block hidden md:hidden"
          />
          <img
            src={homepageVideoMdImg}
            alt="video"
            className="md:block hidden lg:hidden"
          />
          <img
            src={homepageVideoSmImg}
            alt="video"
            className="block lg:hidden md:hidden"
          />
        </div>
      </section>

      <section className="ourProjects bg-[var(--Primary-Sky-Blue-primary-sky-blue-50,#F3FAFD)] px-4 py-[64px]">
        <div className="px-6">
          <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[40px]  font-normal leading-[48px]  tracking-[-1.6px]">
            {translate("upcoming")}
          </h2>
          <p className="text-[#555C6A] font-Inter text-center text-[16px] font-[400] leading-[23.2px] pt-4 pb-8">
            {nl2br(translate("upcoming-1"))}
          </p>
        </div>
        <div>
          <ProjectCard projects={ourProject} />
        </div>
      </section>
      <section className="getInvolved bg-headerBg pt-[48px] pb-[64px] lg:px-[112px] px-4">
        <div className="pb-12">
          <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] lg:text-[40px] text-[32px] font-normal lg:leading-[48px] leading-[38.4px] lg:tracking-[-1.6px] tracking-[-1.28px]">
            {nl2br(translate("get-involved"))}
          </h2>
          <p className="text-[#555C6A] text-center  px-2 font-Inter text-[16px] font-[400] lg:leading-[29px] leading-[26.1px] pt-4">
            {nl2br(translate("get-involved-1"))}
          </p>
        </div>
        <button
          className="join-us-variant-button mx-auto "
          onClick={() => navigate("/join-us")}
        >
          {nl2br(translate("Join Us Today"))}
        </button>
      </section>
    </>
  );
};

export default Home;
