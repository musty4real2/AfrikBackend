import { useState } from "react";

const VolunteerDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col mt-4">
      <label
        htmlFor="mentorshipSource"
        className="font-inter text-[#101928] text-[14px] font-medium leading-[20.3px]"
      >
        Gender
      </label>
      <div className="relative mt-1">
        {/* Custom Dropdown Button */}
        <div
          onClick={toggleDropdown}
          className="w-full h-[56px] p-4 pr-10 border border-solid rounded-md border-[#8AAFF8] text-[#101928] cursor-pointer bg-white"
        >
          <span
            className={
              selectedValue
                ? ""
                : "text-[#98A2B3] text-[14px] font-inter font-normal"
            }
          >
            {selectedValue || "Select one"}
          </span>
        </div>

        {/* Dropdown List */}
        {isOpen && (
          <ul className="absolute left-0 right-0 mt-2 border border-[#E4E7EC] rounded-md bg-[#FFF] shadow-lg z-10">
            {options.map((option) => (
              <li
                key={option.value}
                className="py-2 px-4 text-[#101928] text-[14px] font-inter font-normal cursor-pointer hover:bg-[#E6EEFD]"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}

        {/* Dropdown Icon */}
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-[#98A2B3]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDropdown;
