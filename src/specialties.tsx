import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function Specialties() {
  const [specialties, setSpecialties] = useState<
    Array<Schema["Specialty"]["type"]>
  >([]);

  useEffect(() => {
    client.models.Specialty.observeQuery().subscribe({
      next: (data) => setSpecialties([...data.items]),
    });
  }, []);

  return (
    <ul>
      {specialties.map((specialty) => (
        <li key={specialty.id}>{specialty.name}</li>
      ))}
    </ul>
  );
}

export default Specialties;
