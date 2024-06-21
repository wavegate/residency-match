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
      const response = await client.models.Program.get({ id: params.id });
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

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
        <div className={`flex flex-col gap-[12px] items-center`}>
          <h1 className={`font-semibold text-[18px]`}>
            {program?.name} at {program?.institutionName}
          </h1>
          <Button className={`w-fit`} onClick={() => followProgram()}>
            Follow
          </Button>
        </div>
      )}
    </div>
  );
}
