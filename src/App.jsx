import { Provider, useI18nContext } from "./I18nContext";
import ChooseLanguage from "./components/ChooseLanguage";
import BirthDate from './components/BirthDate';
import GreetingsList from './components/GreetingsList';


function BirthdayContent() {
  const { language } = useI18nContext();
  const userBirthDate = new Date(2015, 10, 20);
  const greetings = [
    "יום הולדת שמח! מאחלים לך שנה נפלאה.",
    "הרבה בריאות, אושר והצלחה בהמשך!",
  ]
  return (
   <main dir={language === "he" ? "rtl" : "ltr"}>
      <ChooseLanguage />
      <BirthDate birthDate={userBirthDate} />
      <GreetingsList greetings={greetings} />
    </main>
  );
}

export default function App() {
  return (
    <Provider>
      <BirthdayContent />
    </Provider>
  );
}
