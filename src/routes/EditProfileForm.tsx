import { Link, useParams } from "react-router-dom";
import CreateInterviewInviteForm from "../components/CreateInterviewInviteForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Switch } from "@radix-ui/react-switch";
import { z } from "zod";
import { generateClient } from "aws-amplify/api";
import { Schema } from "../../amplify/data/resource";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const formSchema = z.object({
  username: z.string(),
  graduateType: z.string(),
});

const client = generateClient<Schema>();

export default function EditProfileForm() {
  const params = useParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   username: "",
    // },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // await client.models.UserProfile.update(
    // );
    // toast({
    //   title: "Interview Invitation Shared!",
    // });
  }

  // providing this information allows us to add context to your interview invitations. you can also choose to make your profile public.
  // are you US or IMG applicant?
  // if US, are you MD or DO?
  // if IMG, are you US IMG or non US IMG? ( need to double check these options on review)
  //
  // did you pass step 1? if you took step 1 before they transitioend to pass/fail, please ignore this field
  // (if pass step 1 field is ignored) what was your step 1 score?
  // what is your step 2 CK score?
  // what was your step 3 score? (please ignore this field if you did not take this test)
  // (if DO) what was your comlex 1 score
  // (if DO) what was your comlex 2 score?
  // if IMG, are you ecfmg certified?
  // if IMG, what was your step 2 cs pathway?
  // if you have already graduated medical school, what was the year of graduation?
  // do you require visa sponsorship?
  // what was your school rank?
  // what was your class rank?
  // how many publications do you have? include posters and presentations as well.
  // how many clinical work experiences do you have?
  // how many clinical volunteering experiences do you have?
  // do you have any red flags in your application? if so, please explain:
  // these numbers provide an approximate count of your stats. with further development of the app, users will be able to track their applications here and the numbers will be automated. however, for now, they can manually enter them.
  // how many applications have you sent?
  // how many interviews have you received?
  // how many programs have you withdrawn from?
  // how many programs have you been rejected from?
  // how many programs have you been waitlisted at?
  // percent yield
  return (
    <div className={`p-[12px]`}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to={`/profile/${params.id}`}>
              <BreadcrumbLink>Profile</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Edit Profile</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className={`font-semibold text-[20px]`}>Edit Profile</h1>
      <div>
        Filling out your user profile helps us to provide context for your
        interview invitations. By default, your profile is private.
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
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
                <FormLabel>Graduate Type</FormLabel>
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
                  Select whether you are a US medical graduate or an
                  International Medical Graduate (IMG).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="medicalDegree"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medical Degree</FormLabel>
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
                      <SelectItem value={"MD"}>MD</SelectItem>
                      <SelectItem value={"DO"}>DO</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Select whether your degree is MD or DO.
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
                <FormLabel>IMG Applicant Type</FormLabel>
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
                      <SelectItem value={"USIMG"}>US IMG</SelectItem>
                      <SelectItem value={"nonUSIMG"}>Non-US IMG</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Please select your IMG applicant type:
                  <ul>
                    <li>
                      US IMG: If you are an International Medical Graduate but
                      have completed some medical education or training in the
                      United States.
                    </li>
                    <li>
                      Non-US IMG: If you have completed all your medical
                      education and training outside the United States.
                    </li>
                  </ul>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="step1ScorePass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Step 1 Passed</FormLabel>
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
                      <SelectItem value={"Yes"}>Yes</SelectItem>
                      <SelectItem value={"No"}>No</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Did you pass Step 1? If you took Step 1 prior to the
                  transition to P/F grading, please skip this question.
                </FormDescription>
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
          <FormField
            control={form.control}
            name="step2Score"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Step 3 Score</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormDescription>
                  You can ignore this question if you did not take this test.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="step1ScorePass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>COMLEX 1 Passed</FormLabel>
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
                      <SelectItem value={"Yes"}>Yes</SelectItem>
                      <SelectItem value={"No"}>No</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>Did you pass COMLEX 1?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="ecfmgCertified"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Are you ECFMG-certified?</FormLabel>
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
                      <SelectItem value={"Yes"}>Yes</SelectItem>
                      <SelectItem value={"No"}>No</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ecfmgCertified"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is your Step 2 CS Pathway?</FormLabel>
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
                      <SelectItem value={"pathway1"}>Pathway 1</SelectItem>
                      <SelectItem value={"pathway2"}>Pathway 2</SelectItem>
                      <SelectItem value={"pathway3"}>Pathway 3</SelectItem>
                      <SelectItem value={"pathway4"}>Pathway 4</SelectItem>
                      <SelectItem value={"pathway5"}>Pathway 5</SelectItem>
                      <SelectItem value={"pathway6"}>Pathway 6</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="yearOfGraduation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  If you already graduated medical school, what year did you
                  graduate?
                </FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="visaRequired"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Do you require visa sponsorship?</FormLabel>
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
                      <SelectItem value={"Yes"}>Yes</SelectItem>
                      <SelectItem value={"No"}>No</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="schoolRanking"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  In your opinion, how does your school rank amongst other
                  schools?
                </FormLabel>
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
                      <SelectItem value={"top20"}>Top 20</SelectItem>
                      <SelectItem value={"top50"}>Top 50</SelectItem>
                      <SelectItem value={"mid"}>Mid-Tier</SelectItem>
                      <SelectItem value={"low"}>Low-Tier</SelectItem>
                      <SelectItem value={"unranked"}>Unranked</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="classRank"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  In your opinion, how do you rank amongst your class?
                </FormLabel>
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
                      <SelectItem value={"top10"}>Top 10%</SelectItem>
                      <SelectItem value={"top25"}>Top 25%</SelectItem>
                      <SelectItem value={"bottom50"}>Bottom 50%</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numPublications"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How many publications do you have, including posters and
                  presentations?
                </FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numWorkExperiences"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How many clinical work experiences do you have?
                </FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numVolunteerExperiences"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How many clinical volunteering experiences do you have?
                </FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="redFlags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Does your application have any red flags?</FormLabel>
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
                      <SelectItem value={"Yes"}>Yes</SelectItem>
                      <SelectItem value={"No"}>No</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="redFlagsExplanation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Can you provide more information about your red flag(s)?
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numApplications"
            render={({ field }) => (
              <FormItem>
                <FormLabel>how many applications have you sent?</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numInterviews"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How many interviews have you received?</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numWithdrawn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How many programs have you withdrawn from?
                </FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numRejected"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How many programs have you been rejected from?
                </FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numWaitlisted"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How many programs have you been waitlisted at?
                </FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
