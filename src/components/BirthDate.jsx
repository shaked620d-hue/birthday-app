import { useEffect, useState } from "react";
import { useI18nContext } from "../I18nContext";
import { translateText } from "../utils/translateText";



export default function BirthDate({ birthDate }) {

  const { language } = useI18nContext();
  const [translatedPrefix, setTranslatedPrefix] = useState("מזל טוב!");
  const [translatedDateLabel, setTranslatedDateLabel] =
    useState("תאריך הלידה שלך הוא:");



  useEffect(() => {
    let cancelled = false;

    async function runTranslations() {
      try {
        const [prefix, label] = await Promise.all([
          translateText("מזל טוב!", language, "he"),
          translateText("תאריך הלידה שלך הוא:", language, "he"),
        ]);

        if (!cancelled) {
          setTranslatedPrefix(prefix);
          setTranslatedDateLabel(label);
        }
      } catch {
        if (!cancelled) {
          setTranslatedPrefix("מזל טוב!");
          setTranslatedDateLabel("תאריך הלידה שלך הוא:");
        }
      }
    }
    runTranslations();

    return () => {
      cancelled = true;
    };
  }, [language]);

  if (!birthDate) {
    return null;
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - birthDate.getFullYear();
  const formattedDate = birthDate.toLocaleDateString(language);

  return (
    <p>
      {translatedPrefix} ({age}) {translatedDateLabel} {formattedDate}.   
       </p>
  )
}