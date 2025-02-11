import React from "react";
import fbImg from "../assets/images/Fb.png";
import inImg from "../assets/images/In.png";
import lnImg from "../assets/images/Ln.png";
import twImg from "../assets/images/Tw.png";
import logo from "../assets/images/Logo.png";
import route from "../assets/images/route.png";
import mail from "../assets/images/mail.png";
import callRinging from "../assets/images/call-ringing.png";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../Context/LanguageContext";
import nl2br from "react-nl2br";

const Footer = () => {
  const { translate } = useLanguage();
  return (
    <section className="lg:px-[80px] md:px-[40px] px-4 lg:py-[64px] py-0 bg-[var(--Foundation-Background--White-background--white-50,#FEFFFD)]   overflow-x-hidden">
      <div className="flex lg:flex-row flex-col justify-center lg:gap-[56px] gap-12 lg:pb-[64px]">
        <div>
          <div className="flex flex-col lg:pr-[32px] md:pr-0 lg:pt-0 md:pt-6 pb-[40px] lg:pb-0 ">
            <h1 className="lg:text-start text-center text-[32px] pb-2 font-bold leading-[38.4px] hidden lg:hidden md:block tracking-[-0.64px] md:pt-6 lg:pt-0 pt-6 text-[#1D2739]">
              {translate("subscribe")}
            </h1>
            <h1 className="lg:text-start text-center lg:block block md:hidden text-[32px] pb-2 font-bold leading-[38.4px] tracking-[-0.64px] md:pt-6 lg:pt-0 pt-6 text-[#1D2739]">
              {translate("subscribe")}
            </h1>
            <p className="md:text-center text-center  lg:text-left text-[16px] font-normal leading-[23.2px] text-[#667185] lg:w-[90%]">
              {nl2br(translate("subscribe-text"))}
            </p>
            <form className="flex lg:flex-row flex-col items-center gap-2 pt-[28px]">
              <input
                type="email"
                placeholder={translate('email-placeholder')}
                className="footer-input w-[361px] md:w-full lg:w-[236px] lg:bg-[#FAFEF0]"
              />
              <button
                type="submit"
                className="footer-button lg:w-[173px] w-[361px] md:w-full"
              >
                {translate("subscribe-label")}
              </button>
            </form>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse gap-12">
          <div className="flex lg:flex-row flex-col gap-12 pb-[64px] lg:pb-0">
            <div>
              <h4 className="footer-h4 whitespace-nowrap lg:pb-6 pb-0">
                Quick Links
              </h4>
              <ul className="text-sm space-y-2">
                <li className="footer-li">
                  <NavLink
                    to="/donate"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[#0a6eb4] font-[600]"
                          : "text-foundationText font-[500] hover:text-[#3b8bc3]"
                      } text-[16px]`
                    }
                  >
                    Donate
                  </NavLink>
                </li>
                <li className="footer-li">
                  <NavLink
                    to="/join-us"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[#0a6eb4] font-semibold"
                          : "text-foundationText font-medium hover:text-[#3b8bc3]"
                      } text-[16px]`
                    }
                  >
                    Join Us
                  </NavLink>
                </li>

                <li className="footer-li">
                  <NavLink
                    to="/our-work"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[#0a6eb4] font-[600]"
                          : "text-foundationText font-[500] hover:text-[#3b8bc3]"
                      } text-[16px]`
                    }
                  >
                    Our Work
                  </NavLink>
                </li>

                <li className="footer-li">
                  <NavLink
                    to="/faq"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[#0a6eb4] font-[600]"
                          : "text-foundationText font-[500] hover:text-[#3b8bc3]"
                      } text-[16px]`
                    }
                  >
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="footer-h4 lg:pb-6 pb-0">Legal</h4>
              <ul className="text-sm space-y-2">
                <li className="footer-li whitespace-nowrap">
                  <NavLink
                    to="/privacy-policy"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[#0a6eb4] font-[600]"
                          : "text-foundationText font-[500] hover:text-[#3b8bc3]"
                      } text-[16px]`
                    }
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li className="footer-li whitespace-nowrap">
                  <NavLink
                    to="/terms-of-service"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[#0a6eb4] font-[600]"
                          : "text-foundationText font-[500] hover:text-[#3b8bc3]"
                      } text-[16px]`
                    }
                  >
                    Terms of Service
                  </NavLink>
                </li>
                <li className="footer-li whitespace-nowrap">
                  <NavLink
                    to="/cookie-policy"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[#0a6eb4] font-[600]"
                          : "text-foundationText font-[500] hover:text-[#3b8bc3]"
                      } text-[16px]`
                    }
                  >
                    Cookie Policy
                  </NavLink>
                </li>
                <li className="footer-li whitespace-nowrap">
                  <NavLink
                    to="/disclaimer"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[#0a6eb4] font-[600]"
                          : "text-foundationText font-[500] hover:text-[#3b8bc3]"
                      } text-[16px]`
                    }
                  >
                    Disclaimer
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="footer-h4 whitespace-nowrap pb-6">Contact Us</h4>
            <ul className="text-sm lg:space-y-2">
              <li className="footer-li pb-[14px] whitespace-nowrap hidden  lg:flex gap-4">
                <img src={route} alt="route" className="w-6 h-6" />
                <p>
                  {" "}
                  86 Ikot Abasi Road, Abak <br /> Akwa Ibom State, Nigeria
                </p>
              </li>

              <li className="text-[#667185] font-inter text-[16px] font-[500] pb-[14px] whitespace-nowrap flex gap-4 lg:hidden text-justify">
                <img src={route} alt="route" className="w-6 h-6" />
                <p>
                  86 Ikot Abasi Road, Abak Akwa Ibom <br /> State, Nigeria
                </p>
              </li>
              <li className=" whitespace-nowrap text-center items-center flex gap-4">
                <img src={mail} alt="mail" className="w-6 h-6" />
                <a
                  href="mailto:dara’afrikfoundation@gmail.com"
                  className="hover:underline text-[#5B9ECD] font-semibold text-[14px] font-inter"
                >
                  dara’afrikfoundation@gmail.com
                </a>
              </li>
              <li className=" whitespace-nowrap text-[#5B9ECD] font-semibold flex gap-4 text-[16px] font-inter pt-[14px] text-center lg:text-start">
                <img src={callRinging} alt="callIcon" className="w-6 h-6" />
                <p>+234 7089815154</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social links flex lg:flex-row flex-col py-[28px] lg:gap-[50px] md:gap-8 gap-8 justify-between items-center selection:lg:px-[32px] px-4 bg-[#F9FAFB] rounded-[10px]">
        <div className="flex gap-[16px]">
          <a href="https://www.facebook.com/profile.php?id=61565396871906">
            <img src={fbImg} alt="facebook image" />
          </a>
          <a href="#">
            <img src={twImg} alt="twitter image" />
          </a>
          <a href="https://www.instagram.com/daraafrikfoundation/">
            <img src={inImg} alt="instagram image" />
          </a>
          <a href="https://www.linkedin.com/in/dara-afrik-foundation-00081b326/">
            <img src={lnImg} alt="LinkedIn image" />
          </a>
        </div>
        <div>
          <p
            className="text-[#1D2739] text-sm font-normal leading-[145%] font-inter"
            style={{ fontFeatureSettings: "'cv03' on, 'cv04' on" }}
          >
            © 2024 DaraAfrik Foundation. All rights reserved.
          </p>
        </div>
        <div>
          <img src={logo} alt="logo image" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
