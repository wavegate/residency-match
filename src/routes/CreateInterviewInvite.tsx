import { Link } from "react-router-dom";
import CreateInterviewInviteForm from "../components/CreateInterviewInviteForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import InterviewInviteCreateForm from "../ui-components/InterviewInviteCreateForm";

export default function CreateInterviewInvite() {
  return (
    <div className={`p-[12px] flex flex-col gap-[12px]`}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/invites">
              <BreadcrumbLink>Interview Invites</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Share Interview Invite</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className={`font-semibold text-[20px]`}>Share Interview Invite</h1>
      <CreateInterviewInviteForm />
    </div>
  );
}
