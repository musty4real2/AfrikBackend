import React from "react";
import calender from "../../assets/images/calendar-alt.png";
import clock from "../../assets/images/alarm-clock.png";
import "./ProjectCard.css";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../Context/LanguageContext";

const ProjectCard = ({ projects }) => {
  const navigate = useNavigate();
  const { translate } = useLanguage(); // Call useLanguage at the top level

  const handleDonateClick = (project) => {
    // Navigate to specific-project-donation and pass project data via state
    navigate("/specific-project-donation", {
      state: {
        projectTitle: project.title,
        projectLocation: project.location,
        projectId: project.id,
      },
    });
  };

  return (
      <div className="flex justify-center gap-4 flex-wrap">
        {projects.map((project, index) => (
            <div
                key={index}
                className="project-card py-6 shadow-custom flex md:flex-col lg:flex-row flex-col overflow-hidden w-full lg:w-auto"
            >
              <div className="lg:w-[190px] w-full flex items-center justify-center">
                {/* Small screen image */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover block lg:hidden rounded-[16px]"
                />
                {/* Large screen image */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="hidden lg:block w-full h-auto max-h-[212px] object-contain"
                />
              </div>
              <div className="pl-4 flex flex-col justify-between lg:py-0 py-4">
                <div>
                  <h2 className="project-card-title">{project.title}</h2>
                  <p className="project-card-description pb-6">
                    {project.city + " " + project.state}
                  </p>
                  <div className="flex items-center my-2">
                    <img src={calender} alt="calendar" className="w-4 h-4 mr-2" />
                    <span className="date-text">
                  {project.month + "," + project.year}
                </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <img src={clock} alt="clock" className="w-4 h-4 mr-2" />
                    <span className="mr-1 text-xs font-semibold leading-[145%] custom-span">
                  To be announced
                </span>
                    <span className="text-xs font-medium leading-[145%] tracking-[-0.06px] px-2 custom-time-remaining">
                  {project.time_remaining}
                </span>
                  </div>
                </div>
                <button
                    onClick={() => handleDonateClick(project)}
                    className="w-full bg-transparent custom-button"
                >
                  <span className="custom-button-text">{translate("Donate")}</span>
                </button>
              </div>
            </div>
        ))}
      </div>
  );
};

export default ProjectCard;
