import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext();

export function LanguageProvider({ children, forcedLanguage }) {
  const [storedLanguage, setStoredLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved || "de";
  });

  const language =
    forcedLanguage === "de" || forcedLanguage === "en"
      ? forcedLanguage
      : storedLanguage;

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem("language", language);
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage) => {
    setStoredLanguage(nextLanguage);
  };

  const toggleLanguage = () => {
    setStoredLanguage((prev) => (prev === "de" ? "en" : "de"));
  };

  const t = translations[language] || translations.de;

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

