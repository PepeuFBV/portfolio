let currentLanguage = 'en'; // TODO: update to get on localStorage/cookies

function setLanguage(language: string) {
  if (language === 'en' || language === 'pt') {
    currentLanguage = language;
  } else {
    throw new Error('Invalid language');
  }
}

function getLanguage() {
  return currentLanguage;
}

export { setLanguage, getLanguage, currentLanguage }
