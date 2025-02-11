import React from "react";
import CustomDropdown from "./CustomDropdown";

const MentorForm = () => {
  return (
    <div className="lg:px-[80px] px-4 pt-4">
      <form>
        <div className="flex flex-col">
          <div className="flex justify-between items-center lg:gap-6 gap-4 mt-4 lg:flex-1 max-w-full">
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="fullname"
                className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
              >
                Full Name
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
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="website"
                className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
              >
                Contact Information
                <span className="text-[#D42620] font-medium font-inter text-[14px]">
                  *
                </span>
              </label>
              <input
                id="address"
                type="text"
                placeholder="Address"
                required
                className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              />
            </div>
          </div>

          <div className="flex justify-between items-center lg:gap-6 gap-4 mt-4 lg:flex-1 max-w-full">
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="email"
                className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
              >
                Email
                <span className="text-[#D42620] font-medium font-inter text-[14px]">
                  *
                </span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              />
            </div>
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="phoneNumber"
                className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
              >
                Phone Number
                <span className="text-[#D42620] font-medium font-inter text-[14px]">
                  *
                </span>
              </label>
              <input
                id="position"
                type="number"
                placeholder="Phone"
                required
                className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              />
            </div>
          </div>

          <div className="flex justify-between items-center lg:gap-6 gap-4 mt-4 lg:flex-1 max-w-full">
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="contactName"
                className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
              >
                Location (City/State)
                <span className="text-[#D42620] font-medium font-inter text-[14px]">
                  *
                </span>
              </label>
              <input
                id="location"
                type="text"
                placeholder="Location"
                required
                className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              />
            </div>
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="ocupation"
                className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
              >
                Occupation/Industry
                <span className="text-[#D42620] font-medium font-inter text-[14px]">
                  *
                </span>
              </label>
              <input
                id="occupation"
                type="text"
                placeholder="Occupation"
                required
                className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 mt-4">
            <label
              htmlFor="website"
              className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
            >
              LinkedIn Profile or Personal Website (optional):
            </label>
            <input
              id="website"
              type="url"
              placeholder="URL"
              className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
            />
          </div>

          <div className="pt-12">
            <label className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]">
              Briefly describe your experience mentoring or working with youth
              (if applicable)
              <span className="text-[#D42620] font-medium font-inter text-[14px]">
                *
              </span>
            </label>
            <div className="relative">
              <textarea
                rows={4}
                maxLength={300}
                placeholder="Describe your mentoring experience"
                className="mt-2 block w-full h-[251px] border border-[#D0D5DD] rounded-[6px] px-4 py-[18px] sm:text-sm resize-none placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              ></textarea>
              <span className="absolute right-0 -bottom-6 text-sm text-[#667185] font-normal font-inter">
                Maximum of 300 words
              </span>
            </div>
          </div>

          <div className="pt-6">
            <label className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]">
              Please list any specific skills or expertise areas you would bring
              to this mentorship role (e.g., entrepreneurship, financial
              literacy, STEM, career guidance)
              <span className="text-[#D42620] font-medium font-inter text-[14px]">
                *
              </span>
            </label>
            <div className="relative">
              <textarea
                rows={4}
                maxLength={300}
                placeholder="Skills and areas of expertise"
                className="mt-2 block w-full h-[251px] border border-[#D0D5DD] rounded-[6px] px-4 py-[18px] sm:text-sm resize-none placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              ></textarea>
              <span className="absolute right-0 -bottom-6 text-sm text-[#667185] font-normal font-inter">
                Maximum of 300 words
              </span>
            </div>
          </div>

          <div className="py-6">
            <label className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]">
              Why are you interested in mentoring with our organization?
              <span className="text-[#D42620] font-medium font-inter text-[14px]">
                *
              </span>
            </label>
            <div className="relative">
              <textarea
                rows={4}
                maxLength={300}
                placeholder="Interests"
                className="mt-2 block w-full h-[251px] border border-[#D0D5DD] rounded-[6px] px-4 py-[18px] sm:text-sm resize-none placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              ></textarea>
              <span className="absolute right-0 -bottom-6 text-sm text-[#667185] font-normal font-inter">
                Maximum of 300 words
              </span>
            </div>
          </div>

          <CustomDropdown />
          <div className="pt-6">
            <label className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px] ">
              Do you have any preferences or restrictions we should consider
              when matching you with a mentee?
              <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                *
              </span>
            </label>
            <div className="relative">
              <textarea
                rows={4}
                maxLength={300}
                placeholder="Interest"
                className="mt-2 block w-full h-[251px] border border-[#D0D5DD] rounded-[6px] px-4 py-[18px] sm:text-sm resize-none placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              ></textarea>
              <span className="absolute right-0 -bottom-6 text-sm text-[#667185] font-normal font-inter">
                Maximum of 300 words
              </span>
            </div>
          </div>

          <div className="pt-6 pb-[64px]">
            <label className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px] ">
              Additional comments or questions?
            </label>
            <div className="relative">
              <textarea
                rows={4}
                maxLength={300}
                placeholder="Type here"
                className="mt-2 block w-full h-[251px] border border-[#D0D5DD] rounded-[6px] px-4 py-[18px] sm:text-sm resize-none placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              ></textarea>
              <span className="absolute right-0 -bottom-6 text-sm text-[#667185] font-normal font-inter">
                Maximum of 300 words
              </span>
            </div>
          </div>

          <div className="mx-auto mb-4">
            <button type="button" className="join-us-variant-button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MentorForm;
