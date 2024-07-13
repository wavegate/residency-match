import { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function Dashboard() {
  const { setBreadcrumbs } = useOutletContext();
  useEffect(() => {
    setBreadcrumbs([{ text: "Dashboard" }]);
  }, []);
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid grid-cols-2 gap-2">
        <Link to="/interview-invites" className={`underline`}>
          Interview Invites
        </Link>
        <Link to="/programs" className={`underline`}>
          Program Details
        </Link>
        <Link to="/applicants" className={`underline`}>
          Applicant Stats
        </Link>
        <Link to="/interview-logistics" className={`underline`}>
          Interview Logistics
        </Link>
        <Link to="/interview-impressions" className={`underline`}>
          Interview Impressions
        </Link>
        <Link to="/rank-lists" className={`underline`}>
          Rank Lists
        </Link>
        <Link to="/x-vs-y" className={`underline`}>
          X vs Y
        </Link>
        <Link to="/interview-rejections" className={`underline`}>
          Interview Rejections
        </Link>
        <Link to="/interview-withdrawals" className={`underline`}>
          Interview Withdrawals
        </Link>
        <Link to="/chat" className={`underline`}>
          Chat
        </Link>
        <Link to="/loi-discussion" className={`underline`}>
          LOI Discussion
        </Link>
        <Link to="/m4-intern-impressions" className={`underline`}>
          M4 & Intern Impressions
        </Link>
        <Link to="/cities" className={`underline`}>
          Cities
        </Link>
        <Link to="/tier-list" className={`underline`}>
          Tier List
        </Link>
        <Link to="/fellowship-match" className={`underline`}>
          Fellowship Match
        </Link>
        <Link to="/pstp" className={`underline`}>
          PSTP
        </Link>
      </div>
    </main>
  );
}
