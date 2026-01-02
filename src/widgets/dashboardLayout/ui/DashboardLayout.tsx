//#region imports
import { ReactNode } from "react";
import "./dashboardLayout.scss";
//#endregion

//#region types
type DashboardLayoutProps = {
  badge?: string;
  status?: string;
  title: string;
  description?: string;
  highlights?: ReactNode;
  summaryTitle?: string;
  summary?: ReactNode;
  filters?: ReactNode;
  children: ReactNode;
};
//#endregion

//#region component
export const DashboardLayout = ({
  badge,
  status,
  title,
  description,
  highlights,
  summaryTitle,
  summary,
  filters,
  children,
}: DashboardLayoutProps) => {
  return (
    <main className="layout">
      <div className="layoutWrapper">
        <header className="layoutHeader">
          <div className="layoutTitle">
            {(badge || status) && (
              <div className="layoutMeta">
                {badge ? <span className="pill pillPrimary">{badge}</span> : null}
                {status ? <span className="pill">{status}</span> : null}
              </div>
            )}
            <div>
              <h1>{title}</h1>
              {description ? <p className="muted">{description}</p> : null}
            </div>
            {highlights ? <div className="layoutHighlights">{highlights}</div> : null}
          </div>

          {(summary || summaryTitle) && (
            <div className="layoutSummary">
              {summaryTitle ? <div className="muted">{summaryTitle}</div> : null}
              <div>{summary}</div>
            </div>
          )}
        </header>

        {filters ? <section className="card cardGhost">{filters}</section> : null}

        <div className="layoutContent">{children}</div>
      </div>
    </main>
  );
};
//#endregion
