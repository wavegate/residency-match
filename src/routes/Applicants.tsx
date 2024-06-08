import { generateClient } from "aws-amplify/api";
import type { Schema } from "../../amplify/data/resource";
import { useQuery } from "@tanstack/react-query";
import usePermissions from "../hooks/usePermissions";
import UserProfileCreateForm from "../ui-components/UserProfileCreateForm";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Card } from "../components/ui/card";
import { School } from "lucide-react";

const client = generateClient<Schema>();

export default function Applicants() {
  const { data: userProfiles } = useQuery({
    queryKey: ["userProfiles"],
    queryFn: async () => {
      const response = await client.models.UserProfile.list();
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  console.log(userProfiles);

  const { permissions } = usePermissions();

  const headers = [
    "Code Name",
    "School Ranking",
    "Type",
    "Step 1 Score",
    "Step 2 Score",
    "COMLEX 1 Score",
    "COMLEX 2 Score",
    "Red Flags",
    "AOA",
    "Sigma Sigma Phi (DO Honors)",
    "Gold Humanism",
    "# Publications",
    "# Work Experiences",
    "# Volunteer Experiences",
    "Class Rank",
    "Other Degrees",
    "# of Applications",
    "# of Interviews",
    "# Withdrawn",
    "Locations",
    "# of Rejections",
    "# Waitlisted",
    "% Yield",
  ];

  const convertSchoolRanking = (ranking) => {
    const rankingMap = {
      top20: "Top 20",
      top50: "Top 50",
      mid: "Mid",
      low: "Low",
      unranked: "Unranked",
    };
    if (ranking) {
      return rankingMap[ranking];
    }
  };

  return (
    <div className={`flex flex-col gap-[6px] p-[12px]`}>
      {userProfiles?.map((userProfile) => (
        <Card key={userProfile.id} className={`p-[6px]`}>
          <h2 className={`text-[14px] font-semibold`}>
            {userProfile.codeName ?? "anonymous"}
          </h2>
          <div className={`text-[12px]`}>
            <School size={16} color="#212121" />
            <div>{convertSchoolRanking(userProfile.schoolRanking)}</div>
          </div>
          <div>{userProfile.medicalDegree}</div>
          <div>
            {userProfile.step1ScorePass
              ? "Pass"
              : userProfile.step1Score
              ? userProfile.step1Score
              : ""}
          </div>
          <div>{userProfile.step2Score}</div>
          <div>{userProfile.comlex1ScorePass && "Pass"}</div>
          <div>{userProfile.comlex2Score}</div>
          <div>{userProfile.redFlags}</div>
          <div>{userProfile.redFlagsExplanation}</div>
          <div>{userProfile.aoa}</div>
          <div>{userProfile.sigmaSigmaPhi}</div>
          <div>{userProfile.goldHumanism}</div>
          <div>{userProfile.numPublications}</div>
          <div>{userProfile.numWorkExperiences}</div>
          <div>{userProfile.numVolunteerExperiences}</div>
          <div>{userProfile.classRank}</div>
          <div>{userProfile.location}</div>
          <div>{userProfile.numApplications}</div>
          <div>{userProfile.numInterviews}</div>
          <div>{userProfile.numWithdrawn}</div>
          <div>{userProfile.numRejected}</div>
          <div>{userProfile.numWaitlisted}</div>
        </Card>
      ))}

      {/* {permissions.includes("Admin") && <UserProfileCreateForm />} */}
    </div>
  );
}
