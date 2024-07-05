import { useQuery } from "@tanstack/react-query";
import { generateClient } from "aws-amplify/api";
import { useParams } from "react-router-dom";
import { Schema } from "../../amplify/data/resource";
import { Loader } from "lucide-react";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";
import usePermissions from "../hooks/usePermissions";

const client = generateClient<Schema>();

export default function Program() {
  const params = useParams();
  const { data: program, isLoading: loading } = useQuery({
    queryKey: ["program", params.id],
    queryFn: async () => {
      const response = await client.models.Program.get(
        {
          id: params.id,
        },
        {
          selectionSet: [
            "id",
            "institutionName",
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

  console.log(program);
  const { toast } = useToast();

  const { userProfile } = usePermissions();

  const followProgram = () => {
    client.models.UserProfileProgram.create(
      {
        programId: params.id,
        userProfileId: userProfile?.id,
      },
      {
        authMode: "userPool",
      }
    );
  };

  return (
    <div className={`p-[12px] relative`}>
      {loading ? (
        <div className={`left-1/2 -translate-x-1/2 absolute top-8`}>
          <Loader className={`animate-spin`} />
        </div>
      ) : (
        <div className={`flex flex-col gap-[12px]`}>
          <h1 className={`font-semibold text-[18px]`}>
            {program?.name} at {program?.institutionName}
          </h1>
          <h2>{program?.nrmpProgramCode}</h2>
          <Button
            className={`w-fit self-center`}
            onClick={() => followProgram()}
          >
            Follow
          </Button>
          <div>Compare this program with another program:</div>
          <div>Latest Interview Invites</div>
          {program.interviewInvites.map((invite) => {
            return <div>{invite.id}</div>;
          })}
          <div>Interview Logistics</div>
          <div>Scheduler Platform</div>
          <div>Format</div>
          <div>Time Slots</div>
          <div>IV Platform</div>
          <div>Open IV dates</div>
          <div>Interview Questions</div>
          <div>Latest Interview Rejections</div>
          <div>Latest Interview Withdrawals</div>
          <div>Interivew Impressions</div>
          <div>Schedule Details</div>
          <div>LOI Response</div>
          <div>Second Look</div>
          <div>M4 & Intern Impressions</div>
          <div>Malignant?</div>
          <div>Fellowship Match</div>
        </div>
      )}
    </div>
  );
}
