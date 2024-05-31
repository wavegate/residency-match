import InterviewInviteCreateForm from "../ui-components/InterviewInviteCreateForm";
import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { SelectionSet, generateClient } from "aws-amplify/data";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";
import dayjs from "dayjs";

const client = generateClient<Schema>();
const selectionSet = ["id", "program.*", "inviteDateTime"] as const;
type InterviewInviteModel = SelectionSet<
  Schema["InterviewInvite"]["type"],
  typeof selectionSet
>;
export default function InterviewInvites() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [interviewInvites, setInterviewInvites] = useState<
    InterviewInviteModel[]
  >([]);

  useEffect(() => {
    client.models.InterviewInvite.observeQuery({
      selectionSet: ["id", "program.*", "inviteDateTime"],
    }).subscribe({
      next: (data) => setInterviewInvites([...data.items]),
    });
  }, [user]);

  function deleteInterviewInvite(id: string) {
    client.models.InterviewInvite.delete(
      { id },
      {
        authMode: "userPool",
      }
    );
  }
  return (
    <div>
      <h1>Interview Invites</h1>
      <ul>
        {interviewInvites.map((interviewInvite) => (
          <li key={interviewInvite.id}>
            <h2>{interviewInvite.program.name}</h2>
            <div>
              {dayjs(interviewInvite.inviteDateTime).format(
                "MM/DD/YYYY, h:mm A"
              )}
            </div>
            <Button onClick={() => deleteInterviewInvite(interviewInvite.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
      <InterviewInviteCreateForm />
    </div>
  );
}
