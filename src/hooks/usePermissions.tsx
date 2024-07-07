import { useAuthenticator } from "@aws-amplify/ui-react";
import { useQuery } from "@tanstack/react-query";

import { fetchAuthSession } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import client from "../utils/client";

export default function usePermissions() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [permissions, setPermissions] = useState<string[]>([]);

  const { data: userProfile, isLoading: loading } = useQuery({
    queryKey: ["userProfile", "currentUser", user?.userId],
    queryFn: async () => {
      try {
        const response =
          await client.models.UserProfile.listUserProfileByOwnerAccountAndIsProfileString(
            {
              ownerAccount: user?.userId,
            },
            {
              selectionSet: [
                "id",
                "username",
                "userEmail",
                "step1ScorePass",
                "location",
                "step1Score",
                "step2Score",
                "comlex1ScorePass",
                "comlex2Score",
                "visaRequired",
                "yearOfGraduation",
                "greenCard",
                "graduateType",
                "img",
                "medicalDegree",
              ],
              sortDirection: "DESC",
            }
          );
        const responseData = response.data;
        if (!responseData || responseData.length === 0) return null;
        return responseData[0];
      } catch (e) {
        console.log(e);
      }
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
