import { useI18nContext } from "../I18nContext"

const LANGUAGE = [
    {value: "he", label: "עברית"},
    {value: "en", label: "English"},
    {value: "fr", label: "Français"}
]
export default function ChooseLanguage() {
    const {setLanguage} = useI18nContext();
  return (
    <label>
      <span>בחר שפה: </span>
      <select defaultValue="he" onChange={(e) => setLanguage(e.target.value)}>
        {LANGUAGE.map((lang) => (
            <option key={lang.value} value={lang.value}>\
            {lang.label}
            </option>
        ))}
      </select>
    </label>
  );
}
