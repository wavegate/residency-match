import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";
import usePermissions from "../hooks/usePermissions";
import InstitutionCreateForm from "../ui-components/InstitutionCreateForm";

const client = generateClient<Schema>();
export default function Institutions() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [institutions, setInstitutions] = useState<
    Array<Schema["Institution"]["type"]>
  >([]);

  const { permissions } = usePermissions();

  useEffect(() => {
    client.models.Institution.observeQuery().subscribe({
      next: (data) => setInstitutions([...data.items]),
    });
  }, [user]);

  function deleteInstitution(id: string) {
    client.models.Institution.delete(
      { id },
      {
        authMode: "userPool",
      }
    );
  }
  return (
    <div>
      <h1>Institutions</h1>
      <ul>
        {institutions.map((institution) => (
          <li key={institution.id}>
            <h2>{institution.name}</h2>
            <Button onClick={() => deleteInstitution(institution.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
      {permissions.includes("Admin") && <InstitutionCreateForm />}
    </div>
  );
}
