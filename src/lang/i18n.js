import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
 
import langEn from './lang.en.json';
import langKo from './lang.kr.json';
 
const resource = {
    en: {
        translations: langEn
    },
    ko: {
        translations: langKo
    }
}
 
i18n
    .use(initReactI18next)
    .init({
        resource: resource,
        // 초기 설정 언어
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        defaultNS: 'translations',
        ns: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })
 
export default i18n;