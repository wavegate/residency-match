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
import DND from "../components/DND";
import { useState } from "react";

const formSchema = z.object({
  programId: z.string().optional(),
  questionDifferentiator: z.string(),
});

const client = generateClient<Schema>();

export default function CreateComparison() {
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
        message: "You must add two programs to compare.",
      });
      return;
    }

    if (userProfile?.id) {
      const result = await client.models.Comparison.create(
        {
          ...values,
          sortType: "Comparison",
          userProfileId: userProfile.id,
        },
        {
          authMode: "userPool",
        }
      );

      const resultingComparisonId = result?.data?.id;

      const programComparisonPromises = [];
      for (let i = 0; i < state.items.length; i++) {
        const program = state.items[i];
        const promise = client.models.ProgramComparison.create(
          {
            comparisonId: resultingComparisonId,
            programId: program.id,
          },
          {
            authMode: "userPool",
          }
        );
        programComparisonPromises.push(promise);
      }
      await Promise.all(programComparisonPromises);
      toast({ title: "Comparison created!" });
      // navigate("/x-vs-y");
    }
  }

  console.log(programs);
  const [state, setState] = useState({ items: [] });

  return (
    <div className={`p-[12px] flex flex-col gap-[12px]`}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/x-vs-y">
              <BreadcrumbLink>X vs. Y</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Create Comparison</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className={`font-semibold text-[20px]`}>Create Comparison</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="programId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select two programs to compare:</FormLabel>
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
            name="questionDifferentiator"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What question or differentiator do you want to compare?
                </FormLabel>
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
