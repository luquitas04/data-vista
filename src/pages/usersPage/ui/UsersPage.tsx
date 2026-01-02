//#region imports
import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { setSelectedUserId } from "../../../app/store/uiSlice";
import { UsersSearchInput, filterUsers } from "../../../features/filterUsers";
import { UsersTable } from "../../../widgets/usersTable";
import { useGetUsersQuery } from "../../../entities/user";
import { UserPosts } from "../../../widgets/postTable";
import { useGetPostsByUserQuery } from "../../../entities/post";
import { DashboardLayout } from "../../../widgets/dashboardLayout";
import { useTranslation } from "react-i18next";
import "./usersPage.scss";
//#endregion

export const UsersPage = () => {
  //#region states
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.ui.usersSearch);
  const selectedUserId = useAppSelector((state) => state.ui.selectedUserId);
  const { t } = useTranslation();
  //#endregion

  //#region users
  const { users, isLoading, error } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data, isLoading, error }) => ({
      users: data ?? [],
      isLoading,
      error,
    }),
  });

  const filteredUser = useMemo(
    () => filterUsers(users, search),
    [users, search]
  );
  //#endregion

  //#region Handlers
  const handleSelectUser = (userId: number) =>
    dispatch(setSelectedUserId(userId));
  //#endregion

  //#region posts
  const userId = selectedUserId ?? 0;

  const {
    posts,
    isLoading: postLoading,
    error: postError,
  } = useGetPostsByUserQuery(userId, {
    skip: !selectedUserId,
    selectFromResult: ({ data, isLoading, error }) => ({
      posts: data ?? [],
      isLoading,
      error,
    }),
  });
  //#endregion

  return (
    <DashboardLayout
      badge={t("dashboard.badge")}
      status={t("dashboard.status")}
      title={t("usersPage.title")}
      description={t("usersPage.description")}
      highlights={
        <ul>
          <li>{t("usersPage.highlights.realtime")}</li>
          <li>{t("usersPage.highlights.smartFilters")}</li>
        </ul>
      }
      summaryTitle={t("usersPage.summaryTitle")}
      summary={
        <>
          <p>{t("usersPage.summary.total", { count: users.length ?? 0 })}</p>
          <p>
            {t("usersPage.summary.filtered", {
              count: search ? filteredUser.length : 0,
            })}
          </p>
        </>
      }
      filters={
        <div className="filters">
          <div className="filtersHeader">
            <div>
              <h2>{t("usersPage.filters.title")}</h2>
              <p className="muted">{t("usersPage.filters.description")}</p>
            </div>
          </div>

          <div className="filtersInput">
            <UsersSearchInput />
          </div>
        </div>
      }
    >
      <section>
        <UsersTable
          users={filteredUser}
          selectedUserId={selectedUserId}
          onSelectUser={handleSelectUser}
          search={search}
          isLoading={isLoading}
          error={error}
        />
      </section>

      <section>
        <UserPosts
          userId={selectedUserId}
          posts={posts}
          isLoading={postLoading}
          error={postError}
        />
      </section>
    </DashboardLayout>
  );
};
