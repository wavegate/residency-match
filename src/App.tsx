import { Authenticator } from "@aws-amplify/ui-react";
import Inner from "./inner";

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => <Inner user={user} />}
    </Authenticator>
  );
}

export default App;
