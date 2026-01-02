//#region imports
import { Post } from "../../../entities/post";
import { useTranslation } from "react-i18next";
import "./usersPosts.scss";
//#endregion

//#region types
type IUserPostsProps = {
  userId?: number | null;
  posts: Post[];
  isLoading?: boolean;
  error?: unknown;
};
//#endregion

//#region component
export function UserPosts({
  userId,
  posts,
  isLoading,
  error,
}: IUserPostsProps) {
  const { t } = useTranslation();

  if (!userId) {
    return (
      <section className="panel panelEmpty">
        <p>{t("userPosts.selectPrompt")}</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section aria-busy="true" className="panel panelLoading">
        <p className="muted">{t("userPosts.loading")}</p>
        <div className="skeleton skeletonList">
          {[0, 1, 2].map((item) => (
            <div key={item} aria-hidden="true" className="skeletonRow">
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
      <section role="alert" className="panel panelError">
        <p>{t("userPosts.error")}</p>
      </section>
    );
  }

  if (!posts.length) {
    return (
      <section className="panel panelEmpty">
        <p>{t("userPosts.empty")}</p>
      </section>
    );
  }

  return (
    <section className="panel">
      <div className="panelHeader">
        <h3>{t("userPosts.title", { id: userId })}</h3>
      </div>

      <ul className="posts">
        {posts.map((p) => (
          <li key={p.id} className="postsItem">
            <strong>{p.title}</strong>
            <p className="muted">{p.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
//#endregion
