import React, { useState } from "react";

import paypalImg from "../../assets/images/donation/paypalImg.png";
import visaImg from "../../assets/images/donation/visaImg.png";
import moneyTransferImg from "../../assets/images/donation/moneyTransferImg.png";

import { Calendar } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

const DonationForm = ({ type }) => {
  const [amount, setAmount] = useState("");

  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [frequency, setFrequency] = useState("");

  const [date, setDate] = useState("");

  const handleCalendarClick = () => {
    // Programmatically click the hidden date input
    const dateInput = document.querySelector('input[type="date"]');
    dateInput?.showPicker();
  };

  // Format date for display
  const formatDisplayDate = (inputDate) => {
    if (!inputDate) return "";
    const date = new Date(inputDate);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const paymentMethods = [
    {
      id: "paypal",
      name: "Paypal",
      imageUrl: paypalImg,
    },
    {
      id: "card",
      name: "Card Payment",
      imageUrl: visaImg,
    },
    {
      id: "bank",
      name: "Bank Transfer",
      imageUrl: moneyTransferImg,
    },
  ];

  return (
    <div>
      {type === "recurring" && (
        <div className="mb-9 relative">
          <label className="block text-[#101928] font-inter text-[14px] mb-1 font-medium leading-[20.3px]">
            How often do you want to be debited?
          </label>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-[18px] text-left font-normal font-inter text-[14px] bg-transparent border border-[#5B9ECD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0A6EB4] focus:border-[#074E80] shadow-[0px_3px_2px_-2px_rgba(0,0,0,0.06),_0px_5px_3px_-2px_rgba(0,0,0,0.02)] flex items-center justify-between"
            >
              <span className="font-normal font-inter text-[14px]">
                {frequency || "Please select"}
              </span>
              {isOpen ? (
                <ChevronUp className="w-6 h-6 text-[#667185]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#667185]" />
              )}
            </button>

            {isOpen && (
              <div className=" w-full mt-2 bg-[#FAFEF0] border border-[#E4E7EC] rounded-[6px] shadow-[0px_3px_2px_-2px_rgba(0,0,0,0.06),_0px_5px_3px_-2px_rgba(0,0,0,0.02)]">
                {["monthly", "quarterly", "annually"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setFrequency(option);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left border-b border-[#8EBCDD] last:border-b-0 hover:bg-[#E7F1F8] ${
                      (!frequency && option === "monthly") ||
                      frequency === option
                        ? "bg-[#E7F1F8]"
                        : ""
                    }`}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-full mt-9 ">
            <div className="text-[#101928] font-inter text-[14px]  font-medium leading-[20.3px] mb-1">
              Date to be debited
            </div>
            <div className="relative">
              {/* Hidden date input for native date picker */}
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="absolute opacity-0 w-full h-full cursor-pointer "
              />
              {/* Display input */}
              <input
                type="text"
                readOnly
                value={formatDisplayDate(date)}
                placeholder="dd/mm/yyyy"
                className="w-full px-4 py-[18px] border  border-[#5B9ECD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0A6EB4] focus:border-[#074E80] pr-10 cursor-pointer bg-[#FAFEF0]"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={handleCalendarClick}
              >
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Amount Input */}
      <div className="mb-6">
        <label className="block text-[#101928] font-inter text-[14px] mb-1 font-medium">
          Amount
        </label>
        <input
          type="number"
          className="w-full p-4 border border-[#8EBCDD] bg-[transparent] rounded-[6px]  focus:outline-none focus:ring-2 focus:ring-[#0A6EB4] focus:border-[#074E80] placeholder:text-[#98A2B3] placeholder:text-[14px] placeholder:font-normal"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* Payment Method */}
      <div className="w-full mb-9">
        <p className="block text-[#101928] font-inter text-[14px] mb-1 font-medium leading-[20.3px]">
          Payment method
        </p>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-[18px] text-left font-semibold font-inter text-[14px] bg-transparent leading-[20.3px] text-[#101928] border border-[#5B9ECD] rounded-[6px] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A6EB4] focus:border-[#074E80]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span
                  className={`${
                    !selected ? "text-gray-500" : "text-[#101928]"
                  }`}
                >
                  {selected ? selected : "Please select a payment method"}
                </span>
                {selected && (
                  <img
                    src={
                      paymentMethods.find((m) => m.name === selected)
                        ?.imageUrl || ""
                    }
                    alt={selected}
                    className="h-5 w-5 object-contain"
                  />
                )}
              </div>
              <ChevronDown className="w-5 h-5 text-[#667185]" />
            </div>
          </button>

          {isOpen && (
            <div className=" w-full mt-2 bg-[#FAFEF0] rounded-[8px] border border-[#E4E7EC] shadow-[0px_3px_2px_-2px_rgba(0,0,0,0.06),_0px_5px_3px_-2px_rgba(0,0,0,0.02)]">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => {
                    setSelected(method.name);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left  flex items-center space-x-2"
                >
                  <span className="text-[#101928] font-inter text-[14px] hover:text-[#98A2B3] font-medium leading-[20.3px]">
                    {method.name}
                  </span>
                  {method.imageUrl && (
                    <img
                      src={method.imageUrl}
                      alt={method.name}
                      className="h-5 object-contain"
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pb-[56px]">
        <p className="block text-[#101928] font-inter text-[14px] mb-3 font-medium leading-[20.3px]">
          Would you love your donation to be displayed publicly?
        </p>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="displayDonation"
            id="displayDonationYes"
            value="yes"
            className="appearance-none w-5 h-5 border-2 border-[#3B8BC3] rounded-full checked:bg-[#3B8BC3] checked:border-[#3B8BC3] focus:outline-none"
          />
          <span className="text-[14px] text-[#353D4D] font-normal font-inter leading-[20.3px]">
            Yes, I do
          </span>
        </label>
        <label className="flex items-center space-x-2 mt-2">
          <input
            type="radio"
            name="displayDonation"
            id="displayDonationNo"
            value="no"
            className="appearance-none w-5 h-5 border-2 border-[#3B8BC3] rounded-full checked:bg-[#3B8BC3] checked:border-[#3B8BC3] focus:outline-none"
          />
          <span className="text-[14px] text-[#353D4D] font-normal font-inter leading-[20.3px]">
            No, I prefer not
          </span>
        </label>
      </div>

      <div className="text-center">
        <button className="join-us-variant-button inline-block">Proceed</button>
      </div>
    </div>
  );
};

export default DonationForm;
