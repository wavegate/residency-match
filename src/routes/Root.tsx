import { Authenticator } from "@aws-amplify/ui-react";
import Inner from "../inner";
import { ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Link, Outlet } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Heart, Home, Languages, Plus, Stethoscope } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import dayjs from "dayjs";

function Root() {
  return (
    <ThemeProvider>
      <Authenticator>
        {({ signOut, user }) => (
          <Authenticator.Provider>
            <Inner signOut={signOut} />
            <header
              className={`h-[160px] bg-sky-800 flex flex-col w-full p-[12px] text-zinc-300 `}
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
                </div>
                <div className={`px-[12px]`}>
                  <Avatar className={`w-[64px] h-[64px]`}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div>{dayjs().format("MMMM D, h:mm A")}</div>
              </div>
            </header>
            <Outlet />
            <footer
              className={`fixed bottom-0 h-[120px] bg-sky-800 flex items-center px-[12px]`}
            >
              <NavigationMenu>
                <NavigationMenuList className={`flex items-center gap-[12px]`}>
                  <NavigationMenuItem>
                    <Link
                      to="/"
                      className={`text-zinc-300 flex flex-col items-center`}
                    >
                      <div
                        className={`rounded-full w-[48px] h-[48px] bg-sky-950 flex items-center justify-center`}
                      >
                        <Home />
                      </div>
                      <div className={``}>Home</div>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      to="specialties"
                      className={`text-zinc-300 flex flex-col items-center`}
                    >
                      <div
                        className={`rounded-full w-[48px] h-[48px] bg-sky-950 flex items-center justify-center`}
                      >
                        <Stethoscope />
                      </div>
                      <div className={``}>Specialties</div>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="institutions">Institutions</Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="programs">Programs</Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="applicants">Applicants</Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </footer>
          </Authenticator.Provider>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}

export default Root;
