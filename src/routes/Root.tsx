import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import { Link, Outlet } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { CircleUserRound, Home, Stethoscope } from "lucide-react";
import Header from "../Header";
import usePermissions from "../hooks/usePermissions";
import Footer from "../Footer";

function Root() {
  return (
    <ThemeProvider>
      <Authenticator.Provider>
        <div className={`h-[100dvh] flex flex-col overflow-hidden`}>
          <Header />
          <div className={`flex-1 overflow-y-auto`}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </Authenticator.Provider>
    </ThemeProvider>
  );
}

export default Root;
