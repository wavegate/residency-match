import { useAuthenticator } from "@aws-amplify/ui-react";
import { Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { signOut } from "aws-amplify/auth";
import { Button } from "./components/ui/button";
import usePermissions from "./hooks/usePermissions";

export default function Header() {
  const { user, userProfile } = usePermissions();

  return (
    <>
      <header
        className={`bg-[#2B4C6D] flex justify-between w-full py-3 px-3 text-[#F9FEFF] fixed top-0 z-10`}
      >
        <Link to={`/`} className={`flex text-[16px] font-semibold gap-[6px]`}>
          <Stethoscope />
          <div>AppName</div>
        </Link>

        <div className={`flex gap-[6px]`}>
          {user === undefined && <Link to="auth">Sign in</Link>}
          {user && (
            <Link to={`profile/${userProfile?.id}`}>
              <Button className={`px-2 py-[2px] h-auto text-base`}>
                Profile
              </Button>
            </Link>
          )}
          {user && (
            <Button
              onClick={() => signOut()}
              className={`px-2 py-[2px] h-auto text-base bg-transparent`}
            >
              Sign Out
            </Button>
          )}
        </div>
      </header>
    </>
  );
}
