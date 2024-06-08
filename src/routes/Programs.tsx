import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from "@aws-amplify/ui-react";
import usePermissions from "../hooks/usePermissions";
import ProgramCreateForm from "../ui-components/ProgramCreateForm";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { useDebounce } from "@uidotdev/usehooks";

const client = generateClient<Schema>();
export default function Programs() {
  // const [search, setSearch] = useState("");
  // const debouncedSearch = useDebounce(search, 500);
  // const { data: institutions } = useQuery({
  //   queryKey: ["institutionsSearch", debouncedSearch],
  //   queryFn: async () => {
  //     const response = await client.models.Institution.list({
  //       filter: {
  //         name: {
  //           contains: debouncedSearch,
  //         },
  //       },
  //     });
  //     const responseData = response.data;
  //     if (!responseData) return null;
  //     return responseData;
  //   },
  // });

  // console.log(institutions);
  const { data: programs } = useQuery({
    queryKey: ["programs"],
    queryFn: async () => {
      const response = await client.models.Program.listProgramBySortTypeAndName(
        {
          sortType: "Program",
        },
        {
          // filter: {
          //   or: institutions?.map((institution) => {
          //     return {
          //       institutionId: {
          //         eq: institution.id,
          //       },
          //     };
          //   }),
          // },
          selectionSet: [
            "specialty.*",
            "institution.*",
            "id",
            "name",
            "nrmpProgramCode",
            "interviewInvites.*",
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

  // const handleSearchChange = (e) => {
  //   setSearch(e.target.value);
  // };

  return (
    <>
      <div className={`flex items-center gap-2 px-[12px] pt-2`}>
        <Button variant="secondary" className={`flex gap-2 h-auto py-2`}>
          <Checkbox></Checkbox>Followed
        </Button>
        <Label>
          <Search strokeWidth={1} />
        </Label>
        <Input
          placeholder="Search by program name"
          // value={search}
          // onChange={handleSearchChange}
        ></Input>
      </div>
      <div className={`flex flex-col gap-[12px] flex-1`}>
        <div className={`flex flex-col px-[12px]`}>
          {programs?.map((program) => (
            <div key={program.id} className={`flex flex-col gap-[6px]`}>
              <div
                className={`border-b-[1px] py-[12px] border-gray-300 border-solid`}
              >
                <div className={`font-semibold text-[14px]`}>
                  {program.name} at {program.institution.name}
                </div>
                {console.log(program?.interviewInvites)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
