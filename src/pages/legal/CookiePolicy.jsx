import React from "react";

const CookiePolicy = () => {
  return (
    <section className="bg-[#F9FEEC]">
      <div className="lg:px-[80px] md:px-[40px] px-4 md:pb-[120px] pb-[100px]">
        <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[48px] tracking-[-1.92px]  text-left pb-8 pt-6 ">
          Cookie Policy
        </h2>
        <p className="text-[#555C6A] leading-[26.1px] font-inter font-medium text-[18px] pb-12">
          Dara'afrik Foundation ("we," "us," or "our") uses cookies to improve
          user experience on our website. This Cookie Policy explains what
          cookies are, which types we use, and how you can manage them.
        </p>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          1. What are Cookies?
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li>
            Cookies are small files placed on your device when you visit our
            website. They help us understand user interactions and improve our
            services.
          </li>
        </ul>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          2. Types of Cookies We Use
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li className="pb-2">
            <span className="font-semibold">Essential Cookies:</span> Necessary
            for site functionality and security
          </li>
          <li className="pb-2">
            <span className="font-semibold">Analytics Cookies: </span> Collect
            information about how visitors use our website to help us improve
            content and services.
          </li>
          <li>
            <span className="font-semibold">Preference Cookies: </span> Store
            your settings and preferences for a more personalized experience.
          </li>
        </ul>
        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          3. Managing Cookies
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li className="pb-2">
            <span className="font-semibold">Browser Settings:</span> Most
            browsers allow you to manage or disable cookies in settings. Note
            that disabling cookies may impact your experience.
          </li>
          <li>
            <span className="font-semibold">Third-Party Cookies:</span> We may
            allow trusted third parties to set cookies on our site to assist in
            analytics.
          </li>
        </ul>

        <h2 className="font-inter text-[16px] font-semibold leading-[23.2px]  pb-2 text-[#020C21]">
          4. Changes to the Cookie Policy
        </h2>
        <ul className="list-disc pl-6 pb-6 text-[#555C6A] leading-[20.3px] font-inter text-[14px] font-normal ">
          <li>
            We may update our Cookie Policy periodically to reflect changes in
            technology or law. The latest policy will be available on our
            website.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CookiePolicy;
