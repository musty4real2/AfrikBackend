import React, { createContext, useContext, useState, useEffect } from "react";

// Create the Language Context
const LanguageContext = createContext();

// Hook to access language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Language Provider to wrap the app and provide context values
export const LanguageProvider = ({ children }) => {
  const storedLang = localStorage.getItem("language") || "en";

  const [currentLang, setCurrentLang] = useState(storedLang); // Default language from localStorage or "en"
  const [translations, setTranslations] = useState({});
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch available languages from the server
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch("https://test.nmaniger.com/language.php");
        const data = await response.json();
        setLanguages(data); // Assuming data is an array of { language_code, language_name }
      } catch (err) {
        setError("Failed to load languages");
      }
    };

    fetchLanguages();
  }, []);

  // Fetch translations when language changes
  useEffect(() => {
    const fetchTranslations = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://test.nmaniger.com/index.php?lang=${currentLang}`
        );
        const data = await response.json();
        setTranslations(data);
      } catch (err) {
        setError("Failed to load translations");
        // Alert if there's an issue with translations
      } finally {
        setLoading(false);
      }
    };

    if (currentLang) {
      fetchTranslations();
    }
  }, [currentLang]);

  // Translation function, returns key if translation is not available
  const translate = (key) => {
    return translations[key]?.[currentLang] || key; // Fallback to original text
  };

  // Update language and save to localStorage
  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setCurrentLang(newLang);
    localStorage.setItem("language", newLang); // Save selected language to localStorage
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        handleLanguageChange,
        languages,
        loading,
        error,
        translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
