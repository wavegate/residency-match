import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "@aws-amplify/ui-react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { cn } from "../lib/utils";
import { format } from "date-fns";
import { Calendar } from "../components/ui/calendar";
import { CalendarIcon, ChevronLeft, Pencil } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { numericNull } from "../utils/zodHelpers";
import { useNavigate } from "react-router-dom";
import usePermissions from "../hooks/usePermissions";
import SelectProgram from "../components/SelectProgram";
import client from "../utils/client";
import { useParams } from "react-router-dom";
import preprocessData from "../utils/preprocessData";
import Delete from "@/components/Delete";

const formSchema = z.object({
  anonymous: z.boolean().optional(),
  programId: z.string({ message: "Program is required." }).min(1),
  inviteDateTime: z.date({ required_error: "An invitation date is required." }),
  signal: z.boolean().optional(),
  geographicPreference: z.boolean().optional(),
  locationState: z.string().optional(),
  additionalComments: z.string().optional(),
  step1ScorePass: z.boolean().optional(),
  step1Score: numericNull,
  step2Score: numericNull,
  comlex1ScorePass: z.boolean().optional(),
  comlex2Score: numericNull,
  visaRequired: z.boolean().optional(),
  subI: z.boolean().optional(),
  home: z.boolean().optional(),
  yearOfGraduation: numericNull,
  greenCard: z.boolean().optional(),
  away: z.boolean().optional(),
  graduateType: z.string().optional(),
  img: z.string().optional(),
  medicalDegree: z.string().optional(),
});

