import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

function UserProfiles() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [userProfiles, setUserProfiles] = useState<
    Array<Schema["UserProfile"]["type"]>
  >([]);

  useEffect(() => {
    client.models.UserProfile.observeQuery().subscribe({
      next: (data) => setUserProfiles([...data.items]),
    });
  }, [user]);

  function deleteUserProfile(id: string) {
    client.models.UserProfile.delete(
      { id },
      {
        authMode: "userPool",
      }
    );
  }

  return (
    <div>
      <h1>User Profiles</h1>
      <ul>
        {userProfiles.map((userProfile) => (
          <li key={userProfile.id}>
            <h2>{userProfile.codeName}</h2>
            <Button onClick={() => deleteUserProfile(userProfile.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfiles;
