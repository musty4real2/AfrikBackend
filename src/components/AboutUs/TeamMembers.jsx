import React from "react";
import teamMember1 from "../../assets/images/aboutUsImg/teamMember1.png";
import teamMember1A from "../../assets/images/aboutUsImg/teamMember1A.png";
import teamMember2 from "../../assets/images/aboutUsImg/teamMember2.png";
import teamMember2A from "../../assets/images/aboutUsImg/teamMember2A.png";
import teamMember3 from "../../assets/images/aboutUsImg/teamMember3.png";
import teamMember3A from "../../assets/images/aboutUsImg/teamMember3A.png";
import teamMember4 from "../../assets/images/aboutUsImg/teamMember4.png";
import teamMember4A from "../../assets/images/aboutUsImg/teamMember4A.png";
import teamMember5 from "../../assets/images/aboutUsImg/teamMember5.png";
import teamMember5A from "../../assets/images/aboutUsImg/teamMember5A.png";
import teamMember6 from "../../assets/images/aboutUsImg/teamMember6.png";
import teamMember6A from "../../assets/images/aboutUsImg/teamMember6A.png";
import teamMember7 from "../../assets/images/aboutUsImg/teamMember7.png";
import teamMember7A from "../../assets/images/aboutUsImg/teamMember7A.png";
import teamMember8 from "../../assets/images/aboutUsImg/teamMember8.png";
import teamMember8A from "../../assets/images/aboutUsImg/teamMember8A.png";
import teamMember9 from "../../assets/images/aboutUsImg/teamMember9.png";
import teamMember9A from "../../assets/images/aboutUsImg/teamMember9A.png";
import teamMember10 from "../../assets/images/aboutUsImg/teamMember10.png";
import teamMember10A from "../../assets/images/aboutUsImg/teamMember10A.png";
import instagramIcon from "../../assets/images/aboutUsImg/InIcon.png";
import facebookIcon from "../../assets/images/aboutUsImg/FbIcon.png";
import twitterIcon from "../../assets/images/aboutUsImg/Xicon.png";
import LinkedInIcon from "../../assets/images/aboutUsImg/LiIcon.png";
import flag from "../../assets/images/aboutUsImg/flag.png";
import activeLinkedInIcon from "../../assets/images/aboutUsImg/activeLinkedIn.png";
import inactiveFacebookIcon from "../../assets/images/aboutUsImg/inactiveFacebook.png";

const teamMembers = [
  {
    normal: teamMember1,
    enlarged: teamMember1A,
    name: "Pharm. Bassey Ebong",
    title: "Founder /Head of Programs ",
    country: "Nigeria",
    socials: {
      customIcons: {
        linkedin: activeLinkedInIcon,
        facebook: inactiveFacebookIcon,
      },
    },
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/bassey-ebong-4367272a8",
    },
  },
  {
    normal: teamMember2,
    enlarged: teamMember2A,
    name: "Hon. Donald Inyang",
    title: "Head of Administration",
    country: "Nigeria",
    socials: true,
    socialLinks: {
      facebook:
        "https://www.facebook.com/profile.php?id=100077208524727&mibextid=ZbWKwL",
    },
  },
  {
    normal: teamMember3,
    enlarged: teamMember3A,
    name: "Pharm. Rita Udoh",
    title: "Data Management Officer",
    country: "Nigeria",
    socials: {
      customIcons: {
        linkedin: activeLinkedInIcon,
        facebook: inactiveFacebookIcon,
      },
    },
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/rita-udoh-96451383",
    },
  },
  {
    normal: teamMember4,
    enlarged: teamMember4A,
    name: "Maryjane Awai",
    title: "Head of New Business Development",
    country: "Nigeria",
    socials: true,
    socialLinks: {
      facebook: "https://www.facebook.com/profile.php?id=100001986085471",
    },
  },

  {
    normal: teamMember5,
    enlarged: teamMember5A,
    name: "Emmanuel Thompson",
    title: "Community Manager",
    country: "Nigeria",
    socials: true,
    socialLinks: {
      facebook:
        "https://www.facebook.com/emmanuel.thompson.750546?mibextid=ZbWKwL",
    },
  },

  {
    normal: teamMember6,
    enlarged: teamMember6A,
    name: "Inemesit  Esoh",
    title: "Volunteer",
    country: "Nigeria",
    socials: true,
    socialLinks: {
      facebook:
        "https://www.facebook.com/profile.php?id=100086247138404&mibextid=ZbWKwL",
    },
  },
  {
    normal: teamMember7,
    enlarged: teamMember7A,
    name: "Pharm. Edidiong Abraham",
    title: "Volunteer",
    country: "Nigeria",
    socials: true,
    socialLinks: {
      facebook: "https://www.facebook.com/edidiong.jimmy.52?mibextid=ZbWKwL",
    },
  },

  {
    normal: teamMember8,
    enlarged: teamMember8A,
    name: "Ekemini Ebong",
    title: "Volunteer",
    country: "Nigeria",
    socials: true,
    socialLinks: {
      facebook: "https://www.facebook.com/share/1GNyAoWP3P/",
    },
  },

  {
    normal: teamMember9,
    enlarged: teamMember9A,
    name: "Bethel Okenwa",
    title: "Volunteer",
    country: "Nigeria",
    socials: true,
    socialLinks: {
      facebook: "https://www.facebook.com/share/1E2dVP4PzK/",
    },
  },

  {
    normal: teamMember10,
    enlarged: teamMember10A,
    name: "Dr. Ebong Ebong",
    title: "Trustee",
    country: "Nigeria",
    socials: true,
    socialLinks: {
      facebook: "https://www.facebook.com/ebong.ebong.3532",
    },
  },
];

