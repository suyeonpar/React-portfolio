import React from "react";
import {useTranslation} from "react-i18next";
import i18next from "../lang/i18n";

function Lang({changelanguageToKo,changelanguageToEn}){
    const {t} = useTranslation();

    const clickHandler = (lang) =>{
        i18next.changeLanguage(lang);
    }

    return(
        <>
        <div>
            <button onClick={changelanguageToKo}>KR</button>
            <button onClick={changelanguageToEn}>EN</button>
            <p>{t("hellow")}</p>
            <p>{t("name")}</p>
        </div>
        </>
    );
}

export default Lang;