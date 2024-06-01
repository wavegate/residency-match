// import InterviewInviteCreateForm from "../ui-components/InterviewInviteCreateForm";
// import { useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
// import { useAuthenticator } from "@aws-amplify/ui-react";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { CalendarFold } from "lucide-react";
import { Card } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";

const client = generateClient<Schema>();

export default function InterviewInvites() {
  const { data: interviewInvites } = useQuery({
    queryKey: ["interviewInvites"],
    queryFn: async () => {
      const response = await client.models.InterviewInvite.list({
        selectionSet: [
          "id",
          "program.*",
          "program.institution.*",
          "inviteDateTime",
          "owner",
        ],
      });
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  console.log(interviewInvites);

  // function deleteInterviewInvite(id: string) {
  //   client.models.InterviewInvite.delete(
  //     { id },
  //     {
  //       authMode: "userPool",
  //     }
  //   );
  // }
  return (
    <div
      className={`p-[12px] bg-[#96BBDE] flex-1 flex flex-col overflow-y-auto`}
    >
      <div className={`flex flex-col gap-[12px] overflow-y-auto flex-1`}>
        <div className={`flex gap-[12px] items-center`}>
          <div
            className={`text-[#F3FAFC] bg-[#07243B] w-[50px] h-[50px] rounded-full flex items-center justify-center`}
          >
            <CalendarFold />
          </div>
          <div className={`flex-1`}>
            <div className={`text-[20px] font-semibold`}>Interview Invites</div>
            <div className={`text-[#263D54] text-[14px]`}>
              {dayjs().format("MM/DD/YYYY")}
            </div>
          </div>
          <div>38</div>
        </div>
        <div className={`flex flex-col gap-[6px]`}>
          {interviewInvites?.map((interviewInvite) => (
            <Card
              key={interviewInvite.id}
              className={`p-[10px] flex flex-col gap-[6px]`}
            >
              <div>
                <div className={`font-semibold`}>
                  {interviewInvite.program.name}
                </div>
              </div>
              <div className={`justify-between items-center flex`}>
                <Avatar className={`w-[48px] h-[48px]`}>
                  <AvatarImage
                    src={
                      interviewInvite.program.institution.imageLink ?? undefined
                    }
                  />
                  <AvatarFallback>
                    {interviewInvite.program.name}
                  </AvatarFallback>
                </Avatar>
                {/* <div>followed program</div> */}
                <div className={`flex flex-col text-right`}>
                  <div className={``}>
                    {dayjs(interviewInvite.inviteDateTime).format("MMM")}
                  </div>
                  <div className={`text-[36px] font-semibold leading-[30px]`}>
                    {dayjs(interviewInvite.inviteDateTime).format("D")}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className={`grid grid-cols-3 gap-[12px] pt-[12px]`}>
        <Button
          className={`bg-[#5399D4] rounded-[18px] text-slate-900 text-[18px] text-semibold py-[18px]`}
        ></Button>
        <Button
          className={`bg-[#9EC9ED] rounded-[18px] text-slate-900  text-[18px] text-semibold py-[18px]`}
        >
          Followed
        </Button>
        <Button
          className={`bg-[#C2DDF3] rounded-[18px] text-slate-900  text-[18px] text-semibold py-[18px]`}
        >
          Filters
        </Button>
      </div>
      {/* <InterviewInviteCreateForm /> */}
    </div>
  );
}
