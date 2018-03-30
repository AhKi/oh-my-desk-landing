import i18nText from 'text';

class I18n {
  static language = (() => {
    const localStorage = window.localStorage.getItem('language');

    if (localStorage) {
      return localStorage;
    }

    return ['ko-KR', 'ko'].indexOf(navigator.language) !== -1 ? 'ko' : 'en';
  })()
  static text = i18nText;

  static changeLanguage(lang) {
    I18n.language = lang;
    window.localStorage.setItem('language', lang);
  }

  static getText(target) {
    return I18n.text[target][I18n.language];
  }
}

export default I18n;
