import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/toaster";
import Base from "../components/Base";

function Root() {
  return (
    <ThemeProvider>
      <Authenticator.Provider>
        {/* <div className={`pb-[48px] pt-[48px]`}>
          <Header />
          <Outlet />
          <Toaster />
          <Footer />
        </div> */}
        <Base />
      </Authenticator.Provider>
    </ThemeProvider>
  );
}

export default Root;
