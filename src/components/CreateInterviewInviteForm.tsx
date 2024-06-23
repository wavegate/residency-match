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
} from "./ui/form";
import { Input } from "@aws-amplify/ui-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "../lib/utils";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { CalendarIcon, ChevronsUpDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { generateClient } from "aws-amplify/api";
import { Schema } from "../../amplify/data/resource";
import { useToast } from "./ui/use-toast";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { numericNull } from "../utils/zodHelpers";
import { useNavigate } from "react-router-dom";
import usePermissions from "../hooks/usePermissions";

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

const client = generateClient<Schema>();

export default function CreateInterviewInviteForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  console.log(form.formState.errors);

  const { data: programs } = useQuery({
    queryKey: ["programs"],
    queryFn: async () => {
      const response =
        await client.models.Program.listProgramBySortTypeAndInstitutionNameLowerCase(
          { sortType: "Program" },
          { selectionSet: ["id", "institutionName", "name"] }
        );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  const { userProfile } = usePermissions();

  const { toast } = useToast();

  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const institutionName = programs?.find(
      (x) => x.id === values.programId
    )?.institutionName;
    const institutionNameLowerCase = institutionName?.toLowerCase();
    await client.models.InterviewInvite.create(
      {
        ...values,
        sortType: "InterviewInvite",
        institutionName,
        institutionNameLowerCase,
      },
      {
        authMode: "userPool",
      }
    );
    toast({
      title: "Interview Invitation Shared!",
    });
    navigate("/invites");
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
      console.log(formValues);

      form.reset(formValues);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="programId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Program</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {programs?.map((program) => {
                      return (
                        <SelectItem key={program.id} value={program.id}>
                          {program.name} at {program.institutionName}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                For which program were you invited to interview for?
              </FormDescription>
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
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
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
              <FormDescription>
                The date when you received the interview invite, not the date of
                the interview.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="anonymous"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Make this invitation anonymous?</FormLabel>
              <FormControl>
                <Switch
                  className={`block`}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormDescription>
                If anonymous, your username will not be shown and the invite
                will not be linked to your profile.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Collapsible className={`mb-4`}>
          <CollapsibleTrigger>
            <div className={`flex items-center`}>
              <div className={`font-semibold`}>Add Additional Information</div>
              <Button
                variant="ghost"
                size="sm"
                className="w-9 p-0"
                type="button"
              >
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4">
            <Button type="button" onClick={() => handleImportProfile()}>
              Import My Profile
            </Button>
            <FormField
              control={form.control}
              name="signal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Did you signal to the program?</FormLabel>
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
                  <FormLabel>Are you a US medical graduate or IMG?</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
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
                </FormItem>
              )}
            />
            {form.watch("graduateType") === "US" && (
              <FormField
                control={form.control}
                name="medicalDegree"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Are you an MD or DO applicant?</FormLabel>
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
                          <SelectItem value={"IS"}>In state</SelectItem>
                          <SelectItem value={"OOS"}>Out of state</SelectItem>
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
                  <FormLabel>Did you complete an away here?</FormLabel>
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
                  <FormLabel>Did you complete a sub-I here?</FormLabel>
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
                    <FormLabel>Are you a US IMG or non-US IMG?</FormLabel>
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
                          <SelectItem value={"USIMG"}>US IMG</SelectItem>
                          <SelectItem value={"nonUSIMG"}>Non-US IMG</SelectItem>
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
                    <FormLabel>Do you require Visa sponsorship?</FormLabel>
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
                    Ignore this field if you took Step 1 after the transition to
                    Pass/Fail.
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
          </CollapsibleContent>
        </Collapsible>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
