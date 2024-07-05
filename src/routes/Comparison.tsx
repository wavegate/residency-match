import { useQuery } from "@tanstack/react-query";
import { generateClient } from "aws-amplify/api";
import { useParams } from "react-router-dom";
import { Schema } from "../../amplify/data/resource";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { useToast } from "../components/ui/use-toast";
import { Input } from "@aws-amplify/ui-react";
import { Button } from "../components/ui/button";
import usePermissions from "../hooks/usePermissions";

const client = generateClient<Schema>();

const formSchema = z.object({
  content: z.string(),
});

export default function Comparison() {
  const params = useParams();
  const { data: comparison, isLoading: loading } = useQuery({
    queryKey: ["comparison", params.id],
    queryFn: async () => {
      const response = await client.models.Comparison.get(
        {
          id: params.id,
        },
        {
          selectionSet: [
            "id",
            "programs.program.*",
            "comments.*",
            "comments.userProfile.*",
            "questionDifferentiator",
          ],
        }
      );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();

  const { userProfile } = usePermissions();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (userProfile?.id) {
      await client.models.Comment.create(
        {
          ...values,
          userProfileId: userProfile.id,
          sortType: "Comment",
          comparisonId: params.id,
        },
        {
          authMode: "userPool",
        }
      );
    }
    console.log("hi");
    toast({ title: "Message posted." });
  }

  return (
    <div className={`p-[12px] flex flex-col gap-[12px]`}>
      <div className={`font-semibold text-[14px]`}>
        {comparison?.programs[0].program.name} at{" "}
        {comparison?.programs[0].program.institutionName} vs{" "}
        {comparison?.programs[1].program.name} at{" "}
        {comparison?.programs[1].program.institutionName}
      </div>
      <div className={`text-[12px] text-slate-500`}>
        <div>{comparison?.questionDifferentiator}</div>
      </div>
      {comparison?.comments?.map((comment) => {
        return (
          <div>
            {comment.content}
            {comment.userProfile.username}
            {comment.createdAt}
          </div>
        );
      })}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Leave comment:</FormLabel>
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