const TeamMembers = () => {
  const getSocialIcon = (member, iconType) => {
    if (member.socials?.customIcons?.[iconType]) {
      return member.socials.customIcons[iconType];
    }
    switch (iconType) {
      case "facebook":
        return facebookIcon;
      case "linkedin":
        return LinkedInIcon;
      case "twitter":
        return twitterIcon;
      case "instagram":
        return instagramIcon;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F9FEEC] lg:px-[80px] pt-[64px] pb-[80px] hidden md:hidden lg:block">
      <h2 className="text-[#020C21] text-center font-[Gilroy-Bold] text-[40px] font-normal leading-[48px] tracking-[-1.6px] pb-8">
        Meet Our Team
      </h2>
      <div className="flex gap-4 justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group w-[108px] hover:w-[301px] transition-all duration-300"
            style={{ height: "464px" }}
          >
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Normal Image */}
              <img
                src={member.normal}
                alt={`Team member ${index + 1}`}
                className="w-full h-full object-cover grayscale group-hover:opacity-0 transition-opacity duration-300"
              />
              {/* Enlarged Image with Overlay */}
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src={member.enlarged}
                  alt={`Team member ${index + 1} enlarged`}
                  className="w-full h-full object-cover"
                />
                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 text-center w-full p-6 bg-gradient-to-t from-blue-900/80 via-blue-900/50 to-transparent">
                  <h3 className="text-[16px] font-bold font-inter leading-[22.4px] mb-1 text-[#FEFFFD]">
                    {member.name}
                  </h3>
                  <p className="text-[14px] font-medium font-inter leading-[20.3px] mb-4 text-[#E4E7EC]">
                    {member.title}
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-[12px] font-normal font-inter leading-[17.4px] text-[#F9FAFB]">
                      {member.country}
                    </span>
                    {member.country && (
                      <img
                        src={flag}
                        alt={`${member.country} flag`}
                        className="w-4 h-3 border bg-[#FFFFFF]"
                      />
                    )}
                  </div>
                  <div className="flex gap-4 justify-center">
                    <a
                      href={member.socialLinks?.facebook || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={getSocialIcon(member, "facebook")}
                        alt="Facebook"
                        className="w-6 h-6"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80">
                      <img
                        src={instagramIcon}
                        alt="Instagram"
                        className="w-6 h-6"
                      />
                    </a>
                    <a
                      href={member.socialLinks?.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={getSocialIcon(member, "linkedin")}
                        alt="LinkedIn"
                        className="w-6 h-6"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80">
                      <img
                        src={twitterIcon}
                        alt="Twitter"
                        className="w-6 h-6"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
