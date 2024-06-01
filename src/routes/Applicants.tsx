import { useAuthenticator } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import type { Schema } from "../../amplify/data/resource";
import { useEffect, useState } from "react";

const client = generateClient<Schema>();

export default function Applicants() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [userProfiles, setUserProfiles] = useState<
    Array<Schema["UserProfile"]["type"]>
  >([]);

  useEffect(() => {
    client.models.UserProfile.observeQuery().subscribe({
      next: (data) => setUserProfiles([...data.items]),
    });
  }, [user]);

  return (
    <div>
      <h1>Applicants</h1>
      <ul>
        {userProfiles.map((userProfile) => (
          <li key={userProfile.id}>
            <h2>{userProfile.codeName}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
