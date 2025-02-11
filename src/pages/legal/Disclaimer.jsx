import React from "react";

const Disclaimer = () => {
  return (
    <section className="bg-[#F9FEEC]">
      <div className="lg:px-[80px] md:px-[40px] px-4 md:pb-[120px] pb-[100px]">
        <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px]  text-left pb-8 pt-6 ">
          Disclaimer
        </h2>
        <p className="text-[#555C6A] leading-[26.1px] font-inter font-medium text-[18px] pb-12">
          Dara'afrik Foundation provides this website and its content on an
          "as-is" basis without any warranties. By using our site, you
          acknowledge and agree to the following disclaimers
        </p>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          1. Informational Purpose Only
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li>
            <span className="font-semibold">Non-Professional Advice: </span>{" "}
            Information on our site is for informational purposes only and
            should not replace professional medical, legal, or other advice.
          </li>
        </ul>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          2. No Guarantee of Results
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li>
            <span className="font-semibold">Program Outcomes:</span> While we
            aim to achieve positive outcomes through our programs, we cannot
            guarantee specific results, as these are subject to external factors
            and community engagement.
          </li>
        </ul>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          3. Limitation of Liability
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li>
            <span className="font-semibold">
              No Responsibility for Damages:
            </span>{" "}
            Dara'afrik Foundation is not liable for any damages arising from
            your use of our website, reliance on content, or technical issues
            encountered on the site.
          </li>
        </ul>

        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          4. External Links Disclaimer
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li>
            <span className="font-semibold"> Third-Party Sites:</span> Our
            website may contain links to external sites. We are not responsible
            for the content, security, or privacy practices of these sites and
            encourage users to review their policies.
          </li>
        </ul>

        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          5. Contact Us
        </h2>
        <div className="  text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <p>
            If you have questions about this Disclaimer, please contact us at :{" "}
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

export default Disclaimer;
