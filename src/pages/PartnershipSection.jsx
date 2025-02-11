import React from "react";
import partnerBg from "../assets/images/partnerBg.png";
import partnerImg from "../assets/images/partnerImg.png";
import partnerBgSm from "../assets/images/partnerBgSm.png";
import partnerBgMd from "../assets/images/partnerBgMd.png";
import line from "../assets/images/line.png";
import mobilePartnerImg from "../assets/images/mobilePartnerImg.png";
import { Link } from "react-router-dom";
import volunteer from "../assets/images/volunteer.png";
import mentor from "../assets/images/mentor.png";
import ourWorkData from "../components/ourWork/ourWorkData";
import OurWorkCard from "../components/ourWork/OurWorkCard";
import PartnerForm from "../components/JoinUs/PartnerForm";

const PartnershipSection = () => {
  return (
    <section className="pb-[64px] ">
      <div
        className="relative  h-full lg:px-[80px] mt-0 overflow-hidden w-full z-0 hidden lg:block md:hidden bg-[#FFFDFD]"
        style={{
          backgroundImage: `url(${partnerBg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          height: "100vh",
        }}
      >
        <div className="flex items-center justify-between md:flex-row flex-col w-full h-full">
          <div className="relative w-[380px] pt-[48px] lg:pt-0 text-center z-10 lg:text-left">
            <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px]">
              A Call for <br /> Partnership!
            </h2>
            <p className="text-foundationText text-center font-Inter text-[20px] w-[508px] font-[500] lg:leading-[28px] tracking-[0.4px] leading-[26.1px] pt-4">
              Join us in the mission to creating a world where every girl has
              access to quality education and every woman in rural areas can
              access essential health care.
            </p>
          </div>
          <div className="relative w-[355px] h-[429px] md:w-[540px] md:h-[540px] mt-[4px] md:mt-[32px]">
            <img
              src={partnerImg}
              alt="Children and healthcare worker"
              style={{
                objectFit: "contain",
              }}
              className="rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>

      <div
        className="relative  h-full lg:px-[80px] mt-0 overflow-hidden w-full z-0 hidden lg:hidden md:block bg-[#FFFDFD]"
        style={{
          backgroundImage: `url(${partnerBgMd})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          height: "100vh",
        }}
      >
        <div className="flex items-center justify-between md:flex-row flex-col w-full h-full pl-[40px]">
          <div className="relative w-full max-w-md pt-[48px] lg:pt-0 text-center z-10 lg:text-left">
            <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px]">
              A Call for <br /> Partnership!
            </h2>
            <p className="text-[#555C6A] text-center font-Inter text-[20px] font-[500] leading-[28px]  pt-4">
              Join us in the mission to creating a world where every girl has
              access to quality education and every woman in rural areas can
              access essential health care.
            </p>
          </div>
          <div className="relative w-[355px] h-[429px] md:w-[540px] md:h-[540px] mt-[4px] md:mt-[32px]">
            <img
              src={partnerImg}
              alt="Children and healthcare worker"
              style={{
                objectFit: "contain",
              }}
              className="rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="relative px-4 w-full lg:hidden md:hidden block">
        <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px] pt-[64px]">
          A Call for Partnership!
        </h2>
        <div
          className="absolute inset-0 w-full h-[650px] overflow-hidden bg-cover bg-center top-[200px]"
          style={{
            backgroundImage: `url(${partnerBgSm})`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="relative z-10 text-center text-gray-800 space-y-4">
          <p
            className="text-[20px] text-center font-Inter font-medium mb-[120px] leading-[28px] text-[#555C6A]"
            style={{
              fontFeatureSettings: "'salt' on, 'cv01' on, 'cv03' on, 'cv04' on",
            }}
          >
            Join us in the mission to creating a world where every girl has
            access to quality education and every woman in rural areas can
            access essential health care.
          </p>
          <div className="relative pb-[48px]">
            <img
              src={mobilePartnerImg}
              alt="Map of Africa"
              className="object-contain w-[359px] h-[429px]"
            />
          </div>
        </div>
      </div>

      <section className="whyPartner bg-[#F3FAFD] pt-[80px] px-4 lg:px-[80px]">
        <h2 className="text-[#020C21] font-[Gilroy-Bold]  text-center text-[40px] font-normal leading-[48px] tracking-[-1.6px] pb-[48px]">
          Why Partner with Dara&apos;Afrik Foundation
        </h2>

        <div className="relative w-full">
          {/* Background Image */}
          <div className="hidden md:block absolute top-0 left-0 w-1/2 h-full bg-[url('/partnerTwoBg.png')] bg-contain bg-left z-0"></div>

          {/* Content Section */}
          <div className="relative z-10 flex md:flex-row flex-col justify-center items-start gap-8 md:gap-10 w-full pb-[80px]">
            {/* First Item */}
            <div className="flex justify-start items-start flex-1">
              <h2 className="text-center text-[#FF570A] font-bold text-[56px] leading-[56px] tracking-[-2.24px] -mr-6">
                1
              </h2>
              <img
                src={line}
                alt="line"
                className="mx-2 h-[180px] md:h-[240px]"
                width={30}
                height={225}
              />
              <div className="max-w-[300px]">
                <h4 className="font-medium text-[#020C21] text-[16px] text-center leading-[20.3px]">
                  Alignment with Sustainable Development Goals (SDGs)
                </h4>
                <p className="text-[#555C6A] text-[14px] text-center font-normal leading-[20.3px] pt-4">
                  By supporting the Dara&apos;afrik Foundation, you help achieve
                  important goals like Good Health and Well-being (SDG 3),
                  Quality Education (SDG 4), and Gender Equality (SDG 5). This
                  not only promotes social progress but also positions partners
                  as leaders in sustainable development.
                </p>
              </div>
            </div>

            {/* Second Item */}
            <div className="flex justify-start items-start lg:mt-[77px] flex-1">
              <h2 className="text-center text-[#FF570A] font-bold text-[56px] leading-[56px] tracking-[-2.24px] -mr-6">
                2
              </h2>
              <img
                src={line}
                alt="line"
                className="mx-2 h-[180px] md:h-[240px]"
                width={30}
                height={225}
              />
              <div className="max-w-[300px]">
                <h4 className="font-medium text-[#020C21] text-[16px] text-center leading-[20.3px]">
                  Enhanced Corporate Social Responsibility (CSR) and Brand Image
                </h4>
                <p className="text-[#555C6A] text-[14px] text-center font-normal leading-[20.3px] pt-4">
                  By partnering with Dara&apos;afrik Foundation, private,
                  corporate, and government bodies can demonstrate a strong
                  commitment to social welfare. This partnership reflects
                  positively on their brand image.
                </p>
              </div>
            </div>

            {/* Third Item */}
            <div className="flex justify-start items-start lg:mt-[154px] md:mt-0 flex-1">
              <h2 className="text-center text-[#FF570A] font-bold text-[56px] leading-[56px] tracking-[-2.24px] -mr-6">
                3
              </h2>
              <img
                src={line}
                alt="line"
                className="mx-2  h-[180px] md:h-[240px]]"
                width={30}
                height={225}
              />
              <div className="max-w-[300px]">
                <h4 className="font-medium text-[#020C21] text-[16px] text-center leading-[20.3px]">
                  Access to Rural Networks and Community Trust
                </h4>
                <p className="text-[#555C6A] text-[14px] text-center font-normal leading-[20.3px] pt-4">
                  {" "}
                  The Dara&apos;afrik Foundation has earned the trust of rural
                  communities, particularly in schools and women&apos;s health.
                  By partnering with us, organizations can connect with these
                  communities more easily, leading to stronger relationships and
                  meaningful involvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Other sections */}
      <section className="joinUsForm  ">
        <div className="bg-[#F9FEEC] lg:px-[80px] md:px-[40px] px-4">
          <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.6px] pb-[16px] lg:pt-[73px] pt-12">
            Join Us In Making An Impact!
          </h2>
          <p className="font-inter text-[#8B8F99] text-[16px] text-center font-normal leading-[23.2px] pb-12">
            Please fill out the information below to initiate your partnership
            with Dara&apos;afrik Foundation. We are excited to work together
            towards a positive impact in rural communities in Africa.
          </p>
        </div>
        <main className="lg:px-[80px]  px-4 pt-4">
          <PartnerForm />
        </main>
      </section>
      <section className="lg:px-[80px] md:px-[40px] px-4 lg:pb-[80px] pb-[40px] bg-[#F9FEEC] mt-4">
        <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.6px] pb-[24px] lg:pt-[73px] pt-12">
          You can also join us as
        </h2>
        <div className="flex justify-between items-center lg:flex-row md:flex-col flex-col lg:gap-[78px] gap-[78px] md:gap-[32px] pb-[80px]">
          <div className="flex md:flex-row flex-col justify-center items-center lg:gap-[20px] md:gap-[14px]  lg:w-[555px] ">
            <img
              className="rounded-[12.509px] w-[80%] md:w-[246px] pb-[14px] lg:pb-0 "
              src={volunteer}
              alt="volunteer"
              width={246}
              height={204}
            />

            <Link
              to="/volunteer"
              className="no-underline w-[75%] lg:w-[70%] md:w-[30%] group"
            >
              <div className=" flex flex-col items-start p-4 border-r-custom border-b-custom border-greyP transition-all duration-300 hover:transform hover:scale-105">
                <h4 className="font-inter text-[#01010D] text-[16px] font-medium leading-[20.3px] pb-2  group-hover:text-[#344054]">
                  A Volunteer
                </h4>
                <p className=" font-inter text-[#8A8A90] text-[14px] font-normal leading-[20.3px]">
                  Join us in making a difference in the lives of millions of
                  women and girls in underserved communities in Africa
                </p>
              </div>
            </Link>
          </div>

          <div className="flex lg:flex-row flex-col md:flex-row-reverse justify-center items-center lg:gap-[20px] md:gap-[14px] lg:w-[555px] ">
            <img
              className="rounded-[12.509px] w-[80%] md:w-[246px] lg:pb-0 pb-[35px] object-cover"
              src={mentor}
              alt="mentor"
              width={246}
              height={204}
            />
            <Link
              to="/mentorship-section"
              className="no-underline w-[75%] lg:w-[70%] md:w-[30%] group"
            >
              <div className=" flex flex-col items-start p-4 border-r-custom border-b-custom border-greyP transition-all duration-300 hover:transform hover:scale-105">
                <h4 className="font-inter text-[#01010D] text-[16px] font-medium leading-[20.3px] pb-2  group-hover:text-[#344054]">
                  A Mentor
                </h4>
                <p className=" font-inter text-[#8A8A90] text-[14px] font-normal leading-[20.3px]">
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
        <p className="font-inter text-[#020C21] text-[16px] text-center font-normal leading-[23.2px] md:py-[40px]  md:hidden block">
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

      <section className="bg-[#FFF5FA] py-[64px] px-4">
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
        <OurWorkCard ourWorks={ourWorkData} />
      </section>
    </section>
  );
};

export default PartnershipSection;
