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
import { Button } from "../components/ui/button";
import usePermissions from "../hooks/usePermissions";
import { useEffect } from "react";
import { useToast } from "../components/ui/use-toast";
import { Loader } from "lucide-react";
import { numericNull } from "../utils/zodHelpers";
import { useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
  username: z.string().optional(),
  graduateType: z.string().optional(),
  medicalDegree: z.string().optional(),
  img: z.string().optional(),
  step1ScorePass: z.string().optional(),
  step1Score: numericNull,
  step2Score: numericNull,
  step2CSPathway: z.string().optional(),
  comlex1ScorePass: z.string().optional(),
  comlex2Score: numericNull,
  redFlags: z.string().optional(),
  redFlagsExplanation: z.string().optional(),
  numPublications: numericNull,
  numWorkExperiences: numericNull,
  numVolunteerExperiences: numericNull,
  schoolRanking: z.string().optional(),
  classRank: z.string().optional(),
  otherDegrees: z.string().optional(),
  numApplications: numericNull,
  numInterviews: numericNull,
  numWithdrawn: numericNull,
  numRejected: numericNull,
  numWaitlisted: numericNull,
  applicationYear: z.string().optional(),
  step3Score: numericNull,
  ecfmgCertified: z.string().optional(),
  yearOfGraduation: numericNull,
  visaRequired: z.string().optional(),
  monthsOfUSCE: numericNull,
  aoa: z.string().optional(),
  sigmaSigmaPhi: z.string().optional(),
  goldHumanism: z.string().optional(),
  location: z.string().optional(),
});

const client = generateClient<Schema>();

export default function EditProfileForm() {
  const params = useParams();
  const { userProfile, loading } = usePermissions();
  const queryClient = useQueryClient();
  //   console.log(userProfile);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();

  useEffect(() => {
    if (userProfile) {
      const transformedUserProfile = { ...userProfile };
      for (const [key, value] of Object.entries(transformedUserProfile)) {
        if (value === true) {
          transformedUserProfile[key] = "Yes";
        } else if (value === false) {
          transformedUserProfile[key] = "No";
        }
        if (value === null) {
          transformedUserProfile[key] = undefined;
        }
        if (key === "applicationYear") {
          if (value === 2025) {
            transformedUserProfile[key] = "2025";
          }
          if (value === 2024) {
            transformedUserProfile[key] = "2024";
          }
        }
      }
      console.log(transformedUserProfile);
      form.reset(transformedUserProfile);
    }
  }, [userProfile]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!userProfile) {
      return;
    }
    console.log(values);
    const transformedValues = { ...values };
    for (const [key, value] of Object.entries(transformedValues)) {
      if (value === "Yes") {
        transformedValues[key] = true;
      } else if (value === "No") {
        transformedValues[key] = false;
      }
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await client.models.UserProfile.update(
      {
        id: userProfile.id,
        ...transformedValues,
      },
      {
        authMode: "userPool",
      }
    );
    queryClient.invalidateQueries({
      queryKey: ["userProfile", userProfile.id],
    });
    toast({
      title: "Profile updated!",
    });
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
    <div className={`p-[12px] flex flex-col gap-[12px]`}>
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
      <div className={`text-sm`}>
        Filling out your user profile helps us to provide context for your
        interview invitations.
      </div>
      <div className={`relative`}>
        {loading ? (
          <div className={`left-1/2 -translate-x-1/2 absolute top-8`}>
            <Loader className={`animate-spin`} />
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What's your username?</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="applicationYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>For which year are you applying?</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue value={field.value} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={"2025"}>2024-2025</SelectItem>
                          <SelectItem value={"2024"}>2023-2024</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
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
              <FormField
                control={form.control}
                name="otherDegrees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      List any other graduate degrees you have here:
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="eg. MBA, PhD" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="aoa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Did you receive the AΩA award?</FormLabel>
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
              {form.watch("medicalDegree") === "DO" && (
                <FormField
                  control={form.control}
                  name="sigmaSigmaPhi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Did you receive the Sigma Sigma Phi award?
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
              <FormField
                control={form.control}
                name="goldHumanism"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Did you receive the Gold Humanism award?
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
                name="step1ScorePass"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Have you passed Step 1?</FormLabel>
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
                      Ignore this field if you took Step 1 after the transition
                      to Pass/Fail.
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
              <FormField
                control={form.control}
                name="step3Score"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Step 3 Score</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormDescription>
                      Ignore this field if you didn't take Step 3.
                    </FormDescription>
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
              {form.watch("graduateType") === "IMG" && (
                <FormField
                  control={form.control}
                  name="ecfmgCertified"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Are you ECFMG-certified?</FormLabel>
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
              {form.watch("graduateType") === "IMG" && (
                <FormField
                  control={form.control}
                  name="step2CSPathway"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What is your Step 2 CS Pathway?</FormLabel>
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
                            <SelectItem value={"pathway1"}>
                              Pathway 1
                            </SelectItem>
                            <SelectItem value={"pathway2"}>
                              Pathway 2
                            </SelectItem>
                            <SelectItem value={"pathway3"}>
                              Pathway 3
                            </SelectItem>
                            <SelectItem value={"pathway4"}>
                              Pathway 4
                            </SelectItem>
                            <SelectItem value={"pathway5"}>
                              Pathway 5
                            </SelectItem>
                            <SelectItem value={"pathway6"}>
                              Pathway 6
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
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
              {form.watch("graduateType") === "IMG" && (
                <FormField
                  control={form.control}
                  name="visaRequired"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Do you require visa sponsorship?</FormLabel>
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
              {form.watch("graduateType") === "IMG" && (
                <FormField
                  control={form.control}
                  name="monthsOfUSCE"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        How many months of US clinical experience do you have?
                      </FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="schoolRanking"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How does your school rank amongst other schools?
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
                    <FormLabel>How do you rank amongst your class?</FormLabel>
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
                    <FormLabel>
                      Does your application have any red flags?
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
                          <SelectItem value={"Yes"}>Yes</SelectItem>
                          <SelectItem value={"No"}>No</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.watch("redFlags") === "Yes" && (
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
              )}
              <FormField
                control={form.control}
                name="numApplications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How many applications have you sent?</FormLabel>
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
                    <FormLabel>
                      How many interviews have you received?
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
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}
