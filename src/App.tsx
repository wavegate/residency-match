import { Authenticator } from "@aws-amplify/ui-react";
import Inner from "./inner";
import { ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <ThemeProvider>
      <Authenticator>
        {({ signOut, user }) => <Inner user={user} signOut={signOut} />}
      </Authenticator>
    </ThemeProvider>
  );
}

export default App;
