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
import { Switch } from "../components/ui/switch";
import DND from "../components/DND";
import { useState } from "react";

const formSchema = z.object({
  programId: z.string().optional(),
  doneWithInterviews: z.boolean().optional(),
  whyNumberOne: z.string().optional(),
  priorities: z.string().optional(),
  hardestPartOfRanking: z.string().optional(),
});

const client = generateClient<Schema>();

export default function CreateRankList() {
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

  const { toast } = useToast();

  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (state.items.length === 0) {
      form.setError("programId", {
        type: "custom",
        message: "You must add at least one program to your rank list.",
      });
      return;
    }

    if (userProfile?.id) {
      const result = await client.models.RankList.create(
        {
          ...values,
          sortType: "RankList",
          userProfileId: userProfile.id,
        },
        {
          authMode: "userPool",
        }
      );

      const resultingRankListId = result?.data?.id;

      const rankListProgramPromises = [];
      for (let i = 0; i < state.items.length; i++) {
        const program = state.items[i];
        const promise = client.models.RankListProgram.create({
          rankListId: resultingRankListId,
          programId: program.id,
          rank: i + 1,
        });
        rankListProgramPromises.push(promise);
      }
      await Promise.all(rankListProgramPromises);
      // toast({ title: "Rank List Created!" });
      // navigate("/rank-lists");
    }
  }

  const [state, setState] = useState({ items: [] });

  return (
    <div className={`p-[12px] flex flex-col gap-[12px]`}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/rank-lists">
              <BreadcrumbLink>Rank Lists</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Create Rank List</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className={`font-semibold text-[20px]`}>Create Rank List</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="programId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Select a program to add it to your rank list:
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(programId) => {
                      setState((prev) => {
                        return {
                          ...prev,
                          items: [
                            ...prev.items,
                            programs.find((x) => {
                              return x.id === programId;
                            }),
                          ],
                        };
                      });
                      field.onChange;
                    }}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {programs
                        ?.filter((x) => {
                          const alreadyAdded = state.items.find((y) => {
                            return y.id === x.id;
                          });
                          return alreadyAdded === undefined;
                        })
                        ?.map((program) => {
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
          <DND state={state} setState={setState} />
          <FormField
            control={form.control}
            name="doneWithInterviews"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Are you done with interviews?</FormLabel>
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
            name="whyNumberOne"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Why is your #1 program number one?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priorities"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What are your priorities when considering your rank list?
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
            name="hardestPartOfRanking"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is the hardest part of ranking?</FormLabel>
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
