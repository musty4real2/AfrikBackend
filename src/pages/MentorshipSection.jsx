import React from "react";
import MentorForm from "../components/mentor/MentorForm";
import OurWorkCard from "../components/ourWork/OurWorkCard";
import ourWorkData from "../components/ourWork/ourWorkData";
import { Link } from "react-router-dom";
// Image imports
import ArrowImg from "../assets/images/Arrow.png";
import MentorHeroImg1 from "../assets/images/mentorHeroImg1.png";
import MentorVector from "../assets/images/mentorVector.png";
import MentorHeroImg3 from "../assets/images/mentorHeroImg3.png";
import VolunteerImg from "../assets/images/volunteer.png";
import partnerBgMdImg from "../assets/images/partnerBgMdImg.png";
import MentorImg from "../assets/images/mentorImg.png";
import partnerBgLgImg from "../assets/images/partnerBg.png";

const MentorshipSection = () => {
  return (
    <section>
      <div
        className="relative h-full lg:px-[80px] mt-0 overflow-hidden w-full z-0 hidden lg:block bg-[#F6FEFF]"
        style={{
          backgroundImage: `url(${partnerBgLgImg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          height: "100vh",
        }}
      >
        <div className="flex items-center justify-between md:flex-row flex-col w-full h-full mt-[-60px] gap-12">
          {/* Text Container */}
          <div className="relative  w-[600px] pt-[48px] lg:pt-0 text-center z-10 lg:text-left">
            <h2 className="text-[#020C21] text-center lg:pt-[142px] pb-8 font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px]">
              What it takes to Mentor with Dara’Afrik Foundation
            </h2>
            <div className="flex flex-col w-[90%]">
              <div className="flex gap-6">
                <div className="flex items-center gap-4">
                  <img src={ArrowImg} alt="arrow" width={42} height={36} />
                  <p className="font-inter text-[#555C6A] text-[16px] text-start font-bold leading-[20.3px] w-[70%]">
                    A minimum of 2 years of professional experience in your
                    field or relevant expertise.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={ArrowImg} alt="arrow" width={42} height={36} />
                  <p className="font-inter text-[#555C6A] text-[16px] text-start font-bold w-[100%] leading-[20.3px]">
                    A genuine desire to help young girls build their confidence
                    and skill set
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 py-4 ml-4">
                <img src={ArrowImg} alt="arrow" width={42} height={36} />
                <p className="font-inter text-[#555C6A] text-[16px] text-start font-bold w-[35%] leading-[20.3px]">
                  Availability to mentor at least 1-2 hours per week.
                </p>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center gap-4">
                  <img src={ArrowImg} alt="arrow" width={42} height={36} />
                  <p className="font-inter text-[#555C6A] text-[16px] text-start font-bold leading-[20.3px] w-[70%]">
                    Ability to communicate effectively and respectfully with
                    individuals from diverse backgrounds.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={ArrowImg} alt="arrow" width={42} height={36} />
                  <p className="font-inter text-[#555C6A] text-[16px] text-start font-bold leading-[20.3px] w-[80%]">
                    Ability to demonstrate leadership, resilience, and
                    professionalism to inspire mentees.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Overlay */}
          <div className="relative w-[355px] h-[429px] md:w-[560px] lg:w-[480px] lg:h-[400px] md:h-[500px] mt-[4px] md:mt-[32px] lg:mt-[109px]">
            <img
              src={MentorHeroImg1}
              alt="Mentor Image"
              className="rounded-lg"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative px-4 w-full lg:hidden md:hidden bg-[#F6FEFF] block h-[1080px] top-0 ">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full px-4 ">
          <img
            src={MentorVector}
            alt="Background"
            className="object-cover object-center w-full h-full"
            style={{ position: "absolute", top: 0, left: 0 }}
          />

          <div className="mt-[57px] pb-[104px]">
            <img
              src={MentorHeroImg3}
              width={365}
              height={302}
              alt="Mentor Image"
              className="rounded-lg object-contain"
            />
          </div>
          <h2 className="text-[#020C21] text-center pb-8 font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.6px]">
            What it takes to Mentor with Dara&apos;Afrik
          </h2>
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <img src={ArrowImg} alt="arrow" width={42} height={36} />
              <p className="font-inter text-[#555C6A] text-[16px] text-start font-bold leading-[20.3px] w-[80%]">
                A minimum of 2 years of professional experience in your field or
                relevant expertise.
              </p>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <img src={ArrowImg} alt="arrow" width={42} height={36} />
              <p className="font-inter text-[#555C6A] text-[16px] text-start font-bold w-[70%] leading-[20.3px]">
                A genuine desire to help young girls build their confidence and
                skill set
              </p>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <img src={ArrowImg} alt="arrow" width={42} height={36} />
              <p className="font-inter text-[#555C6A] text-[16px] text-start font-bold w-[50%] leading-[20.3px]">
                Availability to mentor at least 1-2 hours per week.
              </p>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <img src={ArrowImg} alt="arrow" width={42} height={36} />
              <p className="font-inter text-[#555C6A] text-[16px] text-start font-bold leading-[20.3px] w-[80%]">
                Ability to communicate effectively and respectfully with
                individuals from diverse backgrounds.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src={ArrowImg} alt="arrow" width={42} height={36} />
              <p className="font-inter text-[#555C6A] text-[16px] text-start font-bold leading-[20.3px] w-[80%]">
                Ability to demonstrate leadership, resilience, and
                professionalism to inspire mentees.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*medium screen */}
      <div className="relative px-[40px] w-full lg:hidden bg-[#F6FEFF] hidden md:block h-[1000px] top-0">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={partnerBgMdImg}
            alt="Background"
            className="object-cover object-center w-full h-full"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative flex flex-col items-center justify-center w-full h-full z-10">
          {/* Hero Image */}
          <div className="mb-8">
            <img
              src={MentorHeroImg3}
              width={640}
              height={532}
              alt="Mentor Image"
              className="rounded-lg object-contain"
            />
          </div>

          {/* Heading */}
          <h2 className="text-[#020C21] text-center pb-8 font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.6px]">
            What it takes to Mentor with Dara&apos;Afrik
          </h2>

          {/* Requirements Section */}
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-4 max-w-[300px]">
                <img src={ArrowImg} alt="arrow" width={42} height={36} />
                <p className="font-inter text-[#555C6A] text-[16px] font-bold leading-[20.3px]">
                  A minimum of 2 years of professional experience in your field
                  or relevant expertise.
                </p>
              </div>
              <div className="flex items-center gap-4 max-w-[300px]">
                <img src={ArrowImg} alt="arrow" width={42} height={36} />
                <p className="font-inter text-[#555C6A] text-[16px] font-bold leading-[20.3px]">
                  A genuine desire to help young girls build their confidence
                  and skill set.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-4 max-w-[500px]">
              <img src={ArrowImg} alt="arrow" width={42} height={36} />
              <p className="font-inter text-[#555C6A] text-[16px] font-bold leading-[20.3px]">
                Availability to mentor at least 1-2 hours per week.
              </p>
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-4 max-w-[300px]">
                <img src={ArrowImg} alt="arrow" width={42} height={36} />
                <p className="font-inter text-[#555C6A] text-[16px] font-bold leading-[20.3px]">
                  Ability to communicate effectively and respectfully with
                  individuals from diverse backgrounds.
                </p>
              </div>
              <div className="flex items-center gap-4 max-w-[300px]">
                <img src={ArrowImg} alt="arrow" width={42} height={36} />
                <p className="font-inter text-[#555C6A] text-[16px] font-bold leading-[20.3px]">
                  Ability to demonstrate leadership, resilience, and
                  professionalism to inspire mentees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mentorForm bg-[#F9FEEC] lg:px-[80px] px-4">
        <h2 className="text-[#020C21] text-center pt-[80px] pb-4 font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.6px]">
          Become a Mentor and Help Shape the Future!
        </h2>
        <p className="font-inter text-[#8B8F99] text-[16px] text-center font-normal pb-12 leading-[20.3px]">
          Thank you for your interest in becoming a mentor with us. Please fill
          out the form below so we can learn more about you and determine how
          you can best contribute to our mission.
        </p>
      </section>
      <MentorForm />

      <section className="lg:px-[80px] md:px-[40px] px-4 lg:pb-[80px] pb-[40px] bg-[#F9FEEC] ">
        <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.6px] pb-[24px] lg:pt-[73px] pt-12">
          You can also join us as
        </h2>
        <div className="flex justify-between items-center lg:flex-row md:flex-col flex-col lg:gap-[72px] gap-[78px] md:gap-[32px] pb-[80px] ">
          <div className="flex md:flex-row flex-col justify-center items-center lg:gap-[20px] md:gap-[14px]  lg:w-[555px]  ">
            <img
              className="rounded-[12.509px] w-[80%] md:w-[246px] pb-[14px] lg:pb-0 h-[204px] object-cover"
              src={VolunteerImg}
              alt="volunteer"
              width={246}
              height={204}
            />
            <Link
              to="/volunteer"
              className="no-underline w-[75%] lg:w-[100%] md:w-[30%] group"
            >
              <div className=" flex flex-col items-start p-4 border-r-custom border-b-custom border-greyP transition-all duration-300 hover:transform hover:scale-105">
                <h4 className="font-inter text-[#01010D] text-[16px] font-medium leading-[20.3px] pb-2 px-4 group-hover:text-[#344054]">
                  A Volunteer
                </h4>
                <p className="rounded-[16px]  font-inter text-[#8A8A90] text-[12px] font-normal leading-[20.3px]">
                  Join us in making a difference in the lives of millions of
                  women and girls in underserved communities in Africa
                </p>
              </div>
            </Link>
          </div>

          <div className="flex lg:flex-row md:flex-row-reverse flex-col justify-center items-center lg:gap-[20px] md:gap-[14px] lg:w-[555px] ">
            <img
              className="rounded-[12.509px] w-[80%] md:w-[246px] pb-[14px] lg:pb-0 h-[204px] object-cover"
              src={MentorImg}
              alt="mentor"
              width={246}
              height={204}
            />
            <Link
              to="/partnership-section"
              className="no-underline w-[75%] lg:w-[100%] md:w-[30%] group"
            >
              <div className=" flex flex-col items-start rounded-[16px] p-4 border-r-custom border-b-custom border-greyP transition-all duration-300 hover:transform hover:scale-105">
                <h4 className="font-inter text-[#01010D] text-[16px] font-medium leading-[20.3px] pb-2 group-hover:text-[#344054]">
                  A Partner
                </h4>
                <p className=" font-inter text-[#8A8A90] text-[12px] font-normal leading-[20.3px]">
                  Help us ensure every girl gets quality education and every
                  woman in rural areas has essential health care.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <hr
          className="border-t h-[1px] w-full mt-2 mb-2 "
          style={{ borderColor: "#D0D5DD" }}
        />
        <p className="font-inter text-[#020C21] text-[16px] text-center font-normal leading-[23.2px] md:py-[40px]  md:block hidden">
          For further questions and enquries about Dara&apos;Afrik, kindly send
          us a message us at{" "}
          <span>
            {" "}
            <a
              href="mailto:dara’afrikfoundation@gmail.com"
              className="hover:underline text-[#0a6eb4] font-semibold text-[20px] font-inter  "
            >
              dara&apos;afrikfrikfoundation@gmail.com
            </a>
          </span>
        </p>
        <p className="font-inter text-[#020C21] text-[16px] text-center font-normal leading-[23.2px] md:py-[40px] mt-[40px] md:hidden block">
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

      <section className="md:px-[40px] px-4 lg:pb-[80px] py-[64px] pb-[40px] bg-[#F3FAFD] ">
        <div className="lg:px-[80px]">
          <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.6px] pb-4 ">
            Learn more about what we do at Dara&apos;Afrik Foundation
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

export default MentorshipSection;
