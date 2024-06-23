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
import { Card } from "./ui/card";

const formSchema = z.object({
  anonymous: z.boolean(),
  programId: z.string({ message: "Program is required." }).min(1),
  inviteDateTime: z.date({ required_error: "An invitation date is required." }),
  signal: z.boolean(),
  geographicPreference: z.boolean(),
  location: z.string(),
  additionalComments: z.string(),
  step1ScorePass: z.boolean(),
  step1Score: z.number(),
  step2Score: z.number(),
  comlex1ScorePass: z.boolean(),
  comlex2Score: z.number(),
  visaRequired: z.boolean(),
  subI: z.boolean(),
  home: z.boolean(),
  yearOfGraduation: z.number(),
  greenCard: z.boolean(),
  away: z.boolean(),
  graduateType: z.string(),
  img: z.string(),
});

const client = generateClient<Schema>();

export default function CreateInterviewInviteForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      anonymous: false,
      programId: "",
      inviteDateTime: new Date(),
      location: "",
      additionalComments: "",
    },
  });

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

  const { toast } = useToast();

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
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="anonymous"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Anonymous?</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormDescription>
                Whether the invite will be associated with your username.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="programId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Program</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
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
              <FormLabel>Invitation Date and Time</FormLabel>
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
                When were you invited? (Not the date of the interview!)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Collapsible className={`mb-4`}>
          <CollapsibleTrigger>
            <div className={`flex items-center`}>
              <div className={`font-semibold`}>Add Additional Information</div>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <FormField
              control={form.control}
              name="signal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Signal?</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription>
                    Did you signal to the program?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="geographicPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Geographic preference?</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription>
                    Are you in a geographically preferred location? (need to
                    double check this meaning)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>In state or out of state?</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"IS"}>In state</SelectItem>
                        <SelectItem value={"IS"}>Out of state</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Are you in state or out of state?
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
                  <FormLabel>US applicant vs IMG</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"US"}>US</SelectItem>
                        <SelectItem value={"IMG"}>IMG</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Are you in state or out of state?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="img"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>US IMG or non-US IMG?</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"nonUSIMG"}>nonUSIMG</SelectItem>
                        <SelectItem value={"USIMG"}>USIMG</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Are you in state or out of state?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CollapsibleContent>
        </Collapsible>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
