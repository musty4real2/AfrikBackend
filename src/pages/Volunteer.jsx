import React from "react";
import { Link } from "react-router-dom";
import volunteerHeroImage from "../assets/images/volunteerHero.png";
import partnerBgImage from "../assets/images/partnerBgSm.png";
import mentorImage from "../assets/images/mentorImg.png";
import mentorImage2 from "../assets/images/mentor.png";
import volunteerVectorImage from "../assets/images/volunterVectorImg.png";
import VolunteerForm from "../components/JoinUs/VolunteerForm";
import OurWorkCard from "../components/ourWork/OurWorkCard";
import ourWorkData from "../components/ourWork/ourWorkData";

const Volunteer = () => {
  return (
    <section>
      {/* Desktop View */}
      <div
        className="relative  lg:px-[80px] lg:h-[640px] overflow-hidden  z-0 hidden lg:block bg-[#FFFDFD]"
        style={{
          backgroundImage: `url(${volunteerVectorImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",

          width: "100%",
        }}
      >
        <div className="flex items-center justify-center md:flex-row flex-col w-full h-full mt-[-32px] gap-[60px]">
          {/* Text Container */}
          <div className="relative w-full max-w-md pt-[48px] lg:pt-4 z-10 ">
            <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px]">
              Volunteer with Us Today
            </h2>
            <p className="text-[#353D4D] font-Inter text-center w-full text-[18px] font-[500] leading-[28px] tracking-[0.4px] pt-4">
              Connect with like-minded individuals, professionals, and community
              leaders passionate about empowering women and supporting education
              to make a meaningful difference in the lives of girls and women in
              rural communities, contributing to a cause greater than yourself.
            </p>
          </div>

          {/* Image Overlay */}
          <div className="relative w-[355px] h-[429px] md:w-[480px] md:h-[600px] mt-[4px] ">
            <img
              src={volunteerHeroImage}
              alt="Children and healthcare worker"
              className=" h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative px-4 w-full lg:hidden">
        <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px] pt-[48px]">
          Volunteer with Us Today!
        </h2>

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-[800px] overflow-hidden bg-cover bg-center top-[200px]">
          <img
            src={partnerBgImage}
            alt="Background"
            className="w-full h-full object-cover opacity-100"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-gray-800 space-y-4 mt-6">
          <p
            className="text-[20px] text-center font-Inter font-medium mb-[104px] leading-[145%] text-[#555C6A]"
            style={{
              fontFeatureSettings: "'salt' on, 'cv01' on, 'cv03' on, 'cv04' on",
            }}
          >
            Connect with like-minded <br />
            individuals, professionals, and community leaders passionate <br />
            about empowering women and supporting education to make a meaningful
            difference in the lives of girls and women in rural communities,
            contributing to a <br />
            cause greater than yourself.
          </p>

          {/* Map-like Image */}
          <div className="relative pb-[48px]">
            <img
              src={volunteerHeroImage}
              alt="Map of Africa"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Volunteer Form Section */}
      <section className="my-[80px] lg:px-[80px] px-4">
        <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.6px] pb-4">
          Join Us In Making An Impact!
        </h2>
        <p className="font-inter text-[#555C6A] text-[18px] text-center font-medium leading-[26.1px] mb-12">
          Please fill out the information below to volunteer with
          Dara&apos;afrik Foundation. We are excited to work together towards a
          positive impact in rural communities in Africa.
        </p>

        <VolunteerForm />
      </section>

      {/* Partner and Mentor Section */}
      <section className="lg:px-[80px] md:px-[40px] px-4 lg:pb-[80px] pb-[40px] bg-[#FEFFD]">
        <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.6px] pb-[24px]">
          You can also join us as
        </h2>
        <div className="flex justify-between items-center lg:flex-row md:flex-col flex-col lg:gap-[78px] gap-[78px] md:gap-[32px] pb-[80px]">
          {/* Partner Section */}
          <div className="flex md:flex-row lg:flex-row flex-col justify-center items-center lg:gap-[20px] md:gap-[14px] lg:w-[555px]">
            <img
              className="rounded-[12.509px] w-[80%] md:w-[246px] pb-[14px] lg:pb-0"
              src={mentorImage}
              alt="mentor"
              width={246}
              height={204}
            />
            <Link
              to="/partnership-section"
              className="no-underline w-[75%] lg:w-[60%] md:w-[30%] group"
            >
              <div className="flex flex-col items-start transition-all duration-300 hover:transform hover:scale-105 rounded-[16px] p-4 border-r-custom border-b-custom border-greyP">
                <h4 className="font-inter text-[#01010D] text-[16px] font-medium leading-[20.3px] pb-2  group-hover:text-[#344054]">
                  A Partner
                </h4>
                <p className=" font-inter text-[#8A8A90] text-[14px] font-normal leading-[20.3px] ">
                  Help us ensure every girl gets quality education and every
                  woman in rural areas has essential health care.
                </p>
              </div>
            </Link>
          </div>

          {/* Mentor Section */}
          <div className="flex lg:flex-row md:flex-row-reverse flex-col justify-center items-center lg:gap-[20px] md:gap-[14px] lg:w-[555px]">
            <img
              className="rounded-[12.509px] w-[80%] md:w-[246px] lg:pb-0 pb-[35px] object-cover"
              src={mentorImage2}
              alt="mentor"
              width={246}
              height={204}
            />

            <Link
              to="/mentorship-section"
              className="no-underline w-[75%] lg:w-[60%] md:w-[30%] group"
            >
              <div className="flex flex-col items-start transition-all duration-300 hover:transform hover:scale-105 rounded-[16px] p-4 border-r-custom border-b-custom border-greyP">
                <h4 className="font-inter text-[#01010D] text-[16px] font-medium leading-[20.3px] pb-2  group-hover:text-[#344054]">
                  A Mentor
                </h4>
                <p className=" font-inter text-[#8A8A90] text-[14px] font-normal leading-[20.3px]  ">
                  Empower, inspire, and support girls, with the ultimate goal of
                  expanding economic opportunities for them.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <hr
          className="border-t h-[1px] w-full mt-2 mb-2 "
          style={{ borderColor: "#D0D5DD" }}
        />
        <p className="font-inter text-[#020C21] text-[16px] text-center font-normal leading-[23.2px] md:py-[40px] md:block hidden">
          For further questions and enquries about Dara&apos;Afrik, kindly send
          us a message us at{" "}
          <span>
            {" "}
            <a
              href="mailto:dara’afrikfoundation@gmail.com"
              className="hover:underline text-[#0a6eb4] font-semibold text-[20px] font-inter"
            >
              dara&apos;afrikfrikfoundation@gmail.com
            </a>
          </span>
        </p>
        <p className="font-inter text-[#020C21] text-[16px] text-center font-normal leading-[23.2px] md:py-[40px] md:hidden block">
          For further questions and enquries about Dara&apos;Afrik, kindly send
          us a message us at{" "}
        </p>
        <a
          href="mailto:dara’afrikfoundation@gmail.com"
          className="hover:underline text-[#0A6EB4] font-semibold text-[20px] font-inter md:hidden block pb-[40px] pt-4 text-center"
        >
          dara&apos;afrikfrikfoundation@gmail.com
        </a>

        <hr
          className="border-t h-[1px] w-full mt-2 mb-2 "
          style={{ borderColor: "#D0D5DD" }}
        />
      </section>

      {/* Our Work Section */}
      <section className="bg-[#FFF5FA] py-[64px] px-4">
        <div className="lg:px-[80px]">
          <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.6px] pb-4">
            Learn more about what we do at Dara&apos;Afrik
          </h2>
          <p className="font-inter text-[#555C6A] text-[16px] text-center font-normal leading-[23.2px]">
            At Dara&apos;afrik Foundation, our mission is simple: to drive
            sustainable economic development for women and girls in Africa
            through targeted programs focused on healthcare, education,
            technology advocacy and food security.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[24px] pt-8 ">
          <OurWorkCard ourWorks={ourWorkData} />
        </div>
      </section>
    </section>
  );
};

export default Volunteer;
