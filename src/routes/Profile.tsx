import { generateClient } from "aws-amplify/api";
import UserProfileCreateForm from "../ui-components/UserProfileCreateForm";
import { Schema } from "../../amplify/data/resource";
import { useEffect, useState } from "react";
import usePermissions from "../hooks/usePermissions";
import UserProfileUpdateForm from "../ui-components/UserProfileUpdateForm";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const client = generateClient<Schema>();

export default function Profile() {
  const [userProfile, setUserProfile] =
    useState<Schema["UserProfile"]["type"]>();

  const { user } = usePermissions();

  useEffect(() => {
    client.models.UserProfile.observeQuery({
      filter: { owner: { contains: user?.userId } },
    }).subscribe({
      next: (data) => setUserProfile([...data.items]?.[0]),
    });
  }, [user?.userId]);

  return (
    <div className={`p-[12px] flex-1 overflow-y-auto`}>
      <div>
        <div className={`flex gap-[12px] items-center`}>
          <Avatar className={`w-[64px] h-[64px]`}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <div>ccfrankee</div>
            <div className={`flex gap-[6px]`}>
              <div>MD PhD</div>
              <div>AOA</div>
              <div>Gold Humanism</div>
            </div>
          </div>
        </div>
        <div className={`grid grid-cols-4`}>
          <div>Step 1</div>
          <div>Step 2</div>
          <div>Comlex 1</div>
          <div>Comlex 2</div>
          <div>Pass</div>
          <div>260</div>
          <div>-</div>
          <div>-</div>
          <div>Step 3</div>
          <div>Step 2 CS/Pathway</div>
          <div></div>
          <div></div>
          <div>-</div>
          <div>-</div>
        </div>
        <div className={`grid grid-cols-3`}>
          <div>YOG</div>
          <div>ECFMG Status</div>
          <div>Visa required</div>
          <div>2024</div>
          <div>Certified</div>
          <div>No</div>
        </div>
        <div className={`grid grid-cols-2`}>
          <div>School Rank</div>
          <div>Class Rank</div>
          <div>Top 10%</div>
          <div>Top 50%</div>
        </div>
        <div className={`grid grid-cols-3`}>
          <div>Publications</div>
          <div>Work</div>
          <div>Volunteering</div>
          <div>2</div>
          <div>3</div>
          <div>5</div>
        </div>
        <div>Red flags! LOA</div>
        <div>
          <div># Applications</div>
          <div># Interviews</div>
          <div># Withdrawn</div>
          <div># Rejected</div>
          <div># Waitlisted</div>
        </div>
        <div>Rank List</div>
        <ol>
          <li>UCSF - Applied</li>
          <li>Columbia - Invited for interview</li>
        </ol>
        <div></div>
        <div></div>
      </div>
      <h1>Profile</h1>
      {userProfile ? (
        <UserProfileUpdateForm id={userProfile.id} isProfile />
      ) : (
        <UserProfileCreateForm isProfile />
      )}
    </div>
  );
}
