import { Link, useOutletContext } from "react-router-dom";
import AddInterviewInviteForm from "../components/AddInterviewInviteForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { useEffect } from "react";

export default function AddInterviewInvite() {
  const { setBreadcrumbs } = useOutletContext();

  useEffect(() => {
    setBreadcrumbs([
      { text: "Interview Invites", link: "/interview-invites" },
      { text: "Add Interview Invite" },
    ]);
  }, []);

  return (
    <div className={`p-[12px] flex flex-col gap-[12px]`}>
      <h1 className={`font-semibold text-[20px]`}>Add Interview Invite</h1>
      <AddInterviewInviteForm />
    </div>
  );
}
