import { useState, createContext} from 'react'

export const LanguageContext = createContext();
const LanguageContextProvider = ({children}) => {

    const [language, setLanguage] = useState("DE");
    const exportData = {language, setLanguage};
  return (
    <LanguageContext.Provider value={ exportData }>
      { children }
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider