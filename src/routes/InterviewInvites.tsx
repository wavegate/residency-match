// import InterviewInviteCreateForm from "../ui-components/InterviewInviteCreateForm";
// import { useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
// import { useAuthenticator } from "@aws-amplify/ui-react";
import { useQuery } from "@tanstack/react-query";
import { Plus, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import buildIVstats from "../utils/buildIVstats";
import dayjs from "../utils/dayjs";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const client = generateClient<Schema>();

export default function InterviewInvites() {
  const { data: interviewInvites } = useQuery({
    queryKey: ["interviewInvites"],
    queryFn: async () => {
      const response =
        await client.models.InterviewInvite.listInterviewInviteBySortTypeAndInviteDateTime(
          {
            sortType: "InterviewInvite",
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
              "owner",
            ],
            sortDirection: "DESC",
          }
        );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  const { data: ivUserProfiles } = useQuery({
    queryKey: ["ivUserProfiles"],
    queryFn: async () => {
      const response = await client.models.UserProfile.list({
        filter: {
          or: interviewInvites?.map((invite) => {
            return {
              owner: { contains: invite.owner },
            };
          }),
        },
      });
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
    enabled: !!interviewInvites,
  });

  const profileMap = useMemo(() => {
    if (ivUserProfiles) {
    }
  }, [ivUserProfiles]);

  // function deleteInterviewInvite(id: string) {
  //   client.models.InterviewInvite.delete(
  //     { id },
  //     {
  //       authMode: "userPool",
  //     }
  //   );
  // }
  return (
    <>
      <Link to="/create-interview-invite">
        <Button
          className={`fixed left-1/2 -translate-x-1/2 bottom-[55px] rounded-full shadow-md`}
        >
          <Plus />
        </Button>
      </Link>
      <div className={`flex items-center gap-2 px-[12px] pt-2`}>
        <Button variant="secondary" className={`flex gap-2 h-auto py-2`}>
          <Checkbox></Checkbox>
          <Label>Followed</Label>
        </Button>
        <Label>
          <Search strokeWidth={1} />
        </Label>
        <Input placeholder="Search by program name"></Input>
      </div>

      <div className={`flex flex-col gap-[12px] flex-1`}>
        <div className={`flex flex-col px-[12px]`}>
          {interviewInvites?.map((interviewInvite) => (
            <div key={interviewInvite.id} className={`flex flex-col gap-[6px]`}>
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
                    {dayjs(interviewInvite.inviteDateTime).utc().format("MMM")}
                  </div>
                  <div className={`text-[30px] font-semibold leading-[30px]`}>
                    {dayjs(interviewInvite.inviteDateTime).format("D")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
