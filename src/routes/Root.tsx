import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Toaster } from "../components/ui/toaster";

function Root() {
  return (
    <ThemeProvider>
      <Authenticator.Provider>
        <div className={`pb-[48px] pt-[52px]`}>
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
