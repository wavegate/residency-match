import { PlusCircle } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Link, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import SelectProgram from "../../components/SelectProgram";
import AllInterviewInvitesTable from "./tabs/AllInterviewInvitesTable";
import ProgramInterviewInvitesTable from "./tabs/ProgramInterviewInvitesTable";
import MyInterviewInvitesTable from "./tabs/MyInterviewInvitesTable";
import FollowedInterviewInvitesTable from "./tabs/FollowedInterviewInvitesTable";

export default function InterviewInvites() {
  const { setBreadcrumbs } = useOutletContext();

  useEffect(() => {
    setBreadcrumbs([{ text: "Interview Invites" }]);
  }, []);

  const [programId, setProgramId] = useState("");

  const [tab, setTab] = useState("all");
  const [programValue, setProgramValue] = useState("");

  const handleChangeTab = (e: string) => {
    setProgramValue("");
    setProgramId("");
    setTab(e);
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-2 sm:p-4 sm:px-6 sm:py-0 md:gap-8">
      <Tabs value={tab} onValueChange={handleChangeTab}>
        <div className="flex items-center gap-2">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="me">By Me</TabsTrigger>
            <TabsTrigger value="followed">Followed</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <SelectProgram
              setTab={setTab}
              programId={programId}
              setProgramId={setProgramId}
              programValue={programValue}
              setProgramValue={setProgramValue}
            />
            <Link to="/interview-invites/add">
              <Button size="sm" className="gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Interview Invite
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <TabsContent value="all">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader className={`p-4 pb-0 sm:p-6 sm:pb-0`}>
              <CardTitle>All Interview Invites</CardTitle>
              <CardDescription>
                For more interview details, visit Interview Logistics and
                Interview Impressions.
              </CardDescription>
            </CardHeader>
            <CardContent className={`p-2 sm:p-6`}>
              <AllInterviewInvitesTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="me">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader className={`p-4 pb-0 sm:p-6`}>
              <CardTitle>My Interview Invites</CardTitle>
              <CardDescription>
                For more interview details, visit Interview Logistics and
                Interview Impressions.
              </CardDescription>
            </CardHeader>
            <CardContent className={`p-4 sm:p-6`}>
              <MyInterviewInvitesTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="followed">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader className={`p-4 pb-0 sm:p-6`}>
              <CardTitle>Followed Interview Invites</CardTitle>
              <CardDescription>
                Visit Programs page to follow programs. Invites for followed
                programs will appear here. For more interview details, visit
                Interview Logistics and Interview Impressions.
              </CardDescription>
            </CardHeader>
            <CardContent className={`p-4 sm:p-6`}>
              <FollowedInterviewInvitesTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="program">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader className={`p-4 pb-0 sm:p-6`}>
              <CardTitle>Interview Invites</CardTitle>
              <CardDescription>
                For more interview details, visit Interview Logistics and
                Interview Impressions.
              </CardDescription>
            </CardHeader>
            <CardContent className={`p-4 sm:p-6`}>
              <ProgramInterviewInvitesTable programId={programId} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
