import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { AuthUser } from "aws-amplify/auth";
import { AuthEventData } from "@aws-amplify/ui";
import Institutions from "./institutions";
import SpecialtyCreateForm from "./ui-components/SpecialtyCreateForm";
import InterviewInviteCreateForm from "./ui-components/InterviewInviteCreateForm";
import ProgramCreateForm from "./ui-components/ProgramCreateForm";
import UserProfileCreateForm from "./ui-components/UserProfileCreateForm";
import InstitutionCreateForm from "./ui-components/InstitutionCreateForm";
import Programs from "./programs";
import InterviewInvites from "./interviewInvites";
import UserProfiles from "./userProfiles";
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
