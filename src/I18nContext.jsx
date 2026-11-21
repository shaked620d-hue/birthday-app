import { createContext, useContext, useState } from 'react'


//קונאקסט עם ערכים דיפולטיבים להשלמה אוטומאטית
export const I18nContext = createContext({
  language: "he",
  setLanguage: () => {},
});

//קומפוננטת provider
// המקבלת children
//משתמשת בתחביר החדש של ריאקט
export function Provider({children}){
  const [language,setLanguage] = useState("he")
  return(
    <I18nContext value={{language, setLanguage}}>
      {children}
    </I18nContext>
  )
}


// Custom hook המספק גישה לקונטקסט
export function useI18nContext() {
  return useContext(I18nContext);
}