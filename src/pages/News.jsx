import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrowbutton from "../assets/images/news/arrowbutton.png";
import SuccessStories from "../components/ourWorkPage/SuccessStories";
import ProjectsData from "../components/Projects/ProjectsData";
import ProjectCard from "../components/Projects/ProjectCard";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const successStoriesRef = useRef(null);
  const upcomingProjectsRef = useRef(null);
  const latestNewsRef = useRef(null);

  const scrollToSuccessStories = () => {
    successStoriesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToUpcomingProjects = () => {
    upcomingProjectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLatestNews = () => {
    latestNewsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle scrolling when navigating from another page
  useEffect(() => {
    if (location.state?.scrollTarget) {
      setTimeout(() => {
        if (location.state.scrollTarget === "success-stories") {
          scrollToSuccessStories();
        } else if (location.state.scrollTarget === "upcoming-projects") {
          scrollToUpcomingProjects();
        } else if (location.state.scrollTarget === "upcoming-projects") {
          scrollToUpcomingProjects();
        }
      }, 100);
    }
  }, [location.state]);

  // Make scroll functions available globally
  useEffect(() => {
    window.scrollToSuccessStories = scrollToSuccessStories;
    window.scrollToUpcomingProjects = scrollToUpcomingProjects;
    window.scrollToLatestNews = scrollToLatestNews;
    return () => {
      delete window.scrollToSuccessStories;
      delete window.scrollToUpcomingProjects;
      delete window.scrollToLatestNews;
    };
  }, []);

  const handleFirstNewsClick = () => {
    navigate("/news-one"); // Assuming '/news-one' is the route for NewsOne component
  };

  const handleSecondNewsClick = () => {
    navigate("/news-two"); // Assuming '/news-one' is the route for NewsOne component
  };

  const handleThirdNewsClick = () => {
    navigate("/news-three"); // Assuming '/news-one' is the route for NewsOne component
  };

  const handleNewsArchiveClick = () => {
    navigate("/news-archive"); // Assuming '/news-one' is the route for NewsOne component
  };

  return (
    <section>
      <section
        ref={latestNewsRef}
        className="lg:px-[80px] md:px-[40px] px-4 py-12 bg-[#F3FAFD]"
      >
        <h2 className="text-[#000] text-center font-[Gilroy-Bold] text-[48px]  font-normal leading-[48px]  tracking-[-1.92px] pb-4">
          Latest News and Reports on Past Events
        </h2>
        <p className="pb-[80px] pt-2 text-[#555C6A] font-Inter text-[20px] font-[500] leading-[28px] tracking-[0.4px] text-center lg:px-[110px]">
          At Dara’afrik Foundation, we keep you abreast of all our activities
          aimed at impacting women and girls in undeserved communities{" "}
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-12">
          <div className="flex justify-center flex-col lg:w-[280px]">
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
              "Girls Vision for the Future,...
            </p>
            <div className="pt-12 flex justify-start gap-2 items-center group">
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
                className="cursor-pointer transition-all duration-150 ease-in group-hover:[filter:invert(56%)_sepia(14%)_saturate(1741%)_hue-rotate(172deg)_brightness(86%)_contrast(86%)] hover:[filter:invert(56%)_sepia(14%)_saturate(1741%)_hue-rotate(172deg)_brightness(86%)_contrast(86%)]"
              />
            </div>
          </div>

          <div className="flex justify-center flex-col lg:w-[280px]">
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
              Abak , Akwa Ibom State in Akwa Ibom S...
            </p>
            <div className="pt-12 flex justify-start gap-2 items-center group">
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
                className="cursor-pointer transition-all duration-150 ease-in group-hover:[filter:invert(56%)_sepia(14%)_saturate(1741%)_hue-rotate(172deg)_brightness(86%)_contrast(86%)] hover:[filter:invert(56%)_sepia(14%)_saturate(1741%)_hue-rotate(172deg)_brightness(86%)_contrast(86%)]"
              />
            </div>
          </div>

          <div className="flex justify-center flex-col lg:w-[280px]">
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
              visit served as a prelude to our upcoming wo...
            </p>
            <div className="pt-12 flex justify-start gap-2 items-center group">
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
                className="cursor-pointer transition-all duration-150 ease-in group-hover:[filter:invert(56%)_sepia(14%)_saturate(1741%)_hue-rotate(172deg)_brightness(86%)_contrast(86%)] hover:[filter:invert(56%)_sepia(14%)_saturate(1741%)_hue-rotate(172deg)_brightness(86%)_contrast(86%)]"
              />
            </div>
          </div>
        </div>
        <div className=" pt-[52px] text-center">
          <button
            onClick={handleNewsArchiveClick}
            className="join-us-variant-button inline-block"
          >
            News Archive
          </button>
        </div>
      </section>
      <div ref={successStoriesRef}>
        <SuccessStories />
      </div>
      <section
        ref={upcomingProjectsRef}
        className="ourProjects bg-[#F9FEEC] px-4 py-[64px] md:px-[40px] lg:px-[80px]"
      >
        <div className="px-6">
          <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[40px]  font-normal leading-[48px]  tracking-[-1.6px]">
            Our Upcoming Projects
          </h2>
          <p className="text-[#555C6A] font-Inter text-center text-[16px] font-[400] leading-[23.2px] pt-4 pb-8">
            Be a part of something bigger. Witness our upcoming projects and
            join our community in making a difference.
          </p>
        </div>
        <div>
          <ProjectCard projects={ProjectsData} />
        </div>
        <div className=" py-[80px] text-center">
          <button className="join-us-variant-button inline-block">
            View Details
          </button>
        </div>
        <h2 className="font-Inter text-center text-[36px] font-bold leading-[43.2px] tracking-[-1.44px] text-[#000]">
          Dara’ Afrik Foundation’s Impact Report
        </h2>
        <p className="font-Inter text-center text-[18px] font-medium leading-[26.1px]  text-[#555C6A]">
          Explore impacts of all our past projects aimed at bridging the gaps in
          Education, Health care, Food Security and technology amongst women and
          girls in underserved communities in Africa
        </p>

        <div className=" pt-[72px] text-center">
          <button className="join-us-variant-button inline-block">
            View Report
          </button>
        </div>
      </section>
    </section>
  );
};

export default News;
