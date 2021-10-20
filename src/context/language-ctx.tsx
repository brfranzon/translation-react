import { createContext, ReactNode, useState } from "react";

type LanguageContextProps = {
  language: string;
  setLanguage(arg?: any): void;
};

const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  setLanguage: () => undefined,
});

type Props = {
  children: ReactNode;
};

export function LanguageContextProvider({ children }: Props) {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
