import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";
import usePermissions from "../hooks/usePermissions";
import InstitutionCreateForm from "../ui-components/InstitutionCreateForm";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const client = generateClient<Schema>();
export default function Institutions() {
  const { permissions } = usePermissions();
  const { data: institutions } = useQuery({
    queryKey: ["institutions"],
    queryFn: async () => {
      const response =
        await client.models.Institution.listInstitutionBySortTypeAndName(
          {
            sortType: "Institution",
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

  function deleteInstitution(id: string) {
    client.models.Institution.delete(
      { id },
      {
        authMode: "userPool",
      }
    );
  }
  const navigate = useNavigate();
  return (
    <div className={`flex-1 overflow-y-auto`}>
      <h1>Institutions</h1>
      <ul>
        {institutions?.map((institution) => (
          <li key={institution.id}>
            <h2>{institution.name}</h2>
            <div>{institution.institutionCode}</div>
            <Button onClick={() => deleteInstitution(institution.id)}>
              Delete
            </Button>
            <Button onClick={() => navigate(`edit/${institution.id}`)}>
              Edit
            </Button>
          </li>
        ))}
      </ul>
      {permissions.includes("Admin") && <InstitutionCreateForm />}
    </div>
  );
}
