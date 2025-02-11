import React from "react";
import { useNavigate } from "react-router-dom";

// Importing images
import joinUsVideoImgSm from "../assets/images/joinUsVideoImgSm.png";
import joinUsVideoImgMd from "../assets/images/joinUsVideoImgMd.png";
import joinUsVideoImgLg from "../assets/images/joinUsVideoImgLg.png";
import volunteerPageImg from "../assets/images/volunteerPageImg.png";
import mentorPageImg from "../assets/images/mentorPageImg.png";
import partnerPageImg from "../assets/images/partnerPageImg.png";

const JoinUs = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="bg-[#F9FEEC] lg:px-[80px] py-[64px]">
      <div className="text-center lg:pb-[125px] pb-[80px] px-4">
        <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-2.24px]">
          Join Us Today!
        </h2>
        <p className="text-[#555C6A] font-Inter text-[24px] font-[500] leading-[28px] tracking-[0.4px] pt-4 lg:px-6 pb-2">
          Our mission is only possible if we do it together, join us today, to
          make a difference in the lives of underprivileged women and girls in
          Nigeria.
        </p>
      </div>

      <div className="relative">
        {/* Small Screen */}
        <div className="block sm:hidden">
          <img
            src={joinUsVideoImgSm}
            alt="Small Screen Image"
            className="w-full h-auto"
          />
        </div>

        {/* Medium Screen */}
        <div className="hidden sm:block md:hidden">
          <img
            src={joinUsVideoImgMd}
            alt="Medium Screen Image"
            className="w-full h-auto"
          />
        </div>

        {/* Large Screen */}
        <div className="hidden md:block">
          <img
            src={joinUsVideoImgLg}
            alt="Large Screen Image"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="md:pt-[125px] pt-[80px] flex flex-col px-6 md:pb-[61px] pb-4">
        {/* Volunteer Section */}
        <div className="flex gap-12 items-center md:flex-row flex-col-reverse ">
          <div className="md:w-[50%] w-full py-6 px-6 text-center border-[1.239px] border-r-[#F0F2F5] border-b-[#F0F2F5] rounded-[19.823px]">
            <h2 className="text-[#01010D] font-Inter text-[24px] font-[500] leading-[34.8px] pb-4">
              Join As A Volunteer
            </h2>
            <p className="text-[#8A8A90] font-Inter text-[16px] font-[400] leading-[23.2px] pb-6">
              Connect with like-minded individuals, professionals, and community
              leaders passionate about empowering women and supporting education
              to make a meaningful difference in the lives of girls and women in
              rural communities, contributing to a cause greater than yourself.
            </p>
            <div className="mx-auto text-center">
              <button
                className="joinUsGen-button"
                onClick={() => handleNavigation("/volunteer")}
              >
                Continue
              </button>
            </div>
          </div>
          <div className="w-[350px] h-[294px] md:w-[558px] md:h-[467px]">
            <img
              src={volunteerPageImg}
              alt="Volunteer image"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Mentor Section */}
        <div className="flex gap-12 items-center md:flex-row flex-col md:py-[120px] py-[80px]">
          <div className="w-[350px] h-[294px] md:w-[558px] md:h-[467px]">
            <img
              src={mentorPageImg}
              alt="Mentor image"
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-[50%] w-full py-6 px-6 text-center border-[1.239px] border-r-[#F0F2F5] border-b-[#F0F2F5] rounded-[19.823px]">
            <h2 className="text-[#01010D] font-Inter text-[24px] font-[500] leading-[34.8px] p-4">
              Join As A Mentor
            </h2>
            <p className="text-[#8A8A90] font-Inter text-[16px] font-[400] leading-[23.2px] pb-6">
              We believe in fostering an environment where young women can
              thrive, develop their skills, and gain the confidence needed to
              pursue their dreams. By providing mentorship, workshops, and
              networking opportunities, we strive to create a strong foundation
              that will enable them to navigate the challenges of the future
              with resilience and determination.
            </p>
            <div className="mx-auto text-center">
              <button
                className="joinUsGen-button"
                onClick={() => handleNavigation("/mentorship-section")}
              >
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* Partner Section */}
        <div className="flex gap-12 items-center md:flex-row flex-col-reverse">
          <div className="md:w-[50%] w-full py-6 px-6 text-center border-[1.239px] border-r-[#F0F2F5] border-b-[#F0F2F5] rounded-[19.823px]">
            <h2 className="text-[#01010D] font-Inter text-[24px] font-[500] leading-[34.8px] p-4">
              Join As A Partner
            </h2>
            <p className="text-[#8A8A90] font-Inter text-[16px] font-[400] leading-[23.2px] pb-6">
              Together, we can ensure that every girl receives the quality
              education she deserves and that women in rural communities gain
              access to essential healthcare services. Partner with us to
              empower future generations and create lasting change in their
              lives!
            </p>
            <div className="mx-auto text-center">
              <button
                className="joinUsGen-button"
                onClick={() => handleNavigation("/partnership-section")}
              >
                Continue
              </button>
            </div>
          </div>
          <div className="w-[350px] h-[294px] md:w-[558px] md:h-[467px]">
            <img
              src={partnerPageImg}
              alt="Partner image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
