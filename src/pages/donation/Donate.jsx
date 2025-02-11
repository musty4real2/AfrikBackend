import React, { useState } from "react";
import donateVideoImgLg from "../../assets/images/donation/donateVideoImgLg.png";
import donateVideoImgSm from "../../assets/images/donation/donateVideoImgSm.png";
import DonationForm from "./DonationForm";
import ProjectCard from "../../components/Projects/ProjectCard";
import ProjectsData from "../../components/Projects/ProjectsData";
import DonationFaq from "./DonationFaq";

const Donate = () => {
  const [donationType, setDonationType] = useState("one-time");

  return (
    <section className="bg-[#F9FEEC]">
      <img src={donateVideoImgLg} alt="video" className="hidden md:block" />
      <img src={donateVideoImgSm} alt="video" className="md:hidden block" />
      <div className="lg:px-[112px] md:px-[40px] px-4 pt-[80px] pb-[120px]">
        <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px] text-center pb-8 pt-6">
          Your donations make a difference
        </h2>
        <p className="text-[#555C6A] leading-[26.1px] font-inter text-center font-medium text-[18px] px-0 md:px-0 pb-[64px]">
          When you make a donation you create access to education, health,
          technology and food security for millions of women and girls in
          underserved communities in Africa.
        </p>
        <div className="flex mb-9 ">
          <button
            className={`flex h-[56px] px-3 py-2 justify-center items-center gap-2 flex-1 transition-all duration-200 ${
              donationType === "one-time"
                ? "bg-[#E7F1F8] text-[#3B8BC3] font-inter font-medium text-[14px] leading-[20.3px]"
                : "bg-transparent text-[#344054] font-inter font-medium border text-[14px] border-[#D0D5DD] leading-[20.3px]"
            }`}
            onClick={() => setDonationType("one-time")}
          >
            One time donation
          </button>
          <button
            className={`flex h-[56px] lg:w-[512px] md:w-[472px] w-[181px] px-3 py-2 justify-center items-center gap-2 flex-1 transition-all duration-200 ${
              donationType === "recurring"
                ? "bg-[#E7F1F8] text-[#3B8BC3] font-inter font-medium text-[14px] leading-[20.3px]"
                : "bg-transparent text-[#344054] font-inter font-medium border text-[14px] border-[#D0D5DD] leading-[20.3px]"
            }`}
            onClick={() => setDonationType("recurring")}
          >
            Recurring donation
          </button>
        </div>

        <DonationForm type={donationType} />
      </div>
      <div className="ourProjects bg-[var(--Primary-Sky-Blue-primary-sky-blue-50,#F3FAFD)] px-4 py-[64px]">
        <div className="px-6">
          <h2 className="text-[#020C21] text-center font-inter text-[36px]  font-bold leading-[43.2px]  tracking-[-1.44px;]">
            Donate to a Specific Project
          </h2>
          <p className="text-[#555C6A] font-Inter text-center text-[16px] font-[500] leading-[23.2px] pt-4 pb-8">
            Be a part of something bigger. Witness our upcoming projects and
            join our community in making a difference.
          </p>
        </div>
        <div>
          <ProjectCard projects={ProjectsData} />
        </div>
      </div>
      <div className="py-[80px]">
        <hr
          className="border-t h-[1px] w-full   "
          style={{ borderColor: "#D0D5DD" }}
        />
        <p className="font-inter text-[#020C21] text-[16px] text-center font-normal leading-[23.2px] md:py-[40px] md:block hidden">
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
          className="border-t h-[1px] w-full mt-2 "
          style={{ borderColor: "#D0D5DD" }}
        />
      </div>

      <div className="pb-[120px]">
        <DonationFaq />
      </div>
    </section>
  );
};

export default Donate;
