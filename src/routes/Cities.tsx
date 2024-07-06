import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Loader, Plus, Search } from "lucide-react";
import usePermissions from "../hooks/usePermissions";
import { useQuery } from "@tanstack/react-query";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

export default function Cities() {
  const { user, userProfile } = usePermissions();

  const { data: cityInformation, isLoading: loading } = useQuery({
    queryKey: ["cityInformation"],
    queryFn: async () => {
      const response = await client.models.CityUserInput.list({
        selectionSet: [
          "id",
          "city.*",
          "city.state.*",
          "dating",
          "diversity",
          "lgbtq",
          "pros",
          "publicTransportation",
          "safetyCrime",
          "weather",
          "userProfile.*",
        ],
      });
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  return (
    <>
      {user && (
        <Link to="/create-city-user-input">
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
              {cityInformation?.map((info) => (
                <div key={info.id} className={`flex flex-col gap-[6px]`}>
                  <div
                    className={`grid grid-cols-[1fr_60px] border-b-[1px] py-[12px] border-gray-300 border-solid`}
                  >
                    <div>
                      <div className={`font-semibold text-[14px]`}>
                        {info.city.name}, {info.city.state.name}
                      </div>
                      <div className={`text-[12px] text-slate-500`}>
                        <div>{info.dating}</div>
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
