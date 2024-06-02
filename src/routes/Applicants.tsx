import { useAuthenticator } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import type { Schema } from "../../amplify/data/resource";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import usePermissions from "../hooks/usePermissions";
import UserProfileCreateForm from "../ui-components/UserProfileCreateForm";

const client = generateClient<Schema>();

export default function Applicants() {
  const { data: userProfiles } = useQuery({
    queryKey: ["userProfiles"],
    queryFn: async () => {
      const response = await client.models.UserProfile.list();
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  const { permissions } = usePermissions();

  return (
    <div className={`flex-1 overflow-y-auto`}>
      <h1>Applicants</h1>
      <ul>
        {userProfiles?.map((userProfile) => (
          <li key={userProfile.id}>
            <h2>{userProfile.codeName ?? "anonymous"}</h2>
          </li>
        ))}
      </ul>

      {permissions.includes("Admin") && <UserProfileCreateForm />}
    </div>
  );
}
