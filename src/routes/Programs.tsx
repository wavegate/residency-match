import { useEffect, useMemo, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from "@aws-amplify/ui-react";
import usePermissions from "../hooks/usePermissions";
import ProgramCreateForm from "../ui-components/ProgramCreateForm";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Check, Loader, Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { useDebounce, useMeasure } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
import { toast } from "../components/ui/use-toast";

const client = generateClient<Schema>();

export default function Programs() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);
  const queryClient = useQueryClient();

  const { data: programs, isLoading: loading } = useQuery({
    queryKey: ["programsSearch", debouncedSearch],
    queryFn: async () => {
      const response =
        await client.models.Program.listProgramBySortTypeAndInstitutionNameLowerCase(
          {
            sortType: "Program",
            institutionNameLowerCase: {
              beginsWith: debouncedSearch
                ? debouncedSearch.toLowerCase()
                : undefined,
            },
          },
          {
            selectionSet: [
              "specialty.*",
              "institution.*",
              "id",
              "name",
              "nrmpProgramCode",
              "interviewInvites.*",
            ],
          }
        );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  // console.log(institutions);
  // const { data: programs } = useQuery({
  //   queryKey: ["programs"],
  //   queryFn: async () => {
  //     const response = await client.models.Program.listProgramBySortTypeAndName(
  //       {
  //         sortType: "Program",
  //       },
  //       {
  //         // filter: {
  //         //   or: institutions?.map((institution) => {
  //         //     return {
  //         //       institutionId: {
  //         //         eq: institution.id,
  //         //       },
  //         //     };
  //         //   }),
  //         // },
  //         selectionSet: [
  //           "specialty.*",
  //           "institution.*",
  //           "id",
  //           "name",
  //           "nrmpProgramCode",
  //           "interviewInvites.*",
  //         ],
  //         sortDirection: "ASC",
  //       }
  //     );
  //     const responseData = response.data;
  //     if (!responseData) return null;
  //     return responseData;
  //   },
  // });

  const { permissions } = usePermissions();

  function deleteProgram(id: string) {
    client.models.Program.delete(
      { id },
      {
        authMode: "userPool",
      }
    );
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const { user, userProfile } = usePermissions();

  const { data: followedPrograms, isLoading: followedProgramsLoading } =
    useQuery({
      queryKey: ["followedPrograms", userProfile?.id],
      queryFn: async () => {
        const response =
          await client.models.UserProfileProgram.listUserProfileProgramByUserProfileId(
            {
              userProfileId: userProfile?.id,
            },
            {
              authMode: "userPool",
            }
          );

        const responseData = response.data;
        if (!responseData) return null;
        return responseData;
      },
      enabled: !!userProfile?.id,
    });

  const {
    data: followedProgramDetails,
    isLoading: followedProgramDetailsLoading,
  } = useQuery({
    queryKey: ["followedPrograms", JSON.stringify(followedPrograms)],
    queryFn: async () => {
      if (!followedPrograms) return;
      const promises = followedPrograms.map((x) => {
        return client.models.Program.get(
          {
            id: x.programId,
          },
          {
            selectionSet: ["id", "name", "institution.*"],
          }
        );
      });
      const responses = await Promise.all(promises);
      const responsesData = responses.map((x) => x.data);

      if (!responsesData) return null;
      return responsesData;
    },
    enabled: !!followedPrograms,
  });

  const programIds = useMemo(() => {
    return followedPrograms?.map((item) => item.programId);
  }, [followedPrograms]);

  const followProgram = async (id: string) => {
    await client.models.UserProfileProgram.create(
      {
        programId: id,
        userProfileId: userProfile?.id,
      },
      {
        authMode: "userPool",
      }
    );
  };

  const unfollowProgram = async (id: string) => {
    const relId =
      await client.models.UserProfileProgram.listUserProfileProgramByUserProfileId(
        {
          userProfileId: userProfile?.id,
        },
        {
          filter: {
            programId: {
              eq: id,
            },
          },
          authMode: "userPool",
        }
      );

    if (relId?.data?.[0]?.id) {
      await client.models.UserProfileProgram.delete(
        {
          id: relId?.data?.[0]?.id,
        },
        {
          authMode: "userPool",
        }
      );
      queryClient.invalidateQueries({
        queryKey: ["followedPrograms"],
      });
    }
  };

  const [followed, setFollowed] = useState(false);

  return (
    <>
      <div className={`flex items-center gap-2 px-[12px] pt-2`}>
        <Button
          variant="secondary"
          className={`flex gap-2 h-auto py-2`}
          onClick={() => setFollowed((prev) => !prev)}
          disabled={!user}
        >
          <Checkbox checked={followed}></Checkbox>
          <Label>Followed</Label>
        </Button>
        <Label>
          <Search strokeWidth={1} />
        </Label>
        <Input
          placeholder="Search by institution name"
          value={search}
          onChange={handleSearchChange}
        ></Input>
      </div>
      <div className={`relative`}>
        {(followed ? followedProgramsLoading : loading) ? (
          <div className={`left-1/2 -translate-x-1/2 absolute top-8`}>
            <Loader className={`animate-spin`} />
          </div>
        ) : (
          <div>
            <div className={`flex flex-col gap-[12px] flex-1`}>
              <div className={`flex flex-col px-[12px]`}>
                {(followed ? followedProgramDetails : programs)?.map(
                  (program) => (
                    // <Link
                    //   to={`/program/${program.id}`}
                    //   key={program.id}
                    //   className={`flex flex-col gap-[6px]`}
                    // >
                    <div
                      className={`border-b-[1px] py-[12px] border-gray-300 border-solid`}
                      key={program.id}
                    >
                      <div className={`font-semibold text-[14px]`}>
                        {program.name} at {program.institution.name}
                      </div>
                      {user &&
                        (programIds?.includes(program.id) ? (
                          <Button
                            className={`text-[11px] p-1 py-0 h-auto`}
                            onClick={() => unfollowProgram(program.id)}
                          >
                            <Check size={14} className={`pr-1`} />
                            Following
                          </Button>
                        ) : (
                          <Button
                            className={`text-[11px] p-1 py-0 h-auto`}
                            variant={"secondary"}
                            onClick={async () => {
                              await followProgram(program.id);
                              queryClient.invalidateQueries({
                                queryKey: ["followedPrograms"],
                              });
                            }}
                          >
                            Follow
                          </Button>
                        ))}
                    </div>
                    // </Link>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
