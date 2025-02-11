import React from "react";

const TermsOfService = () => {
  return (
    <section className="bg-[#F9FEEC]">
      <div className="lg:px-[80px] md:px-[40px] px-4 md:pb-[120px] pb-[100px]">
        <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px]  text-left pb-8 pt-6 ">
          Terms of Service
        </h2>
        <p className="text-[#555C6A] leading-[26.1px] font-inter font-medium text-[18px] pb-12">
          These Terms of Service ("Terms") govern your use of Dara'afrik
          Foundation's website and services. By accessing or using our website,
          you agree to comply with these Terms.
        </p>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          1. Use of Our Website
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li className="pb-2">
            <span className="font-semibold">Purpose:</span> Our website is
            intended to inform users about our mission, projects, and ways to
            get involved or support our initiatives.
          </li>
          <li>
            <span className="font-semibold">User Conduct:</span> : Users agree
            not to misuse the website, including attempting unauthorized access,
            spreading malware, or disrupting service.
          </li>
        </ul>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          2. Donations and Payments
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li className="pb-2">
            <span className="font-semibold">Payment Security:</span> All
            donations are securely processed through third-party payment
            providers.
          </li>
          <li>
            <span className="font-semibold">Refund Policy: </span>Donations are
            non-refundable unless a technical issue has occurred. For
            assistance, contact us at{" "}
            <span>
              <a
                href="mailto: daraafrikfoundation@gmail.com"
                className="text-[#0A6EB4] underline italic"
              >
                {" "}
                daraafrikfoundation@gmail.com
              </a>
            </span>
          </li>
        </ul>

        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          3. Intellectual Property
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li className="pb-2">
            <span className="font-semibold"> Content Ownership:</span> All
            content on this website, including text, graphics, and images,
            belongs to Dara'afrik Foundation. Users may not use or reproduce any
            content without permission.
          </li>
        </ul>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          4.Disclaimer of Liability
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li className="pb-2">
            <span className="font-semibold"> Informational Use: </span> Content
            provided is for informational purposes only and should not be
            considered a substitute for professional advice.
          </li>
          <li>
            <span className="font-semibold"> Limitation of Liability:</span>{" "}
            Dara'afrik Foundation is not responsible for damages resulting from
            website use, interruptions, or inaccurate information.
          </li>
        </ul>

        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          5. Modifications to Terms
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li className="pb-2">
            We may update these Terms periodically. Continued use of our website
            implies acceptance of the revised Terms..
          </li>
        </ul>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          6. Governing Law
        </h2>
        <div className="  pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <p>
            These Terms are governed by the laws of Nigeria. Any disputes will
            be resolved in Nigerian courts.
          </p>
        </div>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          7. Contact Us
        </h2>
        <div className="  text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <p>
            or questions or support, reach out at:{" "}
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

export default TermsOfService;
