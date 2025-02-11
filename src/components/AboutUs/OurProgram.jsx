import React, { useState, useEffect } from "react";

import ourProgramBg from "../../assets/images/aboutUsImg/ourProgramBg.png";
import ourProgramBgMd from "../../assets/images/aboutUsImg/ourProgramBgMd.png";
import ourProgramBgSm from "../../assets/images/aboutUsImg/ourProgramBgSm.png";
import programArrow from "../../assets/images/aboutUsImg/programArrow.png";
import { useNavigate } from "react-router-dom";

const OurProgram = () => {
  const navigate = useNavigate();

  const handleLearnMore = (program) => {
    const sanitizedId = `work-${program
      .toLowerCase()
      .replace(/[\/]/g, "-") // Replace slashes with hyphens
      .replace(/\s+/g, "-")}` // Replace spaces with hyphens
      .replace(/'/g, ""); // Remove apostrophes to match ID format

    console.log("Navigating to ID:", sanitizedId);

    navigate("/our-work", {
      state: { scrollTo: sanitizedId },
    });
  };

  // Add this useEffect in your /our-work page component
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.state]);
  return (
    <section>
      <div
        className=" h-[701px] w-full bg-cover bg-center  hidden lg:block md:hidden mt-[-270px] overflow-x-hidden "
        style={{
          backgroundImage: `url(${ourProgramBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-[230px] flex justify-center items-center flex-col">
          <div
            className=" w-[974px]"
            style={{
              borderRadius: "27px",
              border: "2px solid #DED8D8",
              background:
                "radial-gradient(231% 135.8% at 0.9% 2.98%, rgba(224, 240, 219, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
              boxShadow: "3px 12px 23.6px -2px rgba(0, 0, 0, 0.07)",
              backdropFilter: "blur(3.4px)",
            }}
          >
            <h2 className="text-[#FEFFFD] font-[Gilroy-Bold] text-[40px] text-center font-normal leading-[48px] py-6 tracking-[-1.6px]">
              Our Programs
            </h2>
            <div className="flex justify-center items-center gap-6 pb-6 text-[#FEFFFD]">
              <div className="w-[28%] px-6 py-2">
                <h3 className="font-Inter text-[20px] font-bold leading-[28px] tracking-[0.4px] mb-2">
                  Education for Underserved Girls
                </h3>
                <p className=" font-Inter text-[14px] font-medium leading-[20.3px]">
                  Through our Education for Underserved Girls program, we
                  provide scholarships, school supplies, and mentorship to
                  ensure that girls have the opportunity to stay in school.
                </p>
                <div className="pt-6 flex gap-[10px] justify-start items-center">
                  <button
                    onClick={() =>
                      handleLearnMore("Education for Underserved Girls")
                    }
                    className="bg-[#0A6EB4] text-[#FAFEF0] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#3b8bc3] transition-colors duration-150 ease-in"
                  >
                    Learn More
                  </button>
                  <div
                    onClick={() =>
                      handleLearnMore("Education for Underserved Girls")
                    }
                    className="cursor-pointer transform transition-transform hover:scale-110 duration-150 ease-in group"
                  >
                    <img
                      src={programArrow}
                      alt="arrow"
                      className="group-hover:brightness-125 transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[28%] px-6 py-2">
                <h3 className="font-Inter text-[20px] font-bold leading-[28px] tracking-[0.4px] mb-2">
                  Women's Health/ Food Security Outreach
                </h3>
                <p className=" font-Inter text-[14px] font-medium leading-[20.3px]">
                  We offer free medical camps that provide screenings,
                  treatments, and health education to address common issues such
                  as maternal health, reproductive care, and disease prevention.
                </p>
                <div className="pt-6 flex gap-[10px] justify-start items-center">
                  <button
                    onClick={() =>
                      handleLearnMore("Women's Health/Food Security Outreach")
                    }
                    className="bg-[#0A6EB4] text-[#FAFEF0] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#3b8bc3] transition-colors duration-150 ease-in"
                  >
                    Learn More
                  </button>

                  <div
                    onClick={() =>
                      handleLearnMore("Women's Health/Food Security Outreach")
                    }
                    className="cursor-pointer transform transition-transform hover:scale-110 duration-150 ease-in group"
                  >
                    <img
                      src={programArrow}
                      alt="arrow"
                      className="group-hover:brightness-125 transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[28%] px-6 py-2">
                <h3 className="font-Inter text-[20px] font-bold leading-[28px] tracking-[0.4px] mb-2">
                  Mentorship for Young Women
                </h3>
                <p className=" font-Inter text-[14px] font-medium leading-[20.3px]">
                  Our Mentorship Program connects young women with experienced
                  mentors who provide guidance, support, and encouragement as
                  they navigate their educational and career paths.
                </p>
                <div className="pt-6 flex gap-[10px] justify-start items-center">
                  <button
                    onClick={() =>
                      handleLearnMore("Mentorship for Young Women")
                    }
                    className="bg-[#0A6EB4] text-[#FAFEF0] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#3b8bc3] transition-colors duration-150 ease-in"
                  >
                    Learn More
                  </button>
                  <div
                    onClick={() =>
                      handleLearnMore("Mentorship for Young Women")
                    }
                    className="cursor-pointer transform transition-transform hover:scale-110 duration-150 ease-in group"
                  >
                    <img
                      src={programArrow}
                      alt="arrow"
                      className="group-hover:brightness-125 transition-all duration-150"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" h-[706px] w-full bg-cover bg-center  hidden md:block lg:hidden mt-[-260px] overflow-x-hidden "
        style={{
          backgroundImage: `url(${ourProgramBgMd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-[230px] flex justify-center items-center flex-col">
          <div
            className=" w-[780px] "
            style={{
              borderRadius: "27px",
              border: "2px solid #DED8D8",
              background:
                "radial-gradient(231% 135.8% at 0.9% 2.98%, rgba(224, 240, 219, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
              boxShadow: "3px 12px 23.6px -2px rgba(0, 0, 0, 0.07)",
              backdropFilter: "blur(3.4px)",
            }}
          >
            <h2 className="text-[#FEFFFD] font-[Gilroy-Bold] text-[40px] text-center font-normal leading-[48px] py-6 tracking-[-1.6px]">
              Our Programs
            </h2>
            <div className="flex justify-center items-center  pb-6 px-2 text-[#FEFFFD]">
              <div className="w-[70%] py-2 ">
                <h3 className="font-Inter text-[18px] font-bold leading-[28px] tracking-[0.4px] mb-2">
                  Education for Underserved Girls
                </h3>
                <p className=" font-Inter text-[14px] font-medium leading-[20.3px]">
                  Through our Education for Underserved Girls program, we
                  provide scholarships, school supplies, and mentorship to
                  ensure that girls have the opportunity to stay in school.
                </p>
                <div className="pt-6 flex gap-[10px] justify-center items-center">
                  <button
                    onClick={() =>
                      handleLearnMore("Education for Underserved Girls")
                    }
                    className="bg-[#0A6EB4] text-[#FAFEF0] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#3b8bc3] transition-colors duration-150 ease-in"
                  >
                    Learn More
                  </button>
                  <div
                    onClick={() =>
                      handleLearnMore("Education for Underserved Girls")
                    }
                    className="cursor-pointer transform transition-transform hover:scale-110 duration-150 ease-in group"
                  >
                    <img
                      src={programArrow}
                      alt="arrow"
                      className="group-hover:brightness-125 transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[70%] px-6 py-2">
                <h3 className="font-Inter text-[18px] font-bold leading-[28px] tracking-[0.4px] mb-2">
                  Women's Health/ Food Security Outreach
                </h3>
                <p className=" font-Inter text-[14px] font-medium leading-[20.3px]">
                  We offer free medical camps that provide screenings,
                  treatments, and health education to address common issues such
                  as maternal health, reproductive care, and disease prevention.
                </p>
                <div className="pt-6 flex gap-[10px] justify-center items-center">
                  <button
                    onClick={() =>
                      handleLearnMore("Women's Health/Food Security Outreach")
                    }
                    className="bg-[#0A6EB4] text-[#FAFEF0] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#3b8bc3] transition-colors duration-150 ease-in"
                  >
                    Learn More
                  </button>
                  <div
                    onClick={() =>
                      handleLearnMore("Women's Health/Food Security Outreach")
                    }
                    className="cursor-pointer transform transition-transform hover:scale-110 duration-150 ease-in group"
                  >
                    <img
                      src={programArrow}
                      alt="arrow"
                      className="group-hover:brightness-125 transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[70%] px-6 py-2">
                <h3 className="font-Inter text-[18px] font-bold leading-[28px] tracking-[0.4px] mb-2">
                  Mentorship for Young Women
                </h3>
                <p className=" font-Inter text-[14px] font-medium leading-[20.3px]">
                  Our Mentorship Program connects young women with experienced
                  mentors who provide guidance, support, and encouragement as
                  they navigate their educational and career paths.
                </p>
                <div className="pt-6 flex gap-[10px] justify-center items-center">
                  <button
                    onClick={() =>
                      handleLearnMore("Mentorship for Young Women")
                    }
                    className="bg-[#0A6EB4] text-[#FAFEF0] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#3b8bc3] transition-colors duration-150 ease-in"
                  >
                    Learn More
                  </button>
                  <div
                    onClick={() =>
                      handleLearnMore("Mentorship for Young Women")
                    }
                    className="cursor-pointer transform transition-transform hover:scale-110 duration-150 ease-in group"
                  >
                    <img
                      src={programArrow}
                      alt="arrow"
                      className="group-hover:brightness-125 transition-all duration-150"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" h-[1231px] w-full bg-cover  md:hidden block lg:hidden mt-[-220px] overflow-x-hidden"
        style={{
          backgroundImage: `url(${ourProgramBgSm})`,
          backgroundSize: "cover",
        }}
      >
        <div className="pt-[200px] flex justify-center items-center flex-col">
          <div
            className=" w-[361px] h-[928px] "
            style={{
              borderRadius: "27px",
              border: "2px solid #DED8D8",
              background:
                "radial-gradient(231% 135.8% at 0.9% 2.98%, rgba(224, 240, 219, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
              boxShadow: "3px 12px 23.6px -2px rgba(0, 0, 0, 0.07)",
              backdropFilter: "blur(3.4px)",
            }}
          >
            <h2 className="text-[#FEFFFD] font-[Gilroy-Bold] text-[40px] text-center font-normal leading-[48px] py-6 tracking-[-1.6px]">
              Our Programs
            </h2>
            <div className="flex items-center justify-center">
              <div className="flex  flex-col items-center justify-center pb-6 text-[#FEFFFD] gap-6">
                <div className="w-full px-8 py-2">
                  <h3 className="font-Inter text-[20px] font-bold leading-[28px] tracking-[0.4px] mb-2">
                    Education for <br /> Underserved Girls
                  </h3>
                  <p className=" font-Inter text-[14px] font-medium leading-[20.3px] w-[85%]">
                    Through our Education for Underserved Girls program, we
                    provide scholarships, school supplies, and mentorship to
                    ensure that girls have the opportunity to stay in school.
                  </p>
                  <div className="pt-6 flex gap-[10px]  items-center">
                    <button
                      onClick={() =>
                        handleLearnMore("Education for Underserved Girls")
                      }
                      className="bg-[#0A6EB4] text-[#FAFEF0] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#3b8bc3] transition-colors duration-150 ease-in"
                    >
                      Learn More
                    </button>
                    <div
                      onClick={() =>
                        handleLearnMore("Education for Underserved Girls")
                      }
                      className="cursor-pointer transform transition-transform hover:scale-110 duration-150 ease-in group"
                    >
                      <img
                        src={programArrow}
                        alt="arrow"
                        className="group-hover:brightness-125 transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full px-6 py-2">
                  <h3 className="font-Inter text-[20px] font-bold leading-[28px] tracking-[0.4px] mb-2">
                    Women's Health/ Food <br /> Security Outreach
                  </h3>
                  <p className=" font-Inter text-[14px] font-medium leading-[20.3px] w-[85%]">
                    We offer free medical camps that provide screenings,
                    treatments, and health education to address common issues
                    such as maternal health, reproductive care, and disease
                    prevention.
                  </p>
                  <div className="pt-6 flex gap-[10px] justify-left items-center">
                    <button
                      onClick={() =>
                        handleLearnMore("Women's Health/Food Security Outreach")
                      }
                      className="bg-[#0A6EB4] text-[#FAFEF0] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#3b8bc3] transition-colors duration-150 ease-in"
                    >
                      Learn More
                    </button>
                    <div
                      onClick={() =>
                        handleLearnMore("Women's Health/Food Security Outreach")
                      }
                      className="cursor-pointer transform transition-transform hover:scale-110 duration-150 ease-in group"
                    >
                      <img
                        src={programArrow}
                        alt="arrow"
                        className="group-hover:brightness-125 transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full px-6 py-2">
                  <h3 className="font-Inter text-[20px] font-bold leading-[28px] tracking-[0.4px] mb-2">
                    Mentorship for Young <br /> Women
                  </h3>
                  <p className=" font-Inter text-[14px] font-medium leading-[20.3px] w-[85%]">
                    Our Mentorship Program connects young women with experienced
                    mentors who provide guidance, support, and encouragement as
                    they navigate their educational and career paths.
                  </p>
                  <div className="pt-6 flex gap-[10px] justify-start items-center">
                    <button
                      onClick={() =>
                        handleLearnMore("Mentorship for Young Women")
                      }
                      className="bg-[#0A6EB4] text-[#FAFEF0] leading-[20.3px] font-Inter font-bold text-[14px] w-[145px] px-4 py-2 rounded-lg hover:bg-[#3b8bc3] transition-colors duration-150 ease-in"
                    >
                      Learn More
                    </button>
                    <div
                      onClick={() =>
                        handleLearnMore("Mentorship for Young Women")
                      }
                      className="cursor-pointer transform transition-transform hover:scale-110 duration-150 ease-in group"
                    >
                      <img
                        src={programArrow}
                        alt="arrow"
                        className="group-hover:brightness-125 transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProgram;
