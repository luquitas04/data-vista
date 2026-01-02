//#region imports
import { useTranslation } from "react-i18next";
import "./languageSwitcher.scss";
//#endregion

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const toggle = () => {
    const next = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(next);
  };

  return (
    <button
      type="button"
      className="languageSwitcher"
      onClick={toggle}
      aria-label="Cambiar idioma"
    >
      {i18n.language.toUpperCase()}
    </button>
  );
};
