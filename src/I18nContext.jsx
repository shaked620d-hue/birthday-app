import { createContext, useContext, useState } from 'react'


//קונאקסט עם ערכים דיפולטיבים להשלמה אוטומאטית
export const I18nContext = createContext({
  language: "he",
  setLanuage: () => {},
});

//קומפוננטת provider
// המקבלת children
//משתמשת בתחביר החדש של ריאקט
export function I18nContext({children}){
  const [language,setLanuage] = useState("he")
  return(
    <I18nContext value={{language, setLanuage}}>
      {children}
    </I18nContext>
  )
}

//Custom hook
//מספק גישה לקונטקסט ובודק שהוא שנמצא בתוך provider
export function useI18nContext(){
  const context = useContext(I18nContext);
  if(!context){
    throw new Error("useI18nContext must be used within an I18nProvider");
  }
  return context;
}
