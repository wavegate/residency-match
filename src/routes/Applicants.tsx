import { generateClient } from "aws-amplify/api";
import type { Schema } from "../../amplify/data/resource";
import { useQuery } from "@tanstack/react-query";
import usePermissions from "../hooks/usePermissions";
import UserProfileCreateForm from "../ui-components/UserProfileCreateForm-old";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Card } from "../components/ui/card";
import { Loader, School, Search } from "lucide-react";
import "../styles/table.css";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { useState } from "react";
import { Input } from "../components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { Link } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";

const client = generateClient<Schema>();

export default function Applicants() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  const { data: userProfiles, isLoading: loading } = useQuery({
    queryKey: ["userProfiles", debouncedSearch],
    queryFn: async () => {
      const response =
        await client.models.UserProfile.listUserProfileBySortTypeAndCodeName({
          sortType: "UserProfile",
          codeName: {
            beginsWith: debouncedSearch ? debouncedSearch : undefined,
          },
        });
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

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
      mid: "Mid-tier",
      low: "Low-tier",
      unranked: "Unranked",
    };
    if (ranking) {
      return rankingMap[ranking];
    }
  };
  const convertClassRanking = (ranking) => {
    const rankingMap = {
      top10: "Top 10%",
      top25: "Top 25%",
      top50: "Top 50%",
      bottom50: "Bottom 50%",
    };
    if (ranking) {
      return rankingMap[ranking];
    }
  };

  const convertCSPathway = (pathway) => {
    const map = {
      pathway1: "Pathway 1",
      pathway2: "Pathway 2",
      pathway3: "Pathway 3",
      pathway4: "Pathway 4",
      pathway5: "Pathway 5",
      pathway6: "Pathway 6",
    };
    if (pathway) {
      return map[pathway];
    }
  };

  const calculateYield = (val1, val2) => {
    if (Number.isInteger(val1) && Number.isInteger(val2)) {
      const formattedPercentage = (val1 / val2).toLocaleString(undefined, {
        style: "percent",
        // minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return formattedPercentage;
    }
  };

  const [imgSwitch, setImgSwitch] = useState(false);

  return (
    <div className={`flex flex-col gap-[6px] p-[12px]`}>
      <div className={`flex items-center gap-2`}>
        <div className="flex items-center space-x-2">
          <Switch
            id="imgSwitch"
            checked={imgSwitch}
            onCheckedChange={(checked) => {
              setImgSwitch(checked);
            }}
          />
          <Label htmlFor="imgSwitch" className={`whitespace-nowrap`}>
            {imgSwitch ? "Switch to US" : "Switch to IMG"}
          </Label>
        </div>
        <Label>
          <Search strokeWidth={1} />
        </Label>
        <Input
          placeholder="Search by code name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        ></Input>
      </div>
      <div className={`relative`}>
        {loading ? (
          <div className={`left-1/2 -translate-x-1/2 absolute top-8`}>
            <Loader className={`animate-spin`} />
          </div>
        ) : (
          <Table className={`table`}>
            <TableHeader>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Code Name
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell>
                      {profile.isProfile ? (
                        <Link
                          to={`/profile/${profile.owner}`}
                          className={`font-semibold`}
                        >
                          {profile.codeName ?? "anonymous"}
                        </Link>
                      ) : (
                        <div>{profile.codeName ?? "anonymous"}</div>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Class Ranking
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell className={`whitespace-nowrap`}>
                      {convertClassRanking(profile.classRank) ?? "-"}
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  School Ranking
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell>
                      {convertSchoolRanking(profile.schoolRanking) ?? "-"}
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Graduate Type
                </TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.graduateType ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Medical Degree
                </TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.medicalDegree ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Other Degrees
                </TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.otherDegrees ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>Step 1</TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell>
                      {profile.step1ScorePass
                        ? "Pass"
                        : profile.step1Score
                        ? profile.step1Score
                        : "-"}
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>Step 2</TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.step2Score ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Step 2 CS Pathway
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell className={`whitespace-nowrap`}>
                      {convertCSPathway(profile.step2CSPathway) ?? "-"}
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>Step 3</TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.step3Score ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  COMLEX 1
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell>
                      {profile.comlex1ScorePass ? "Pass" : "-"}
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  COMLEX 2
                </TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.comlex2Score ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Red Flags
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell>
                      {profile.redFlags
                        ? profile.redFlagsExplanation
                          ? profile.redFlagsExplanation
                          : "Yes"
                        : "-"}
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  # Publications
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell>{profile.numPublications ?? "-"}</TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  # Work Experiences
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell>{profile.numWorkExperiences ?? "-"}</TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  # Volunteer Experiences
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell>
                      {profile.numVolunteerExperiences ?? "-"}
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>AOA</TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.aoa ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Sigma Sigma Phi
                </TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.sigmaSigmaPhi ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Gold Humanism
                </TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.goldHumanism ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Visa Required
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell>{profile.visaRequired ? "Yes" : "-"}</TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Months of USCE
                </TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.monthsOfUSCE ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  ECFMG Certified
                </TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.ecfmgCertified ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Year of Graduation
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell>{profile.yearOfGraduation ?? "-"}</TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Locations
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell>
                      <Tooltip>
                        <TooltipTrigger className={`truncate max-w-[100px]`}>
                          {profile.location ?? "-"}
                        </TooltipTrigger>{" "}
                        <TooltipContent className={`max-w-[200px]`}>
                          <p>{profile.location}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  # Applications
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell>{profile.numApplications ?? "-"}</TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  # Interviews
                </TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.numInterviews ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  # Rejected
                </TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.numRejected ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  # Waitlisted
                </TableHead>
                {userProfiles?.map((profile) => {
                  return <TableCell>{profile.numWaitlisted ?? "-"}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableHead className={`sticky-col first-col`}>
                  Percent Yield
                </TableHead>
                {userProfiles?.map((profile) => {
                  return (
                    <TableCell>
                      {calculateYield(
                        profile.numInterviews,
                        profile.numApplications
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableBody>
          </Table>
        )}
      </div>

      {/* {permissions.includes("Admin") && <UserProfileCreateForm />} */}
    </div>
  );
}
