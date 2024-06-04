import SpecialtyCreateForm from "../ui-components/SpecialtyCreateForm";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Button } from "@aws-amplify/ui-react";
import usePermissions from "../hooks/usePermissions";
import { useQuery } from "@tanstack/react-query";

const client = generateClient<Schema>();
export default function Specialties() {
  const { permissions } = usePermissions();
  const { data: specialties } = useQuery({
    queryKey: ["specialties"],
    queryFn: async () => {
      const response =
        await client.models.Specialty.listSpecialtyBySortTypeAndAcgmeSpecialtyCode(
          {
            sortType: "Specialty",
          },
          {
            sortDirection: "ASC",
          }
        );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  function deleteSpecialty(id: string) {
    client.models.Specialty.delete(
      { id },
      {
        authMode: "userPool",
      }
    );
  }
  return (
    <div className={`flex-1 overflow-y-auto`}>
      <h1>Specialties</h1>
      <ul>
        {specialties?.map((specialty) => (
          <li key={specialty.id}>
            <h2>{specialty.name}</h2>
            <div>{specialty.acgmeSpecialtyCode}</div>
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
