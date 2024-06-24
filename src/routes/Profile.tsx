import { generateClient } from "aws-amplify/api";
import UserProfileCreateForm from "../ui-components/UserProfileCreateForm-old";
import { Schema } from "../../amplify/data/resource";
import { useEffect, useMemo, useState } from "react";
import usePermissions from "../hooks/usePermissions";
import UserProfileUpdateForm from "../ui-components/UserProfileUpdateForm";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Card } from "../components/ui/card";
import DataValue from "../components/DataValue";
import { Loader } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../components/ui/breadcrumb";

const client = generateClient<Schema>();

export default function Profile() {
  const params = useParams();

  const { data: userProfile, isLoading: loading } = useQuery({
    queryKey: ["userProfile", params.id],
    queryFn: async () => {
      const response = await client.models.UserProfile.get({
        id: params.id,
      });
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
    enabled: !!params.id,
  });

  const { user } = usePermissions();

  const schoolRanking = useMemo(() => {
    if (userProfile?.schoolRanking) {
      const map = {
        low: "Low Tier",
        mid: "Mid Tier",
        unranked: "Unranked",
        top20: "Top 20",
        top50: "Top 50",
      };
      return map[userProfile.schoolRanking];
    }
  }, [userProfile?.schoolRanking]);

  const classRank = useMemo(() => {
    if (userProfile?.classRank) {
      const map = {
        bottom50: "Bottom 50%",
        top10: "Top 10%",
        top25: "Top 25%",
      };
      return map[userProfile.classRank];
    }
  }, [userProfile?.classRank]);

  const pathway = useMemo(() => {
    if (userProfile?.step2CSPathway) {
      const map = {
        pathway1: "Pathway 1",
        pathway2: "Pathway 2",
        pathway3: "Pathway 3",
        pathway4: "Pathway 4",
        pathway5: "Pathway 5",
        pathway6: "Pathway 6",
      };
      return map[userProfile.step2CSPathway];
    }
  }, [userProfile?.step2CSPathway]);

  return (
    <div className={`p-[12px] relative`}>
      {user?.userId === userProfile?.ownerAccount && (
        <Link
          to={`/profile/edit/${userProfile?.id}`}
          className={`fixed left-1/2 -translate-x-1/2 bottom-[55px]`}
        >
          <Button>Edit</Button>
        </Link>
      )}
      {loading ? (
        <div className={`left-1/2 -translate-x-1/2 absolute top-8`}>
          <Loader className={`animate-spin`} />
        </div>
      ) : (
        <div className={`flex flex-col gap-[12px]`}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/applicants">
                  <BreadcrumbLink>Applicants</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{userProfile?.username}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className={`flex flex-col items-center`}>
            <div className={`text-[18px] font-semibold`}>
              {userProfile?.username}
            </div>

            <div className={`flex gap-[6px]`}>
              <div>{userProfile?.graduateType}</div>
              <div>{userProfile?.medicalDegree}</div>
              <div>{userProfile?.otherDegrees}</div>
            </div>
            <div className={`flex gap-[6px]`}>
              <div>
                {userProfile?.sigmaSigmaPhi && (
                  <img
                    className={`w-[48px] h-[48px]`}
                    src="https://images.squarespace-cdn.com/content/v1/581e35fbb3db2b4ee65ad6ed/1511404475444-Z54RR7NYXEGKQUE64OLL/SSPLOGOCLEAR.png"
                  />
                )}
              </div>
              <div>
                {userProfile?.aoa && (
                  <img
                    className={`w-[48px] h-[48px]`}
                    src="https://images.squarespace-cdn.com/content/v1/5695c7491115e0e4e303f4fc/1453441679984-1YK6E2N7EBU4D9EGDFMS/aoa-shield.jpg"
                  />
                )}
              </div>
              <div>
                {userProfile?.goldHumanism && (
                  <img
                    className={`w-[48px] h-[48px]`}
                    src="https://hsc.unm.edu/medicine/education/md/_media/logos/ghhs-logo-alternate-2.png"
                  />
                )}
              </div>
            </div>
          </div>

          <Card className={`grid grid-cols-2 p-2 gap-[12px]`}>
            <DataValue
              label={"Step 1"}
              value={
                userProfile?.step1ScorePass
                  ? "Pass"
                  : userProfile?.step1Score
                  ? userProfile.step1Score
                  : "-"
              }
            />
            <DataValue
              label={"Step 2"}
              value={userProfile?.step2Score || "-"}
            />
            <DataValue
              label={"COMLEX 1"}
              value={userProfile?.comlex1ScorePass ? "Pass" : "-"}
            />
            <DataValue
              label={"COMLEX 2"}
              value={userProfile?.comlex2Score || "-"}
            />
            <DataValue
              label={"Step 3"}
              value={userProfile?.step3Score || "-"}
            />
            <DataValue label={"Step 2 CS Pathway"} value={pathway || "-"} />
          </Card>
          <Card className={`grid grid-cols-2 p-2 gap-[12px]`}>
            <DataValue
              label={"YOG"}
              value={userProfile?.yearOfGraduation || "-"}
            />
            <DataValue
              label={"ECFMG Status"}
              value={
                userProfile?.ecfmgCertified === true
                  ? "Yes"
                  : userProfile?.ecfmgCertified === false
                  ? "No"
                  : "-"
              }
            />
            <DataValue
              label={"Visa Required"}
              value={
                userProfile?.visaRequired === true
                  ? "Yes"
                  : userProfile?.visaRequired === false
                  ? "No"
                  : "-"
              }
            />
            <DataValue
              label={"Months of US clinical experience"}
              value={userProfile?.monthsOfUSCE || "-"}
            />
          </Card>
          <Card className={`grid grid-cols-2 p-2 gap-[12px]`}>
            <DataValue label={"School Rank"} value={schoolRanking || "-"} />
            <DataValue label={"Class Rank"} value={classRank || "-"} />
          </Card>
          <Card className={`grid grid-cols-2 p-2 gap-[12px]`}>
            <DataValue
              label={"Publications"}
              value={userProfile?.numPublications || "-"}
            />
            <DataValue
              label={"Work"}
              value={userProfile?.numWorkExperiences || "-"}
            />
            <DataValue
              label={"Volunteering"}
              value={userProfile?.numVolunteerExperiences || "-"}
            />
          </Card>
          <Card className={`grid grid-cols-2 p-2 gap-[12px]`}>
            <DataValue
              label={"Red Flags?"}
              value={
                userProfile?.redFlags === true
                  ? "Yes"
                  : userProfile?.redFlags === false
                  ? "No"
                  : "-"
              }
            />
            <DataValue
              label={"Explanation"}
              value={
                userProfile?.redFlagsExplanation
                  ? userProfile.redFlagsExplanation
                  : "-"
              }
            />
          </Card>
          <Card className={`grid grid-cols-2 p-2 gap-[12px]`}>
            <DataValue
              label={"# Applications"}
              value={userProfile?.numApplications || "-"}
            />
            <DataValue
              label={"# Interviews"}
              value={userProfile?.numInterviews || "-"}
            />
            <DataValue
              label={"# Withdrawn"}
              value={userProfile?.numWithdrawn || "-"}
            />
            <DataValue
              label={"# Rejected"}
              value={userProfile?.numRejected || "-"}
            />
            <DataValue
              label={"# Waitlisted"}
              value={userProfile?.numWaitlisted || "-"}
            />
          </Card>
        </div>
      )}
    </div>
  );
}
