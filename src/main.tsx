import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/Root";
import Specialties from "./routes/Specialties";
import Auth from "./routes/Auth";
import "@aws-amplify/ui-react/styles.css";
import Institutions from "./routes/Institutions";
import Programs from "./routes/Programs";
import InterviewInvites from "./routes/InterviewInvites";
import Applicants from "./routes/Applicants";
import Profile from "./routes/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AddInterviewInvite2 from "./routes/AddInterviewInvite2";
import EditInstitution from "./routes/EditInstitution";
import Dashboard from "./routes/Dashboard";
import { TooltipProvider } from "./components/ui/tooltip";
import CreateProfile from "./routes/CreateProfile";
import Program from "./routes/Program";
import EditProfileForm from "./routes/EditProfileForm";
import InterviewLogistics from "./routes/InterviewLogistics";
import InterviewImpressions from "./routes/InterviewImpressions";
import RankLists from "./routes/RankLists";
import XvsY from "./routes/XvsY";
import InterviewRejections from "./routes/InterviewRejections";
import InterviewWithdrawals from "./routes/InterviewWithdrawals";
import Chat from "./routes/Chat";
import LOIDiscussion from "./routes/LOIDiscussion";
import M4InternImpressions from "./routes/M4InternImpressions";
import Cities from "./routes/Cities";
import TierList from "./routes/TierList";
import FellowshipMatch from "./routes/FellowshipMatch";
import PSTP from "./routes/PSTP";
import CreateInterviewLogistics from "./routes/CreateInterviewLogistics";
import CreateRankList from "./routes/CreateRankList";
import CreateComparison from "./routes/CreateComparison";
import Comparison from "./routes/Comparison";
import CreateCityUserInput from "./routes/CreateCityUserInput";
import InterviewInvite from "./routes/InterviewInvite";

Amplify.configure(outputs);

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "interview-invites",
        element: <InterviewInvites />,
      },
      {
        path: "interview-invites/:id",
        element: <AddInterviewInvite2 action="view" />,
      },
      {
        path: "interview-invites/:id/edit",
        element: <AddInterviewInvite2 action="edit" />,
      },
      {
        path: "interview-invites/add",
        element: <AddInterviewInvite2 action="add" />,
      },
      {
        path: "create-interview-logistics",
        element: <CreateInterviewLogistics />,
      },
      {
        path: "create-rank-list",
        element: <CreateRankList />,
      },
      {
        path: "create-comparison",
        element: <CreateComparison />,
      },
      {
        path: "create-city-user-input",
        element: <CreateCityUserInput />,
      },
      {
        path: "institutions/edit/:id",
        element: <EditInstitution />,
      },
      {
        path: "specialties",
        element: <Specialties />,
      },
      {
        path: "institutions",
        element: <Institutions />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "program/:id",
        element: <Program />,
      },
      {
        path: "applicants",
        element: <Applicants />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "profile/edit/:id",
        element: <EditProfileForm />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "interview-logistics",
        element: <InterviewLogistics />,
      },
      {
        path: "interview-impressions",
        element: <InterviewImpressions />,
      },
      {
        path: "rank-lists",
        element: <RankLists />,
      },
      {
        path: "x-vs-y",
        element: <XvsY />,
      },
      {
        path: "x-vs-y/:id",
        element: <Comparison />,
      },
      {
        path: "interview-rejections",
        element: <InterviewRejections />,
      },
      {
        path: "interview-withdrawals",
        element: <InterviewWithdrawals />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "loi-discussion",
        element: <LOIDiscussion />,
      },
      {
        path: "m4-intern-impressions",
        element: <M4InternImpressions />,
      },
      {
        path: "cities",
        element: <Cities />,
      },
      {
        path: "tier-list",
        element: <TierList />,
      },
      {
        path: "fellowship-match",
        element: <FellowshipMatch />,
      },
      {
        path: "pstp",
        element: <PSTP />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RouterProvider router={router} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
