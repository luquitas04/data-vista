//#region imports
import { useTranslation } from "react-i18next";
import { User } from "../../../entities/user";
import "./usersTable.scss";
//#endregion

type UsersTableProps = {
  users: User[];
  selectedUserId?: number | null;
  onSelectUser: (userId: number) => void;

  search?: string;
  isLoading?: boolean;
  error?: unknown;

  emptyLabel?: string;
};

export function UsersTable(props: UsersTableProps) {
  const { t } = useTranslation();
  const {
    users,
    selectedUserId,
    onSelectUser,
    search,
    isLoading,
    error,
    emptyLabel = t("usersTable.empty"),
  } = props;
  if (isLoading) {
    return (
      <section
        aria-busy="true"
        aria-label={t("usersTable.heading")}
        className="panel panelLoading"
      >
        <div className="panelHeader">
          <div>
            <h2>{t("usersTable.heading")}</h2>
            <p className="muted">{t("usersTable.loading")}</p>
          </div>
        </div>

        <div className="skeleton skeletonTable">
          {[0, 1, 2].map((item) => (
            <div key={item} className="skeletonRow" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        role="alert"
        aria-label={t("usersTable.heading")}
        className="panel panelError"
      >
        <div className="panelHeader">
          <div className="panelBadge">!</div>
          <div>
            <h2>{t("usersTable.heading")}</h2>
            <p className="muted">{t("usersTable.error")}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!users.length) {
    return (
      <section
        aria-label={t("usersTable.heading")}
        className="panel panelEmpty"
      >
        <h2>{t("usersTable.heading")}</h2>
        {search ? (
          <p>{t("usersTable.emptySearch", { query: search })}</p>
        ) : null}
        <p>{emptyLabel}</p>
      </section>
    );
  }

  return (
    <section aria-label={t("usersTable.heading")} className="panel">
      <div className="panelHeader">
        <div className="panelTitle">
          <div>
            <h2>{t("usersTable.heading")}</h2>
            <p className="muted">{t("usersTable.subheading")}</p>
          </div>
        </div>
        {search ? (
          <span className="chip">
            <span aria-hidden="true">•</span>
            {t("usersTable.filter", { query: search })}
          </span>
        ) : null}
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th scope="col">{t("usersTable.columns.name")}</th>
              <th scope="col">{t("usersTable.columns.username")}</th>
              <th scope="col">{t("usersTable.columns.email")}</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              const isSelected = Number(selectedUserId) === Number(user.id);

              return (
                <tr
                  key={user.id}
                  onClick={() => onSelectUser(user.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      onSelectUser(user.id);
                  }}
                  tabIndex={0}
                  role="row"
                  aria-selected={isSelected ? "true" : "false"}
                  className={
                    isSelected ? "tableRow tableRowSelected" : "tableRow"
                  }
                >
                  <td>
                    <div className="tableName">{user.name}</div>
                  </td>
                  <td>@{user.username}</td>
                  <td>
                    <span className="badge">{user.email}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
