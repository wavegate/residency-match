import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./components/ui/navigation-menu";
import {
  CalendarFold,
  CircleUserRound,
  Home,
  Hospital,
  Stethoscope,
} from "lucide-react";
import usePermissions from "./hooks/usePermissions";
import "./styles/Footer.css";

export default function Footer() {
  const { permissions } = usePermissions();
  return (
    <footer className={`bg-[#2B4C6D] fixed bottom-0 w-full z-10`}>
      <NavigationMenu className={`text-[11px] w-full max-w-full nav-menu py-1`}>
        <NavigationMenuList className={`grid grid-cols-4 w-full`}>
          <NavigationMenuItem>
            <Link
              to="/"
              className={`text-[#F9FEFF] flex flex-col items-center`}
            >
              <Home strokeWidth={1.5} />
              <div className={`text-center`}>Home</div>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="invites"
              className={`text-zinc-200 flex flex-col items-center`}
            >
              <CalendarFold strokeWidth={1.5} />
              <div className={``}>IVs</div>
            </Link>
          </NavigationMenuItem>
          {/* {permissions.includes("Admin") && (
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
          )} */}
          <NavigationMenuItem>
            <Link
              to="programs"
              className={`text-zinc-200 flex flex-col items-center`}
            >
              <Hospital strokeWidth={1.5} />
              <div className={``}>Programs</div>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="applicants"
              className={`text-zinc-200 flex flex-col items-center`}
            >
              <CircleUserRound strokeWidth={1.5} />
              <div className={``}>Applicants</div>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </footer>
  );
}
