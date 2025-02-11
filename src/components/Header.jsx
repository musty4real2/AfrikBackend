import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import toggleIcon from "../assets/images/toggleIcon.png";
import buttonIcon from "../assets/images/button-icon.png";
import Dropdown from "../pages/Dropdown";
import { useLanguage } from "../Context/LanguageContext";


const navLinks = [
  { path: "/", display: "Home" },
  { path: "/about-us", display: "About Us" },
  { path: "/our-work", display: "Our Work" },
  { path: "/join-us", display: "Join Us" },
  { path: "/news-and-resources", display: "News & Resources" },
];

const mobileNavLinks = [
  { path: "/", display: "Home" },
  { path: "/about-us", display: "About Us" },
  { path: "/our-work", display: "Our Work" },
  { path: "/join-us", display: "Join Us" },
  { path: "/news-and-resources", display: "News & Resources" },
  { path: "/donate", display: "Donate" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentNavLinks, setCurrentNavLinks] = useState(navLinks);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { languages, currentLang, handleLanguageChange, loading, error, translate,} = useLanguage();



  const closeMenu = () => {
    setMenuOpen(false);
    if (menuRef.current) {
      menuRef.current.classList.remove("show_Menu");
    }
  };

  const handleNewsClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavLinkClick = (link) => {
    if (link === "News & Resources") {
      handleNewsClick();
    } else {
      closeMenu();
      setDropdownOpen(false);
    }
  };

  const toggleDropdown = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("show_Menu");
      setMenuOpen(!menuOpen);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [dropdownOpen]);

  const handleScroll = () => {
    if (window.innerWidth < 768) {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    }
  };

  const handleResize = () => {
    setCurrentNavLinks(window.innerWidth < 1024 ? mobileNavLinks : navLinks);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-headerBg px-6 md:px-[80px] sticky_header top-0 z-50 shadow-lg"
    >
      {/* Top Bar */}
      <div className="hidden lg:flex justify-end gap-6 py-6">
        <Link
          to="/contact-us"
          className="text-secondaryColor font-semibold text-[16px] hover:text-[#E26E6A] text-center leading-[23.2px] font-inter"
          onClick={handleNavLinkClick}
        >
          {translate("Contact Us")}
        </Link>
        <div className="relative">
          <select
              value={currentLang}
              onChange={handleLanguageChange}
              className="text-orangeColor hover:text-[#E26E6A] font-semibold text-[16px] text-center leading-[23.2px] font-inter flex items-center"
              aria-label="Select language"
          >
            {languages.map((lang) => (
                <option className="text-orangeColor hover:text-[#E26E6A] font-semibold text-[16px] text-center leading-[23.2px] font-inter flex items-center"
                        key={lang.language_code} value={lang.language_code}>
                  {lang.language_name}
                  <img src={toggleIcon} alt="Toggle Icon" className="w-4 h-4 ml-2" />
                </option>
            ))}
          </select>
        </div>
      </div>
      <hr
        className="border-t h-[1px] w-full mt-2 mb-2 lg:block md:hidden hidden"
        style={{ borderColor: "#E4E7E0" }}
      />
      {/* Main Navbar */}
      <div className="flex items-center justify-between py-4 lg:py-6 lg:flex-row flex-col">
        {/* Logo and Donate Button */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <img
            src={logo}
            alt="Dara Afrik Foundation"
            className="w-25 md:w-auto"
          />
          <Link
            to="/donate"
            className="donate-button-small md:px-6 md:py-3 hover:bg-[#3b8bc3] md:block lg:hidden"
            onClick={handleNavLinkClick}
          >
            <span className="donate-button-text">{translate("Donate")}</span>
          </Link>
        </div>
        <hr
          className="border-t h-[1px] w-full mt-2 mb-2 lg:hidden"
          style={{ borderColor: "#E4E7E0" }}
        />
        {/* Hamburger Icon */}
        <div className="flex items-center justify-end w-full lg:hidden">
          <button
            className="mb-4"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <BiX className="w-6 h-6 cursor-pointer menu-close-icon" />
            ) : (
              <BiMenu className="w-6 h-6 cursor-pointer" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="navigation" ref={menuRef}>
          <ul className="menu flex flex-col md:flex-col lg:flex-row items-start gap-6 text-foundationText text-[16px] text-center leading-[23.2px] font-inter font-medium md:pr-[60px]">
            {currentNavLinks.map((link, index) => (
              <li key={index}>
                {link.display === "News & Resources" ? (
                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className={`text-[16px] flex items-center group relative ${
                        dropdownOpen
                          ? "text-[#0a6eb4] font-[600]"
                          : "text-foundationText font-[500] hover:text-[#3b8bc3]"
                      }`}
                    >
                      {translate(link.display)}
                      <img
                        src={buttonIcon}
                        alt="Dropdown Icon"
                        className={`w-[21px] h-[21px] ml-2 cursor-pointer transform transition-all duration-300 
          ${
            dropdownOpen
              ? "[filter:invert(31%)_sepia(93%)_saturate(1000%)_hue-rotate(182deg)_brightness(91%)_contrast(101%)] rotate-180"
              : ""
          }
          ${
            !dropdownOpen
              ? "group-hover:[filter:invert(48%)_sepia(31%)_saturate(1001%)_hue-rotate(173deg)_brightness(88%)_contrast(87%)]"
              : ""
          }
        `}
                      />
                    </button>
                    {dropdownOpen && (
                      <Dropdown
                        onClose={() => setDropdownOpen(false)}
                        closeMenu={closeMenu}
                        isMobile={window.innerWidth < 1024}
                        onBack={() => setDropdownOpen(false)}
                      />
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[#0a6eb4] font-[600]"
                          : "text-foundationText font-[500] hover:text-[#3b8bc3]"
                      } text-[16px] flex items-center`
                    }
                    onClick={() => handleNavLinkClick(link.display)}
                  >
                    {translate(link.display)}
                  </NavLink>
                )}
              </li>
            ))}
            <hr
              className="border-t h-[1px] w-full mt-2 mb-2 lg:hidden md:block block"
              style={{ borderColor: "#E4E7E0" }}
            />
            <li className="lg:hidden md:block">
              <NavLink
                to="/contact"
                onClick={handleNavLinkClick}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#0a6eb4] font-[600]"
                      : "text-foundationText font-[500] hover:text-[#3b8bc3]"
                  } text-[16px]`
                }
              >
                Language
              </NavLink>
            </li>
            <li className="lg:hidden md:block">
              <NavLink
                to="/contact-us"
                onClick={handleNavLinkClick}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#0a6eb4] font-[600]"
                      : "text-foundationText font-[500] hover:text-[#3b8bc3]"
                  } text-[16px]`
                }
              >
                {translate("Contact Us")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Donate Button for Larger Screens */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/donate"
            className="donate-button"
            onClick={handleNavLinkClick}
          >
            <span className="donate-button-text">{translate("Donate")}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
