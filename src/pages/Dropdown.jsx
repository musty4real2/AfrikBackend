import React from "react";
import mentorImg from "../assets/images/news/MentorDrop.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { X, ChevronLeft } from "lucide-react";

const Dropdown = ({ onClose, closeMenu, isMobile, onBack }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e, target) => {
    e.preventDefault();

    if (isMobile) {
      closeMenu();
    }
    onClose();

    setTimeout(() => {
      if (location.pathname === "/news-and-resources") {
        if (target === "latest-news") {
          window.scrollToLatestNews?.();
        } else if (target === "success-stories") {
          window.scrollToSuccessStories?.();
        } else if (target === "upcoming-projects") {
          window.scrollToUpcomingProjects?.();
        }
      } else {
        navigate("/news-and-resources", {
          state: { scrollTarget: target },
        });
      }
    }, 100);
  };

  const handleBack = () => {
    onClose();
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="fixed inset-x-0 top-0 md:mt-16 mt-16 lg:mt-[180px]  bg-[#F9FEEC] shadow-lg z-50">
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Header with Back and Close buttons */}
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-8 pt-6  md:pt-[24px] h-14">
          {isMobile && (
            <button
              onClick={handleBack}
              className="text-[#667185] hover:text-[#0a6eb4] transition-colors lg:hidden md:block duration-200 flex items-center gap-2 font-medium"
            >
              <ChevronLeft size={20} />
            </button>
          )}
        </div>
        <hr
          className="border-t h-[1px] w-full mt-2 mb-2 lg:hidden md:block block"
          style={{ borderColor: "#E4E7E0" }}
        />

        <div className="px-4 md:px-6 lg:px-8 mt-8">
          {" "}
          {/* Added margin-top to bring list items downward */}
          <div className="flex flex-col lg:flex-row items-start justify-between py-6 md:py-8 lg:py-16 gap-8">
            {/* Navigation Links Section */}
            <div className="w-full lg:w-auto min-w-[240px] md:min-w-[320px]">
              <ul className="space-y-4 w-full text-left lg:ml-20">
                <li className="w-full text-[#98A2B3] font-normal text-base font-inter">
                  News & Resources
                </li>
                <li className="w-full">
                  <NavLink
                    to="/news-and-resources"
                    className="text-[#667185] hover:text-[#0a6eb4] font-medium text-base font-inter block w-full transition-colors duration-200"
                    onClick={(e) => handleLinkClick(e, "latest-news")}
                  >
                    Latest News
                  </NavLink>
                </li>
                <li className="w-full">
                  <a
                    href="#success-stories"
                    className="text-[#667185] hover:text-[#0a6eb4] font-medium text-base font-inter block w-full transition-colors duration-200"
                    onClick={(e) => handleLinkClick(e, "success-stories")}
                  >
                    Success Stories
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="#upcoming-projects"
                    className="text-[#667185] hover:text-[#0a6eb4] font-medium text-base font-inter block w-full transition-colors duration-200"
                    onClick={(e) => handleLinkClick(e, "upcoming-projects")}
                  >
                    Upcoming Projects
                  </a>
                </li>
                <li className="w-full">
                  <NavLink
                    to="/event-calendar"
                    className="text-[#667185] hover:text-[#0a6eb4] font-medium text-base font-inter block w-full transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      if (isMobile) closeMenu();
                      onClose();
                      navigate("/event-calendar");
                    }}
                  >
                    Event Calendar
                  </NavLink>
                </li>
                <li className="w-full">
                  <NavLink
                    to="/impact-report"
                    className="text-[#667185] hover:text-[#0a6eb4] font-medium text-base font-inter block w-full transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      if (isMobile) closeMenu();
                      onClose();
                      navigate("/impact-report");
                    }}
                  >
                    Impact Report
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="hidden lg:block lg:max-w-xl">
              <img
                src={mentorImg}
                alt="Mentorship"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
