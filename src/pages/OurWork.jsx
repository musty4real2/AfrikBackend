import React, { useEffect, useState } from "react";

import educationImgLg from "../assets/images/ourWork/educationImgLg.png";
import educationImgMd from "../assets/images/ourWork/educationImgMd.png";
import educationImgSm from "../assets/images/ourWork/educationImgSm.png";
import healthCareImgSm from "../assets/images/ourWork/HealthCareImgSm.png";
import healthCareImgMd from "../assets/images/ourWork/HealthCareImgMd.png";
import healthCareImgLg from "../assets/images/ourWork/HealthCareImgLg.png";
import mentorImgLg from "../assets/images/ourWork/mentorImgLg.png";
import mentorImgMd from "../assets/images/ourWork/mentorImgMd.png";
import mentorImgSm from "../assets/images/ourWork/mentorImgSm.png";

import ourWorkBgSm from "../assets/images/ourWork/ourWorkBgSm.png";
import ourWorkBgLg from "../assets/images/ourWork/ourWorkBgLg.png";
import singleImg from "../assets/images/ourWork/singleImg.png";
import groupImg from "../assets/images/ourWork/groupImg.png";
import Union from "../assets/images/ourWork/Union.png";
import Star from "../assets/images/ourWork/Star.png";
import videoPlaceHolderImg from "../assets/images/ourWork/videoPlaceholderImg.png";
import singleSm from "../assets/images/ourWork/singleSm.png";
import videoPlaceholderSm from "../assets/images/ourWork/videoPlaceholderSm.png";
import groupSm from "../assets/images/ourWork/groupSm.png";
import foundationTeamImgLg from "../assets/images/ourWork/fondationTeamImg.png";
import foundationTeamImgMd from "../assets/images/ourWork/fondationTeamImgMd.png";
import foundationTeamImgSm from "../assets/images/ourWork/fondationTeamImgSm.png";
import SuccessStories from "../components/ourWorkPage/SuccessStories";
import ProjectCard from "../components/Projects/ProjectCard";
import ProjectsData from "../components/Projects/ProjectsData";
import { useNavigate, useLocation } from "react-router-dom";

