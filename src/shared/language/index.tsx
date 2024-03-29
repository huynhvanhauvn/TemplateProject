import i18next from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import {VI, EN} from './language';

const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: (cb: (locale: string) => void) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: EN,
      vi: VI,
    },
  });

export function Tr(path: any) {
  const {t} = useTranslation();
  return t(path);
}
export function changeLanguage(alias: any) {
  i18next.changeLanguage(alias);
}
export default i18next;
