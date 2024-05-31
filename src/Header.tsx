import { useAuthenticator } from "@aws-amplify/ui-react";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import dayjs from "dayjs";
import { Plus, Heart, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { signOut } from "aws-amplify/auth";

export default function Header() {
  const { user } = useAuthenticator((context) => [context.user]);
  return (
    <>
      <header
        className={`h-[120px] bg-sky-800 flex flex-col w-full p-[12px] text-zinc-300 `}
      >
        <div className={`flex justify-between items-center gap-[12px]`}>
          <div className={`flex items-center gap-[12px]`}>
            <div
              className={`text-slate-900 rounded-full w-[32px] h-[32px] flex items-center justify-center bg-zinc-100`}
            >
              <Link to="create-interview-invite">
                <Plus />
              </Link>
            </div>
            <Heart />
          </div>
          <div>
            <Languages />
          </div>
        </div>
        <div className={`grid grid-cols-[1fr_88px_1fr] `}>
          <div className={`min-w-0 truncate`}>
            {user?.signInDetails?.loginId}
            <Link to="auth">Sign in</Link>
          </div>
          <div className={`px-[12px]`}>
            <Avatar className={`w-[64px] h-[64px]`}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <div>{dayjs().format("MMMM D, h:mm A")}</div>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        </div>
      </header>
    </>
  );
}
