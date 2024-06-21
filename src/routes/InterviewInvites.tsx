// import InterviewInviteCreateForm from "../ui-components/InterviewInviteCreateForm";
// import { useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
// import { useAuthenticator } from "@aws-amplify/ui-react";
import { useQuery } from "@tanstack/react-query";
import { Loader, Plus, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import buildIVstats from "../utils/buildIVstats";
import dayjs from "../utils/dayjs";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";
import usePermissions from "../hooks/usePermissions";

const client = generateClient<Schema>();

export default function InterviewInvites() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  const { data: interviewInvites, isLoading: loading } = useQuery({
    queryKey: ["interviewInvites", debouncedSearch],
    queryFn: async () => {
      const response =
        await client.models.InterviewInvite.listInterviewInviteBySortTypeAndInviteDateTime(
          {
            sortType: "InterviewInvite",
          },
          {
            filter: {
              institutionNameLowerCase: {
                contains: debouncedSearch.toLowerCase(),
              },
            },
            limit: 1000,
            selectionSet: [
              "id",
              "program.*",
              "program.institution.*",
              "inviteDateTime",
              "location",
              "medicalDegree",
              "owner",
              "anonymous",
              "img",
              "visaRequired",
              "subI",
              "home",
              "away",
              "comlex1Score",
              "comlex2Score",
              "step1Score",
              "step2Score",
              "geographicPreference",
              "signal",
              "anonymous",
            ],
            sortDirection: "DESC",
          }
        );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  const { userProfile } = usePermissions();

  const { data: followedPrograms, isLoading: followedProgramsLoading } =
    useQuery({
      queryKey: ["followedPrograms"],
      queryFn: async () => {
        const response =
          await client.models.UserProfileProgram.listUserProfileProgramByUserProfileId(
            {
              userProfileId: userProfile?.id,
            },
            { authMode: "userPool" }
          );

        const responseData = response.data;
        if (!responseData) return null;
        return responseData;
      },
      enabled: !!userProfile?.id,
    });

  const {
    data: followedInterviewInvites,
    isLoading: followedInterviewInvitesLoading,
  } = useQuery({
    queryKey: ["interviewInvites", "followed"],
    queryFn: async () => {
      const promises = followedPrograms?.map((program) => {
        return client.models.InterviewInvite.listInterviewInviteByProgramId(
          {
            programId: program.programId,
          },
          {
            selectionSet: [
              "id",
              "program.*",
              "program.institution.*",
              "inviteDateTime",
              "location",
              "medicalDegree",
              "owner",
              "anonymous",
              "img",
              "visaRequired",
              "subI",
              "home",
              "away",
              "comlex1Score",
              "comlex2Score",
              "step1Score",
              "step2Score",
              "geographicPreference",
              "signal",
              "anonymous",
            ],
          }
        );
      });

      const results = await Promise.all(promises);
      const responseData = results.flatMap((item) => item.data);
      if (!responseData) return null;
      return responseData;
    },
    enabled: !!followedPrograms,
  });

  // const { data: ivUserProfiles } = useQuery({
  //   queryKey: ["ivUserProfiles"],
  //   queryFn: async () => {
  //     const response = await client.models.UserProfile.list({
  //       filter: {
  //         or: interviewInvites?.map((invite) => {
  //           return {
  //             owner: { contains: invite.owner },
  //           };
  //         }),
  //       },
  //     });
  //     const responseData = response.data;
  //     if (!responseData) return null;
  //     return responseData;
  //   },
  //   enabled: !!interviewInvites,
  // });

  // const profileMap = useMemo(() => {
  //   if (ivUserProfiles) {
  //   }
  // }, [ivUserProfiles]);

  // function deleteInterviewInvite(id: string) {
  //   client.models.InterviewInvite.delete(
  //     { id },
  //     {
  //       authMode: "userPool",
  //     }
  //   );
  // }

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const [followed, setFollowed] = useState(false);

  return (
    <>
      <Link to="/create-interview-invite">
        <Button
          className={`fixed left-1/2 -translate-x-1/2 bottom-[55px] rounded-full shadow-md z-10`}
        >
          <Plus />
        </Button>
      </Link>
      <div className={`flex items-center gap-2 px-[12px] pt-2`}>
        <Button
          variant="secondary"
          className={`flex gap-2 h-auto py-2`}
          onClick={() => setFollowed((prev) => !prev)}
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
        {loading ? (
          <div className={`left-1/2 -translate-x-1/2 absolute top-8`}>
            <Loader className={`animate-spin`} />
          </div>
        ) : (
          <div className={`flex flex-col gap-[12px] flex-1`}>
            <div className={`flex flex-col px-[12px]`}>
              {(followed ? followedInterviewInvites : interviewInvites)?.map(
                (interviewInvite) => (
                  <div
                    key={interviewInvite.id}
                    className={`flex flex-col gap-[6px]`}
                  >
                    <div
                      className={`grid grid-cols-[1fr_60px] border-b-[1px] py-[12px] border-gray-300 border-solid`}
                    >
                      <div>
                        <div className={`font-semibold text-[14px]`}>
                          {interviewInvite.program.name} at{" "}
                          {interviewInvite.program.institution.name}
                        </div>
                        <div className={`text-[12px] text-slate-500`}>
                          {buildIVstats(interviewInvite)}
                        </div>
                      </div>
                      <div className={`flex flex-col text-right`}>
                        <div className={`text-[14px]`}>
                          {dayjs(interviewInvite.inviteDateTime)
                            .utc()
                            .format("MMM")}
                        </div>
                        <div
                          className={`text-[30px] font-semibold leading-[30px]`}
                        >
                          {dayjs(interviewInvite.inviteDateTime).format("D")}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
