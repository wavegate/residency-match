import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";
import usePermissions from "../hooks/usePermissions";
import ProgramCreateForm from "../ui-components/ProgramCreateForm";
import { useQuery } from "@tanstack/react-query";

const client = generateClient<Schema>();
export default function Programs() {
  const { data: programs } = useQuery({
    queryKey: ["programs"],
    queryFn: async () => {
      const response = await client.models.Program.listProgramBySortTypeAndName(
        {
          sortType: "Program",
        },
        {
          selectionSet: [
            "specialty.*",
            "institution.*",
            "id",
            "name",
            "nrmpProgramCode",
          ],
          sortDirection: "ASC",
        }
      );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  const { permissions } = usePermissions();

  function deleteProgram(id: string) {
    client.models.Program.delete(
      { id },
      {
        authMode: "userPool",
      }
    );
  }
  return (
    <div className={`flex-1 overflow-y-auto`}>
      <h1>Programs</h1>
      <ul>
        {programs?.map((program) => (
          <li key={program.id}>
            <h2>{program.name}</h2>
            <div>{program.nrmpProgramCode}</div>
            <div>{program.specialty.name}</div>
            <div>{program.institution.name}</div>
            <Button onClick={() => deleteProgram(program.id)}>Delete</Button>
          </li>
        ))}
      </ul>
      {permissions.includes("Admin") && <ProgramCreateForm />}
    </div>
  );
}
