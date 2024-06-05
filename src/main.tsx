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
import CreateInterviewInvite from "./routes/CreateInterviewInvite";
import EditInstitution from "./routes/EditInstitution";
import Dashboard from "./routes/Dashboard";

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
        path: "invites",
        element: <InterviewInvites />,
      },
      {
        path: "create-interview-invite",
        element: <CreateInterviewInvite />,
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
        path: "applicants",
        element: <Applicants />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </React.StrictMode>
);
