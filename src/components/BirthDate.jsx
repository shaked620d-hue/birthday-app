function formatDate(data){
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() +1).padStart(2, "0");
  const year = data.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function BirthDate({ birtDate })
{
  const currentYear = new Date().getFullYear();
  const age = currentYear - birtDate.getFullYear();
  const formattedDate = formatDate(birtDate);

  return (
    <p>
      מזל טוב! אתה בן {age}. תאריך הלידה שלך הוא: {formattedDate}.
    </p>
  )
}