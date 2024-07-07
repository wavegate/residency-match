import { Loader, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import buildIVstats from "../utils/buildIVstats";
import dayjs from "../utils/dayjs";
import client from "../utils/client";
import { Pagination } from "@aws-amplify/ui-react";

export default function AllInterviewInvitesTable() {
  const [pageTokens, setPageTokens] = useState([null]);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);

  const { data: interviewInvites, isLoading: loading } = useQuery({
    queryKey: ["interviewInvites", `all`, `page:${currentPageIndex}`],
    queryFn: async () => {
      try {
        const response =
          await client.models.InterviewInvite.listInterviewInviteBySortTypeAndInviteDateTime(
            {
              sortType: "InterviewInvite",
            },
            {
              nextToken: pageTokens[currentPageIndex - 1],
              limit: 10,
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

        if (currentPageIndex === pageTokens.length) {
          if (!response.nextToken) {
            setHasMorePages(false);
          } else {
            setPageTokens((prev) => [...prev, response.nextToken]);
          }
        }

        const responseData = response.data;
        if (!responseData) return null;
        return responseData;
      } catch (e) {
        console.log(e);
      }
    },
  });

  const handleNextPage = async () => {
    setCurrentPageIndex((prev) => prev + 1);
  };

  return (
    <>
      {loading ? (
        <div className={`relative h-40`}>
          <div className={`left-1/2 -translate-x-1/2 absolute top-8`}>
            <Loader className={`animate-spin`} />
          </div>
        </div>
      ) : (
        <Table className={`mb-4`}>
          <TableHeader>
            <TableRow>
              <TableHead>Program</TableHead>
              <TableHead>Date Invited</TableHead>
              <TableHead className="hidden md:table-cell">Applicant</TableHead>
              <TableHead className="hidden md:table-cell">Stats</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {interviewInvites?.map((invite) => {
              return (
                <TableRow key={invite.id}>
                  <TableCell className="font-medium">
                    <Link
                      to={`/interview-invites/${invite.id}`}
                      className={`underline`}
                    >
                      {invite.program.name} at {invite.program.institution.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {dayjs(invite.inviteDateTime).utc().format("MMMM D, YYYY")}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Link
                      to={`/profile/${invite.userProfile.id}`}
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
                        <Link to={`/interview-invites/${invite.id}/edit`}>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
      <Pagination
        currentPage={currentPageIndex}
        totalPages={pageTokens.length}
        hasMorePages={hasMorePages}
        onNext={handleNextPage}
        onPrevious={() => setCurrentPageIndex(currentPageIndex - 1)}
        onChange={(pageIndex) => setCurrentPageIndex(pageIndex)}
      />
    </>
  );
}
