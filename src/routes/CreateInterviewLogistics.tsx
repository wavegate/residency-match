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
import { useQuery } from "@tanstack/react-query";
import { generateClient } from "aws-amplify/api";
import { Schema } from "../../amplify/data/resource";
import { useToast } from "../components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import usePermissions from "../hooks/usePermissions";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../components/ui/breadcrumb";

const formSchema = z.object({
  programId: z.string({ message: "Program is required." }).min(1),
  schedulerPlatform: z.string().optional(),
  ivFormat: z.string().optional(),
  timeSlots: z.string().optional(),
  ivPlatform: z.string().optional(),
  openIVDates: z.date().array().optional(),
  interviewInviteId: z.string().optional(),
});

const client = generateClient<Schema>();

export default function CreateInterviewLogistics() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { data: programs } = useQuery({
    queryKey: ["programs"],
    queryFn: async () => {
      const response =
        await client.models.Program.listProgramBySortTypeAndInstitutionNameLowerCase(
          { sortType: "Program" },
          // @ts-expect-error: too complex
          { selectionSet: ["id", "institutionName", "name"] }
        );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  const { userProfile } = usePermissions();

  const { data: interviewInvites } = useQuery({
    queryKey: ["interviewInvites", userProfile?.id],
    queryFn: async () => {
      const response =
        // @ts-expect-error: too complex
        await client.models.InterviewInvite.listInterviewInviteByUserProfileId({
          userProfileId: userProfile.id as string,
        });
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
    enabled: !!userProfile,
  });

  const { toast } = useToast();

  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    if (userProfile?.id) {
      await client.models.InterviewLogistics.create(
        {
          ...values,
          sortType: "InterviewLogistics",
          userProfileId: userProfile?.id,
        },
        {
          authMode: "userPool",
        }
      );
    }
    toast({ title: "Interview Logistics Shared!" });
    navigate("/interview-logistics");
  }

  return (
    <div className={`p-[12px] flex flex-col gap-[12px]`}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/interview-logistics">
              <BreadcrumbLink>Interview Logistics</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Share Interview Logistics</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className={`font-semibold text-[20px]`}>Share Interview Logistics</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="programId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Which program are these logistics for?</FormLabel>
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
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interviewInviteId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Are these logistics associated with an invite?
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an invite" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {interviewInvites?.map((invite) => {
                        return (
                          <SelectItem key={invite.id} value={invite.id}>
                            {invite.institutionName} on {invite.inviteDateTime}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="schedulerPlatform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What platform did the scheduler use?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ivFormat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is the format of the interview?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeSlots"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What time slots are available?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
