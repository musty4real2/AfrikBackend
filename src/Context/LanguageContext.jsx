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
  const [currentLang, setCurrentLang] = useState(storedLang);
  const [translations, setTranslations] = useState({});
  const [languages, setLanguages] = useState([]);
  const [news, setNews] = useState([]);
  const [ourWork, setOurWork] = useState([]); // ✅ Store our work separately
  const [ourProject, setOurProject] = useState([]);
  const [prefetching, setPrefetching] = useState({
    translations: false,
    news: false,
    ourwork: false,
    ourproject: false,
  });
  const [error, setError] = useState(null);

  // Fetch available languages
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch("https://test.nmaniger.com/language.php");
        const data = await response.json();
        setLanguages(data);
      } catch (err) {
        setError("Failed to load languages");
      }
    };
    fetchLanguages();
  }, []);

  // Fetch translations
  useEffect(() => {
    const fetchTranslations = async () => {
      setPrefetching((prev) => ({ ...prev, translations: true }));
      try {
        const response = await fetch(
            `https://test.nmaniger.com/index.php?lang=${currentLang}`
        );
        const data = await response.json();
        setTranslations(data);
      } catch (err) {
        setError("Failed to load translations");
      } finally {
        setPrefetching((prev) => ({ ...prev, translations: false }));
      }
    };

    if (currentLang) {
      fetchTranslations();
    }
  }, [currentLang]);

  // Fetch news
  useEffect(() => {
    const fetchNews = async () => {
      setPrefetching((prev) => ({ ...prev, news: true }));
      try {
        const response = await fetch(
            `https://test.nmaniger.com/news.php?lang=${currentLang}`
        );
        const data = await response.json();
        setNews(data);
      } catch (err) {
        setError("Failed to load news");
      } finally {
        setPrefetching((prev) => ({ ...prev, news: false }));
      }
    };

    if (currentLang) {
      fetchNews();
    }
  }, [currentLang]);

  // Fetch Our Work ✅ FIXED
  useEffect(() => {
    const fetchOurWork = async () => {
      setPrefetching((prev) => ({ ...prev, ourwork: true }));

      try {
        const response = await fetch(
            `https://test.nmaniger.com/ourwork.php?lang=${currentLang}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setOurWork(data); // ✅ Store our work data properly
      } catch (err) {
        setError("Failed to load our work");
      } finally {
        setPrefetching((prev) => ({ ...prev, ourwork: false }));
      }
    };

    if (currentLang) {
      fetchOurWork();
    }
  }, [currentLang]);

  // Fetch Our Work ✅ FIXED
  useEffect(() => {
    const fetchOurProject = async () => {
      setPrefetching((prev) => ({ ...prev, ourproject: true }));

      try {
        const response = await fetch(
            `https://test.nmaniger.com/ourproject.php?lang=${currentLang}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setOurProject(data); // ✅ Store our work data properly
      } catch (err) {
        setError("Failed to load our project");
      } finally {
        setPrefetching((prev) => ({ ...prev, ourproject: false }));
      }
    };

    if (currentLang) {
      fetchOurProject();
    }
  }, [currentLang]);

  // Translation function
  const translate = (key) => {
    return translations[key]?.[currentLang] || key;
  };

  // Update language and save to localStorage
  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setCurrentLang(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
      <LanguageContext.Provider
          value={{
            currentLang,
            handleLanguageChange,
            languages,
            prefetching,
            error,
            translate,
            news,
            ourWork, // ✅ Expose our work in context
            ourProject,
          }}
      >
        {children}
      </LanguageContext.Provider>
  );
};
