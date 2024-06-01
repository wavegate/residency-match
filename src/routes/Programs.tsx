import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";
import usePermissions from "../hooks/usePermissions";
import ProgramCreateForm from "../ui-components/ProgramCreateForm";

const client = generateClient<Schema>();
export default function Programs() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [programs, setPrograms] = useState<Array<Schema["Program"]["type"]>>(
    []
  );

  const { permissions } = usePermissions();

  useEffect(() => {
    client.models.Program.observeQuery().subscribe({
      next: (data) => setPrograms([...data.items]),
    });
  }, [user]);

  function deleteProgram(id: string) {
    client.models.Program.delete(
      { id },
      {
        authMode: "userPool",
      }
    );
  }
  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.name}</h2>
            <Button onClick={() => deleteProgram(program.id)}>Delete</Button>
          </li>
        ))}
      </ul>
      {permissions.includes("Admin") && <ProgramCreateForm />}
    </div>
  );
}
