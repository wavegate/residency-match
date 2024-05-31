import { AuthEventData } from "@aws-amplify/ui";
import { Link } from "react-router-dom";

interface InnerProps {
  signOut: ((data?: AuthEventData | undefined) => void) | undefined;
}

function Inner({ signOut }: InnerProps) {
  return (
    <main className={`w-[200px]`}>
      <Link to="dashboard">Dashboard</Link>
      <button onClick={signOut}>Sign out</button>
      {/* <Specialties />
      <SpecialtyCreateForm />
      <Institutions />
      <InstitutionCreateForm />
      <Programs />
      <ProgramCreateForm />
      <InterviewInvites />
      <InterviewInviteCreateForm />
      <UserProfiles />
      <UserProfileCreateForm /> */}
    </main>
  );
}

export default Inner;
