import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useQuery } from "@tanstack/react-query";
import { Loader, Plus, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";
import usePermissions from "../hooks/usePermissions";

const client = generateClient<Schema>();

export default function InterviewLogistics() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  const { data: interviewLogistics, isLoading: loading } = useQuery({
    queryKey: ["interviewLogistics", debouncedSearch],
    queryFn: async () => {
      const response = await client.models.InterviewLogistics.list({
        selectionSet: [
          "id",
          "program.*",
          "interviewInvite.*",
          "ivFormat",
          "schedulerPlatform",
          "timeSlots",
        ],
      });
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  const { user, userProfile } = usePermissions();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const [followed, setFollowed] = useState(false);

  return (
    <>
      {user && (
        <Link to="/create-interview-logistics">
          <Button
            className={`fixed left-1/2 -translate-x-1/2 bottom-[55px] rounded-full shadow-md z-10`}
          >
            <Plus />
          </Button>
        </Link>
      )}
      <div className={`flex items-center gap-2 px-[12px] pt-2`}>
        <Button
          disabled={!user}
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
              {interviewLogistics?.map((interviewLogistics) => (
                <div
                  key={interviewLogistics.id}
                  className={`flex flex-col gap-[6px]`}
                >
                  <div
                    className={`grid grid-cols-[1fr_60px] border-b-[1px] py-[12px] border-gray-300 border-solid`}
                  >
                    <div>
                      <div className={`font-semibold text-[14px]`}>
                        {interviewLogistics.program.name} at{" "}
                        {interviewLogistics.interviewInvite.institutionName}
                      </div>
                      <div className={`text-[12px] text-slate-500`}>
                        <div>{interviewLogistics.schedulerPlatform}</div>
                        <div>{interviewLogistics.ivFormat}</div>
                        <div>{interviewLogistics.timeSlots}</div>
                        <div>{interviewLogistics.ivPlatform}</div>
                        <div>{interviewLogistics.openIVDates}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
