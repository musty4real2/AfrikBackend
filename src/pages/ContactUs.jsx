import React from "react";
import contactUsBg from "../assets/images/contactUsBg.png";
import contactUsBgSm from "../assets/images/contactUsBgSm.png"; // Adjust the path as necessary

const ContactUs = () => {
  return (
    <section>
      {/* Large Screen View */}
      <div
        className="relative lg:px-[80px] mt-0 lg:overflow-hidden w-full z-0 hidden lg:block md:hidden bg-[#F9FEEC]"
        style={{
          backgroundImage: `url(${contactUsBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "745px",
        }}
      >
        <div className="bg-[#FFF] rounded-2xl w-[360px] md:w-[744px] lg:w-[908px] h-full lg:mx-auto my-10 lg:h-[646px] lg:p-6 mx-4 px-4 ">
          {/* Text Container */}
          <div className="text-center lg:p-6">
            <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.6px]">
              Contact Us
            </h2>
            <p className="text-[#555C6A] font-Inter text-[16px] font-[500] leading-[29px] pt-2 lg:px-6 pb-2">
              Do you have a question, suggestion, or want to learn more about
              Dara&apos;Afrik Foundation? Do not hesitate, Get in touch!
            </p>
          </div>
          {/* Contact Form */}
          <form>
            <div className="flex flex-col">
              <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-6 gap-4 mt-4 max-w-full lg:mb-9">
                {/* Name Field */}
                <div className="flex flex-col flex-1 w-full lg:w-[40%]">
                  <label
                    htmlFor="fullname"
                    className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
                  >
                    Name
                    <span className="text-[#D42620] font-medium font-inter text-[14px]">
                      *
                    </span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    required
                    className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
                  />
                </div>
                {/* Email Field */}
                <div className="flex flex-col flex-1 w-full lg:w-[40%]">
                  <label
                    htmlFor="email"
                    className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
                  />
                </div>
              </div>
              {/* Message Field */}
              <div className="pb-9">
                <label className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    maxLength={100}
                    placeholder="message"
                    className="mt-2 block w-full h-[173px] border border-[#8AAFF8] rounded-[6px] px-4 py-[18px] sm:text-sm resize-none placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
                  ></textarea>
                  <span className="absolute right-0 -bottom-6 text-sm text-[#667185] font-normal font-inter">
                    Maximum of 100 words
                  </span>
                </div>
              </div>
              {/* Submit Button */}
              <div className="mx-auto">
                <button type="submit" className="join-us-variant-button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* medium Screen View */}
      <div
        className="relative p-[72px] mt-0  w-full z-0 hidden md:block lg:hidden  bg-[#F9FEEC]"
        style={{
          backgroundImage: `url(${contactUsBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "780px",
        }}
      >
        <div className="bg-[#FFF] rounded-2xl w-[744px] md:mx-auto  h-[688px] p-12 mx-4 ">
          <div className="text-center lg:p-6">
            <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.6px]">
              Contact Us
            </h2>
            <p className="text-[#555C6A] font-Inter text-[16px] font-[500] leading-[29px] pt-2 lg:px-6 pb-2">
              Do you have a question, suggestion, or want to learn more about
              Dara&apos;Afrik Foundation? Do not hesitate, Get in touch!
            </p>
          </div>
          {/* Contact Form */}
          <form>
            <div className="flex flex-col">
              <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-6 gap-4 mt-4 max-w-full lg:mb-9">
                {/* Name Field */}
                <div className="flex flex-col flex-1 w-full lg:w-[40%]">
                  <label
                    htmlFor="fullname"
                    className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
                  >
                    Name
                    <span className="text-[#D42620] font-medium font-inter text-[14px]">
                      *
                    </span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    required
                    className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
                  />
                </div>
                {/* Email Field */}
                <div className="flex flex-col flex-1 w-full lg:w-[40%]">
                  <label
                    htmlFor="email"
                    className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
                  />
                </div>
              </div>
              {/* Message Field */}
              <div className="pb-9">
                <label className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    maxLength={100}
                    placeholder="message"
                    className="mt-2 block w-full h-[173px] border border-[#8AAFF8] rounded-[6px] px-4 py-[18px] sm:text-sm resize-none placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
                  ></textarea>
                  <span className="absolute right-0 -bottom-6 text-sm text-[#667185] font-normal font-inter">
                    Maximum of 100 words
                  </span>
                </div>
              </div>
              {/* Submit Button */}
              <div className="mx-auto">
                <button type="submit" className="join-us-variant-button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Small Screen View */}
      <div
        className="bg-[#F9FEEC] relative md:hidden block pt-10"
        style={{
          backgroundImage: `url(${contactUsBgSm})`,
          backgroundSize: "377px 780px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "780px",
        }}
      >
        <div className="bg-[#FFF] lg:hidden block mx-4 p-6 pb-6 rounded-2xl ">
          <h2 className="text-[#020C21] font-[Gilroy-Bold] text-center text-[48px] font-normal leading-[48px] tracking-[-1.6px]">
            Contact Us
          </h2>
          <p className="text-[#555C6A] font-Inter text-center text-[16px] font-[400] leading-[29px] pt-2">
            Do you have a question, suggestion, or want to learn more about
            Dara&apos;Afrik Foundation? <br /> Do not hesitate, Get in touch!
          </p>
          <form>
            <div className="flex flex-col">
              <div className="flex flex-col justify-between items-center lg:gap-6 gap-4 mt-4 max-w-full">
                {/* Name Field */}
                <div className="flex flex-col flex-1 w-full">
                  <label
                    htmlFor="fullname"
                    className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
                  >
                    Name
                    <span className="text-[#D42620] font-medium font-inter text-[14px]">
                      *
                    </span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    required
                    className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
                  />
                </div>
                {/* Email Field */}
                <div className="flex flex-col flex-1 w-full">
                  <label
                    htmlFor="email"
                    className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
                  />
                </div>
              </div>
              {/* Message Field */}
              <div className="pb-9">
                <label className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    maxLength={100}
                    placeholder="message"
                    className="mt-2 block w-full h-[173px] border border-[#8AAFF8] rounded-[6px] px-4 py-[18px] sm:text-sm resize-none placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
                  ></textarea>
                  <span className="absolute right-0 -bottom-6 text-sm text-[#667185] font-normal font-inter">
                    Maximum of 100 words
                  </span>
                </div>
              </div>
              {/* Submit Button */}
              <div className="mx-auto">
                <button type="submit" className="join-us-variant-button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
