import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import JoinUs from "../pages/JoinUs";
import News from "../pages/News";
import OurWork from "../pages/OurWork";
import Donate from "../pages/donation/Donate";
import Volunteer from "../pages/Volunteer";
import MentorshipSection from "../pages/MentorshipSection";
import PartnershipSection from "../pages/PartnershipSection";
import NewsOne from "../pages/newsCatalogue/NewsOne";
import NewsTwo from "../pages/newsCatalogue/NewsTwo";
import NewsThree from "../pages/newsCatalogue/NewsThree";
import NewsArchive from "../pages/newsCatalogue/NewsArchive";
import Faq from "../pages/quickLinks/Faq";
import PrivacyPolicy from "../pages/legal/PrivacyPolicy";
import TermsOfService from "../pages/legal/TermsOfService";
import CookiePolicy from "../pages/legal/CookiePolicy";
import { Routes, Route } from "react-router-dom";
import Disclaimer from "../pages/legal/Disclaimer";
import SpecificProjectDonation from "../pages/donation/SpecificProjectDonation";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/join-us" element={<JoinUs />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/news-and-resources" element={<News />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/mentorship-section" element={<MentorshipSection />} />
      <Route path="/partnership-section" element={<PartnershipSection />} />
      <Route path="/news-one" element={<NewsOne />} />
      <Route path="/news-two" element={<NewsTwo />} />
      <Route path="/news-three" element={<NewsThree />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/news-archive" element={<NewsArchive />} />
      <Route
        path="/specific-project-donation"
        element={<SpecificProjectDonation />}
      />
    </Routes>
  );
};

export default Router;
