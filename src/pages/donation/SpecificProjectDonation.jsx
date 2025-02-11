import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import donateVideoImgLg from "../../assets/images/donation/donateVideoImgLg.png";
import donateVideoImgSm from "../../assets/images/donation/donateVideoImgSm.png";
import paypalImg from "../../assets/images/donation/paypalImg.png";
import visaImg from "../../assets/images/donation/visaImg.png";
import moneyTransferImg from "../../assets/images/donation/moneyTransferImg.png";
import DonationFaq from "./DonationFaq";
import { useNavigate, useLocation } from "react-router-dom";

const SpecificProjectDonation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [amount, setAmount] = useState("");
  const [selected, setSelected] = useState("");

  const projectOptions = ["Teachers Summit", "Edu Girls 2.0"];

  useEffect(() => {
    if (location.state?.projectTitle) {
      setSelectedProject(location.state.projectTitle);
    }
  }, [location.state]);

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

  const handleDonationClick = () => {
    navigate("/donate");
  };

  return (
    <section className="bg-[#F9FEEC]">
      <img src={donateVideoImgLg} alt="video" className="hidden md:block" />
      <img src={donateVideoImgSm} alt="video" className="md:hidden block" />
      <div className="lg:px-[112px] md:px-[40px] px-4 pt-[80px] pb-[120px]">
        <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px] text-center pb-8 pt-6">
          Donate to a Specific Project
        </h2>
        <p className="text-[#555C6A] leading-[26.1px] font-inter text-center font-medium text-[18px] px-0 md:px-0 pb-[64px]">
          Thank you for choosing to be involved in the success of our projects.
          Kindly select the project you wish to donate to.
        </p>

        <div className="mb-9 relative">
          <label className="block text-[#101928] font-inter text-[14px] mb-1 font-medium leading-[20.3px]">
            Project selected
          </label>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-[18px] text-left font-normal font-inter text-[14px] bg-transparent border border-[#5B9ECD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0A6EB4] focus:border-[#074E80] shadow-[0px_3px_2px_-2px_rgba(0,0,0,0.06),_0px_5px_3px_-2px_rgba(0,0,0,0.02)] flex items-center justify-between"
            >
              <span className="font-normal font-inter text-[14px]">
                {selectedProject || "Select Project"}
              </span>
              {isOpen ? (
                <ChevronUp className="w-6 h-6 text-[#667185]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#667185]" />
              )}
            </button>

            {isOpen && (
              <div className="w-full mt-2 bg-[#FAFEF0] border border-[#E4E7EC] rounded-[6px] shadow-[0px_3px_2px_-2px_rgba(0,0,0,0.06),_0px_5px_3px_-2px_rgba(0,0,0,0.02)]">
                {projectOptions.map((project) => (
                  <button
                    key={project}
                    onClick={() => {
                      setSelectedProject(project);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left border-b border-[#8EBCDD] last:border-b-0 hover:bg-[#E7F1F8] ${
                      selectedProject === project ? "bg-[#E7F1F8]" : ""
                    }`}
                  >
                    {project}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

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
          <button className="join-us-variant-button inline-block">
            Donate to this project
          </button>
        </div>
      </div>
      <div className="bg-[#F3FAFD] ">
        <h2 className=" text-[#020C21] font-inter text-[36px] mb-3 font-bold text-center leading-[43.2px] tracking-[-1.44px] pb-12 pt-[80px]">
          You can also make a general donation
        </h2>
        <div className="text-center pb-12">
          <button
            onClick={handleDonationClick}
            className="w-[310px] inline-block border-[1.5px] border-solid rounded-lg border-[#0A6EB4] bg-transparent px-6 py-4 text-[#0A6EB4] text-[16px] font-semibold font-inter hover:bg-[#E7F1F8] hover:text-[#5B9ECD] hover:border-[#5B9ECD]"
          >
            Donate now
          </button>
        </div>
      </div>
      <div className="pb-[80px] pt-8">
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

export default SpecificProjectDonation;
