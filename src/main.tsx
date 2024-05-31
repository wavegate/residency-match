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

Amplify.configure(outputs);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <InterviewInvites />,
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
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
