import React from "react";
import VolunteerDropdown from "./VolunteerDropdown ";

const VolunteerForm = () => {
  return (
    <div>
      <form>
        <div className="flex flex-col">
          <div className="flex flex-col flex-1 mt-4">
            <label
              htmlFor="website"
              className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px]"
            >
              Name
              <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                *
              </span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
            />
          </div>

          <VolunteerDropdown />

          <div className="flex justify-between items-center lg:gap-6 gap-4 mt-4 lg:flex-1  max-w-full">
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="country"
                className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px]"
              >
                Country of Residence
                <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                  *
                </span>
              </label>
              <input
                id="country"
                type="text"
                placeholder="Country"
                required
                className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              />
            </div>
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="state"
                className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px]"
              >
                State of Residence
                <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                  *
                </span>
              </label>
              <input
                id="state"
                type="text"
                placeholder="State"
                required
                className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              />
            </div>
          </div>

          <div className="flex justify-between items-center lg:gap-6 gap-4 mt-4 lg:flex-1  max-w-full">
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="education"
                className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px]"
              >
                Highest level of Education
                <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                  *
                </span>
              </label>
              <input
                id="education"
                type="text"
                placeholder="Education"
                required
                className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              />
            </div>
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="url"
                className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px]"
              >
                LinkedIn profile
              </label>
              <input
                id="url"
                type="URL"
                placeholder="URL"
                required
                className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              />
            </div>
          </div>

          <div className="flex justify-between items-center lg:gap-6 gap-4 mt-4 lg:flex-1  max-w-full">
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="email"
                className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px]"
              >
                Email
                <span className="text-[#D42620] font-medium font-inter text-[14px] ">
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
                className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px]"
              >
                Phone Number
                <span className="text-[#D42620] font-medium font-inter text-[14px] ">
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

          <div className="pt-12">
            <label className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px] ">
              Volunteering Objectives
              <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                *
              </span>
            </label>
            <div className="relative">
              <textarea
                rows={4}
                maxLength={300}
                placeholder="Please specify the key objectives you hope to achieve through this volunteering experience"
                className="mt-2 block w-full h-[251px] border border-[#D0D5DD] rounded-[6px] px-4 py-[18px] sm:text-sm resize-none placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              ></textarea>
              <span className="absolute right-0 -bottom-6 text-sm text-[#667185] font-normal font-inter">
                Maximum of 300 words
              </span>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-[200px] gap-12">
            <div className="pt-[32px]">
              <label className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px] ">
                How long do you wish to volunteer with Us?
                <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                  *
                </span>
              </label>
              <div className="flex  justify-start  mt-4 flex-col">
                <label className="flex items-center gap-3 mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox border-[#D0D5DD]"
                    defaultChecked={true}
                  />
                  <span className="font-inter text-[#667185] text-[14px]  font-normal leading-[20.3px]">
                    6 months
                  </span>
                </label>
                <label className="flex items-center gap-3 mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox border-[#D0D5DD]"
                  />
                  <span className="font-inter text-[#667185] text-[14px]  font-normal leading-[20.3px]">
                    1 year
                  </span>
                </label>
                <label className="flex items-center gap-3 mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox border-[#D0D5DD]"
                  />
                  <span className="font-inter text-[#667185] text-[14px]  font-normal leading-[20.3px]">
                    2 years
                  </span>
                </label>
                <label className="flex items-center gap-3 mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox border-[#D0D5DD]"
                  />
                  <span className="font-inter text-[#667185] text-[14px]  font-normal leading-[20.3px]">
                    3 years
                  </span>
                </label>
              </div>
            </div>

            <div className="lg:pt-[32px] pt-0">
              <label className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px] ">
                How many hours are you willing to put in per week?
                <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                  *
                </span>
              </label>
              <div className="flex  justify-start  mt-4 flex-col">
                <label className="flex items-center gap-3 mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox border-[#D0D5DD]"
                    defaultChecked={true}
                  />
                  <span className="font-inter text-[#667185] text-[14px]  font-normal leading-[20.3px]">
                    2 hours
                  </span>
                </label>
                <label className="flex items-center gap-3 mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox border-[#D0D5DD]"
                  />
                  <span className="font-inter text-[#667185] text-[14px]  font-normal leading-[20.3px]">
                    4 hours
                  </span>
                </label>
                <label className="flex items-center gap-3 mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox border-[#D0D5DD]"
                  />
                  <span className="font-inter text-[#667185] text-[14px]  font-normal leading-[20.3px]">
                    4 hours
                  </span>
                </label>
                <label className="flex items-center gap-3 mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox border-[#D0D5DD]"
                  />
                  <span className="font-inter text-[#667185] text-[14px]  font-normal leading-[20.3px]">
                    8 hours
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-[64px]">
            <button type="button" className="join-us-variant-button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm;
