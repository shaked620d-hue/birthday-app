import { useEffect, useState } from "react";
import { useI18nContext } from "../I18nContext";
import { translateText } from "../utils/translateText";

//קומפוננטה שמציגה div עם הברכה שקיבלה כ-props
export default function GreetingCard({greeting}){
const {language} = useI18nContext();
const [translatedGreeting, setTranslatedGreeting] = useState(greeting);

useEffect(() => {
    let cancelled = false;

    async function runTranslation() {
      try {
        const result = await translateText(greeting, language, "he");
        if (!cancelled) {
          setTranslatedGreeting(result);
        }
      } catch {
        if (!cancelled) {
          setTranslatedGreeting(greeting);
        }
      }
    }

    runTranslation();

    return () => {
      cancelled = true;
    };
  }, [greeting, language]);

  return <div>{translatedGreeting}</div>;
}