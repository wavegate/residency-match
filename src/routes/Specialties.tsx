import SpecialtyCreateForm from "../ui-components/SpecialtyCreateForm";
import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";
import usePermissions from "../hooks/usePermissions";

const client = generateClient<Schema>();
export default function Specialties() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [specialties, setSpecialties] = useState<
    Array<Schema["Specialty"]["type"]>
  >([]);

  const { permissions } = usePermissions();

  useEffect(() => {
    client.models.Specialty.observeQuery().subscribe({
      next: (data) => setSpecialties([...data.items]),
    });
  }, [user]);

  function deleteSpecialty(id: string) {
    client.models.Specialty.delete(
      { id },
      {
        authMode: "userPool",
      }
    );
  }
  return (
    <div>
      <h1>Specialties</h1>
      <ul>
        {specialties.map((specialty) => (
          <li key={specialty.id}>
            <h2>{specialty.name}</h2>
            <Button onClick={() => deleteSpecialty(specialty.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
      {permissions.includes("Admin") && <SpecialtyCreateForm />}
    </div>
  );
}
