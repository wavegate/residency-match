import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return <Authenticator />;
}
