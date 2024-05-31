import { useAuthenticator } from "@aws-amplify/ui-react";
import { fetchAuthSession } from "aws-amplify/auth";
import { useEffect, useState } from "react";

export default function usePermissions() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [permissions, setPermissions] = useState<string[]>([]);
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
  return permissions;
}
