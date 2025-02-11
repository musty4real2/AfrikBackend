import React from "react";
import aboutUsHeroImg from "../assets/images/aboutUsImg/AboutUsHeroImg.png";
import aboutUsHeroImgMd from "../assets/images/aboutUsImg/aboutUsHeroImgMd.png";
import aboutUsHeroSmImg from "../assets/images/aboutUsImg/Hero picture.png";
import ArrowImg from "../assets/images/aboutUsImg/ArrowUpRight.png";
import AvatarImg from "../assets/images/aboutUsImg/avartarGroups.png";
import victoryLogo from "../assets/images/aboutUsImg/AksLogo.png";
import AksLogo from "../assets/images/aboutUsImg/victoryLogo.png";
import AboutFounder from "../components/AboutUs/AboutFounder";

import OurProgram from "../components/AboutUs/OurProgram";
import TeamMembers from "../components/AboutUs/TeamMembers";
import TeamMembersMd from "../components/AboutUs/TeamMembersMd";
import TeamMemberSm from "../components/AboutUs/TeamMemberSm";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleJoinUsClick = () => {
    navigate("/join-us");
  };

  const handleDonateClick = () => {
    navigate("/donate");
  };

  return (
    <section className="HeroSection overflow-x-hidden">
      <div
        className="relative w-full  h-[720px] bg-cover bg-center hidden lg:block md:hidden overflow-x-hidden"
        style={{
          backgroundImage: `url(${aboutUsHeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl lg:ml-[216px] px-4 md:pt-[68px] pt-[34px]">
          <h1 className="text-[#FEFFFD] font-[Gilroy-Bold] text-[48px] md:block hidden font-normal leading-[56px] tracking-[-2.24px]">
            About Dara’Afrik Foundation
          </h1>

          <h1 className="text-[#FEFFFD] font-[Gilroy-Bold] text-[48px] block md:hidden font-normal leading-[56px] tracking-[-2.24px]">
            About <br />
            Dara’Afrik Foundation
          </h1>
          <p className="text-[#E3E7D7] font-Inter text-[24px] font-[600] leading-[33.6px] pt-2 pb-[56px]">
            Breaking barriers, building lives...
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-start items-start md:items-center pb-[17px] ">
            <button
              onClick={handleJoinUsClick}
              className="flex items-center w-[210px] gap-2 px-6 py-4  rounded-lg border border-[#FF570A] bg-[#FF570A] text-[#FEFFFD]
            hover:bg-[#FF793B] transition-colors duration-150 ease-in   font-inter text-[16px] font-semibold leading-[145%]"
            >
              <span>Join Our Team</span> <img src={ArrowImg} alt="arrowimage" />
            </button>
            <div className="flex items-center gap-1">
              <img
                src={AvatarImg}
                alt="Avatar group "
                className="object-contain"
              />
              <p className="text-[#E6E7E9] font-Inter text-[16px] font-[500] leading-[23.2px] ">
                Volunteers across Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative w-full  h-[600px] bg-cover bg-center hidden md:block lg:hidden"
        style={{
          backgroundImage: `url(${aboutUsHeroImgMd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl md:ml-[40px] px-4 md:pt-[64px] ">
          <h1 className="text-[#FEFFFD] font-[Gilroy-Bold] text-[48px] md:block hidden font-normal leading-[56px] tracking-[-2.24px]">
            About Dara’Afrik Foundation
          </h1>

          <h1 className="text-[#FEFFFD] font-[Gilroy-Bold] text-[48px] block md:hidden font-normal leading-[56px] tracking-[-2.24px]">
            About <br />
            Dara’Afrik Foundation
          </h1>
          <p className="text-[#E3E7D7] font-Inter text-[24px] font-[600] leading-[33.6px] pt-2 pb-[56px]">
            Breaking barriers, building lives...
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-start items-start md:items-center pb-[17px] ">
            <button
              onClick={handleJoinUsClick}
              className="flex items-center w-[210px] gap-2 px-6 py-4  rounded-lg border border-[#FF570A] bg-[#FF570A] text-[#FEFFFD]
            hover:bg-[#FF793B] transition-colors duration-150 ease-in  font-inter text-[16px] font-semibold leading-[145%]"
            >
              <span>Join Our Team</span> <img src={ArrowImg} alt="arrowimage" />
            </button>
            <div className="flex items-center gap-1">
              <img
                src={AvatarImg}
                alt="Avatar group "
                className="object-contain"
              />
              <p className="text-[#E6E7E9] font-Inter text-[16px] font-[500] leading-[23.2px] ">
                Volunteers across Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative w-full h-[760px] bg-cover bg-center md:hidden lg:hidden block"
        style={{
          backgroundImage: `url(${aboutUsHeroSmImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="  px-4  pt-[34px]">
          <h1 className="text-[#FEFFFD] font-[Gilroy-Bold] text-[48px] md:block hidden font-normal leading-[56px] tracking-[-2.24px]">
            About Dara’Afrik Foundation
          </h1>

          <h1 className="text-[#FEFFFD] font-[Gilroy-Bold] text-[48px] block md:hidden font-normal leading-[56px] tracking-[-2.24px]">
            About <br />
            Dara’Afrik Foundation
          </h1>
          <p className="text-[#E3E7D7] font-Inter text-[24px] font-[600] leading-[33.6px] pt-2 pb-[56px]">
            Breaking barriers, building lives...
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-start items-start md:items-center ">
            <button
              onClick={handleJoinUsClick}
              className="flex items-center w-[210px] gap-2 px-6 py-4  rounded-lg border border-[#FF570A] bg-[#FF570A] text-[#FEFFFD]
           hover:bg-[#FF793B] transition-colors duration-150 ease-in  font-inter text-[16px] font-semibold leading-[145%]"
            >
              <span>Join Our Team</span> <img src={ArrowImg} alt="arrowimage" />
            </button>
            <div className="flex items-center gap-1">
              <img
                src={AvatarImg}
                alt="Avatar group "
                className="object-contain"
              />
              <p className="text-[#E6E7E9] font-Inter text-[16px] font-[500] leading-[23.2px] ">
                Volunteers across Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutFounder />
      <OurProgram />
      <section className="bg-[#EDEEEC] lg:px-[80px] px-4 py-4">
        <div
          className="flex justify-center items-center flex-col md:flex-col lg:flex-row py-4 w-full lg:w-[1238px]"
          style={{
            borderRadius: "20px",
            border:
              "1px solid var(--fairmoney-io-black-5, rgba(0, 0, 0, 0.05))",
          }}
        >
          <h3 className="lg:mr-6 md:mr-2 font-Inter text-[20px] md:text-[18px] lg:text-[20px] font-[700] text-[#353D4D] pb-6 md:pb-0">
            OUR SPONSORS
          </h3>
          <div className="flex md:flex-row lg:flex-row flex-col">
            <div className="flex justify-center items-center lg:mr-[64px] md:mr-[64px] mr-0 mb-[64px] md:mb-0 mx-2 md:mx-0 gap-4 md:gap-0">
              <img src={victoryLogo} alt="logo" />
              <h3 className="font-Inter  text-[16px] font-[500] text-[#555C6A] leading-[23.2px] text-center">
                OFFICE OF THE AKWA IBOM STATE GOVERNOR
              </h3>
            </div>
            <div className="flex justify-center items-center">
              <img src={AksLogo} alt="logo" />
              <h3 className="font-Inter text-[16px] font-[500] text-[#555C6A] leading-[23.2px] text-center">
                VICTORY SEEDS SPECIALIST HOSPITAL
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <TeamMembers />
        <TeamMembersMd />
        <TeamMemberSm />
      </section>
      <section className="bg-[#F3FAFD] lg:px-[80px] md:px-[40px] px-4 py-[80px]">
        <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.6px] pb-4">
          How Can You Be Of Help?
        </h2>
        <p className="text-[#555C6A] font-Inter text-[16px] font-[400] leading-[23.2px] text-center pb-12">
          "We can’t help everyone, but everyone can help someone”.
        </p>
        <div className="flex  justify-center gap-6 lg:flex-row md:flex-row flex-col items-center">
          <button
            onClick={handleDonateClick}
            className="flex flex-col items-center justify-center gap-2 w-[310px] px-6 py-4 rounded-[8px] border-[1.5px]  text-[#FAFEF0] text-center font-inter text-[16px] font-semibold leading-[145%] bg-[#0A6EB4] hover:bg-[#3b8bc3] transition-colors duration-150 ease-in "
          >
            Donate to our projects
          </button>
          <button
            onClick={handleJoinUsClick}
            className="flex flex-col items-center justify-center gap-2 w-[310px] px-6 py-4 rounded-[8px] border-[1.5px] border-[#0A6EB4] text-[#0A6EB4] text-center font-inter text-[16px] font-semibold leading-[145%] bg-[#FAFEF0] transform hover:scale-105 transition-colors duration-150 ease-in hover:bg-[#e7f1f8] hover:border-[#5B9ECD] hover:text-[#5B9ECD]"
          >
            Join us today
          </button>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
