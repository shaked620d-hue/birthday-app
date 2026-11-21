import React from 'react'
import BirthDate from './components/BirthDate';
import GreetingsList from './components/GreetingsList';
export default function App() {
  const userBirthDate = new Date(2015, 10 ,20);
  const greetings = [
    "יום הולדת שמח! מאחלים לך שנה נפלאה.",
    "הרבה בריאות, אושר והצלחה בהמשך!",
  ]
  return (
    <main dir="rtl">
      <BirthDate birtDate={userBirthDate}/>
      <GreetingsList greetings={greetings}/>
    </main>
  )
}
