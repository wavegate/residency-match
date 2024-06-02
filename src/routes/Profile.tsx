import { generateClient } from "aws-amplify/api";
import UserProfileCreateForm from "../ui-components/UserProfileCreateForm";
import { Schema } from "../../amplify/data/resource";
import { useEffect, useState } from "react";
import usePermissions from "../hooks/usePermissions";
import UserProfileUpdateForm from "../ui-components/UserProfileUpdateForm";

const client = generateClient<Schema>();

export default function Profile() {
  const [userProfile, setUserProfile] =
    useState<Schema["UserProfile"]["type"]>();

  const { user } = usePermissions();

  useEffect(() => {
    client.models.UserProfile.observeQuery({
      filter: { owner: { contains: user?.userId } },
    }).subscribe({
      next: (data) => setUserProfile([...data.items]?.[0]),
    });
  }, [user?.userId]);

  return (
    <div className={`p-[12px] flex-1 overflow-y-auto`}>
      <h1>Profile</h1>
      {userProfile ? (
        <UserProfileUpdateForm id={userProfile.id} isProfile />
      ) : (
        <UserProfileCreateForm isProfile />
      )}
    </div>
  );
}
