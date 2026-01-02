
//#region imports
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DashboardLayout } from "../../../widgets/dashboardLayout";
import "./home.scss";
//#endregion

export const Home = () => {
  const { t } = useTranslation();

  return (
    <DashboardLayout
      badge={t("home.badge")}
      status={t("dashboard.status")}
      title={t("home.title")}
      description={t("home.subtitle")}
      highlights={
        <ul>
          <li>{t("home.highlights.fast")}</li>
          <li>{t("home.highlights.filters")}</li>
          <li>{t("home.highlights.updates")}</li>
        </ul>
      }
    >
      <section className="card hero">
        <div className="heroBody">
          <p className="muted">{t("home.subtitle")}</p>
          <Link to="/dashboard" className="btn btnPrimary">
            {t("home.cta")}
          </Link>
        </div>
      </section>
    </DashboardLayout>
  );
};
