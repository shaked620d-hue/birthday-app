export async function translateText(text, targetLang, sourceLang = "he"){
    if (!text || sourceLang === targetLang ){
        return text;
}

const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    text
  )}&langpair=${sourceLang}|${targetLang}`;

  const response = await fetch(url);
  if(!response.ok) {
    throw new Error("Failed to fetch translation");
  }

  const data = await response.json();
  return data?.responseData?.translatedText || text;
}