import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./components/ui/navigation-menu";
import { CircleUserRound, Home, Stethoscope } from "lucide-react";
import usePermissions from "./hooks/usePermissions";

export default function Footer() {
  const { permissions } = usePermissions();
  return (
    <footer className={`h-[90px] bg-sky-800 flex items-center px-[12px]`}>
      <NavigationMenu>
        <NavigationMenuList className={`flex items-center gap-[12px]`}>
          <NavigationMenuItem>
            <Link to="/" className={`text-zinc-200 flex flex-col items-center`}>
              <div
                className={`rounded-full w-[48px] h-[48px] bg-sky-950 flex items-center justify-center`}
              >
                <Home />
              </div>
              <div className={`text-center`}>IVs</div>
            </Link>
          </NavigationMenuItem>
          {permissions.includes("Admin") && (
            <NavigationMenuItem>
              <Link
                to="specialties"
                className={`text-zinc-200 flex flex-col items-center`}
              >
                <div
                  className={`rounded-full w-[48px] h-[48px] bg-sky-950 flex items-center justify-center`}
                >
                  <Stethoscope />
                </div>
                <div className={``}>Specialties</div>
              </Link>
            </NavigationMenuItem>
          )}
          {permissions.includes("Admin") && (
            <NavigationMenuItem>
              <Link
                to="institutions"
                className={`text-zinc-200 flex flex-col items-center`}
              >
                <div
                  className={`rounded-full w-[48px] h-[48px] bg-sky-950 flex items-center justify-center`}
                >
                  <Stethoscope />
                </div>
                <div className={``}>Institutions</div>
              </Link>
            </NavigationMenuItem>
          )}
          <NavigationMenuItem>
            <Link
              to="programs"
              className={`text-zinc-200 flex flex-col items-center`}
            >
              <div
                className={`rounded-full w-[48px] h-[48px] bg-sky-950 flex items-center justify-center`}
              >
                <Stethoscope />
              </div>
              <div className={``}>Programs</div>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="applicants"
              className={`text-zinc-200 flex flex-col items-center`}
            >
              <div
                className={`rounded-full w-[48px] h-[48px] bg-sky-950 flex items-center justify-center`}
              >
                <CircleUserRound />
              </div>
              <div className={``}>Applicants</div>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </footer>
  );
}
