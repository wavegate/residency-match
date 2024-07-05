import { useQuery } from "@tanstack/react-query";
import { generateClient } from "aws-amplify/api";
import { Schema } from "../../amplify/data/resource";

import { Loader, Plus, Search } from "lucide-react";
import { Button } from "../components/ui/button";

import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";
import usePermissions from "../hooks/usePermissions";

const client = generateClient<Schema>();

export default function XvsY() {
  const { data: comparisons, isLoading: loading } = useQuery({
    queryKey: ["comparisons"],
    queryFn: async () => {
      // ts-expect-error: too complex
      const response = await client.models.Comparison.list({
        selectionSet: [
          "id",
          "questionDifferentiator",
          "userProfile.*",
          "programs.program.*",
        ],
      });
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  console.log(comparisons);

  const { user, userProfile } = usePermissions();

  return (
    <>
      {user && (
        <Link to="/create-comparison">
          <Button
            className={`fixed left-1/2 -translate-x-1/2 bottom-[55px] rounded-full shadow-md z-10`}
          >
            <Plus />
          </Button>
        </Link>
      )}

      <div className={`relative`}>
        {loading ? (
          <div className={`left-1/2 -translate-x-1/2 absolute top-8`}>
            <Loader className={`animate-spin`} />
          </div>
        ) : (
          <div className={`flex flex-col gap-[12px] flex-1`}>
            <div className={`flex flex-col px-[12px]`}>
              {comparisons?.map((comparison) => (
                <Link key={comparison.id} to={`/x-vs-y/${comparison.id}`}>
                  <div className={`flex flex-col gap-[6px]`}>
                    <div
                      className={`grid grid-cols-[1fr_60px] border-b-[1px] py-[12px] border-gray-300 border-solid`}
                    >
                      <div>
                        <div className={`font-semibold text-[14px]`}>
                          {comparison.programs[0].program.name} at{" "}
                          {comparison.programs[0].program.institutionName} vs{" "}
                          {comparison.programs[1].program.name} at{" "}
                          {comparison.programs[1].program.institutionName}
                        </div>
                        <div className={`text-[12px] text-slate-500`}>
                          <div>{comparison.questionDifferentiator}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
