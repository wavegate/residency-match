import { useAuthenticator } from "@aws-amplify/ui-react";
import { useQuery } from "@tanstack/react-query";
import { generateClient } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>();

export default function usePermissions() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [permissions, setPermissions] = useState<string[]>([]);

  const { data: userProfile, isLoading: loading } = useQuery({
    queryKey: ["userProfile", user?.userId],
    queryFn: async () => {
      const response =
        await client.models.UserProfile.listUserProfileByOwnerAccountAndIsProfileString(
          {
            ownerAccount: user?.userId,
          },
          {
            sortDirection: "DESC",
          }
        );
      const responseData = response.data;
      if (!responseData || responseData.length === 0) return null;
      return responseData[0];
    },
    enabled: !!user?.userId,
  });

  useEffect(() => {
    fetchAuthSession()
      .then((res) => {
        const permissionStrings = res.tokens?.accessToken?.payload[
          "cognito:groups"
        ] as string[] | undefined;
        if (permissionStrings) {
          setPermissions(permissionStrings);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [user]);
  return { permissions, user, userProfile, loading };
}