const OurWork = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Add window resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);

      if (element) {
        setTimeout(() => {
          // Adjust header offset based on screen size
          let headerOffset;
          if (windowWidth < 768) {
            // mobile
            headerOffset = 150;
          } else if (windowWidth < 1024) {
            // tablet
            headerOffset = 120;
          } else {
            // desktop
            headerOffset = 100;
          }

          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 500);
      }
    }
  }, [location.state, windowWidth]);

  return (
    <>
      <section className="lg:bg-[#F6F9FF] bg-[#F6F9FF] md:bg-[#F9FEEC] lg:px-[80px] px-4 md:px-[40px] md:pt-[38px] lg:pt-0 pt-0">
        <div className="bg-[#F6F9FF] lg:px-0 md:px-4 px-0 py-[64px]">
          <div className=" pb-[48px] text-center">
            <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[56px] font-normal leading-[56px] tracking-[-2.24px] pb-4">
              What We Do At Dara&apos;Afrik Foundation?
            </h2>
            <p className="text-[#555C6A] font-Inter text-[20px] font-[500] leading-[28px] pt-2 lg:px-6 pb-2 tracking-[0.4px]">
              We are on a mission to drive sustainable economic development for
              women and girls in Africa through targeted programs like:
            </p>
          </div>
          <div className="rounded-[16px] lg:px-0 md:px-6 px-4 py-[64px]  bg-[#fff]  ">
            <div className="flex flex-col gap-[80px]">
              <div
                id="work-education-for-underserved-girls"
                className="flex lg:flex-row md:flex-col flex-col justify-center items-center lg:gap-0 gap-6 md:gap-6 scroll-mt-24"
              >
                <div className="px-6 lg:max-w-[538px] lg:pl-8">
                  <h3 className="text-[#353D4D] font-Inter text-[24px] font-[600] leading-[23.2px] tracking-[0.48px] pb-[23px]">
                    Education for Underserved Girls
                  </h3>
                  <p className="text-[#555C6A] font-Inter text-[16px] font-normal leading-[23.2px] pb-4">
                    Education is a powerful tool, especially for young girls in
                    marginalized communities. Through our{" "}
                    <span className="text-[#353D4D] font-Inter text-[16px] font-semibold leading-[23.2px]">
                      Education for Underserved Girls program,
                    </span>{" "}
                    we provide scholarships, school supplies, and mentorship to
                    ensure that girls have the opportunity to stay in school and
                    complete their education. We believe that when girls are
                    educated, they are empowered to uplift themselves, their
                    families, and their communities.{" "}
                  </p>
                  <p className="text-[#555C6A] font-Inter text-[16px] font-normal leading-[23.2px]">
                    In{" "}
                    <span className="text-[#353D4D] font-Inter text-[16px] font-semibold leading-[23.2px]">
                      2024
                    </span>
                    , we supported{" "}
                    <span className="text-[#353D4D] font-Inter text-[16px] font-semibold leading-[23.2px]">
                      400 girls
                    </span>{" "}
                    from rural areas, giving them the resources they need to
                    succeed academically and personally. By reducing barriers to
                    education - such as financial hardship, lack of materials,
                    or cultural challenges - we are helping to create a
                    generation of confident, capable women ready to make a
                    difference.
                  </p>
                </div>
                <img
                  src={educationImgLg}
                  alt="education"
                  className="hidden md:hidden lg:block h-[634px] object-cover w-[564px]"
                />
                <img
                  src={educationImgMd}
                  alt="education"
                  className="hidden lg:hidden md:block"
                />
                <img
                  src={educationImgSm}
                  alt="education"
                  className="block lg:hidden md:hidden"
                />
              </div>

              <div
                id="work-womens-health-food-security-outreach"
                className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-center items-center lg:gap-0 gap-6 md:gap-6 scroll-mt-24"
              >
                <img
                  src={healthCareImgLg}
                  alt="education"
                  className="hidden md:hidden lg:block h-[634px] object-cover w-[564px]"
                />
                <img
                  src={healthCareImgMd}
                  alt="education"
                  className="hidden lg:hidden md:block"
                />
                <img
                  src={healthCareImgSm}
                  alt="education"
                  className="block lg:hidden md:hidden"
                />
                <div className="px-6 lg:max-w-[538px]">
                  <h3 className="text-[#353D4D] font-Inter text-[24px] font-[600] leading-[23.2px] tracking-[0.48px] pb-[23px]">
                    Women's Health and Food Security Outreach
                  </h3>
                  <p className="text-[#555C6A] font-Inter text-[16px] font-normal leading-[23.2px] pb-4">
                    Access to healthcare is a critical issue for women in
                    underserved areas. Our{" "}
                    <span className="text-[#353D4D] font-Inter text-[16px] font-semibold leading-[23.2px]">
                      Health and Food Security Outreach for Women
                    </span>{" "}
                    focuses on providing essential medical services to women,
                    particularly in rural communities, where healthcare is often
                    inaccessible. We offer free medical camps that provide
                    screenings, treatments, and health education to address
                    common issues such as maternal health, reproductive care,
                    and disease prevention.
                  </p>
                  <p className="text-[#555C6A] font-Inter text-[16px] font-normal leading-[23.2px]">
                    In{" "}
                    <span className="text-[#353D4D] font-Inter text-[16px] font-semibold leading-[23.2px]">
                      2024
                    </span>
                    , we reached{" "}
                    <span className="text-[#353D4D] font-Inter text-[16px] font-semibold leading-[23.2px]">
                      200
                    </span>{" "}
                    women through our maternal health initiative, offering
                    prenatal care and education to help reduce risks during
                    pregnancy and childbirth. Moreso, by implementing food
                    security programs as part of our community-led efforts, we
                    recognize the critical link between nutrition and overall
                    well-being in enhancing women’s health outcomes especially
                    in women-headed households.
                  </p>
                </div>
              </div>
              <div
                id="work-mentorship-for-young-women"
                className="flex lg:flex-row md:flex-col flex-col justify-center items-center lg:gap-0 gap-6 md:gap-6 scroll-mt-24"
              >
                <div className="px-6 lg:max-w-[538px] lg:pl-8">
                  <h3 className="text-[#353D4D] font-Inter text-[24px] font-[600] leading-[23.2px] tracking-[0.48px] pb-[23px]">
                    Mentorship for Young Women
                  </h3>
                  <p className="text-[#555C6A] font-Inter text-[16px] font-normal leading-[23.2px] pb-4">
                    Our{" "}
                    <span className="text-[#353D4D] font-Inter text-[16px] font-semibold leading-[23.2px]">
                      Mentorship Program
                    </span>{" "}
                    connects young women with experienced mentors who provide
                    guidance, support, and encouragement as they navigate their
                    educational and career paths. We believe that mentorship can
                    significantly impact a young woman's life, helping her build
                    confidence, set goals, and develop the skills needed to
                    succeed.{" "}
                  </p>
                  <p className="text-[#555C6A] font-Inter text-[16px] font-normal leading-[23.2px]">
                    In{" "}
                    <span className="text-[#353D4D] font-Inter text-[16px] font-semibold leading-[23.2px]">
                      2024
                    </span>
                    , we paired{" "}
                    <span className="text-[#353D4D] font-Inter text-[16px] font-semibold leading-[23.2px]">
                      200
                    </span>{" "}
                    young women with mentors from various fields, offering
                    workshops, career advice, and networking opportunities. By
                    fostering these relationships, we empower young women to
                    pursue their dreams and break barriers in their communities.
                  </p>
                </div>
                <img
                  src={mentorImgLg}
                  alt="education"
                  className="hidden md:hidden lg:block h-[634px] object-cover w-[564px]"
                />
                <img
                  src={mentorImgMd}
                  alt="education"
                  className="hidden lg:hidden md:block"
                />
                <img
                  src={mentorImgSm}
                  alt="education"
                  className="block lg:hidden md:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-impact bg-[var(--Primary-800,#063D63)]  ">
        <div className="py-[36px] lg:px-[80px] px-4">
          <h2 className="text-[#E6E7E9] text-center font-[Gilroy-Bold] text-[40px]  font-normal leading-[48px]  tracking-[-1.6px]">
            Our Impact
          </h2>
          <p
            style={{ color: "rgba(255, 255, 255, 0.60)" }}
            className="text-center font-Inter text-[16px] font-[400] pb-[64px]"
          >
            Our programs have empowered over 700 girls, 5,000 women, and 100
            teachers. We've cultivated 100 hectares of land for cassava, palm
            trees, and plantains. By 2030, we aim to reach 100,000 women and
            girls across Africa.
          </p>
          <div className="flex justify-center md:flex-row flex-col items-center gap-[100px]">
            {/* First Column */}
            <div className="flex flex-col items-center">
              <h2 className="text-primaryText text-center font-Inter text-[64px] font-bold leading-normal">
                5700+
              </h2>
              <p className="text-foundationText50 text-center font-inter text-[12px] font-normal leading-normal">
                Women and Girls Empowered
              </p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col items-center">
              <h2 className="text-primaryText text-center font-Inter text-[64px] font-bold leading-normal">
                100+
              </h2>
              <p className="text-foundationText50 text-center font-inter text-[12px] font-normal leading-normal">
                Hectare farmland of cassava, <br /> palm trees, plantain
              </p>
            </div>

            {/* Third Column */}
            <div className="flex flex-col items-center">
              <h2 className="text-primaryText text-center font-Inter text-[64px] font-bold leading-normal">
                100+
              </h2>
              <p className="text-foundationText50 text-center font-inter text-[12px] font-normal leading-normal">
                Teachers Trained
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="bg-no-repeat bg-[#F9FEEC]  hidden md:block md:px-[40px] lg:px-[80px]"
          style={{
            backgroundImage: `url(${ourWorkBgLg})`,
          }}
        >
          <div className="text-center">
            <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] pt-[64px] tracking-[-1.6px] pb-4">
              Our Approach
            </h2>
            <p className="text-[#555C6A] font-Inter text-[18px] font-medium leading-[26.1px] pb-16">
              How did we achieve this?
            </p>
          </div>
          <div className="flex justify-center items-center md:flex-col-reverse lg:flex-row gap-[80px] pt-8 pb-[80px]">
            <div className="lg:w-[35%] md:w-[80%]">
              <p className="text-[#555C6A] font-Inter text-[16px] font-normal leading-[23.2px] pb-6">
                Our approach is unique, we recognize the importance of
                agriculture in wealth creation and community building.
              </p>
              <p className="text-[#555C6A] font-Inter text-[16px] font-normal leading-[23.2px]">
                Our 100 hectares farmlands situated in Abak Local Government
                Area of Akwa Ibom State, Nigeria, acts as a source of employment
                to women who cultivate different food crops and vegetables. The
                proceeds from the farm are then sold and used to provide
                community building, educational scholarships, skill empowerment
                and start up grants for women and children in these communities
              </p>
            </div>
            <div className="relative lg:w-1/2 flex items-center justify-center">
              <img
                src={videoPlaceHolderImg}
                alt="Main Farm"
                className="h-[434px] w-[448px]"
              />

              {/* Top Overlay Image */}
              <img
                src={singleImg}
                alt="Top Overlay"
                className="absolute top-[-40px] left-[-40px] h-[230px] w-[223px]  "
              />

              <img
                src={Union}
                alt="Top Overlay"
                className="absolute top-[-120px] right-[40px]   "
              />
              {/* Bottom Overlay Image */}
              <img
                src={groupImg}
                alt="Bottom Overlay"
                className="absolute bottom-[-20px] right-[-40px] h-[230px] w-[223px]   "
              />
              <img
                src={Star}
                alt="Top Overlay"
                className="absolute bottom-[40px] left-[-5px]   "
              />
            </div>
          </div>
        </div>

        <div
          className="relative bg-[#F9FEEC] md:hidden lg:hidden block overflow-x-hidden "
          style={{
            backgroundImage: `url(${ourWorkBgSm})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        >
          <div className="text-center">
            <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[40px] font-medium leading-[48px] tracking-[-1.6px] pb-4 pt-[64px]">
              Our Approach
            </h2>
            <p className="text-[#555C6A] font-Inter text-[18px] font-medium leading-[26.1px] pb-[60px]">
              How did we achieve this?
            </p>
          </div>
          <div className="relative  flex items-center justify-center pt-[80px]">
            <img
              src={videoPlaceholderSm}
              alt="Main Farm"
              className="h-[510px] w-[393px]"
            />

            {/* Top Overlay Image */}
            <img
              src={singleSm}
              alt="Top Overlay"
              className="absolute top-[-40px] left-[-5px] h-[239px] w-[115px]  "
            />

            {/* Bottom Overlay Image */}
            <img
              src={groupSm}
              alt="Bottom Overlay"
              className="absolute bottom-[-20px] right-[-5px] h-[239px] w-[115px]   "
            />
          </div>
          <div>
            <div className="pt-[80px] px-4 pb-[64px]">
              <p className="text-[#555C6A] font-Inter text-[16px] font-normal leading-[23.2px] pb-6">
                Our approach is unique, we recognize the importance of
                agriculture in wealth creation and community building.
              </p>
              <p className="text-[#555C6A] font-Inter text-[16px] font-normal leading-[23.2px]">
                Our 100 hectares farmlands situated in Abak Local Government
                Area of Akwa Ibom State, Nigeria, acts as a source of employment
                to women who cultivate different food crops and vegetables. The
                proceeds from the farm are then sold and used to provide
                community building, educational scholarships, skill empowerment
                and start up grants for women and children in these communities
              </p>
            </div>
          </div>
        </div>
      </section>
      <SuccessStories />
      <section className="bg-[#F3FAFD] px-4 md:px-[40px] lg:px-[80px] py-[64px]">
        <div className="text-center">
          <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[40px]  font-normal leading-[48px]  tracking-[-1.6px]">
            The Work Ahead
          </h2>
          <p className="text-[#555C6A] font-Inter text-[16px] font-[400] leading-[23.2px] pt-4 pb-8">
            The work that lays ahead is not easy but it is possible, and with
            you we can achieve more.
          </p>
        </div>
        <div>
          <ProjectCard projects={ProjectsData} />
        </div>
      </section>{" "}
      <section>
        <div className="border-t-[4px] border-b-[4px] border-solid border-[#D3E2F2]">
          <div className="flex md:flex-col flex-col lg:flex-row justify-center items-center gap-6 px-4 md:px-4 lg:px-[80px]">
            <div className="lg:py-4 md:py-0 py-0">
              <img
                src={foundationTeamImgLg}
                alt="team member"
                className="lg:block md:hidden hidden"
              />
              <img
                src={foundationTeamImgMd}
                alt="team member"
                className="md:block lg:hidden hidden"
              />
              <img
                src={foundationTeamImgSm}
                alt="team member"
                className="block lg:hidden md:hidden"
              />
            </div>
            <div className="py-12">
              <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[40px]  font-normal leading-[48px]  tracking-[-1.6px]">
                Join the Dara’Afrik Foundation Team
              </h2>
              <p className="pt-4 pb-12 text-[#555C6A] font-Inter text-[16px] font-[400] leading-[23.2px] text-center">
                "We can’t help everyone but everyone can help someone”
              </p>
              <div className="text-center">
                <button
                  className="join-us-variant-button lg:inline-block  hidden md:hidden"
                  onClick={() => navigate("/join-us")}
                >
                  Join Us today
                </button>
                <button
                  className=" w-[310px] px-[24px] py-[16px] md:inline-block inline-block lg:hidden  
             rounded-[8px] border-[1.5px] border-[#0A6EB4] text-[#0A6EB4] font-medium 
             hover:bg-[#0A6EB4] hover:text-white hover:border-[#0A6EB4] transition-all duration-300"
                  onClick={() => navigate("/join-us")}
                >
                  Join Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#fafef0] lg:h-[77px] md:h-[120px] h-[120px]"></div>
    </>
  );
};

export default OurWork;
