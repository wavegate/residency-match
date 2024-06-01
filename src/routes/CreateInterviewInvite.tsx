import InterviewInviteCreateForm from "../ui-components/InterviewInviteCreateForm";

export default function CreateInterviewInvite() {
  return (
    <div className={`flex-1 overflow-y-auto p-[12px]`}>
      <h1 className={`text-[18px] font-semibold`}>Add Interview Invitation</h1>
      <InterviewInviteCreateForm />
    </div>
  );
}
