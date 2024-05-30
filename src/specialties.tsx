import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

function Specialties() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [specialties, setSpecialties] = useState<
    Array<Schema["Specialty"]["type"]>
  >([]);

  useEffect(() => {
    client.models.Specialty.observeQuery().subscribe({
      next: (data) => setSpecialties([...data.items]),
    });
  }, [user]);

  return (
    <ul>
      {specialties.map((specialty) => (
        <li key={specialty.id}>{specialty.name}</li>
      ))}
    </ul>
  );
}

export default Specialties;
