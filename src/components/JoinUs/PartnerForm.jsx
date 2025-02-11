import React from "react";

const PartnerForm = () => {
  return (
    <div>
      <form>
        <div className="flex flex-col">
          <div className="flex flex-col flex-1">
            <label
              htmlFor="organization"
              className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
            >
              Name of Organization
              <span className="text-[#D42620] font-medium font-inter text-[14px]">
                *
              </span>
            </label>
            <input
              id="organization"
              type="text"
              placeholder="Name"
              required
              className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
            />
          </div>

          <div className="flex justify-between items-center lg:gap-6 gap-4 mt-4 lg:flex-1 max-w-full">
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="address"
                className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
              >
                Address
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
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="website"
                className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
              >
                Website URL
                <span className="text-[#D42620] font-medium font-inter text-[14px]">
                  *
                </span>
              </label>
              <input
                id="website"
                type="url"
                placeholder="URL"
                required
                className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              />
            </div>
          </div>

          <div className="flex justify-between items-center lg:gap-6 gap-4 mt-4 lg:flex-1  max-w-full">
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="contactName"
                className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px]"
              >
                Contact Person’s Name
                <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                  *
                </span>
              </label>
              <input
                id="contactName"
                type="text"
                placeholder="Name"
                required
                className="mt-1 p-4 border border-solid h-[56px] rounded-md border-[#8AAFF8] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              />
            </div>
            <div className="flex flex-col flex-1 w-[40%]">
              <label
                htmlFor="position"
                className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px]"
              >
                Position
                <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                  *
                </span>
              </label>
              <input
                id="position"
                type="text"
                placeholder="Position"
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

          <div className="pt-[48px]">
            <label className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px] ">
              Type of Organization
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
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-[20.3px]">
                  Private
                </span>
              </label>
              <label className="flex items-center gap-3 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox border-[#D0D5DD]"
                />
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-[20.3px]">
                  Corporate
                </span>
              </label>
              <label className="flex items-center gap-3 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox border-[#D0D5DD]"
                />
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-[20.3px]">
                  Government
                </span>
              </label>
              <div className="flex items-center">
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-[20.3px]">
                  Other:
                </span>
                <input
                  type="text"
                  className="w-full px-0 py-1 
              border-0 border-b border-[#D0D5DD]
              focus:outline-none focus:border-b-2 focus:border-blue-500
              text-gray-900
              transition-all duration-200
              ml-1"
                />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <label className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px] ">
              Partnership Objectives
              <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                *
              </span>
            </label>
            <div className="relative">
              <textarea
                rows={4}
                maxLength={300}
                placeholder="Please specify the key objectives you hope to achieve through this partnership"
                className="mt-2 block w-full h-[251px] border border-[#D0D5DD] rounded-[6px] px-4 py-[18px] sm:text-sm resize-none placeholder:text-[14px] placeholder:font-inter placeholder:font-normal placeholder:leading-[20.3px] placeholder:text-[#98A2B3]"
              ></textarea>
              <span className="absolute right-0 -bottom-6 text-sm text-[#667185] font-normal font-inter">
                Maximum of 300 words
              </span>
            </div>
          </div>

          <div className="pt-[32px]">
            <label className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px] ">
              Areas of Interest (Please check all that apply)
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
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-[20.3px]">
                  Supporting Girls&apos; Education
                </span>
              </label>
              <label className="flex items-center gap-3 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox border-[#D0D5DD]"
                />
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-[20.3px]">
                  Women&apos;s Health & Wellness
                </span>
              </label>
              <label className="flex items-center gap-3 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox border-[#D0D5DD]"
                />
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-[20.3px]">
                  STEM Programs for Girls
                </span>
              </label>
              <label className="flex items-center gap-3 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox border-[#D0D5DD]"
                />
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-[20.3px]">
                  Rural Community Development
                </span>
              </label>
              <div className="flex items-center">
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-[20.3px]">
                  Other:
                </span>
                <input
                  type="text"
                  className="w-full px-0 py-1 
              border-0 border-b border-[#D0D5DD]
              focus:outline-none focus:border-b-2 focus:border-blue-500
              text-gray-900
              transition-all duration-200
              ml-1"
                />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <label className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px] ">
              Resources/Services Your Organization Can Offer
              <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                *
              </span>
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

          <div className="pt-[48px]">
            <label className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px] ">
              Duration of Partnership
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
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-[20.3px]">
                  6 months
                </span>
              </label>
              <label className="flex items-center gap-3 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox border-[#D0D5DD]"
                />
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-[20.3px]">
                  1 year
                </span>
              </label>
              <label className="flex items-center gap-3 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox border-[#D0D5DD]"
                />
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-[20.3px]">
                  2 years
                </span>
              </label>
              <div className="flex items-center">
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-[20.3px]">
                  Other:
                </span>
                <input
                  type="text"
                  className="w-full px-0 py-1 
              border-0 border-b border-[#D0D5DD]
              focus:outline-none focus:border-b-2 focus:border-blue-500
              text-gray-900
              transition-all duration-200
              ml-1"
                />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <label className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px] ">
              Additional Comments or Proposals
              <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                *
              </span>
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

          <div className="mb-[64px] mt-6">
            <label className="font-inter text-[#101928] text-[14px]  font-medium leading-[20.3px] ">
              Authorized Signature{" "}
              <span className="text-[#D42620] font-medium font-inter text-[14px] ">
                *
              </span>
            </label>
            <div className="mt-4 flex justify-between  items-start md:items-center  md:flex-row flex-col flex-1 gap-6">
              {/* Name Field */}
              <div className="flex w-full md:flex-1 items-center ">
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-none">
                  Name:
                </span>
                <input
                  type="text"
                  className=" px-2
              border-0 border-b border-[#D0D5DD] w-full
              focus:outline-none focus:border-b-2 focus:border-blue-500
              text-gray-900
              transition-all duration-200
              ml-2"
                />
              </div>
              {/* Title Field */}
              <div className="flex w-full md:flex-1 items-center">
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-none">
                  Title:
                </span>
                <input
                  type="text"
                  className=" px-2 
              border-0 border-b border-[#D0D5DD] w-full
              focus:outline-none focus:border-b-2 focus:border-blue-500
              text-gray-900
              transition-all duration-200
              ml-2"
                />
              </div>
              {/* Date Field */}
              <div className="flex w-full md:flex-1 items-center">
                <span className="font-inter text-[#667185] text-[14px]  font-medium leading-none">
                  Date:
                </span>
                <input
                  type="text"
                  className=" px-2 
              border-0 border-b border-[#D0D5DD] w-full
              focus:outline-none focus:border-b-2 focus:border-blue-500
              text-gray-900
              transition-all duration-200
              ml-2"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <button type="submit" className="join-us-variant-button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
