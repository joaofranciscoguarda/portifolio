import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [langueage, setLanguage] = useState("pt-BR");

  const changeToEnglish = () => {
    setLanguage("en");
  };
  const changeToPortuguese = () => {
    setLanguage("pt-BR");
  };

  return (
    <LanguageContext.Provider
      value={{ langueage, changeToEnglish, changeToPortuguese }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
