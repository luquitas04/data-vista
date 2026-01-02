//#region imports
import { ChangeEvent } from "react";
import { clearUsersSearch, setUsersSearch } from "../../../app/store/uiSlice";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { useTranslation } from "react-i18next";
import "./usersSearchInput.scss";
//#endregion

//#region component
const UsersSearchInput = () => {
  //#region hooks
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.ui.usersSearch);
  const { t } = useTranslation();
  //#endregion

  //#region handlers
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsersSearch(event.target.value));
  };

  const handleClear = () => {
    dispatch(clearUsersSearch());
  };
  //#endregion

  return (
    <div className="input">
      <label htmlFor="users-search-input" className="inputLabel">
        {t("usersSearch.label")}
      </label>
      <div className="inputControl">
        <input
          id="users-search-input"
          className="inputField"
          type="text"
          value={search}
          onChange={handleChange}
          placeholder={t("usersSearch.placeholder")}
        />
        {search && (
          <button
            type="button"
            className="btn btnGhost"
            onClick={handleClear}
            aria-label="Limpiar búsqueda de usuarios"
          >
            {t("usersSearch.clear")}
          </button>
        )}
      </div>
    </div>
  );
};

export default UsersSearchInput;
//#endregion
