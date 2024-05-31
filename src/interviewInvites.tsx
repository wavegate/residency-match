import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

function InterviewInvites() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [interviewInvites, setInterviewInvites] = useState<
    Array<Schema["InterviewInvite"]["type"]>
  >([]);

  useEffect(() => {
    client.models.InterviewInvite.observeQuery().subscribe({
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
            <h2>Invite at {interviewInvite.program.name}</h2>
            <Button onClick={() => deleteInterviewInvite(interviewInvite.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InterviewInvites;
