import { Loader, MoreHorizontal, FileMinusIcon } from "lucide-react";
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
import { useQuery, useQueryClient } from "@tanstack/react-query";
import buildIVstats from "../utils/buildIVstats";
import dayjs from "../utils/dayjs";
import client from "../utils/client";
import { Pagination } from "@aws-amplify/ui-react";
import Delete from "@/components/Delete";
import { useToast } from "@/components/ui/use-toast";

export default function AllInterviewInvitesTable() {
  const [pageTokens, setPageTokens] = useState([null]);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);
  const queryClient = useQueryClient();

  const { data: interviewInvites, isLoading: loading } = useQuery({
    queryKey: ["interviewInvites", `all`, `page:${currentPageIndex}`],
    queryFn: async () => {
      try {
        const response = await client.models.InterviewInvite.listInterviewInviteBySortTypeAndInviteDateTime(
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

  const { toast } = useToast();

  const deleteById = async (id) => {
    setDeleteLoading(true);
    const response = await client.models.InterviewInvite.delete(
      { id },
      { authMode: "userPool" }
    );
    if (response.data) {
      toast({ title: "Interview invite deleted." });
      queryClient.invalidateQueries({
        queryKey: ["interviewInvites"],
      });
      setOpen(false);
      setDeleteLoading(false);
    }
  };

  const [open, setOpen] = useState<boolean>(false);
  const [deleteRecord, setDeleteRecord] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  function handleDelete(invite) {
    setOpen(true);
    setDeleteRecord(invite);
  }

  return (
    <>
      {loading ? (
        <div className={`relative h-40`}>
          <div className={`left-1/2 -translate-x-1/2 absolute top-8`}>
            <Loader className={`animate-spin`} />
          </div>
        </div>
      ) : interviewInvites?.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-48">
          <div className="flex flex-col items-center gap-4">
            <FileMinusIcon className="h-8 w-8 text-muted-foreground" />
            <h3 className="text-lg font-medium text-muted-foreground">
              No records to display
            </h3>
          </div>
        </div>
      ) : (
        <Table className={`mb-4`}>
          <TableHeader>
            <TableRow>
              <TableHead>Program</TableHead>
              <TableHead className={`whitespace-nowrap`}>Date</TableHead>
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
                  <TableCell className={`whitespace-nowrap`}>
                    {dayjs(invite.inviteDateTime)
                      .utc()
                      .format("MMMM D")}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell whitespace-nowrap">
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
                        <Link to={`/interview-invites/${invite.id}`}>
                          <DropdownMenuItem>View</DropdownMenuItem>
                        </Link>
                        <Link to={`/interview-invites/${invite.id}/edit`}>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem onClick={() => handleDelete(invite)}>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        // <div className={`pb-4`}>
        //   {interviewInvites?.map((interviewInvite) => {
        //     return (
        //       <div
        //         key={interviewInvite.id}
        //         className={`flex flex-col gap-[6px]`}
        //       >
        //         <div
        //           className={`grid grid-cols-[1fr_60px] border-b-[1px] py-[12px] border-gray-300 border-solid`}
        //         >
        //           <div>
        //             <div className={`font-semibold text-[14px]`}>
        //               {interviewInvite.program.name} at{" "}
        //               {interviewInvite.program.institution.name}
        //             </div>
        //             <div className={`text-[12px] text-slate-500`}>
        //               {buildIVstats(interviewInvite)}
        //             </div>
        //           </div>
        //           <div className={`flex flex-col text-right`}>
        //             <div className={`text-[14px]`}>
        //               {dayjs(interviewInvite.inviteDateTime)
        //                 .utc()
        //                 .format("MMM")}
        //             </div>
        //             <div className={`text-[30px] font-semibold leading-[30px]`}>
        //               {dayjs(interviewInvite.inviteDateTime).format("D")}
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     );
        //   })}
        // </div>
      )}
      <Pagination
        currentPage={currentPageIndex}
        totalPages={pageTokens.length}
        hasMorePages={hasMorePages}
        onNext={handleNextPage}
        onPrevious={() => setCurrentPageIndex(currentPageIndex - 1)}
        onChange={(pageIndex) => setCurrentPageIndex(pageIndex)}
      />
      <Delete
        open={open}
        setOpen={setOpen}
        record={deleteRecord}
        handleSubmit={() => deleteById(deleteRecord.id)}
        loading={deleteLoading}
      />
    </>
  );
}
