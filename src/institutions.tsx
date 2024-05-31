import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

function Institutions() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [institutions, setInstitutions] = useState<
    Array<Schema["Institution"]["type"]>
  >([]);

  useEffect(() => {
    client.models.Institution.observeQuery().subscribe({
      next: (data) => setInstitutions([...data.items]),
    });
  }, [user]);

  return (
    <div>
      <h1>Institutions</h1>
      <ul>
        {institutions.map((institution) => (
          <li key={institution.id}>{institution.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Institutions;
