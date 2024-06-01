import InterviewInviteCreateForm from "../ui-components/InterviewInviteCreateForm";
import { useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";

const client = generateClient<Schema>();

export default function InterviewInvites() {
  const { user } = useAuthenticator((context) => [context.user]);

  const { data: interviewInvites } = useQuery({
    queryKey: ["interviewInvites"],
    queryFn: async () => {
      const response = await client.models.InterviewInvite.list({
        selectionSet: ["id", "program.*", "inviteDateTime"],
      });
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  useEffect(() => {
    client.models.InterviewInvite.list({
      selectionSet: ["id", "program.*", "inviteDateTime"],
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
    <div className={`p-[12px]`}>
      <h1>Interview Invites</h1>
      <ul>
        {interviewInvites?.map((interviewInvite) => (
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
