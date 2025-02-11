import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-[#F9FEEC]">
      <div className="lg:px-[80px] md:px-[40px] px-4 md:pb-[120px] pb-[100px]">
        <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px]  text-left pb-8 pt-6 ">
          Privacy Policy
        </h2>
        <p className="text-[#555C6A] leading-[26.1px] font-inter font-medium text-[18px] pb-12">
          Dara'afrik Foundation ("we," "us," or "our") values the privacy of our
          users. This Privacy Policy explains what personal information we
          collect, how we use it, and the measures we take to protect it.
        </p>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li className="pb-2">
            <span className="font-semibold">Personal Information:</span> When
            you contact us, make a donation, or subscribe to our newsletter, we
            may collect personal information such as your name, email address,
            phone number, and payment information.
          </li>
          <li>
            <span className="font-semibold">Non-Personal Information:</span> We
            may collect non-personal information about your interactions with
            our site, such as your IP address, browser type, and pages visited.
          </li>
        </ul>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li className="pb-2">
            <span className="font-semibold">To Process Donations:</span> We use
            your payment details to process donations and ensure the financial
            security of transactions.
          </li>
          <li className="pb-2">
            <span className="font-semibold">To Improve Our Services: </span>{" "}
            Non-personal information helps us analyze how our website is used,
            allowing us to improve our content and services.
          </li>
          <li>
            <span className="font-semibold">To Send Updates: </span> With your
            consent, we may send periodic updates, newsletters, and information
            about upcoming initiatives. You can opt-out anytime.
          </li>
          <li>
            <span className="font-semibold">For Internal Operations: </span>{" "}
            Information helps us ensure the safety and security of our digital
            assets and manage our programs effectively.
          </li>
        </ul>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          3. Information Sharing and Disclosure
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li className="pb-2">
            <span className="font-semibold">With Partners:</span> We may share
            information with trusted partners involved in program implementation
            but will not sell or trade your data to third parties for marketing
            purposes.
          </li>
          <li>
            <span className="font-semibold">Legal Requirements:</span> We may
            disclose information to comply with legal obligations, protect our
            rights, or safeguard users.
          </li>
        </ul>

        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          4. Data Security
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li className="pb-2">
            <span className="font-semibold"> Encryption and Protection:</span>{" "}
            We use encryption protocols and restricted access measures to
            protect your data.
          </li>
          <li>
            <span className="font-semibold"> Storage Duration:</span> Personal
            information is stored only as long as necessary to fulfill the
            purposes outlined above or as required by law.
          </li>
        </ul>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          5. Your Rights
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li className="pb-2">
            <span className="font-semibold"> Access and Correction:</span> You
            have the right to request access to the personal information we hold
            about you and request corrections.
          </li>
          <li>
            <span className="font-semibold"> Data Deletion:</span> You may
            request the deletion of your data, subject to any legal obligations
            that require us to retain it.
          </li>
        </ul>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          6. Changes to the Privacy Policy
        </h2>
        <div className="  pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <p>
            We reserve the right to update this policy. Significant changes will
            be communicated via email or website notifications.
          </p>
        </div>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          7. Contact Us
        </h2>
        <div className="  text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <p>
            For questions about our Privacy Policy, please contact us at:{" "}
            <span>
              <a
                href="mailto: daraafrikfoundation@gmail.com"
                className="text-[#0A6EB4] underline italic"
              >
                {" "}
                daraafrikfoundation@gmail.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
