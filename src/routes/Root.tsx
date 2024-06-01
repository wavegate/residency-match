import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Toaster } from "../components/ui/toaster";

function Root() {
  return (
    <ThemeProvider>
      <Authenticator.Provider>
        <div className={`h-[100dvh] flex flex-col overflow-hidden`}>
          <Header />
          <Outlet />
          <Toaster />
          <Footer />
        </div>
      </Authenticator.Provider>
    </ThemeProvider>
  );
}

export default Root;
