import { File, Search, MoreHorizontal, PlusCircle } from "lucide-react";

import { Badge } from "../components/ui/badge";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Link, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import buildIVstats from "../utils/buildIVstats";
import dayjs from "../utils/dayjs";
import client from "../utils/client";

export default function InterviewInvites2() {
  const { setBreadcrumbs, setTitle } = useOutletContext();

  useEffect(() => {
    setBreadcrumbs([{ text: "Interview Invites" }]);
    setTitle("Interview Invites");
  }, []);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const { data: interviewInvites, isLoading: loading } = useQuery({
    queryKey: ["interviewInvites", debouncedSearch],
    queryFn: async () => {
      const response =
        await client.models.InterviewInvite.listInterviewInviteBySortTypeAndInviteDateTime(
          {
            sortType: "InterviewInvite",
          },
          {
            filter: {
              institutionNameLowerCase: {
                contains: debouncedSearch.toLowerCase(),
              },
            },
            limit: 1000,
            selectionSet: [
              "id",
              "program.*",
              "program.institution.*",
              "inviteDateTime",
              "locationState",
              "medicalDegree",
              "anonymous",
              "img",
              "visaRequired",
              "subI",
              "home",
              "away",
              "comlex1ScorePass",
              "comlex2Score",
              "step1ScorePass",
              "step1Score",
              "step2Score",
              "geographicPreference",
              "signal",
              "anonymous",
              "userProfileId",
              "userProfile.*",
            ],
            sortDirection: "DESC",
          }
        );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });
  console.log(interviewInvites);

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center gap-2">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="mine">Mine</TabsTrigger>
            <TabsTrigger value="followed">Followed</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Active
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Enter institution name"
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                value={search}
                onChange={handleSearchChange}
              />
            </div>
            {/* <Button size="sm" variant="outline" className="h-8 gap-1">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button> */}
            <Link to="/create-interview-invite">
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
            <CardHeader>
              <CardTitle>Interview Invites</CardTitle>
              <CardDescription>
                For more interview details, visit Interview Logistics and
                Interview Impressions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Program</TableHead>
                    <TableHead>Date Invited</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Applicant
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Stats
                    </TableHead>
                    {/*<TableHead className="hidden md:table-cell">
                      Total Sales
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Created at
                    </TableHead> */}
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {interviewInvites?.map((invite) => {
                    return (
                      <TableRow>
                        <TableCell className="font-medium">
                          <Link
                            to={`/interview-invites/${invite.id}`}
                            className={`underline`}
                          >
                            {invite.program.name} at{" "}
                            {invite.program.institution.name}
                          </Link>
                        </TableCell>
                        <TableCell>
                          {dayjs(invite.inviteDateTime)
                            .utc()
                            .format("MMMM D, YYYY")}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Link
                            to={`profile/${invite.userProfile.id}`}
                            className={`underline`}
                          >
                            {invite.userProfile.username}
                          </Link>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          {buildIVstats(invite)}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                        {/* <TableCell>{buildIVstats(invite)}</TableCell> */}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of <strong>32</strong> products
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
