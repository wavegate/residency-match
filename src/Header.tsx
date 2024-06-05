import { useAuthenticator } from "@aws-amplify/ui-react";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { Plus, Heart, Languages, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { signOut } from "aws-amplify/auth";
import { Button } from "./components/ui/button";

export default function Header() {
  const { user } = useAuthenticator((context) => [context.user]);
  return (
    <>
      <header
        className={`bg-[#2B4C6D] flex justify-between w-full py-3 px-3 text-[#F9FEFF] fixed top-0 z-10`}
      >
        <div className={`flex text-[16px] font-semibold gap-[6px]`}>
          <Stethoscope />
          <div>BrandName</div>
        </div>

        <div className={`flex gap-[6px]`}>
          {user === undefined && <Link to="auth">Sign in</Link>}
          {user && (
            <Link to="profile">
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
