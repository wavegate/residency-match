import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useQuery } from "@tanstack/react-query";
import { Loader, Plus, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";
import usePermissions from "../hooks/usePermissions";

const client = generateClient<Schema>();

export default function RankLists() {
  const { data: rankLists, isLoading: loading } = useQuery({
    queryKey: ["rankLists"],
    queryFn: async () => {
      const response = await client.models.RankList.list();
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  const { user, userProfile } = usePermissions();

  return (
    <>
      {user && (
        <Link to="/create-rank-list">
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
              {rankLists?.map((rankList) => (
                <div key={rankList.id} className={`flex flex-col gap-[6px]`}>
                  <div
                    className={`grid grid-cols-[1fr_60px] border-b-[1px] py-[12px] border-gray-300 border-solid`}
                  >
                    <div>
                      <div className={`font-semibold text-[14px]`}>Hi</div>
                      <div className={`text-[12px] text-slate-500`}>bye</div>
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