export default function AddInterviewInvite({ action }) {
  const { setBreadcrumbs } = useOutletContext();
  const [programValue, setProgramValue] = useState("");
  const params = useParams();
  const queryClient = useQueryClient();

  useEffect(() => {
    setBreadcrumbs([
      { text: "Interview Invites", link: "/interview-invites" },
      {
        text:
          action === "edit"
            ? "Edit Interview Invite"
            : action === "add"
            ? "Add Interview Invite"
            : "View Interview Invite",
      },
    ]);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { data: programs } = useQuery({
    queryKey: ["programs"],
    queryFn: async () => {
      const response = await client.models.Program.listProgramBySortTypeAndInstitutionNameLowerCase(
        { sortType: "Program" },
        // @ts-expect-error
        { selectionSet: ["id", "institutionName", "name"] }
      );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  const { data: interviewInvite } = useQuery({
    queryKey: ["interviewInvite", params.id],
    queryFn: async () => {
      try {
        const response = await client.models.InterviewInvite.get(
          { id: params.id },
          {
            selectionSet: [
              "id",
              "anonymous",
              "away",
              "comlex1ScorePass",
              "comlex2Score",
              "geographicPreference",
              "graduateType",
              "greenCard",
              "home",
              "img",
              "inviteDateTime",
              "locationState",
              "medicalDegree",
              "userProfile.*",
              "program.*",
              "signal",
              "step1Score",
              "step1ScorePass",
              "subI",
              "visaRequired",
              "yearOfGraduation",
              "programId",
            ],
          }
        );
        const responseData = response.data;
        if (!responseData) return null;
        return responseData;
      } catch (e) {
        console.log(e);
      }
    },
  });

  useEffect(() => {
    if (interviewInvite) {
      form.reset(preprocessData(interviewInvite));
      setProgramValue(
        `${interviewInvite.program.name} at ${interviewInvite.program.institutionName}`
      );
    }
  }, [interviewInvite]);

  const { userProfile } = usePermissions();

  const { toast } = useToast();

  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const institutionName = programs?.find((x) => x.id === values.programId)
      ?.institutionName;
    const institutionNameLowerCase = institutionName?.toLowerCase();
    await client.models.InterviewInvite.create(
      {
        ...values,
        sortType: "InterviewInvite",
        institutionName,
        institutionNameLowerCase,
        userProfileId: userProfile?.id,
      },
      {
        authMode: "userPool",
      }
    );
    toast({
      title: "Interview Invitation Shared!",
    });
    navigate("/interview-invites");
  }

  const handleImportProfile = () => {
    if (userProfile) {
      const newProfile = { ...userProfile };
      for (const [key, value] of Object.entries(newProfile)) {
        if (newProfile[key] === null) {
          newProfile[key] = undefined;
        }
      }
      const formValues = form.getValues();
      Object.assign(formValues, newProfile);
      form.reset(formValues);
    }
  };

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
      navigate("/interview-invites");
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
    <main className="grid flex-1 items-start gap-4 p-2 sm:p-4 sm:px-6 sm:py-0 md:gap-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-2 sm:gap-4">
            <div className="flex items-center gap-4">
              <Link to="/interview-invites">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                {action === "edit" ? "Edit" : action === "add" ? "Add" : "View"}{" "}
                Interview Invite
              </h1>
              {action === "view" &&
                userProfile?.id === interviewInvite?.userProfile?.id && (
                  <Button onClick={() => navigate("edit")} className={`h-auto`}>
                    <Pencil size={16} />
                  </Button>
                )}
              {/* <Badge variant="outline" className="ml-auto sm:ml-0">
            In stock
          </Badge> */}
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Link to="/interview-invites">
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={() => navigate("/interview-invites")}
                  >
                    Discard
                  </Button>
                </Link>
                <Button size="sm" type="submit">
                  Save Invite
                </Button>
              </div>
            </div>

            <div className="grid gap-2 sm:gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-2 sm:gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Invite Details</CardTitle>
                    {action !== "view" && (
                      <CardDescription>
                        This section is required.
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <FormField
                        control={form.control}
                        name="programId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Program</FormLabel>
                            {action === "view" ? (
                              <FormDescription>{programValue}</FormDescription>
                            ) : (
                              <>
                                <div>
                                  <FormControl>
                                    {/* <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a program" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {programs?.map((program) => {
                                    return (
                                      <SelectItem
                                        key={program.id}
                                        value={program.id}
                                      >
                                        {program.name} at{" "}
                                        {program.institutionName}
                                      </SelectItem>
                                    );
                                  })}
                                </SelectContent>
                              </Select> */}
                                    <SelectProgram
                                      programId={field.value}
                                      setProgramId={field.onChange}
                                      programValue={programValue}
                                      setProgramValue={setProgramValue}
                                    />
                                  </FormControl>
                                </div>
                                <FormDescription>
                                  For which program were you invited to
                                  interview for?
                                </FormDescription>
                              </>
                            )}
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="inviteDateTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Invitation Date</FormLabel>
                            {action === "view" ? (
                              <FormDescription>
                                {field.value && format(field.value, "PPP")}
                              </FormDescription>
                            ) : (
                              <>
                                <div>
                                  <FormControl>
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <Button
                                          variant={"outline"}
                                          className={cn(
                                            "w-[280px] justify-start text-left font-normal",
                                            !field.value &&
                                              "text-muted-foreground"
                                          )}
                                        >
                                          <CalendarIcon className="mr-2 h-4 w-4" />
                                          {field.value ? (
                                            format(field.value, "PPP")
                                          ) : (
                                            <span>Pick a date</span>
                                          )}
                                        </Button>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0">
                                        <Calendar
                                          mode="single"
                                          selected={field.value}
                                          onSelect={field.onChange}
                                          initialFocus
                                        />
                                      </PopoverContent>
                                    </Popover>
                                  </FormControl>
                                </div>
                                <FormDescription>
                                  The date when you received the interview
                                  invite, not the date of the interview.
                                </FormDescription>
                              </>
                            )}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Additional Information</CardTitle>
                    {action !== "view" && (
                      <CardDescription>
                        This section is optional, but provides additional
                        context about your invite.
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className={`grid gap-6`}>
                      {action !== "view" && (
                        <Button
                          type="button"
                          onClick={() => handleImportProfile()}
                        >
                          Import My Profile
                        </Button>
                      )}
                      <FormField
                        control={form.control}
                        name="signal"
                        render={({ field }) => (
                          <FormItem>
                            {action === "view" ? (
                              <>
                                <FormLabel>Signaled</FormLabel>
                                <FormDescription>
                                  {field.value || "-"}
                                </FormDescription>
                              </>
                            ) : (
                              <>
                                <FormLabel>
                                  Did you signal to the program?
                                </FormLabel>
                                <FormControl>
                                  <Switch
                                    className={`block`}
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormMessage />
                              </>
                            )}
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="geographicPreference"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Are you in a geographically preferred location?
                            </FormLabel>
                            <FormControl>
                              <Switch
                                className={`block`}
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormDescription>
                              (need to double check this meaning)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="graduateType"
                        render={({ field }) => (
                          <FormItem>
                            {action === "view" ? (
                              <>
                                <FormLabel>Graduate Type</FormLabel>
                                <FormDescription>{field.value}</FormDescription>
                              </>
                            ) : (
                              <>
                                <FormLabel>
                                  Are you a US medical graduate or IMG?
                                </FormLabel>
                                <FormControl>
                                  <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value={"US"}>US</SelectItem>
                                      <SelectItem value={"IMG"}>IMG</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </>
                            )}
                          </FormItem>
                        )}
                      />
                      {form.watch("graduateType") === "US" && (
                        <FormField
                          control={form.control}
                          name="medicalDegree"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Are you an MD or DO applicant?
                              </FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value={"MD"}>MD</SelectItem>
                                    <SelectItem value={"DO"}>DO</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      {form.watch("graduateType") === "US" && (
                        <FormField
                          control={form.control}
                          name="locationState"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Are you in or out of state for this program?
                              </FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select an option." />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value={"IS"}>
                                      In state
                                    </SelectItem>
                                    <SelectItem value={"OOS"}>
                                      Out of state
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      {form.watch("graduateType") === "US" && (
                        <FormField
                          control={form.control}
                          name="home"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Is this your home program?</FormLabel>
                              <FormControl>
                                <Switch
                                  className={`block`}
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      <FormField
                        control={form.control}
                        name="away"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Did you complete an away here?
                            </FormLabel>
                            <FormControl>
                              <Switch
                                className={`block`}
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subI"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Did you complete a sub-I here?
                            </FormLabel>
                            <FormControl>
                              <Switch
                                className={`block`}
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {form.watch("graduateType") === "IMG" && (
                        <FormField
                          control={form.control}
                          name="img"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Are you a US IMG or non-US IMG?
                              </FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value={"USIMG"}>
                                      US IMG
                                    </SelectItem>
                                    <SelectItem value={"nonUSIMG"}>
                                      Non-US IMG
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      {form.watch("graduateType") === "IMG" && (
                        <FormField
                          control={form.control}
                          name="visaRequired"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Do you require Visa sponsorship?
                              </FormLabel>
                              <FormControl>
                                <Switch
                                  className={`block`}
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      {form.watch("graduateType") === "IMG" && (
                        <FormField
                          control={form.control}
                          name="greenCard"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Do you have a Green Card?</FormLabel>
                              <FormControl>
                                <Switch
                                  className={`block`}
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      <FormField
                        control={form.control}
                        name="step1ScorePass"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Have you passed Step 1?</FormLabel>
                            <FormControl>
                              <Switch
                                className={`block`}
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="step1Score"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Step 1 Score</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormDescription>
                              Ignore this field if you took Step 1 after the
                              transition to Pass/Fail.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="step2Score"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Step 2 CK Score</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {form.watch("medicalDegree") === "DO" && (
                        <FormField
                          control={form.control}
                          name="comlex1ScorePass"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Have you passed COMLEX 1?</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value={"Yes"}>Yes</SelectItem>
                                    <SelectItem value={"No"}>No</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      {form.watch("medicalDegree") === "DO" && (
                        <FormField
                          control={form.control}
                          name="comlex2Score"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>COMLEX 2 Score</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Anonymity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <FormField
                        control={form.control}
                        name="anonymous"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Make this invitation anonymous?
                            </FormLabel>
                            <FormControl>
                              <Switch
                                className={`block`}
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormDescription>
                              If anonymous, your username will not be shown and
                              the invite will not be linked to your profile.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
                {action === "edit" && (
                  <Card x-chunk="dashboard-07-chunk-5">
                    <CardHeader>
                      <CardTitle>Delete Invite</CardTitle>
                      <CardDescription>
                        This action is not reversible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        size="sm"
                        variant="destructive"
                        type="button"
                        onClick={() => handleDelete(interviewInvite)}
                      >
                        Delete Invite
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4 md:hidden mt-4 md:mt-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/interview-invites")}
                type="button"
              >
                Discard
              </Button>
              <Button size="sm">Save Invite</Button>
            </div>
          </div>
        </form>
      </Form>
      <Delete
        open={open}
        setOpen={setOpen}
        record={deleteRecord}
        handleSubmit={() => deleteById(deleteRecord.id)}
        loading={deleteLoading}
      />
    </main>
  );
}
